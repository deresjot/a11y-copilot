import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const portfolioRoot = resolve(root, "../deresjot-web/source");
const portfolioApp = resolve(portfolioRoot, "a11y-copilot");
const shared = resolve(root, "shared");

const copyText = async (source, target, transform = value => value) => {
  const content = await readFile(source, "utf8");
  await mkdir(resolve(target, ".."), { recursive: true });
  await writeFile(target, transform(content));
};

const transformAppHtml = value => value
  .replaceAll('../css/', 'shared/css/')
  .replaceAll('../img/', 'shared/img/')
  .replaceAll('../js/', 'shared/js/')
  .replaceAll('href="../impressum.html"', 'href="shared/legal/impressum.html"')
  .replaceAll('href="../bildnutzung.html"', 'href="shared/legal/bildnutzung.html"')
  .replaceAll('href="../barrierefreiheit.html"', 'href="shared/legal/barrierefreiheit.html"')
  .replaceAll('href="../"', 'href="https://www.sebastianjansen.com/"');

await copyText(resolve(portfolioApp, "index.html"), resolve(root, "index.html"), transformAppHtml);
await copyText(resolve(portfolioApp, "tutorial.html"), resolve(root, "tutorial.html"), transformAppHtml);
await copyText(resolve(portfolioApp, "a11y-copilot.css"), resolve(root, "a11y-copilot.css"), value => value.replaceAll('../font/', 'font/'));
await cp(resolve(portfolioApp, "a11y-copilot.js"), resolve(root, "a11y-copilot.js"));
await copyText(resolve(portfolioApp, "tutorial.css"), resolve(root, "tutorial.css"), value => value.replaceAll('../font/', 'font/'));
await cp(resolve(portfolioApp, "assets"), resolve(root, "assets"), { recursive: true, force: true });

await mkdir(resolve(shared, "css"), { recursive: true });
await mkdir(resolve(shared, "img"), { recursive: true });
await mkdir(resolve(shared, "js"), { recursive: true });
await mkdir(resolve(shared, "font"), { recursive: true });
await mkdir(resolve(shared, "legal"), { recursive: true });
for (const file of ["ui-system.css", "global-footer.css", "status-document.css", "footer-document-modal.css", "document-pages.css", "accessibility-report.css"]) {
  await cp(resolve(portfolioRoot, "css", file), resolve(shared, "css", file));
}
for (const file of ["sebastian-jansen-80.png", "sebastian-jansen-160.png", "footer-badge-320.png", "footer-badge-512.png", "sebastian_jansen.jpg"]) {
  await cp(resolve(portfolioRoot, "img", file), resolve(shared, "img", file));
}
for (const file of ["NeueMachina-Medium.woff2", "NeueMachina-Regular.woff"]) {
  await cp(resolve(portfolioRoot, "font", file), resolve(shared, "font", file));
}
await cp(resolve(portfolioRoot, "js", "document-header.js"), resolve(shared, "js", "document-header.js"));

const transformLegalHtml = value => value
  .replaceAll('href="css/', 'href="../css/')
  .replaceAll('src="img/', 'src="../img/')
  .replaceAll('src="js/', 'src="../js/')
  .replaceAll('href="index.html"', 'href="../../index.html"');
for (const file of ["impressum.html", "bildnutzung.html", "barrierefreiheit.html"]) {
  await copyText(resolve(portfolioRoot, file), resolve(shared, "legal", file), transformLegalHtml);
}

console.log("Standalone-App aus der geprüften Portfolio-Integration synchronisiert.");
