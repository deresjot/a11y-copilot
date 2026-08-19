import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");
const publicEntries = [
  "index.html", "tutorial.html", "favicon.ico", "favicon.svg",
  "a11y-copilot.css", "a11y-copilot.js", "tutorial.css",
  "ACCESSIBILITY.md", "SKILL.md", "TUTORIAL.md", "README.md", "CHANGELOG.md",
  "assets", "font", "patterns", "references", "shared"
];

if (output === root || !output.startsWith(root + "/")) throw new Error("Ungültiges Build-Ziel.");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of publicEntries) await cp(resolve(root, entry), resolve(output, entry), { recursive: true });
console.log(`Standalone-Build erzeugt: ${output}`);
