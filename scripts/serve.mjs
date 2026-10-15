import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const port = Number(process.env.PORT || 4174);
if (!Number.isInteger(port) || port < 1 || port > 65535)
  throw new Error("PORT must be an integer from 1 to 65535.");
const files = new Map([
  ["index.html", "text/html; charset=utf-8"],
  ["privacidad.html", "text/html; charset=utf-8"],
  ["convivencia.html", "text/html; charset=utf-8"],
  ["404.html", "text/html; charset=utf-8"],
  ["styles.css", "text/css; charset=utf-8"],
  ["app.js", "text/javascript; charset=utf-8"],
  ["assets/mark.svg", "image/svg+xml"],
  ["assets/social.svg", "image/svg+xml"],
  ["assets/social.jpg", "image/jpeg"],
  ["assets/build-together.jpg", "image/jpeg"],
  ["assets/run-together.jpg", "image/jpeg"],
  ["assets/bricolage-grotesque.ttf", "font/ttf"],
  ["assets/OFL.txt", "text/plain; charset=utf-8"],
]);

const server = createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400).end();
    return;
  }
  if (pathname === "/teki") {
    response.writeHead(308, { Location: "/teki/" }).end();
    return;
  }
  const relative =
    pathname.replace(/^\/teki\//, "").replace(/^\//, "") || "index.html";
  const found = files.has(relative);
  const name = found ? relative : "404.html";
  try {
    const content = await readFile(fileURLToPath(new URL(name, root)));
    response.writeHead(found ? 200 : 404, {
      "Content-Type": files.get(name),
      "Content-Length": content.length,
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response
      .writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
      .end("No se pudo servir el archivo.");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`teki → http://127.0.0.1:${port}/teki/`),
);
