import { createReadStream, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { createServer } from "node:http";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname);
const envPath = join(root, ".env");
const runtimeDir = join(root, "data", "runtime");
const profileDbPath = join(runtimeDir, "player-profiles.json");
let memoryProfileDb = {};
const weatherCache = new Map();
const WEATHER_CACHE_MS = 8 * 60 * 1000;

if (existsSync(envPath)) {
  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!match || process.env[match[1]]) return;
    process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
  });
}

const port = Number(process.env.PORT || 8765);
const plantIdApiKey = process.env.PLANT_ID_API_KEY || "";
const arkApiKey = process.env.ARK_API_KEY || process.env.VOLC_ARK_API_KEY || "";
const arkVideoModel = process.env.ARK_VIDEO_MODEL || "doubao-seedance-2-0-260128";
const amapWebKey = process.env.AMAP_WEB_KEY || "";
const amapSecurityJsCode = process.env.AMAP_SECURITY_JS_CODE || "";
const wechatAppId = process.env.WECHAT_APP_ID || "";
const wechatSignatureEndpoint = process.env.WECHAT_SIGNATURE_ENDPOINT || "";
const adminPassword = process.env.ADMIN_PASSWORD || "sprig-admin";
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function sendJs(response, status, source) {
  response.writeHead(status, { "Content-Type": "text/javascript; charset=utf-8" });
  response.end(source);
}

function readProfileDb() {
  if (!existsSync(profileDbPath)) return {};
  try {
    memoryProfileDb = JSON.parse(readFileSync(profileDbPath, "utf8"));
    return memoryProfileDb;
  } catch {
    return memoryProfileDb;
  }
}

function writeProfileDb(db) {
  memoryProfileDb = db;
  try {
    mkdirSync(runtimeDir, { recursive: true });
    writeFileSync(profileDbPath, JSON.stringify(db, null, 2));
  } catch {
    // Vercel serverless filesystems are ephemeral/read-only; keep runtime data in memory until a real DB is configured.
  }
}

function normalizePlayerId(value = "") {
  return String(value).replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 64);
}

function getClientIp(request) {
  const forwarded = request.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) return forwarded.split(",")[0].trim();
  return request.socket?.remoteAddress || "";
}

