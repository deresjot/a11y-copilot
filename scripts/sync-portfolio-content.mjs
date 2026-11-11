import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const portfolioSource = process.env.A11Y_COPILOT_PORTFOLIO_SOURCE
  ? resolve(process.env.A11Y_COPILOT_PORTFOLIO_SOURCE)
  : resolve(root, "../deresjot-web/source");
const portfolio = resolve(portfolioSource, "a11y-copilot");
const documentFiles = ["ACCESSIBILITY.md", "CHANGELOG.md", "HANDOFF.md", "PROMPT.md", "README.md", "SKILL.md", "TUTORIAL.md"];
const documentFolders = ["evals", "patterns", "references", "rulesets"];

for (const file of documentFiles) await cp(resolve(root, file), resolve(portfolio, file));
for (const folder of documentFolders) {
  await mkdir(resolve(portfolio, folder), { recursive: true });
  await cp(resolve(root, folder), resolve(portfolio, folder), { recursive: true, force: true });
}

await import('./build-markdown-bundle.mjs');
await cp(resolve(root, 'STARTPAKET.txt'), resolve(portfolio, 'STARTPAKET.txt'));
await cp(resolve(root, 'assets/markdown-content.js'), resolve(portfolio, 'assets/markdown-content.js'));
console.log('Portfolio-Inhalte und vollständiges Startpaket synchronisiert.');
