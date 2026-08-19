import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const root = resolve(import.meta.dirname, "..");
const port = Number.parseInt(process.env.A11Y_COPILOT_PORT || "4180", 10);
const types = new Map([
  [".avif", "image/avif"], [".css", "text/css; charset=utf-8"], [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"], [".jpg", "image/jpeg"], [".js", "text/javascript; charset=utf-8"],
  [".md", "text/markdown; charset=utf-8"], [".png", "image/png"], [".svg", "image/svg+xml"],
  [".ttf", "font/ttf"], [".woff", "font/woff"], [".woff2", "font/woff2"]
]);

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url || "/", "http://localhost").pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  let file = resolve(root, relativePath);
  if (file !== root && !file.startsWith(root + sep)) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  try {
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    const info = await stat(file);
    if (!info.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "Content-Type": types.get(extname(file)) || "application/octet-stream" });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
}).listen(port, "127.0.0.1", () => console.log(`a11y-copilot: http://127.0.0.1:${port}`));
