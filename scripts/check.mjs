#!/usr/bin/env node
/**
 * Verificaciones de calidad previas a publicar.
 *
 * Corre sobre `public/`, por lo que valida exactamente lo que se despliega.
 * Cualquier fallo detiene el build: el objetivo es que un dato sin fuente o
 * un enlace roto no puedan llegar a producción.
 */
import { readFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { facts, SOURCES } from "../content/facts.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public");

const failures = [];
const warnings = [];
const fail = (msg) => failures.push(msg);
const warn = (msg) => warnings.push(msg);

async function walk(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await walk(full)));
    else found.push(full);
  }
  return found;
}

/* -- 1. Toda cifra publicada declara su fuente ---------------------------- */

function checkFacts() {
  for (const f of facts) {
    if (!f.source) fail(`Hecho "${f.id}" no declara fuente.`);
    else if (!SOURCES[f.source]) fail(`Hecho "${f.id}" apunta a una fuente inexistente: "${f.source}".`);
    if (!f.asOf) fail(`Hecho "${f.id}" no declara vigencia (asOf).`);
    if (!["meta", "real"].includes(f.kind)) fail(`Hecho "${f.id}" tiene un tipo inválido: "${f.kind}".`);
    if (f.value !== null && typeof f.value !== "number") fail(`Hecho "${f.id}" tiene un valor no numérico.`);
  }
}

/* -- 2. Nada de datos fabricados en el código ----------------------------- */

async function checkNoFabrication() {
  const dirs = ["content", "lib", "pages", "assets", "scripts"];
  const banned = [
    { re: /Math\.random\s*\(/, msg: "Math.random() — ningún dato mostrado puede ser aleatorio." },
    { re: /\b(lorem ipsum|placeholder text|TODO:\s*inventar)\b/i, msg: "texto de relleno sin contenido real." },
  ];

  for (const dir of dirs) {
    const full = path.join(root, dir);
    if (!existsSync(full)) continue;
    for (const file of await walk(full)) {
      if (!/\.(mjs|js|css)$/.test(file)) continue;
      // Este archivo contiene los patrones prohibidos por definición.
      if (path.resolve(file) === path.resolve(fileURLToPath(import.meta.url))) continue;
      const source = await readFile(file, "utf8");
      for (const { re, msg } of banned) {
        if (re.test(source)) fail(`${path.relative(root, file)}: ${msg}`);
      }
    }
  }
}

/* -- 3. El español lleva tildes ------------------------------------------- */

const ACCENT_TRAPS = [
  ["mineria", "minería"], ["accion", "acción"], ["informacion", "información"],
  ["formacion", "formación"], ["educacion", "educación"], ["region", "región"],
  ["participacion", "participación"], ["comunicacion", "comunicación"],
  ["evaluacion", "evaluación"], ["organizacion", "organización"],
  ["documentacion", "documentación"], ["publicacion", "publicación"],
  ["jovenes", "jóvenes"], ["lideres", "líderes"], ["modulos", "módulos"],
  ["practica", "práctica"], ["politica", "política"], ["tecnica", "técnica"],
  ["metodologia", "metodología"], ["tecnologia", "tecnología"],
  ["actua", "actúa"], ["despues", "después"], ["ademas", "además"],
  ["asi ", "así "], ["aqui", "aquí"], ["segun", "según"], ["mas alla", "más allá"],
  ["proposito", "propósito"], ["deteccion", "detección"], ["gestion", "gestión"],
];

async function checkAccents() {
  const pages = (await walk(out)).filter((f) => f.endsWith(".html"));
  for (const file of pages) {
    const html = await readFile(file, "utf8");
    // Solo el texto visible: se ignoran atributos, scripts y URLs.
    const visible = html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .toLowerCase();

    for (const [wrong, right] of ACCENT_TRAPS) {
      const re = new RegExp(`(^|[^a-záéíóúñ])${wrong}(?![a-záéíóúñ])`, "i");
      if (re.test(visible)) {
        fail(`${path.relative(out, file)}: "${wrong}" sin tilde — debería ser "${right}".`);
      }
    }
  }
}

/* -- 4. Metadatos indispensables en cada página --------------------------- */

async function checkMeta() {
  const pages = (await walk(out)).filter((f) => f.endsWith(".html"));
  if (pages.length === 0) fail("No se generó ninguna página HTML.");

  for (const file of pages) {
    const rel = path.relative(out, file);
    const html = await readFile(file, "utf8");
    const required = [
      [/<title>[^<]{10,}<\/title>/, "un <title> descriptivo"],
      [/<meta name="description" content="[^"]{40,}"/, "una meta description de al menos 40 caracteres"],
      [/<link rel="canonical"/, "un enlace canónico"],
      [/<meta property="og:image"/, "una imagen Open Graph"],
      [/<html lang="es-PE">/, 'el atributo lang="es-PE"'],
      [/application\/ld\+json/, "datos estructurados JSON-LD"],
      [/class="skip-link"/, "un enlace para saltar al contenido"],
      [/<main id="contenido">/, "un elemento <main>"],
    ];
    for (const [re, what] of required) {
      if (!re.test(html)) fail(`${rel}: falta ${what}.`);
    }

    // Un solo <h1> por página.
    const h1s = (html.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) fail(`${rel}: tiene ${h1s} elementos <h1>; debe tener exactamente 1.`);

    // El JSON-LD debe ser válido.
    for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(block[1].replace(/\\u003c/g, "<"));
      } catch (err) {
        fail(`${rel}: JSON-LD inválido — ${err.message}`);
      }
    }
  }
}

/* -- 5. Accesibilidad básica --------------------------------------------- */

