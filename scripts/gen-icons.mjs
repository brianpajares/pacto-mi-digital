#!/usr/bin/env node
/**
 * Genera los iconos PNG de la PWA y la imagen Open Graph.
 * Rasteriza el escudo PACTO-MI con un codificador PNG mínimo sobre zlib,
 * para no depender de librerías gráficas.
 */
import { deflateSync } from "node:zlib";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { drawText, textWidth } from "../lib/pixelfont.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "assets", "icons");

const RED = [0x7a, 0x17, 0x1b];
const RED_DEEP = [0x54, 0x0e, 0x12];
const GOLD = [0xf0, 0xc8, 0x6b];
const CREAM = [0xfb, 0xf7, 0xf1];

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** Codifica un buffer RGB (w*h*3) como PNG. */
function encodePng(width, height, rgb) {
  const stride = width * 3;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    raw[y * (stride + 1)] = 0; // filtro None
    rgb.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // profundidad de bits
  ihdr[9] = 2; // color RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

/**
 * Geometría del escudo en coordenadas normalizadas.
 * `u` va de -1 a 1 a lo ancho, `v` de 0 (arriba) a 1 (abajo).
 */
function shieldMask(u, v) {
  if (v < 0 || v > 1) return false;
  const half = v < 0.52 ? 1 : Math.sqrt(Math.max(0, 1 - ((v - 0.52) / 0.48) ** 2));
  return Math.abs(u) <= half;
}

/** Trazo del check interior. Devuelve true si el punto cae sobre la marca. */
function checkMask(u, v, weight) {
  const seg = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const t = Math.max(0, Math.min(1, ((u - x1) * dx + (v - y1) * dy) / (dx * dx + dy * dy)));
    const px = x1 + t * dx;
    const py = y1 + t * dy;
    return Math.hypot(u - px, v - py) <= weight;
  };
  return seg(-0.42, 0.46, -0.08, 0.66) || seg(-0.08, 0.66, 0.46, 0.2);
}

/** Dibuja el emblema centrado en un lienzo cuadrado. */
function renderIcon(size, { padding = 0.14, background = "gradient" } = {}) {
  const rgb = Buffer.alloc(size * size * 3);
  const shieldSpan = 1 - padding * 2;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const nx = (x + 0.5) / size;
      const ny = (y + 0.5) / size;

      let color =
        background === "flat" ? RED : mix(RED, RED_DEEP, Math.min(1, (nx + ny) / 2));

      // Coordenadas locales del escudo.
      const v = (ny - padding) / shieldSpan;
      const u = (nx - 0.5) / (shieldSpan / 2);

      if (shieldMask(u, v)) {
        color = CREAM;
        const inner = 0.9;
        if (shieldMask(u / inner, (v - (1 - inner) / 2) / inner)) {
          color = mix(RED, RED_DEEP, 0.35);
          if (checkMask(u, v, 0.075)) color = GOLD;
        }
      }

      const i = (y * size + x) * 3;
      rgb[i] = color[0];
      rgb[i + 1] = color[1];
      rgb[i + 2] = color[2];
    }
  }
  return encodePng(size, size, rgb);
}

/** Imagen Open Graph: emblema y rótulo sobre el fondo de marca. */
function renderOg(width = 1200, height = 630) {
  const rgb = Buffer.alloc(width * height * 3);
  const emblem = height * 0.5;
  const ex = height * 0.16;
  const ey = (height - emblem) / 2 - height * 0.03;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let color = mix(RED, RED_DEEP, (x / width) * 0.75 + (y / height) * 0.25);

      // Banda dorada inferior.
      if (y > height - 16) color = GOLD;

      const lx = (x - ex) / emblem;
      const ly = (y - ey) / emblem;
      if (lx >= 0 && lx <= 1 && ly >= 0 && ly <= 1) {
        const u = (lx - 0.5) * 2;
        const v = ly;
        if (shieldMask(u, v)) {
          color = CREAM;
          const inner = 0.9;
          if (shieldMask(u / inner, (v - (1 - inner) / 2) / inner)) {
            color = mix(RED, RED_DEEP, 0.35);
            if (checkMask(u, v, 0.075)) color = GOLD;
          }
        }
      }

      const i = (y * width + x) * 3;
      rgb[i] = color[0];
      rgb[i + 1] = color[1];
      rgb[i + 2] = color[2];
    }
  }

  const textX = Math.round(ex + emblem + height * 0.12);
  drawText(rgb, width, "PACTO-MI", { x: textX, y: 196, scale: 13, color: CREAM, tracking: 1 });
  drawText(rgb, width, "DIGITAL", { x: textX, y: 306, scale: 8, color: GOLD, tracking: 2 });

  // Regla dorada bajo el rótulo.
  const ruleY = 372;
  const ruleW = textWidth("PACTO-MI", 13);
  for (let y = ruleY; y < ruleY + 4; y += 1) {
    for (let x = textX; x < textX + ruleW; x += 1) {
      const i = (y * width + x) * 3;
      rgb[i] = GOLD[0];
      rgb[i + 1] = GOLD[1];
      rgb[i + 2] = GOLD[2];
    }
  }

  drawText(rgb, width, "CONOCIMIENTO QUE CONECTA", { x: textX, y: 404, scale: 4, color: CREAM, tracking: 2 });
  drawText(rgb, width, "COMUNIDAD QUE ACTUA", { x: textX, y: 444, scale: 4, color: CREAM, tracking: 2 });
  drawText(rgb, width, "IMPACTO QUE SE DEMUESTRA", { x: textX, y: 484, scale: 4, color: CREAM, tracking: 2 });

  return encodePng(width, height, rgb);
}

await mkdir(outDir, { recursive: true });
const targets = [
  ["icon-192.png", renderIcon(192)],
  ["icon-512.png", renderIcon(512)],
  // El icono maskable necesita más margen: los sistemas recortan hasta un 20 %.
  ["maskable-512.png", renderIcon(512, { padding: 0.26, background: "flat" })],
  ["og.png", renderOg()],
];

for (const [name, buffer] of targets) {
  await writeFile(path.join(outDir, name), buffer);
  console.log(`✓ ${name} (${(buffer.length / 1024).toFixed(1)} KB)`);
}
