const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const required = [
  "index.html",
  "assets/styles.css",
  "assets/app.js",
  "manifest.webmanifest",
  "vercel.json",
  "docs/TRACEABILITY.md",
  "docs/ARCHITECTURE.md",
  "docs/OPERATIONS.md",
  "docs/PRD_ENHANCED.md",
  "docs/PRIVACY_SECURITY.md"
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const marker of ["PACTO-MI Digital", "Action Lab", "Impacto", "Knowledge Hub"]) {
  if (!html.includes(marker)) {
    console.error(`Missing marker in index.html: ${marker}`);
    process.exit(1);
  }
}

console.log("Static validation passed.");
