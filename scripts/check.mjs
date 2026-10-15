import { readFile, access } from "node:fs/promises";
import { resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const root = fileURLToPath(new URL("../", import.meta.url));
const pages = ["index.html", "privacidad.html", "convivencia.html", "404.html"];
let references = 0;
for (const page of pages) {
  const html = await readFile(resolve(root, page), "utf8");
  assert.match(html, /<html lang="es">/, `${page}: Spanish document language`);
  assert.match(html, /<meta name="viewport"/, `${page}: responsive viewport`);
  assert.match(html, /<title>[^<]+<\/title>/, `${page}: page title`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: duplicate IDs`);
  for (const [, raw] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
    if (/^https?:\/\//.test(raw)) {
      assert.equal(new URL(raw).protocol, "https:");
      continue;
    }
    assert.ok(!raw.startsWith("javascript:"), `${page}: unsafe URL`);
    const [path, anchor] = raw.split("#");
    const localPath = path.split("?")[0]
      .replace(/^\/teki\//, "")
      .replace(/\/$/, "/index.html");
    const target = path
      ? resolve(dirname(resolve(root, page)), localPath)
      : resolve(root, page);
    assert.ok(
      !relative(root, target).startsWith(".."),
      `${page}: reference outside project`,
    );
    await access(target);
    if (anchor) {
      const targetHtml = await readFile(target, "utf8");
      assert.ok(
        targetHtml.includes(`id="${anchor}"`),
        `${page}: missing anchor ${anchor}`,
      );
    }
    references += 1;
  }
}
const css = await readFile(resolve(root, "styles.css"), "utf8");
for (const [, path] of css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)) {
  await access(resolve(root, path));
  references += 1;
}
assert.match(css, /prefers-reduced-motion/);
assert.match(css, /focus-visible/);
assert.match(css, /\[hidden\]/);
const home = await readFile(resolve(root, "index.html"), "utf8");
assert.equal([...home.matchAll(/<h1\b/g)].length, 1, "One main heading");
for (const category of ["build", "meet", "move"]) {
  assert.ok(home.includes(`data-category="${category}"`));
  assert.ok(home.includes(`data-filter="${category}"`));
}
assert.ok(
  !/<form(?! method="dialog")/.test(home),
  "No pretend registration form",
);
assert.ok(
  !/localStorage|sessionStorage|document\.cookie/.test(
    await readFile(resolve(root, "app.js"), "utf8"),
  ),
  "No browser storage",
);
assert.ok(!home.includes('href="#"'), "No placeholder links");
await access(resolve(root, ".nojekyll"));
console.log(
  `Static checks passed: ${pages.length} pages, ${references} local references, assets, anchors, filter hooks and launch disclosures.`,
);