async function checkA11y() {
  const pages = (await walk(out)).filter((f) => f.endsWith(".html"));
  for (const file of pages) {
    const rel = path.relative(out, file);
    const html = await readFile(file, "utf8");

    for (const img of html.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt=/.test(img[0])) fail(`${rel}: hay un <img> sin atributo alt.`);
    }

    for (const svg of html.matchAll(/<svg\b[^>]*>/g)) {
      if (!/aria-hidden|role="img"|aria-label/.test(svg[0])) {
        warn(`${rel}: un <svg> sin aria-hidden ni etiqueta accesible.`);
      }
    }

    for (const input of html.matchAll(/<input\b[^>]*>/g)) {
      const tag = input[0];
      if (/type="(hidden|submit|button|reset)"/.test(tag)) continue;
      if (!/aria-label|id=/.test(tag) && !/<label[^>]*>[\s\S]{0,200}?<input/.test(html)) {
        warn(`${rel}: un <input> podría no tener etiqueta asociada.`);
      }
    }

    // Enlaces sin texto accesible.
    for (const a of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) {
      const text = a[1].replace(/<[^>]+>/g, "").trim();
      if (!text && !/aria-label|sr-only/.test(a[0])) {
        fail(`${rel}: hay un enlace sin texto accesible.`);
      }
    }
  }
}

/* -- 6. Los enlaces internos resuelven ------------------------------------ */

async function checkLinks() {
  const pages = (await walk(out)).filter((f) => f.endsWith(".html"));

  const resolves = async (href) => {
    const clean = href.split("#")[0].split("?")[0];
    if (clean === "" || clean === "/") return true;
    const target = path.join(out, clean);
    for (const candidate of [target, `${target}/index.html`, `${target}.html`]) {
      try {
        if ((await stat(candidate)).isFile()) return true;
      } catch {
        /* siguiente */
      }
    }
    return false;
  };

  for (const file of pages) {
    const rel = path.relative(out, file);
    const html = await readFile(file, "utf8");
    for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
      const href = match[1];
      if (!(await resolves(href))) fail(`${rel}: enlace interno roto → ${href}`);
    }
  }
}

/* -- 7. Los artefactos de despliegue existen ------------------------------ */

async function checkArtifacts() {
  const required = [
    "index.html",
    "404.html",
    "sitemap.xml",
    "robots.txt",
    "manifest.webmanifest",
    "sw.js",
    "favicon.svg",
    "assets/styles.css",
    "assets/app.js",
    "assets/icons/icon-192.png",
    "assets/icons/icon-512.png",
    "assets/icons/maskable-512.png",
    "assets/icons/og.png",
  ];
  for (const file of required) {
    if (!existsSync(path.join(out, file))) fail(`Falta el artefacto de despliegue: ${file}`);
  }

  const manifestPath = path.join(out, "manifest.webmanifest");
  if (existsSync(manifestPath)) {
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    if (!manifest.icons?.some((i) => i.purpose === "maskable")) {
      fail("El manifest no declara ningún icono maskable.");
    }
  }
}

/* -- 8. Presupuesto de peso ------------------------------------------------ */

/**
 * El sitio es estático y debe seguir cabiendo con holgura en el plan gratuito
 * de cualquier hosting. Hoy pesa unos 0,3 MB; el presupuesto deja margen para
 * fotografías optimizadas pero impide que un ZIP, un video o un documento
 * pesado llegue al despliegue por accidente.
 *
 * Los materiales pesados viven en Drive o en una plataforma de video y el
 * sitio solo los enlaza.
 */
const BUDGET_TOTAL = 5 * 1024 * 1024; // 5 MB en total
const BUDGET_FILE = 800 * 1024; // 800 KB por archivo
const HEAVY_EXT = /\.(zip|rar|7z|tar|gz|mp4|mov|avi|mkv|webm|wav|mp3|psd|ai|iso)$/i;

async function checkWeight() {
  const files = await walk(out);
  let total = 0;
  const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

  for (const file of files) {
    const { size } = await stat(file);
    total += size;
    const rel = path.relative(out, file);
    if (HEAVY_EXT.test(rel)) {
      fail(`${rel}: tipo de archivo pesado. Los ZIP, videos y audio van en Drive o en una plataforma de video, y el sitio los enlaza.`);
    } else if (size > BUDGET_FILE) {
      fail(`${rel}: pesa ${kb(size)} y el límite por archivo es ${kb(BUDGET_FILE)}. Optimízalo (imágenes en WebP, unos 150 KB como máximo).`);
    }
  }

  if (total > BUDGET_TOTAL) {
    fail(`El despliegue pesa ${(total / 1048576).toFixed(1)} MB y el presupuesto total es ${(BUDGET_TOTAL / 1048576).toFixed(0)} MB.`);
  }
  console.log(`  Peso del despliegue: ${(total / 1048576).toFixed(2)} MB de ${(BUDGET_TOTAL / 1048576).toFixed(0)} MB (${files.length} archivos).`);
}

/* -- ejecución ------------------------------------------------------------ */

checkFacts();
await checkNoFabrication();
await checkMeta();
await checkAccents();
await checkA11y();
await checkLinks();
await checkArtifacts();
await checkWeight();

for (const w of warnings) console.warn(`⚠ ${w}`);

if (failures.length) {
  console.error(`\n✗ ${failures.length} problema(s) bloquean la publicación:\n`);
  for (const f of failures) console.error(`  · ${f}`);
  process.exit(1);
}

console.log(`✓ Verificación superada — ${facts.length} cifras con fuente, sin enlaces rotos.`);
if (warnings.length) console.log(`  (${warnings.length} advertencia(s) no bloqueante(s))`);
