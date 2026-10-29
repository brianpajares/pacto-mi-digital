#!/usr/bin/env node
/**
 * Generador estático de PACTO-MI Digital.
 * Renderiza las páginas desde `pages/`, copia los estáticos y emite
 * sitemap, robots y manifest. Sin dependencias externas.
 */
import { mkdir, writeFile, rm, cp, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { layout } from "../lib/layout.mjs";
import { site, nav } from "../content/site.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public");

/** Orden de prioridad para el sitemap. */
const PRIORITY = { "/": 1.0, "/conoce": 0.9, "/aprende": 0.9, "/recursos": 0.8 };

async function loadPages() {
  const dir = path.join(root, "pages");
  const files = (await readdir(dir)).filter((f) => f.endsWith(".mjs")).sort();
  const pages = [];
  for (const file of files) {
    const mod = await import(path.join(dir, file));
    pages.push(mod.default);
  }
  return pages;
}

function sitemap(pages) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .filter((p) => !p.noindex)
    .map((p) => {
      const loc = site.origin + (p.path === "/" ? "/" : p.path);
      const priority = PRIORITY[p.path] ?? 0.7;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const robots = () => `User-agent: *
Allow: /

Sitemap: ${site.origin}/sitemap.xml
`;

const manifest = () =>
  JSON.stringify(
    {
      name: `${site.name} — ${site.tagline}`,
      short_name: site.shortName,
      description: site.description,
      start_url: "/",
      scope: "/",
      display: "standalone",
      orientation: "portrait-primary",
      lang: "es-PE",
      dir: "ltr",
      background_color: "#FBF7F1",
      theme_color: site.themeColor,
      categories: ["education", "social", "news"],
      icons: [
        { src: "/assets/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
        { src: "/assets/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
        { src: "/assets/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      ],
      shortcuts: nav.slice(0, 4).map((n) => ({ name: n.label, url: n.href })),
    },
    null,
    2
  );

async function main() {
  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });

  const pages = await loadPages();
  for (const page of pages) {
    const target = path.join(out, page.file);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, layout(page), "utf8");
  }

  // `docs/` NO se despliega: vive en el repositorio. El PRD en .docx pesa 14 MB,
  // casi todo el peso del sitio, y no hace falta servirlo desde el hosting.
  for (const entry of ["assets", "favicon.svg", "sw.js"]) {
    const from = path.join(root, entry);
    if (existsSync(from)) await cp(from, path.join(out, entry), { recursive: true });
  }

  await writeFile(path.join(out, "sitemap.xml"), sitemap(pages), "utf8");
  await writeFile(path.join(out, "robots.txt"), robots(), "utf8");
  await writeFile(path.join(out, "manifest.webmanifest"), manifest(), "utf8");

  console.log(`✓ ${pages.length} páginas generadas en public/`);
  for (const p of pages) console.log(`  ${p.path.padEnd(18)} → ${p.file}`);
}

main().catch((err) => {
  console.error("✗ Falló la generación del sitio:");
  console.error(err);
  process.exit(1);
});
