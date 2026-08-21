#!/usr/bin/env node
/** Servidor local para revisar el sitio generado en `public/`. */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const port = Number(process.env.PORT || 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

async function resolve(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/index.html";
  const candidates =
    path.extname(clean) === ""
      ? [`${clean}/index.html`, `${clean}.html`]
      : [clean === "/index.html" ? "/index.html" : clean];

  for (const candidate of candidates) {
    const file = path.join(root, candidate);
    if (!file.startsWith(root)) continue;
    try {
      const info = await stat(file);
      if (info.isFile()) return file;
    } catch {
      /* siguiente candidato */
    }
  }
  return null;
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://localhost:${port}`);
  const file = await resolve(decodeURIComponent(pathname));

  if (!file) {
    const notFound = path.join(root, "404.html");
    try {
      res.writeHead(404, { "Content-Type": TYPES[".html"] });
      res.end(await readFile(notFound));
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404");
    }
    return;
  }

  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
  res.end(await readFile(file));
}).listen(port, () => {
  console.log(`PACTO-MI Digital → http://localhost:${port}`);
});
