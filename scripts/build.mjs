import { cp, mkdir, rm } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const files = [
  "index.html", "privacidad.html", "convivencia.html", "404.html",
  "styles.css", "app.js", "assets",
];
await rm(new URL("dist/", root), { recursive: true, force: true });
await mkdir(new URL("dist/", root), { recursive: true });
for (const file of files) {
  await cp(new URL(file, root), new URL(`dist/${file}`, root), { recursive: true });
}
console.log("Prepared public pages and assets in dist/.");
