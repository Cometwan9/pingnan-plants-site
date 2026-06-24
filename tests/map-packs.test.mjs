import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = readFileSync(new URL("../main.js", import.meta.url), "utf8");
const pingnanPack = readFileSync(new URL("../data/mapPacks/pingnan.js", import.meta.url), "utf8");
const hangzhouPack = readFileSync(new URL("../data/mapPacks/hangzhou.js", import.meta.url), "utf8");
const packIndex = readFileSync(new URL("../data/mapPacks/index.js", import.meta.url), "utf8");

function loadMapPacks() {
  const context = vm.createContext({ window: {} });
  vm.runInContext(pingnanPack, context);
  vm.runInContext(hangzhouPack, context);
  vm.runInContext(packIndex, context);
  return context.window;
}

test("map pack scripts load before main app script", () => {
  assert.match(html, /data\/mapPacks\/pingnan\.js/);
  assert.match(html, /data\/mapPacks\/hangzhou\.js/);
  assert.match(html, /data\/mapPacks\/index\.js/);
  assert.ok(html.indexOf("data/mapPacks/index.js") < html.indexOf("main.js"));
});

test("pingnan is an available DLC map pack, not the main world", () => {
  const { SPRIG_MAP_PACKS } = loadMapPacks();
  const pingnan = SPRIG_MAP_PACKS.find((pack) => pack.id === "pingnan");

  assert.equal(pingnan.name, "屏南精灵图鉴");
  assert.equal(pingnan.status, "available");
  assert.deepEqual(Array.from(pingnan.center), [118.987, 26.91]);
  assert.equal(pingnan.radiusKm, 20);
  assert.ok(pingnan.locations.length >= 4);
  assert.ok(pingnan.sprigs.length >= 8);
});

test("hangzhou exists as a growing map pack but is not a default", () => {
  const { SPRIG_MAP_PACKS } = loadMapPacks();
  const hangzhou = SPRIG_MAP_PACKS.find((pack) => pack.id === "hangzhou");

  assert.equal(hangzhou.name, "杭州探索包");
  assert.equal(hangzhou.status, "growing");
  assert.deepEqual(Array.from(hangzhou.center), [120.1551, 30.2741]);
  assert.equal(hangzhou.radiusKm, 30);
});

test("findNearestMapPack matches by distance and falls back to unknown garden", () => {
  const { SPRIG_MAP_PACKS, SPRIG_MAP_PACK_UTILS } = loadMapPacks();

  const pingnan = SPRIG_MAP_PACK_UTILS.findNearestMapPack({ lng: 118.99, lat: 26.91 }, SPRIG_MAP_PACKS);
  const hangzhou = SPRIG_MAP_PACK_UTILS.findNearestMapPack({ lng: 120.16, lat: 30.27 }, SPRIG_MAP_PACKS);
  const unknown = SPRIG_MAP_PACK_UTILS.findNearestMapPack({ lng: 116.397, lat: 39.907 }, SPRIG_MAP_PACKS);

  assert.equal(pingnan.mapPack.id, "pingnan");
  assert.equal(hangzhou.mapPack.id, "hangzhou");
  assert.equal(unknown.mapPack, null);
  assert.equal(unknown.status, "unknown");
});

test("generateSprigFromLocation uses pack content or creates unknown sprig", () => {
  const { SPRIG_MAP_PACKS, SPRIG_MAP_PACK_UTILS } = loadMapPacks();
  const pingnan = SPRIG_MAP_PACKS.find((pack) => pack.id === "pingnan");

  const packed = SPRIG_MAP_PACK_UTILS.generateSprigFromLocation({ lng: 118.99, lat: 26.91 }, pingnan);
  const unknown = SPRIG_MAP_PACK_UTILS.generateSprigFromLocation({ lng: 116.397, lat: 39.907 }, null);

  assert.ok(packed.sprig.id);
  assert.equal(packed.temporary, false);
  assert.equal(unknown.sprig.id, "unknown-location");
  assert.equal(unknown.temporary, true);
  assert.doesNotMatch(unknown.sprig.plant, /屏南|杭州|车前草|蒲公英/);
});

test("main app consumes map packs instead of treating pingnan as the world", () => {
  assert.match(script, /SPRIG_MAP_PACKS/);
  assert.match(script, /findNearestMapPack/);
  assert.match(script, /generateSprigFromLocation/);
  assert.match(script, /未知花园/);
  assert.doesNotMatch(script, /const fallbackMapPois =/);
  assert.doesNotMatch(script, /const sprigs = \{/);
  assert.doesNotMatch(script, /杭州.*默认地图/);
});