function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function isSameDay(timestamp, dayKey = getTodayKey()) {
  if (!timestamp) return false;
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return false;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}` === dayKey;
}

function requireAdmin(request, response) {
  const provided = request.headers["x-admin-password"] || "";
  if (provided === adminPassword) return true;
  sendJson(response, 401, {
    error: "admin-auth-required",
    message: "Admin password is required.",
  });
  return false;
}

function getWeatherCacheKey({ lat, lng, city }) {
  const roundedLat = Number.isFinite(lat) ? lat.toFixed(2) : "";
  const roundedLng = Number.isFinite(lng) ? lng.toFixed(2) : "";
  return `${city || "gps"}:${roundedLat},${roundedLng}`;
}

function serveLocalConfig(response) {
  sendJs(
    response,
    200,
    `window.SPRIG_AMAP_CONFIG = ${JSON.stringify({
      key: amapWebKey,
      securityJsCode: amapSecurityJsCode,
    })};\n`,
  );
}

async function serveWechatSignature(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
  const targetUrl = url.searchParams.get("url") || "";

  if (!wechatAppId || !wechatSignatureEndpoint) {
    sendJson(response, 501, {
      configured: false,
      error: "wechat-signature-not-configured",
      message: "Set WECHAT_APP_ID and WECHAT_SIGNATURE_ENDPOINT on a signed production domain.",
    });
    return;
  }

  try {
    const signatureUrl = new URL(wechatSignatureEndpoint);
    signatureUrl.searchParams.set("url", targetUrl);
    const signatureResponse = await fetch(signatureUrl);
    const payload = await signatureResponse.json().catch(() => ({}));
    if (!signatureResponse.ok) {
      sendJson(response, signatureResponse.status, {
        configured: true,
        error: "wechat-signature-error",
        detail: payload,
      });
      return;
    }
    sendJson(response, 200, {
      configured: true,
      appId: wechatAppId,
      ...payload,
    });
  } catch (error) {
    sendJson(response, 500, {
      configured: true,
      error: error?.message || "wechat-signature-failed",
    });
  }
}

function normalizeWeatherResponse(payload) {
  const current = payload?.current || {};
  const temperature = Number(current.temperature_2m);
  const weatherCode = Number(current.weather_code);
  return {
    configured: true,
    source: "open-meteo",
    temperature: Number.isFinite(temperature) ? Math.round(temperature) : null,
    weatherCode: Number.isFinite(weatherCode) ? weatherCode : 0,
    precipitation: Number(current.precipitation || 0),
    observedAt: current.time || "",
    model: "global-forecast",
  };
}

function normalizeAmapWeatherResponse(payload) {
  const live = payload?.lives?.[0] || {};
  const temperature = Number(live.temperature);
  return {
    configured: true,
    source: "amap",
    temperature: Number.isFinite(temperature) ? Math.round(temperature) : null,
    weatherText: live.weather || "",
    city: live.city || "",
    adcode: live.adcode || "",
    observedAt: live.reporttime || "",
    model: "local-live",
  };
}

async function serveWeather(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
  const lat = Number(url.searchParams.get("lat"));
  const lng = Number(url.searchParams.get("lng"));
  const city = url.searchParams.get("city") || "";

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    sendJson(response, 400, {
      configured: false,
      error: "missing-location",
      message: "lat and lng are required.",
    });
    return;
  }

  const cacheKey = getWeatherCacheKey({ lat, lng, city });
  const cached = weatherCache.get(cacheKey);
  if (cached && Date.now() - cached.cachedAt < WEATHER_CACHE_MS) {
    sendJson(response, 200, { ...cached.payload, cached: true });
    return;
  }

  try {
    if (amapWebKey && city) {
      const amapParams = new URLSearchParams({
        key: amapWebKey,
        city,
        extensions: "base",
        output: "JSON",
      });
      const amapResponse = await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?${amapParams.toString()}`);
      const amapPayload = await amapResponse.json().catch(() => ({}));
      if (amapResponse.ok && amapPayload.status === "1" && amapPayload.lives?.length) {
        const payload = normalizeAmapWeatherResponse(amapPayload);
        weatherCache.set(cacheKey, { cachedAt: Date.now(), payload });
        sendJson(response, 200, payload);
        return;
      }
    }

    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lng),
      current: "temperature_2m,weather_code,precipitation",
      timezone: "auto",
    });
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
    const payload = await weatherResponse.json().catch(() => ({}));
    if (!weatherResponse.ok) {
      sendJson(response, weatherResponse.status, {
        configured: true,
        error: "weather-api-error",
        detail: payload,
      });
      return;
    }
    const normalized = normalizeWeatherResponse(payload);
    weatherCache.set(cacheKey, { cachedAt: Date.now(), payload: normalized });
    sendJson(response, 200, normalized);
  } catch (error) {
    sendJson(response, 502, {
      configured: true,
      error: error?.message || "weather-failed",
    });
  }
}

async function serveProfile(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
  const playerId = normalizePlayerId(url.searchParams.get("playerId"));

  if (!playerId) {
    sendJson(response, 400, { error: "missing-player-id" });
    return;
  }

  if (request.method === "GET") {
    const db = readProfileDb();
    sendJson(response, 200, {
      configured: true,
      profile: db[playerId] || null,
    });
    return;
  }

  if (request.method === "PUT") {
    try {
      const body = await readRequestJson(request);
      const db = readProfileDb();
      const previous = db[playerId] || {};
      db[playerId] = {
        ...previous,
        ...(body.profile || {}),
        playerId,
        firstLoginAt: previous.firstLoginAt || body.profile?.firstLoginAt || "",
        lastLoginAt: previous.lastLoginAt || body.profile?.lastLoginAt || "",
        loginCount: Number(previous.loginCount || body.profile?.loginCount || 0),
        loginDays: Array.isArray(previous.loginDays) ? previous.loginDays : [],
        loginHistory: Array.isArray(previous.loginHistory) ? previous.loginHistory : [],
        savedAt: Date.now(),
      };
      writeProfileDb(db);
      sendJson(response, 200, {
        configured: true,
        profile: db[playerId],
      });
    } catch (error) {
      sendJson(response, error?.message === "request-too-large" ? 413 : 400, {
        error: error?.message || "profile-save-failed",
      });
    }
    return;
  }

  response.writeHead(405);
  response.end("Method not allowed");
}

