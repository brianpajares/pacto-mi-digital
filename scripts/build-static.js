const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const entries = [
  "index.html",
  "assets",
  "docs",
  "favicon.svg",
  "manifest.webmanifest",
  "robots.txt",
  "sitemap.xml"
];

const validation = spawnSync(process.execPath, [path.join(__dirname, "validate-static.js")], {
  cwd: root,
  stdio: "inherit"
});

if (validation.status !== 0) {
  process.exit(validation.status ?? 1);
}

fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });

for (const entry of entries) {
  const source = path.join(root, entry);
  const target = path.join(publicDir, entry);
  fs.cpSync(source, target, { recursive: true });
}

console.log("Static build emitted to public/.");
