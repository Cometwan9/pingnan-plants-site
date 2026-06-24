import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = readFileSync(new URL("../main.js", import.meta.url), "utf8");
const styles = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const pingnanData = readFileSync(new URL("../data/mapPacks/pingnan.js", import.meta.url), "utf8");
const server = readFileSync(new URL("../server.mjs", import.meta.url), "utf8");
const gitignore = readFileSync(new URL("../.gitignore", import.meta.url), "utf8");
const envExample = readFileSync(new URL("../.env.example", import.meta.url), "utf8");
const navIcons = [
  "identity",
  "atlas",
  "garden",
  "map",
  "expedition",
].map((name) => readFileSync(new URL(`../assets/nav-icons/${name}.svg`, import.meta.url), "utf8")).join("\n");

test("guide layer markup is present", () => {
  assert.match(html, /id="guideButton"/);
  assert.match(html, /id="guideLayer"/);
  assert.match(html, /id="guideMascotFrame"/);
  assert.match(html, /id="guideMascot"/);
  assert.doesNotMatch(html, /class="guide-expression"/);
  assert.match(html, /id="guideSpeaker"/);
  assert.match(html, /id="guideTitle"/);
  assert.match(html, /id="guideNext"/);
});

test("player guide covers the main game loops", () => {
  const guideBlock = script.match(/const guideSteps = \[([\s\S]*?)\];/)?.[1] || "";
  const stepMatches = guideBlock.match(/selector:\s*['"]/g) || [];

  assert.ok(stepMatches.length >= 7, "expected at least seven guide steps");
  assert.match(script, /mascot:\s*sprigs\./);
  assert.match(script, /startGuide/);
  assert.match(script, /sprigGardenGuideSeen/);
  assert.match(script, /panel-expedition/);
  assert.match(script, /foldAtlasIntoBackpack/);
  assert.match(script, /panel-map/);
  assert.match(html, /class="garden-action-button garden-action-button--expedition"/);
  assert.match(script, /action:\s*"/);
  assert.match(script, /typeGuideText/);
  assert.match(script, /restartGuideMotion/);
  assert.match(script, /guideTypingTimer/);
  assert.match(script, /guideTransitioning/);
  assert.match(script, /GUIDE_EXIT_MS = 180/);
  assert.match(script, /GUIDE_ENTER_MS = 420/);
  assert.match(script, /GUIDE_ADVANCE_MS = 280/);
  assert.match(script, /goToGuideStep/);
  assert.match(script, /expression:\s*"/);
  assert.match(script, /motion:\s*"/);
  assert.match(script, /speaker:\s*"/);
  assert.match(script, /sprigId:\s*"/);
  assert.match(script, /guideSpeaker\.textContent/);
  assert.doesNotMatch(script, /这里可以直接查看身份/);
  assert.doesNotMatch(script, /先选时间，悬停就能看体力花费/);
  assert.doesNotMatch(script, /不是|而是/);
});

test("sprigs speak like distinct NPCs instead of generic assistants", () => {
  const coreIds = ["fern", "clover", "tea", "orchid", "huangjing", "fisheye", "plantain", "dandelion"];

  for (const id of coreIds) {
    const block = pingnanData.match(new RegExp(`${id}: \\{([\\s\\S]*?)\\n    \\},`))?.[1] || "";
    assert.match(block, /personality:\s*"/, `${id} needs a personality label`);
    assert.match(block, /npcRole:\s*"/, `${id} needs an NPC role`);
    assert.match(block, /speechStyle:\s*"/, `${id} needs a speech style`);
    assert.match(block, /voiceLines:\s*\[/, `${id} needs voice lines`);
  }

  assert.match(script, /sprig\.voiceLines/);
  assert.match(script, /sprig\.personality/);
  assert.match(script, /sprig\.npcRole/);
  assert.doesNotMatch(pingnanData, /不是|而是/);
});

test("first launch asks for region language birthday then loads into the guide", () => {
  assert.match(html, /id="regionSelect"/);
  assert.match(html, /id="languageSelect"/);
  assert.match(html, /id="birthdayInput"/);
  assert.doesNotMatch(html, /First Launch/);
  assert.match(html, /class="birthday-picker"/);
  assert.match(html, /id="starterReveal"/);
  assert.match(html, /class="starter-seed"/);
  assert.match(html, /id="birthdayYearColumn"/);
  assert.match(html, /id="birthdayMonthColumn"/);
  assert.match(html, /id="birthdayDayColumn"/);
  assert.doesNotMatch(html, /birthday-picker-actions/);
  assert.doesNotMatch(html, /id="birthdayConfirm"/);
  assert.match(html, /id="bootLoading"/);
  assert.match(html, /class="boot-loading is-hidden"/);
  assert.match(html, /生日/);
  assert.match(html, /地区/);
  assert.match(html, /语言/);
  assert.match(script, /const regionSelect = document\.querySelector\("#regionSelect"\)/);
  assert.match(script, /const languageSelect = document\.querySelector\("#languageSelect"\)/);
  assert.match(script, /const birthdayInput = document\.querySelector\("#birthdayInput"\)/);
  assert.match(script, /setupBirthdayWheel/);
  assert.match(script, /syncBirthdayFromWheel/);
  assert.match(script, /playStarterReveal/);
  assert.match(script, /starter\.greeting/);
  assert.match(script, /function showSprigSystemMessage/);
  assert.match(script, /function positionKnowledgePopOnSprig/);
  assert.match(script, /function getDefaultSpeakingSprigId/);
  assert.match(script, /function syncKnowledgePopSpeakerPosition/);
  assert.match(script, /function showSystemMessage\(title,\s*text,\s*label = "System",\s*sprigId = getDefaultSpeakingSprigId\(\)\)/);
  assert.match(script, /showSprigSystemMessage\(starterId,\s*state\.gardenName/);
  assert.match(styles, /\.birthday-wheel/);
  assert.match(styles, /\.starter-reveal/);
  assert.match(styles, /@keyframes starterSeedPulse/);
  assert.match(styles, /scroll-snap-type:\s*y mandatory/);
  assert.match(script, /const bootLoading = document\.querySelector\("#bootLoading"\)/);
  assert.match(script, /function enterGardenAfterLoading/);
  assert.match(script, /bootLoading\.classList\.remove\("is-hidden"\)/);
  assert.match(script, /window\.setTimeout\(\(\) => \{[\s\S]*startGuide\(false\)/);
  assert.match(script, /checkinAfterGuide/);
  assert.match(script, /maybeShowDailyCheckinPrompt/);
  assert.match(script, /birthday:\s*birthdayInput\.value/);
  assert.match(script, /language:\s*languageSelect\.value/);
  assert.match(script, /region:\s*regionSelect\.value/);
});

test("daily checkin appears from the home flow instead of the expedition panel", () => {
  const expeditionPanel = html.match(/<section class="panel panel--expedition"[\s\S]*?<\/section>/)?.[0] || "";
  assert.doesNotMatch(expeditionPanel, /daily-scoreboard|dailyCheckinButton|今日签到/);
  assert.match(html, /id="dailyCheckinModal"/);
  assert.match(script, /const shouldShowCheckin = remember && state\.checkinAfterGuide && !state\.guideStartedManually/);
});

test("feature tips are wired for direct navigation", () => {
  assert.match(script, /featureTips/);
  assert.match(script, /panel-discover/);
  assert.doesNotMatch(html, /panel-profile/);
  assert.match(html, /id="panel-identity"/);
  assert.match(html, /种种护照/);
  assert.match(html, /data-panel="panel-identity"/);
  assert.doesNotMatch(html, /种种手机/);
  assert.doesNotMatch(script, /phoneGardenButton|syncProfile|profileName|levelProgressText|#levelProgress/);
  assert.match(script, /身份卡/);
  assert.match(styles, /\.feature-tip/);
  assert.match(styles, /\.guide-layer/);
  assert.match(styles, /\.guide-highlight/);
});

test("core navigation keeps backpack garden map as the main controls", () => {
  const dockBlock = html.match(/<nav class="dock"[\s\S]*?<\/nav>/)?.[0] || "";
  const dockButtons = dockBlock.match(/<button/g) || [];

  assert.equal(dockButtons.length, 3);
  assert.match(dockBlock, /data-panel="panel-identity"[\s\S]*背包/);
  assert.doesNotMatch(dockBlock, /data-panel="panel-atlas"/);
  assert.match(dockBlock, /data-panel="panel-map"[\s\S]*地图/);
  assert.match(dockBlock, /data-panel="panel-identity"[\s\S]*pixel-icon--identity/);
  assert.match(dockBlock, /id="homeButton"[\s\S]*pixel-icon--garden[\s\S]*花园/);
  assert.match(dockBlock, /data-panel="panel-map"[\s\S]*pixel-icon--map/);
  assert.doesNotMatch(dockBlock, /assets\/phone-icons/);
  assert.match(dockBlock, /class="home-button is-active"/);
  assert.doesNotMatch(dockBlock, /扫描|探险/);
  assert.match(styles, /\.dock\s*\{[\s\S]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(styles, /\.dock-button-icon/);
  assert.match(styles, /\.pixel-icon--identity/);
  assert.match(styles, /\.pixel-icon--atlas/);
  assert.match(styles, /\.pixel-icon--garden/);
  assert.match(styles, /\.pixel-icon--map/);
  assert.match(styles, /\.garden-action-button--expedition/);
  assert.match(script, /const dockNavButtons =/);
  assert.match(script, /function syncDockActive/);
  assert.match(script, /button\.classList\.toggle\("is-active"/);
});

test("game HUD uses clear hierarchy instead of compressing every control into one row", () => {
  assert.match(styles, /grid-template-areas:\s*"profile resources tools"/);
  assert.match(styles, /grid-area:\s*profile/);
  assert.match(styles, /grid-area:\s*resources/);
  assert.match(styles, /grid-area:\s*tools/);
  assert.match(styles, /\.hud-resources\s*\{[\s\S]*justify-content:\s*end/);
  assert.match(styles, /\.dock::before/);
  assert.match(styles, /@media\s*\(max-width:\s*720px\)[\s\S]*grid-template-areas:\s*"profile resources"[\s\S]*"tools tools"/);
  assert.match(styles, /@media\s*\(max-width:\s*720px\)[\s\S]*\.hud-resources\s*\{[\s\S]*justify-content:\s*end/);
  assert.match(styles, /@media\s*\(max-width:\s*720px\)[\s\S]*\.clock\s*\{[\s\S]*display:\s*none/);
});

test("identity passport keeps aligned columns and uses a postmark sprig stamp", () => {
  assert.match(html, /class="passport-stamp"[\s\S]*<i aria-hidden="true"><\/i>/);
  const portraitBlock = html.match(/<figure class="identity-portrait"[\s\S]*?<\/figure>/)?.[0] || "";
  assert.doesNotMatch(portraitBlock, /identityPassportId/);
  assert.match(html, /<div class="identity-profile">[\s\S]*id="identityPassportId"/);
  assert.match(html, /class="identity-certified-mark"[\s\S]*>种种<\//);
  assert.match(html, /id="identityWorldLine"/);
  assert.match(html, /id="identityPassportStage"/);
  assert.match(html, /<div class="growth-card" hidden>/);
  assert.match(styles, /\.identity-hero\s*\{[\s\S]*grid-template-columns:\s*minmax\(12\.5rem,\s*0\.85fr\) minmax\(17rem,\s*1\.15fr\)/);
  assert.match(styles, /\.panel--identity\s*\{[\s\S]*calc\(clamp\(3\.8rem,\s*8vw,\s*6\.5rem\)\s*\+\s*4\.4rem\)/);
  assert.match(styles, /\.passport-stamp img\s*\{[\s\S]*filter:/);
  assert.match(styles, /\.passport-stamp::before\s*\{[\s\S]*background:\s*rgba\(248,\s*238,\s*181,\s*0\.42\)/);
  assert.match(styles, /\.passport-stamp i\s*\{[\s\S]*data:image\/svg\+xml/);
});

test("identity passport tabs switch real sections", () => {
  assert.match(html, /data-identity-tab="card"/);
  assert.match(html, /data-identity-tab="atlas"/);
  assert.match(html, /data-identity-tab="items"/);
  assert.match(html, /data-identity-page="items"/);
  assert.match(script, /function setIdentityTab/);
  assert.match(script, /foldAtlasIntoBackpack/);
  assert.match(styles, /\.identity-page\.is-hidden\s*\{[\s\S]*display:\s*none/);
});

test("cards and navigation use a flat 8bit pixel UI without soft 3D shadows", () => {
  const homeButtonStyle = styles.match(/\.eight-bit-ui \.home-button\s*\{([\s\S]*?)\}/)?.[1] || "";

  assert.match(styles, /--pixel-cream:/);
  assert.match(styles, /--pixel-line:/);
  assert.match(styles, /--pixel-border:/);
  assert.match(styles, /--pixel-green:/);
  assert.match(styles, /--pixel-muted-green:/);
  assert.match(styles, /--pixel-label-hidden:/);
  assert.doesNotMatch(styles, /--pixel-line:\s*#5f523d/);
  assert.doesNotMatch(styles, /border:\s*0\.18rem solid var\(--pixel-line\)/);
  assert.match(styles, /border:\s*0\.12rem solid var\(--pixel-border\)/);
  assert.match(styles, /\.eight-bit-ui \.dock::before[\s\S]*border:\s*0\.12rem solid var\(--pixel-border\)/);
  assert.doesNotMatch(navIcons, /#5f523d/i);
  assert.match(styles, /--pixel-sprout:/);
  assert.match(styles, /--pixel-sun:/);
  assert.match(styles, /--energy-mint:/);
  assert.match(styles, /--energy-lime:/);
  assert.match(styles, /\.eight-bit-ui \.dock button\.is-active\s*\{[\s\S]*var\(--pixel-sprout\)/);
  assert.match(styles, /\.eight-bit-ui \.dock button\.is-active \.dock-button-icon\s*\{[\s\S]*transform:\s*none/);
  assert.doesNotMatch(homeButtonStyle, /background:\s*var\(--pixel-blue\)/);
  assert.match(styles, /\.eight-bit-ui \.primary\s*\{[\s\S]*background:\s*var\(--pixel-sun\)/);
  assert.match(styles, /\.eight-bit-ui/);
  assert.match(styles, /\.dock-button-icon img/);
  assert.match(html, /nav-icons\/expedition\.svg/);
  assert.doesNotMatch(html, /garden-action-button--expedition[\s\S]*garden-icons\/expedition\.png/);
  assert.match(styles, /\.pixel-flat-ui\s*\{[\s\S]*box-shadow:\s*none/);
  assert.match(styles, /\.pixel-flat-ui::before\s*\{[\s\S]*box-shadow:\s*none/);
  assert.match(styles, /\.dock::before[\s\S]*box-shadow:\s*none/);
  assert.match(styles, /\.dock button::before[\s\S]*display:\s*none/);
  assert.match(styles, /\.pill--seed\s*\{[\s\S]*background:\s*#fff2c4/);
  assert.match(styles, /\.stamina-pill\s*\{[\s\S]*background:\s*#eef8d4/);
  assert.match(styles, /\.primary\s*\{[\s\S]*border-radius:\s*0\.55rem/);
  assert.match(styles, /\.eight-bit-ui \.dock button\s*\{[\s\S]*border-radius:\s*0\.72rem/);
  assert.doesNotMatch(styles, /\.eight-bit-ui \.dock button\s*\{[\s\S]*clip-path:\s*polygon/);
  assert.match(styles, /\.eight-bit-ui \.dock button b\s*\{[\s\S]*var\(--pixel-label-hidden\)/);
  assert.match(styles, /\.eight-bit-ui \.dock-button-icon\s*\{[\s\S]*clamp\(2\.55rem/);
});

test("guide uses narrative motion instead of static click-through copy", () => {
  assert.match(styles, /\.guide-mascot-frame/);
  assert.doesNotMatch(styles, /\.guide-expression/);
  assert.match(styles, /\.guide-bubble p\.is-typing::after/);
  assert.match(styles, /@keyframes guideCardArrive/);
  assert.match(styles, /@keyframes guidePlantNod/);
  assert.match(styles, /@keyframes guideLeafWave/);
  assert.match(styles, /@keyframes guideLeafFocus/);
  assert.match(styles, /\.guide-card\.is-leaving/);
  assert.match(styles, /\.guide-layer\.is-transitioning/);
  assert.match(styles, /\.guide-layer\.is-confirming/);
  assert.match(styles, /cubic-bezier\(0\.2, 0\.8, 0\.2, 1\)/);
  assert.match(styles, /min-height: 4\.55em/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(script, /guideMascotFrame\.dataset\.expression/);
  assert.doesNotMatch(styles, /\.guide-fireflies/);
  assert.doesNotMatch(styles, /\.guide-tap/);
  assert.match(script, /花园醒着呢/);
  assert.match(script, /小芽芽帮你看门/);
  assert.match(script, /蒲蒲刚从风里回来/);
});

test("sprigs invite clicks through motion instead of text tips", () => {
  assert.doesNotMatch(script, /点我看看/);
  assert.doesNotMatch(html, /点我看看/);
  assert.match(styles, /\.sprig:hover::before/);
  assert.match(styles, /\.sprig:hover::after/);
  assert.match(styles, /@keyframes sprigInvite/);
});

test("sprig info card stays hidden until a sprig is selected", () => {
  assert.match(html, /class="sprig-info-card is-hidden"/);
  assert.match(styles, /\.sprig-info-card\.is-hidden/);
  assert.match(script, /function hideSprigInfo/);
  assert.match(script, /function showSprigInfo/);
  assert.match(script, /showSprigInfo\(\);/);
});

test("map radar is wired to Gaode API with local fallback", () => {
  assert.match(html, /config\.local\.js/);
  assert.match(html, /id="mapDots"/);
  assert.match(html, /id="mapResults"/);
  assert.match(html, /id="mapStatus"/);
  assert.match(html, /id="mapPlantScanButton"/);
  assert.match(html, /data-panel="panel-discover"/);
  assert.match(script, /AMAP_DEFAULT_CONFIG/);
  assert.match(script, /webapi\.amap\.com\/loader\.js/);
  assert.match(script, /AMap\.Geolocation/);
  assert.match(script, /AMap\.PlaceSearch/);
  assert.match(script, /searchNearBy/);
  assert.match(script, /renderFallbackMapPois/);
  assert.match(script, /mapPlantScanButton\.addEventListener/);
  assert.match(server, /AMAP_WEB_KEY/);
  assert.match(server, /AMAP_SECURITY_JS_CODE/);
  assert.match(server, /SPRIG_AMAP_CONFIG/);
  assert.match(gitignore, /config\.local\.js/);
  assert.match(envExample, /AMAP_WEB_KEY=/);
  assert.match(envExample, /AMAP_SECURITY_JS_CODE=/);
});

test("plant identification is proxied through the local API server", () => {
  assert.match(html, /id="arCamera"/);
  assert.match(html, /id="arCanvas"/);
  assert.match(html, /id="scanInput"/);
  assert.match(html, /id="uploadScanButton"/);
  assert.match(html, /id="scanRecordList"/);
  assert.match(script, /\/api\/identify-plant/);
  assert.match(script, /getUserMedia/);
  assert.match(script, /captureArRecognition/);
  assert.match(script, /identifyPlantFile/);
  assert.match(script, /identifyPlantImage/);
  assert.match(script, /createTemporaryPlantScan/);
  assert.match(script, /appendPlantScanRecord/);
  assert.match(script, /latitude:\s*state\.userLocation\?\.lat/);
  assert.match(script, /longitude:\s*state\.userLocation\?\.lng/);
  assert.match(server, /PLANT_ID_API_KEY/);
  assert.match(server, /https:\/\/plant\.id\/api\/v3\/identification/);
  assert.match(server, /"Api-Key": plantIdApiKey/);
  assert.match(gitignore, /\.env/);
  assert.match(envExample, /PLANT_ID_API_KEY=/);
});

test("cloudy weather gets a darker garden atmosphere", () => {
  assert.match(script, /if \(\[2,\s*3\]\.includes\(code\)\) return "cloud"/);
  assert.doesNotMatch(script, /杭州\|杭州市[\s\S]*?小雨/);
  assert.match(script, /WEATHER_REFRESH_MS = 10 \* 60 \* 1000/);
  assert.match(script, /setInterval\(\(\) => updateWeather\(state\.userLocation\), WEATHER_REFRESH_MS\)/);
  assert.match(script, /function fetchWeatherFromAmap/);
  assert.match(script, /function getWeatherSceneFromText/);
  assert.match(script, /weatherText/);
  assert.match(script, /code >= 95\) return precipitation > 0\.1 \? "storm" : "cloud"/);
  assert.match(script, /code >= 51 && code <= 67[\s\S]*precipitation <= 0\.1/);
  assert.match(script, /adcode:\s*"330100"/);
  assert.match(script, /天气读取中/);
  assert.match(script, /天气暂不可用/);
  assert.match(server, /weatherCache/);
  assert.match(server, /WEATHER_CACHE_MS/);
  assert.match(server, /model:\s*"local-live"/);
  assert.match(server, /model:\s*"global-forecast"/);
  assert.match(server, /restapi\.amap\.com\/v3\/weather\/weatherInfo/);
  assert.match(server, /function normalizeAmapWeatherResponse/);
  assert.match(styles, /\.garden-stage\[data-weather="cloud"\] \.weather-scene::before/);
  assert.match(styles, /\.garden-stage\[data-weather="cloud"\] \.weather-scene::after/);
  assert.match(styles, /@keyframes weatherCloudDrift/);
  assert.match(styles, /\.garden-stage\[data-weather="mist"\] \.weather-scene::before/);
});

test("player progress is backed by a local profile database", () => {
  assert.match(script, /PLAYER_ID_KEY = "sprigGardenPlayerId"/);
  assert.match(script, /function serializeGardenProfile/);
  assert.match(script, /unlockedSprigs:\s*Array\.from\(state\.unlockedSprigs\)/);
  assert.match(script, /gardenSprigs:\s*Array\.from\(state\.gardenSprigs\)/);
  assert.match(script, /scanRecords:\s*state\.scanRecords/);
  assert.match(script, /nurseryEndAt:\s*state\.nurseryEndAt/);
  assert.match(script, /async function saveProfileToServer/);
  assert.match(script, /\/api\/profile\?playerId=/);
  assert.match(script, /async function restoreGardenProfileFromServer/);
  assert.match(script, /restoreGardenProfileFromServer\(\)\.then/);
  assert.doesNotMatch(script, /updateDailyTaskBoard/);
  assert.match(server, /player-profiles\.json/);
  assert.match(server, /function serveProfile/);
  assert.match(server, /request\.method === "PUT"/);
  assert.match(server, /request\.url\.startsWith\("\/api\/profile"\)/);
  assert.match(gitignore, /data\/runtime\//);
});

test("nursery icons keep the sprout inside its pixel frame", () => {
  const buttonIcon = styles.match(/\.pixel-icon--nursery::after \{([\s\S]*?)\n\}/)?.[1] || "";
  const dropIcon = styles.match(/\.nursery-drop-icon \{([\s\S]*?)\n\}/)?.[1] || "";

  assert.match(buttonIcon, /top:\s*9%/);
  assert.match(buttonIcon, /width:\s*1\.92rem/);
  assert.match(buttonIcon, /height:\s*1\.92rem/);
  assert.match(dropIcon, /center \/ 88% auto no-repeat/);
  assert.doesNotMatch(dropIcon, /box-shadow:\s*inset 0 -0\.45rem/);
});

test("atlas starts with one sprig and uses a paged national atlas model", () => {
  assert.match(html, /id="nameScreen"/);
  assert.match(html, /id="landingTitle"/);
  assert.match(html, /id="atlasLockedGrid"/);
  assert.match(html, /id="atlasPrevPage"/);
  assert.match(html, /id="atlasNextPage"/);
  assert.doesNotMatch(html, />\s*1\s*\/\s*31142\s*</);
  assert.doesNotMatch(html, /等待解锁（31141）/);
  assert.match(script, /NATIONAL_ATLAS_COUNT = 31142/);
  assert.match(script, /ATLAS_LOCKED_PAGE_SIZE = 12/);
  assert.match(script, /const atlasMilestones/);
  assert.match(script, /function getAtlasMilestone/);
  assert.match(script, /getAtlasGrowthProgress/);
  assert.match(script, /图鉴经验 Lv\./);
  assert.doesNotMatch(script, /下一枚图鉴徽章/);
  assert.match(script, /scaleLabel:\s*"30000\+"/);
  assert.match(script, /icon:\s*"≈"/);
  assert.match(script, /description:\s*"按地方气候、山海水土和城市环境归类。"/);
  assert.doesNotMatch(script, /这一栏还没有认识的种种。/);
  assert.match(script, /Flora of China Checklist/);
  assert.doesNotMatch(script, /剪影档案/);
  assert.match(script, /待发现/);
  assert.match(script, /function getAtlasTotalCount/);
  assert.match(script, /function createVirtualAtlasEntry/);
  assert.match(script, /function createAtlasStoryBook/);
  assert.match(script, /atlasStoryIndex/);
  assert.match(script, /unlockedSprigs: new Set\(\["plantain"\]\)/);
  assert.match(script, /renderAtlas/);
  assert.match(script, /syncGardenSprigs/);
  assert.match(styles, /\.name-screen/);
  assert.match(styles, /\.atlas-book-layout/);
  assert.match(styles, /\.atlas-bookmarks button\[data-atlas-tone="aquatic"\]/);
  assert.match(styles, /\.atlas-storybook/);
  assert.match(styles, /\.atlas-page-corner/);
  assert.match(styles, /\.atlas-page-controls/);
  assert.match(styles, /\.locked-grid/);
  const bookmarkButtonStyle = styles.match(/\.atlas-bookmarks button\s*\{[\s\S]*?\n\}/)?.[0] || "";
  const bookmarkActiveStyle = styles.match(/\.atlas-bookmarks button\.is-active\s*\{[\s\S]*?\n\}/)?.[0] || "";
  assert.doesNotMatch(bookmarkButtonStyle, /linear-gradient/);
  assert.match(bookmarkButtonStyle, /box-shadow:\s*none/);
  assert.doesNotMatch(bookmarkActiveStyle, /linear-gradient|transform:\s*translate|filter:\s*saturate/);
  assert.match(bookmarkActiveStyle, /box-shadow:\s*none/);
});

test("nursery presents a seed greenhouse drop zone instead of a giant seed icon", () => {
  assert.match(html, /种子温室/);
  assert.doesNotMatch(html, /种子培育室/);
  assert.match(html, /class="nursery-drop-icon"/);
  assert.doesNotMatch(html, /<div class="nursery-drop" id="nurseryDropZone">\s*<img src="\.\/assets\/ui\/seed\.png"/);
  assert.match(script, /温室槽/);
  assert.match(styles, /\.nursery-drop-icon::before/);
  assert.match(styles, /\.nursery-drop-icon::after/);
});

test("expedition loot is settled before entering the local collection", () => {
  assert.match(html, /id="specialtyReward"/);
  assert.match(html, /id="specialtyRewardList"/);
  assert.match(html, /id="specialtyRewardButton"[\s\S]*收进背包/);
  assert.match(html, /◇ 风物集合/);
  assert.match(script, /pendingSpecialties/);
  assert.match(script, /function showSpecialtyReward/);
  assert.match(script, /function collectSpecialtyReward/);
  assert.match(script, /function archiveSpecialties/);
  assert.match(script, /showSpecialtyReward\(loot,\s*selected\)/);
  assert.doesNotMatch(script, /state\.specialties\s*=\s*sortSpecialties\(\[\.\.\.loot,\s*\.\.\.state\.specialties\]\)/);
  assert.match(styles, /\.specialty-reward-list/);
  assert.match(styles, /\.specialty-card--locked/);
});

test("bottom navigation remains usable above full-screen panels", () => {
  assert.match(styles, /\.dock\s*\{[\s\S]*?z-index:\s*55/);
  assert.match(styles, /\.sprig-info-card\s*\{[\s\S]*?z-index:\s*58/);
  assert.match(styles, /\.panel--atlas\s*\{[\s\S]*?calc\(clamp\(3\.8rem,\s*8vw,\s*6\.5rem\)\s*\+\s*4\.1rem\)/);
  assert.match(styles, /\.panel--atlas\s*\{[\s\S]*?padding:\s*1\.1rem 0\.92rem 8\.6rem/);
});