async function serveLogin(request, response) {
  try {
    const body = await readRequestJson(request);
    const playerId = normalizePlayerId(body.playerId);
    if (!playerId) {
      sendJson(response, 400, { error: "missing-player-id" });
      return;
    }

    const now = Date.now();
    const today = getTodayKey();
    const db = readProfileDb();
    const previous = db[playerId] || {};
    const profile = {
      ...previous,
      ...(body.profile || {}),
      playerId,
      firstLoginAt: previous.firstLoginAt || now,
      lastLoginAt: now,
      loginCount: Number(previous.loginCount || 0) + 1,
      loginDays: Array.from(new Set([...(Array.isArray(previous.loginDays) ? previous.loginDays : []), today])).slice(-120),
      loginHistory: [
        {
          at: now,
          userAgent: String(request.headers["user-agent"] || "").slice(0, 180),
          ip: getClientIp(request),
        },
        ...(Array.isArray(previous.loginHistory) ? previous.loginHistory : []),
      ].slice(0, 30),
      savedAt: now,
    };
    db[playerId] = profile;
    writeProfileDb(db);
    sendJson(response, 200, {
      configured: true,
      profile,
    });
  } catch (error) {
    sendJson(response, error?.message === "request-too-large" ? 413 : 400, {
      error: error?.message || "login-failed",
    });
  }
}

function summarizeProfile(profile) {
  const unlockedCount = Array.isArray(profile.unlockedSprigs) ? profile.unlockedSprigs.length : 0;
  const specialtyCount = Array.isArray(profile.specialties) ? profile.specialties.length : 0;
  const scanCount = Array.isArray(profile.scanRecords) ? profile.scanRecords.length : 0;
  return {
    playerId: profile.playerId || "",
    gardenName: profile.gardenName || "未命名花园",
    playerName: profile.user?.name || "花园观察员",
    region: [profile.onboarding?.province || profile.onboarding?.region, profile.onboarding?.city].filter(Boolean).join(" · "),
    birthday: profile.onboarding?.birthday || "",
    language: profile.onboarding?.language || "zh-CN",
    seeds: Number(profile.seeds || 0),
    stamina: Number(profile.stamina || 0),
    unlockedCount,
    specialtyCount,
    scanCount,
    loginCount: Number(profile.loginCount || 0),
    firstLoginAt: profile.firstLoginAt || "",
    lastLoginAt: profile.lastLoginAt || "",
    savedAt: profile.savedAt || "",
  };
}

function serveAdminSummary(request, response) {
  if (!requireAdmin(request, response)) return;
  const db = readProfileDb();
  const profiles = Object.values(db).map(summarizeProfile).sort((a, b) => Number(b.lastLoginAt || b.savedAt || 0) - Number(a.lastLoginAt || a.savedAt || 0));
  const today = getTodayKey();
  const todayLoginCount = profiles.filter((profile) => isSameDay(profile.lastLoginAt, today)).length;
  const totalLoginCount = profiles.reduce((total, profile) => total + Number(profile.loginCount || 0), 0);
  sendJson(response, 200, {
    configured: true,
    generatedAt: Date.now(),
    totals: {
      players: profiles.length,
      todayLogins: todayLoginCount,
      totalLogins: totalLoginCount,
      totalUnlockedSprigs: profiles.reduce((total, profile) => total + profile.unlockedCount, 0),
      totalSpecialties: profiles.reduce((total, profile) => total + profile.specialtyCount, 0),
      totalScans: profiles.reduce((total, profile) => total + profile.scanCount, 0),
    },
    profiles,
  });
}

function readRequestJson(request) {
  return new Promise((resolveRequest, rejectRequest) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 12 * 1024 * 1024) {
        request.destroy();
        rejectRequest(new Error("request-too-large"));
      }
    });
    request.on("end", () => {
      try {
        resolveRequest(JSON.parse(body || "{}"));
      } catch {
        rejectRequest(new Error("invalid-json"));
      }
    });
    request.on("error", rejectRequest);
  });
}

function normalizePlantIdResponse(payload) {
  const suggestions = payload?.result?.classification?.suggestions || [];
  return suggestions.slice(0, 5).map((suggestion) => ({
    name: suggestion.name || "Unknown plant",
    probability: suggestion.probability || 0,
    commonNames: suggestion.details?.common_names || [],
    taxonomy: suggestion.details?.taxonomy || {},
    url: suggestion.details?.url || "",
    image: suggestion.similar_images?.[0]?.url || suggestion.details?.image?.value || "",
  }));
}

