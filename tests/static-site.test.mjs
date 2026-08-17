import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds the Rampod GitHub Pages artifact", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>Rampod \| Small engineering work, resolved<\/title>/i);
  assert.match(html, /\/landing-website\/assets\/index-[^"']+\.js/);
  assert.match(html, /https:\/\/rampodhq\.github\.io\/landing-website\/og\.png/);
  await access(new URL("../dist/og.png", import.meta.url));
});