async function identifyPlant(request, response) {
  if (!plantIdApiKey) {
    sendJson(response, 200, {
      configured: false,
      suggestions: [],
      message: "PLANT_ID_API_KEY is not configured.",
    });
    return;
  }

  try {
    const body = await readRequestJson(request);
    if (!body.image) {
      sendJson(response, 400, { configured: true, error: "missing-image" });
      return;
    }

    const plantResponse = await fetch("https://plant.id/api/v3/identification", {
      method: "POST",
      headers: {
        "Api-Key": plantIdApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        images: [body.image],
        latitude: body.latitude,
        longitude: body.longitude,
        similar_images: true,
        classification_level: "all",
        details: ["common_names", "url", "taxonomy", "image"],
      }),
    });

    const payload = await plantResponse.json().catch(() => ({}));
    if (!plantResponse.ok) {
      sendJson(response, plantResponse.status, {
        configured: true,
        error: "plant-id-error",
        detail: payload,
      });
      return;
    }

    sendJson(response, 200, {
      configured: true,
      suggestions: normalizePlantIdResponse(payload),
      raw: payload,
    });
  } catch (error) {
    const status = error?.message === "request-too-large" ? 413 : 500;
    sendJson(response, status, {
      configured: true,
      error: error?.message || "identify-failed",
    });
  }
}

function normalizeArkAnimationRequest(body = {}) {
  const prompt = String(body.prompt || "").trim();
  const content = Array.isArray(body.content) && body.content.length
    ? body.content
    : [
        {
          type: "text",
          text: prompt || "像素风植物小精灵轻轻眨眼，叶片摆动，温柔治愈，适合手机游戏界面。",
        },
      ];
  const duration = Number(body.duration);
  return {
    model: String(body.model || arkVideoModel),
    content,
    generate_audio: Boolean(body.generate_audio ?? body.generateAudio ?? false),
    ratio: String(body.ratio || "9:16"),
    duration: Number.isFinite(duration) ? Math.max(4, Math.min(15, Math.round(duration))) : 5,
    watermark: Boolean(body.watermark ?? false),
  };
}

async function generateArkAnimation(request, response) {
  if (!arkApiKey) {
    sendJson(response, 200, {
      configured: false,
      error: "ark-api-key-not-configured",
      message: "Set ARK_API_KEY in .env before generating animations.",
    });
    return;
  }

  try {
    const body = await readRequestJson(request);
    const payload = normalizeArkAnimationRequest(body);
    const arkResponse = await fetch("https://ark.cn-beijing.volces.com/api/v3/contents/generations/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${arkApiKey}`,
      },
      body: JSON.stringify(payload),
    });
    const result = await arkResponse.json().catch(() => ({}));
    if (!arkResponse.ok) {
      sendJson(response, arkResponse.status, {
        configured: true,
        error: "ark-animation-error",
        detail: result,
      });
      return;
    }

    sendJson(response, 200, {
      configured: true,
      model: payload.model,
      task: result,
    });
  } catch (error) {
    const status = error?.message === "request-too-large" ? 413 : 502;
    sendJson(response, status, {
      configured: true,
      error: error?.message || "ark-animation-failed",
    });
  }
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
  const pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = normalize(join(root, pathname));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (!existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}

export function handleRequest(request, response) {
  if (request.method === "POST" && request.url === "/api/identify-plant") {
    identifyPlant(request, response);
    return;
  }

  if (request.method === "POST" && request.url === "/api/generate-animation") {
    generateArkAnimation(request, response);
    return;
  }

  if ((request.method === "GET" || request.method === "HEAD") && request.url === "/config.local.js") {
    serveLocalConfig(response);
    return;
  }

  if ((request.method === "GET" || request.method === "HEAD") && request.url.startsWith("/api/wechat-signature")) {
    serveWechatSignature(request, response);
    return;
  }

  if ((request.method === "GET" || request.method === "HEAD") && request.url.startsWith("/api/weather")) {
    serveWeather(request, response);
    return;
  }

  if ((request.method === "GET" || request.method === "PUT") && request.url.startsWith("/api/profile")) {
    serveProfile(request, response);
    return;
  }

  if (request.method === "POST" && request.url === "/api/login") {
    serveLogin(request, response);
    return;
  }

  if ((request.method === "GET" || request.method === "HEAD") && request.url.startsWith("/api/admin/summary")) {
    serveAdminSummary(request, response);
    return;
  }

  if (request.method === "GET" || request.method === "HEAD") {
    serveStatic(request, response);
    return;
  }

  response.writeHead(405);
  response.end("Method not allowed");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const server = createServer(handleRequest);
  server.listen(port, "127.0.0.1", () => {
    console.log(`Sprig Garden running at http://127.0.0.1:${port}/index.html`);
  });
}
