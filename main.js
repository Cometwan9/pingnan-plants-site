const panels = document.querySelectorAll(".panel");
const dockNavButtons = document.querySelectorAll(".dock button");
const knowledgePop = document.querySelector("#knowledgePop");
const sprigInfoCard = document.querySelector("#sprigInfoCard");
const infoImage = document.querySelector("#infoImage");
const infoName = document.querySelector("#infoName");
const infoMeta = document.querySelector("#infoMeta");
const nameScreen = document.querySelector("#nameScreen");
const nameForm = document.querySelector("#nameForm");
const gardenNameInput = document.querySelector("#gardenNameInput");
const regionSelect = document.querySelector("#regionSelect");
const citySelect = document.querySelector("#citySelect");
const languageSelect = document.querySelector("#languageSelect");
const birthdayInput = document.querySelector("#birthdayInput");
const birthdayYearColumn = document.querySelector("#birthdayYearColumn");
const birthdayMonthColumn = document.querySelector("#birthdayMonthColumn");
const birthdayDayColumn = document.querySelector("#birthdayDayColumn");
const setupSteps = document.querySelectorAll(".setup-step");
const setupPrev = document.querySelector("#setupPrev");
const setupNext = document.querySelector("#setupNext");
const setupSubmit = document.querySelector("#setupSubmit");
const locateOnboardingButton = document.querySelector("#locateOnboardingButton");
const locationPermissionStatus = document.querySelector("#locationPermissionStatus");
const bootLoading = document.querySelector("#bootLoading");
const bootLoadingText = document.querySelector("#bootLoadingText");
const bootProgressBar = document.querySelector("#bootProgressBar");
const starterReveal = document.querySelector("#starterReveal");
const starterRevealStage = document.querySelector("#starterRevealStage");
const starterLightButton = document.querySelector("#starterLightButton");
const starterRevealImage = document.querySelector("#starterRevealImage");
const starterRevealKicker = document.querySelector("#starterRevealKicker");
const starterRevealName = document.querySelector("#starterRevealName");
const starterRevealText = document.querySelector("#starterRevealText");
const starterAcceptButton = document.querySelector("#starterAcceptButton");
const hatchReward = document.querySelector("#hatchReward");
const hatchRewardTitle = document.querySelector("#hatchRewardTitle");
const hatchRewardImage = document.querySelector("#hatchRewardImage");
const hatchRewardText = document.querySelector("#hatchRewardText");
const hatchRewardButton = document.querySelector("#hatchRewardButton");
const specialtyReward = document.querySelector("#specialtyReward");
const specialtyRewardTitle = document.querySelector("#specialtyRewardTitle");
const specialtyRewardList = document.querySelector("#specialtyRewardList");
const specialtyRewardText = document.querySelector("#specialtyRewardText");
const specialtyRewardButton = document.querySelector("#specialtyRewardButton");
const loginScreen = document.querySelector("#loginScreen");
const loginForm = document.querySelector("#loginForm");
const landingTitle = document.querySelector("#landingTitle");
const photoButton = document.querySelector("#photoButton");
const gardenStage = document.querySelector("#gardenStage");
const hudName = document.querySelector("#hudName");
const hudLocation = document.querySelector("#hudLocation");
const captureButton = document.querySelector("#captureButton");
const captureText = document.querySelector("#captureText");
const scanInput = document.querySelector("#scanInput");
const scanResultText = document.querySelector("#scanResultText");
const scanRecordList = document.querySelector("#scanRecordList");
const uploadScanButton = document.querySelector("#uploadScanButton");
const arCamera = document.querySelector("#arCamera");
const arCanvas = document.querySelector("#arCanvas");
const discoverTitle = document.querySelector("#discoverTitle");
const arTarget = document.querySelector("#arTarget");
const mapDots = document.querySelector("#mapDots");
const mapResults = document.querySelector("#mapResults");
const mapStatus = document.querySelector("#mapStatus");
const mapTitle = document.querySelector("#mapTitle");
const discoverFromMap = document.querySelector("#discoverFromMap");
const mapPlantScanButton = document.querySelector("#mapPlantScanButton");
const dandelionSprig = document.querySelector('[data-sprig="dandelion"]');
const atlasProgress = document.querySelector("#atlasProgress");
const atlasProgressBar = document.querySelector("#atlasProgressBar");
const atlasRewardButton = document.querySelector("#atlasRewardButton");
const atlasRewardButtonText = document.querySelector("#atlasRewardButtonText");
const atlasRewardPopover = document.querySelector("#atlasRewardPopover");
const atlasRewardTitle = document.querySelector("#atlasRewardTitle");
const atlasRewardText = document.querySelector("#atlasRewardText");
const atlasRewardList = document.querySelector("#atlasRewardList");
const atlasDexCount = document.querySelector("#atlasDexCount");
const atlasDexGrid = document.querySelector("#atlasDexGrid");
const atlasDexDetail = document.querySelector("#atlasDexDetail");
const atlasDexDetailBackdrop = document.querySelector("#atlasDexDetailBackdrop");
const atlasDexDetailClose = document.querySelector("#atlasDexDetailClose");
const atlasDexDetailDismiss = document.querySelector("#atlasDexDetailDismiss");
const atlasDexDetailGarden = document.querySelector("#atlasDexDetailGarden");
const atlasDexDetailImage = document.querySelector("#atlasDexDetailImage");
const atlasDexDetailKicker = document.querySelector("#atlasDexDetailKicker");
const atlasDexDetailName = document.querySelector("#atlasDexDetailName");
const atlasDexDetailPlace = document.querySelector("#atlasDexDetailPlace");
const atlasDexDetailWeather = document.querySelector("#atlasDexDetailWeather");
const atlasDexDetailStatus = document.querySelector("#atlasDexDetailStatus");
const atlasDexDetailBlurb = document.querySelector("#atlasDexDetailBlurb");
const atlasPrevPage = document.querySelector("#atlasPrevPage");
const atlasNextPage = document.querySelector("#atlasNextPage");
const atlasPageLabel = document.querySelector("#atlasPageLabel");
const captureTask = document.querySelector("#captureTask");
const dispatchTask = document.querySelector("#dispatchTask");
const atlasTask = document.querySelector("#atlasTask");
const dispatchButton = document.querySelector("#dispatchButton");
const questDispatchButton = document.querySelector("#questDispatchButton");
const questClaimButtons = document.querySelectorAll(".quest-claim");
const durationButtons = document.querySelectorAll("[data-duration]");
const expeditionPlanText = document.querySelector("#expeditionPlanText");
const expeditionText = document.querySelector("#expeditionText");
const expeditionLoot = document.querySelector("#expeditionLoot");
const expeditionSquad = document.querySelector("#expeditionSquad");
const squadPicker = document.querySelector("#squadPicker");
const expeditionTitle = document.querySelector("#expeditionTitle");
const expeditionTimer = document.querySelector("#expeditionTimer");
const mapPackPicker = document.querySelector("#mapPackPicker");
const goalCount = document.querySelector("#goalCount");
const dailyCheckinModal = document.querySelector("#dailyCheckinModal");
const dailyCheckinModalButton = document.querySelector("#dailyCheckinModalButton");
const dailyCheckinClose = document.querySelector("#dailyCheckinClose");
const dailyCheckinReward = document.querySelector("#dailyCheckinReward");
const seedPill = document.querySelector("#seedPill");
const seedValue = document.querySelector("#seedValue");
const levelValue = document.querySelector("#levelValue");
const staminaValue = document.querySelector("#staminaValue");
const staminaBar = document.querySelector("#staminaBar");
const weatherPill = document.querySelector("#weatherPill");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherValue = document.querySelector("#weatherValue");
const weatherCanvas = document.querySelector("#weatherCanvas");
const expeditionStaminaValue = document.querySelector("#expeditionStaminaValue");
const expeditionStaminaBar = document.querySelector("#expeditionStaminaBar");
const gameClock = document.querySelector("#gameClock");
const guideButton = document.querySelector("#guideButton");
const guideLayer = document.querySelector("#guideLayer");
const guideHighlight = document.querySelector("#guideHighlight");
const guideCursor = document.querySelector("#guideCursor");
const guideCard = document.querySelector("#guideCard");
const guideMascotFrame = document.querySelector("#guideMascotFrame");
const guideMascot = document.querySelector("#guideMascot");
const guideStepLabel = document.querySelector("#guideStepLabel");
const guideSpeaker = document.querySelector("#guideSpeaker");
const guideTitle = document.querySelector("#guideTitle");
const guideText = document.querySelector("#guideText");
const guideMeter = document.querySelector("#guideMeter");
const guideSkip = document.querySelector("#guideSkip");
const guidePrev = document.querySelector("#guidePrev");
const guideNext = document.querySelector("#guideNext");
const featureTip = document.querySelector("#featureTip");
const identityName = document.querySelector("#identityName");
const identityTabButtons = document.querySelectorAll("[data-identity-tab]");
const identityTabs = document.querySelector(".identity-tabs");
const identityPages = document.querySelectorAll("[data-identity-page]");
const editIdentityName = document.querySelector("#editIdentityName");
const editIdentityNameQuick = document.querySelector("#editIdentityNameQuick");
const identityNameEditor = document.querySelector("#identityNameEditor");
const identityNameInput = document.querySelector("#identityNameInput");
const saveIdentityName = document.querySelector("#saveIdentityName");
const editIdentityBio = document.querySelector("#editIdentityBio");
const identityBioEditor = document.querySelector("#identityBioEditor");
const identityBioInput = document.querySelector("#identityBioInput");
const saveIdentityBio = document.querySelector("#saveIdentityBio");
const shareIdentityCard = document.querySelector("#shareIdentityCard");
const passportCard = document.querySelector("#passportCard");
const passportShareCard = document.querySelector("#passportShareCard");
const closePassportShare = document.querySelector("#closePassportShare");
const identityPassportId = document.querySelector("#identityPassportId");
const passportShareName = document.querySelector("#passportShareName");
const passportShareId = document.querySelector("#passportShareId");
const passportShareRegion = document.querySelector("#passportShareRegion");
const passportStampImage = document.querySelector("#passportStampImage");
const identityGardenName = document.querySelector("#identityGardenName");
const identityBirthday = document.querySelector("#identityBirthday");
const identityLocation = document.querySelector("#identityLocation");
const identityHouse = document.querySelector("#identityHouse");
const identityPassportStage = document.querySelector("#identityPassportStage");
const identityHouseText = document.querySelector("#identityHouseText");
const identityBio = document.querySelector("#identityBio");
const identityWorldLine = document.querySelector("#identityWorldLine");
const identityStory = document.querySelector("#identityStory");
const identityAtlasCount = document.querySelector("#identityAtlasCount");
const identityAtlasText = document.querySelector("#identityAtlasText");
const identityAtlasBar = document.querySelector("#identityAtlasBar");
const identityFriendList = document.querySelector("#identityFriendList");
const identityAtlasGrid = document.querySelector("#identityAtlasGrid");
const specialtyShelf = document.querySelector("#specialtyShelf");
const landformRegionList = document.querySelector("#landformRegionList");
const landformPrev = document.querySelector("#landformPrev");
const landformNext = document.querySelector("#landformNext");
const specialtyBagTitle = document.querySelector("#specialtyBagTitle");
const identitySeedCount = document.querySelector("#identitySeedCount");
const identityNurseryStatus = document.querySelector("#identityNurseryStatus");
const nurseryDropZone = document.querySelector("#nurseryDropZone");
const growSeedButton = document.querySelector("#growSeedButton");
const nurseryResult = document.querySelector("#nurseryResult");

const MAX_STAMINA = 30;
const TICK_MS = 1000;
const WEATHER_REFRESH_MS = 10 * 60 * 1000;
const GUIDE_SEEN_KEY = "sprigGardenGuideSeen";
const PROFILE_KEY = "sprigGardenProfile";
const PLAYER_ID_KEY = "sprigGardenPlayerId";
const CHECKIN_PROMPT_KEY = "sprigDailyPromptDate";
const NATIONAL_ATLAS_COUNT = 31142;
const ATLAS_DEX_PAGE_SIZE = 9;
const ATLAS_MODEL_SOURCE = "Flora of China Checklist";
const BOOT_LOADING_MS = 6200;
const BOOT_LOADING_LINE_MS = 2800;
const BIRTHDAY_START_YEAR = 1940;
const BIRTHDAY_END_YEAR = new Date().getFullYear();
const BIRTHDAY_ROW_HEIGHT = 68;

function resetLocalGardenProgressFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("reset")) return;

  [
    GUIDE_SEEN_KEY,
    PROFILE_KEY,
    PLAYER_ID_KEY,
    CHECKIN_PROMPT_KEY,
    "sprigDailyStreak",
    "sprigLastDailyCheckin",
    "sprigExpeditionEndAt",
    "sprigExpeditionDuration",
    "sprigNurserySprigId",
    "sprigNurseryStartAt",
    "sprigNurseryEndAt",
  ].forEach((key) => localStorage.removeItem(key));

  params.delete("reset");
  const cleanSearch = params.toString();
  const cleanUrl = `${window.location.pathname}${cleanSearch ? `?${cleanSearch}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", cleanUrl);
}

resetLocalGardenProgressFromUrl();

const AMAP_DEFAULT_CONFIG = {
  key: "",
  securityJsCode: "",
  city: "350923",
  radius: 3200,
  fallbackCenter: [118.987, 26.91],
  keywords: ["公园", "茶园", "森林", "风景名胜", "植物"],
};

const AMAP_CONFIG = {
  ...AMAP_DEFAULT_CONFIG,
  ...(window.SPRIG_AMAP_CONFIG || {}),
};

let amapLoaderPromise = null;
let amapPromise = null;
let arStream = null;
let weatherAnimationFrame = null;
let weatherParticles = [];
let weatherScene = "calm";
let weatherCanvasSize = { width: 0, height: 0, ratio: 1 };
const sprigAnimationCooldown = new Map();

const mapPacks = window.SPRIG_MAP_PACKS || [];
const mapPackUtils = window.SPRIG_MAP_PACK_UTILS || {};
const findNearestMapPack = mapPackUtils.findNearestMapPack || (() => ({ status: "unknown", mapPack: null }));
const generateSprigFromLocation =
  mapPackUtils.generateSprigFromLocation ||
  (() => ({
    temporary: true,
    sprig: {
      id: "unknown-location",
      name: "未知种种",
      plant: "未知植物线索",
      rarity: "临时发现",
      region: "未知花园",
      status: "等待记录",
      image: "./assets/ui/seed.png",
      hint: "你附近还没有完整地图包。",
      aliases: [],
      personality: "刚醒、认生、等园丁记录",
      npcRole: "未知花园的新住民",
      speechStyle: "短句，像从种子壳里探头",
      voiceLines: ["我还没有名字。园丁，先记下这里的风吧。"],
      knowledge: ["这只临时种种还在等真实记录。"],
    },
  }));
const pingnanMapPack = mapPacks.find((pack) => pack.id === "pingnan") || { sprigs: [], locations: [] };
let activeMapPack = pingnanMapPack;
let atlasEntries = activeMapPack.sprigs || [];
let sprigs = Object.fromEntries(atlasEntries.map((entry) => [entry.id, entry]));
let sprigIds = Object.keys(sprigs);
let atlasEntryById = Object.fromEntries(atlasEntries.map((entry) => [entry.id, entry]));
let currentLockedAtlasPage = []; // kept for legacy test hooks; dex grid no longer uses this buffer
let currentLandformIndex = 0;

function getPlayerId() {
  const existing = localStorage.getItem(PLAYER_ID_KEY);
  if (existing) return existing;
  const generated = `sprig-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  localStorage.setItem(PLAYER_ID_KEY, generated);
  return generated;
}

const state = {
  playerId: getPlayerId(),
  unlockedSprigs: new Set(["plantain"]),
  gardenSprigs: new Set(["plantain"]),
  expeditionSquadIds: ["plantain"],
  squadPickerSlot: 0,
  dispatched: false,
  expeditionDuration: "30m",
  expeditionRemainingSeconds: 0,
  expeditionEndAt: Number(localStorage.getItem("sprigExpeditionEndAt") || 0),
  explorationReady: false,
  explorationMode: "unresolved",
  currentMapPack: null,
  userLocation: null,
  generatedSprig: null,
  locationError: "",
  lastTickAt: Date.now(),
  seeds: 10,
  stamina: MAX_STAMINA,
  levelProgress: 0,
  completedTasks: new Set(),
  gardenName: "种种大世界",
  discoverySprigId: "plantain",
  selectedMapPoi: null,
  lastScan: null,
  firstLoginAt: "",
  lastLoginAt: "",
  loginCount: 0,
  scanRecords: [],
  specialties: [],
  pendingSpecialties: [],
  dailyStreak: Number(localStorage.getItem("sprigDailyStreak") || 0),
  lastDailyCheckin: localStorage.getItem("sprigLastDailyCheckin") || "",
  atlasCategory: "pingnan",
  atlasStoryIndex: 0,
  atlasPage: 0,
  atlasSelectedId: null,
  atlasSelectedLocked: null,
  claimedAtlasLevels: new Set(),
  mapPois: [],
  currentWeather: {
    label: "读取中",
    scene: "calm",
    temperature: null,
    source: "",
    observedAt: "",
  },
  sprigAnimationTasks: {},
  onboarding: {
    region: "浙江省",
    province: "浙江省",
    city: "杭州市",
    language: "zh-CN",
    birthday: "",
    terrain: "丘陵水乡",
    house: "青瓦小楼",
    located: false,
  },
  user: {
    name: "花园观察员",
    avatar: "园",
    location: "种种大世界",
    bio: "",
  },
  knowledgeIndexes: {},
  touchTimers: {},
  guideStep: 0,
  guidePrimed: false,
  guideObserving: false,
  guideObservationReady: false,
  guideTypingTimer: null,
  guideTransitionTimer: null,
  guideTransitioning: false,
  guideStartedManually: false,
  checkinAfterGuide: false,
  nurserySprigId: localStorage.getItem("sprigNurserySprigId") || "",
  nurseryStartedAt: Number(localStorage.getItem("sprigNurseryStartAt") || 0),
  nurseryEndAt: Number(localStorage.getItem("sprigNurseryEndAt") || 0),
};

const GUIDE_EXIT_MS = 180;
const GUIDE_ENTER_MS = 420;
const GUIDE_ADVANCE_MS = 1500;
const NURSERY_HATCH_MS = 10 * 60 * 1000;
const NURSERY_END_KEY = "sprigNurseryEndAt";
const NURSERY_ID_KEY = "sprigNurserySprigId";
const NURSERY_START_KEY = "sprigNurseryStartAt";

const scanRarityTiers = [
  { id: "common", label: "常见", tone: "common", threshold: 58, seeds: 3, xp: 24 },
  { id: "uncommon", label: "少见", tone: "uncommon", threshold: 78, seeds: 5, xp: 36 },
  { id: "rare", label: "稀有", tone: "rare", threshold: 93, seeds: 8, xp: 58 },
  { id: "epic", label: "珍稀", tone: "epic", threshold: 99, seeds: 12, xp: 86 },
  { id: "seasonal", label: "节令", tone: "seasonal", threshold: 101, seeds: 16, xp: 120 },
];

const sprigBehaviorProfiles = [
  {
    id: "reading",
    label: "翻叶书",
    mood: "focused",
    weather: ["calm", "cloud", "mist"],
    line: "这一页有一点潮气，正好压进书里。",
    prompt: "坐在小叶垫上看一本植物图册，偶尔抬头眨眼，叶片轻轻翻动",
  },
  {
    id: "sleeping",
    label: "打盹",
    mood: "sleepy",
    weather: ["calm", "cloud", "mist", "snow"],
    line: "嘘，我把梦晒在叶背上。",
    prompt: "抱着小种子打盹，呼吸起伏很轻，头顶冒出小小睡意泡泡",
  },
  {
    id: "singing",
    label: "哼歌",
    mood: "happy",
    weather: ["calm", "cloud"],
    line: "啦，小路今天有回声。",
    prompt: "站在花园小径上哼歌，身体轻轻晃，旁边冒出几颗像素音符",
  },
  {
    id: "playing",
    label: "结伴玩",
    mood: "happy",
    weather: ["calm", "cloud"],
    line: "我们绕着石头跑一圈，很快就回来。",
    prompt: "和另一只植物小精灵轻轻碰叶、绕着小石头玩，表现友好的互动关系",
  },
  {
    id: "rain",
    label: "听雨",
    mood: "rainy",
    weather: ["rain", "storm"],
    line: "雨点敲在叶尖上，我听得见。",
    prompt: "下雨天躲在大叶子下面听雨，叶片接住雨点，表情安静又有点认真",
  },
  {
    id: "grumpy",
    label: "闹别扭",
    mood: "grumpy",
    weather: ["storm", "rain"],
    line: "鞋底都是泥，我先不想出门。",
    prompt: "雨后有点闹别扭，抱着叶子鼓脸，脚边有小水洼",
  },
  {
    id: "snow",
    label: "看雪",
    mood: "curious",
    weather: ["snow"],
    line: "白白的风落下来了。",
    prompt: "在细雪里抬头看天空，叶尖接住雪粒，动作慢而温柔",
  },
];

const birthdaySeasonSprigs = [
  { months: [1, 12], id: "huangjing", term: "冬藏节令", line: "蓝铃花在冬土边轻轻响了一下，把第一盏小灯递给你。", greeting: "我听见你的生日落在冷一点的土里。别急，我会替你把小光藏好。" },
  { months: [2, 9], id: "fern", term: "雨水白露", line: "蕨芽带着湿润的卷叶，慢慢翻开你的第一页。", greeting: "你来得刚好，我这片叶子还没完全展开。今天先把第一页留给你。" },
  { months: [3, 11], id: "clover", term: "春分立冬", line: "三叶草把一枚小小好运夹进了你的生日页。", greeting: "我数过啦，今天的好运有路线，刚好绕到你这里来。" },
  { months: [4, 10], id: "tea", term: "清明寒露", line: "豌豆种种从花盆边探头，把圆滚滚的消息带进来。", greeting: "咕噜。我从花盆边滚过来，带了一句热乎乎的生日暗号。" },
  { months: [5], id: "orchid", term: "立夏小满", line: "蝴蝶兰在柔光里轻轻点头，等你把距离放温柔。", greeting: "我不太大声说话。靠近一点，你会看见光落在花瓣上的声音。" },
  { months: [6], id: "fisheye", term: "芒种夏至", line: "苔藓先闻到了热雨，悄悄铺开一小片绿。", greeting: "热雨来过。你的生日在我这里长成了一小块柔软的绿。" },
  { months: [7], id: "dandelion", term: "小暑大暑", line: "蒲蒲从热风里降落，口袋里装满远处的坐标。", greeting: "呼，我刚从风里回来。你的生日坐标很好认，会发亮。" },
  { months: [8], id: "plantain", term: "立秋处暑", line: "铃兰在路边摇了摇小铃，等你把脚步声放进花园。", greeting: "叮。刚才那一下是我在叫你。你的脚步声已经被花园记住了。" },
];

const expeditionDurations = {
  "30m": {
    label: "30分钟",
    cost: 5,
    seconds: 30 * 60,
    reward: "短途采集：植物照片、少量种子、附近花园记录。",
  },
  "2h": {
    label: "2小时",
    cost: 10,
    seconds: 2 * 60 * 60,
    reward: "地方巡游：附近故事、装饰线索、植物照片。",
  },
  "8h": {
    label: "8小时",
    cost: 20,
    seconds: 8 * 60 * 60,
    reward: "深度探查：稀有种子、地方故事、限定装饰。",
  },
  "24h": {
    label: "24小时",
    cost: 30,
    seconds: 24 * 60 * 60,
    reward: "远行探险：高概率带回稀有种种和完整地方传闻。",
  },
};

const guideSteps = [
  {
    selector: "#profileButton",
    sprigId: "plantain",
    speaker: "铃兰种种 · 路边小向导",
    mascot: sprigs.plantain.image,
    title: "花园醒了",
    text: "先看看你的护照。",
    action: "轻触身份卡",
    expression: "curious",
    motion: "nod",
    observeSelector: "#panel-identity",
    observeClass: "guide-scroll-glow",
    pauseAfter: 2200,
  },
  {
    selector: ".sprig--plantain",
    sprigId: "plantain",
    speaker: "铃兰种种 · 路边小向导",
    mascot: sprigs.plantain.image,
    title: "叶尖动了",
    text: "点一下，它会小声说话。",
    action: "叫醒它",
    expression: "happy",
    motion: "leaf-wave",
    pauseAfter: 1700,
  },
  {
    selector: '.dock [data-panel="panel-identity"]',
    sprigId: "fern",
    speaker: "蕨芽种种 · 慢半拍的档案员",
    mascot: sprigs.fern.image,
    title: "背包在这里",
    text: "护照、图鉴、风物都收在这本册子里。",
    action: "打开背包",
    expression: "focused",
    motion: "peek",
    observeSelector: "#panel-identity",
    observeClass: "guide-scroll-glow",
    pauseAfter: 2400,
  },
  {
    selector: '.dock [data-panel="panel-map"]',
    sprigId: "dandelion",
    speaker: "蒲公英种种 · 顺风信使",
    mascot: sprigs.dandelion.image,
    title: "地图会听风",
    text: "看看附近有没有花园。",
    action: "点地图",
    expression: "bright",
    motion: "sway",
  },
  {
    selector: "#mapPlantScanButton",
    panel: "panel-map",
    sprigId: "dandelion",
    speaker: "蒲公英种种 · 顺风信使",
    mascot: sprigs.dandelion.image,
    title: "试试扫描",
    text: "有植物就拍。没在户外，也可以上传照片。",
    action: "点扫描植物",
    expression: "bright",
    motion: "sway",
    observeSelector: "#captureButton",
    pauseAfter: 1800,
  },
  {
    selector: "#captureButton",
    panel: "panel-discover",
    sprigId: "dandelion",
    speaker: "蒲公英种种 · 顺风信使",
    mascot: sprigs.dandelion.image,
    title: "对准叶子",
    text: "点一下试拍。不方便取景，就用照片。",
    action: "试着识别",
    expression: "bright",
    motion: "sway",
    observeSelector: "#uploadScanButton",
    pauseAfter: 2600,
  },
  {
    selector: ".garden-action-button--expedition",
    sprigId: "tea",
    speaker: "豌豆种种 · 山路茶馆老板",
    mascot: sprigs.tea.image,
    title: "出门看看",
    text: "小包袱准备好了。",
    action: "打开探险袋",
    expression: "ready",
    motion: "step",
    observeSelector: "#dispatchButton",
    pauseAfter: 1700,
  },
  {
    selector: "#dispatchButton",
    panel: "panel-expedition",
    sprigId: "fisheye",
    speaker: "苔藓种种 · 嘴硬的路队长",
    mascot: sprigs.fisheye.image,
    title: "派一小队",
    text: "先走短路，带回风物。",
    action: "开始探险",
    expression: "thinking",
    motion: "tilt",
    pauseAfter: 2600,
  },
  {
    selector: ".garden-action-button--nursery",
    sprigId: "clover",
    speaker: "三叶草种种 · 好运保管员",
    mascot: sprigs.clover.image,
    title: "种子睡这里",
    text: "把种子拖进温室，慢慢发芽。",
    action: "打开温室",
    expression: "happy",
    motion: "bounce",
    observeSelector: "#nurseryDropZone",
    observeClass: "is-dragging",
    pauseAfter: 2200,
  },
];

const chinaRegions = [
  { province: "北京市", cities: ["北京市"], terrain: "北方平原", house: "胡同小院" },
  { province: "天津市", cities: ["天津市"], terrain: "海河平原", house: "海河小楼" },
  { province: "河北省", cities: ["石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"], terrain: "燕赵平原", house: "灰瓦院落" },
  { province: "山西省", cities: ["太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市"], terrain: "黄土台地", house: "窑洞院落" },
  { province: "内蒙古自治区", cities: ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市"], terrain: "草原丘陵", house: "草原木屋" },
  { province: "辽宁省", cities: ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"], terrain: "辽河平原", house: "红砖小屋" },
  { province: "吉林省", cities: ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市"], terrain: "松林雪原", house: "松木屋" },
  { province: "黑龙江省", cities: ["哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市"], terrain: "寒地森林", house: "雪顶木屋" },
  { province: "上海市", cities: ["上海市"], terrain: "江海湿地", house: "石库门小屋" },
  { province: "江苏省", cities: ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"], terrain: "江南水网", house: "白墙水院" },
  { province: "浙江省", cities: ["杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市"], terrain: "丘陵水乡", house: "青瓦小楼" },
  { province: "安徽省", cities: ["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "六安市", "亳州市", "池州市", "宣城市"], terrain: "徽州山水", house: "马头墙小院" },
  { province: "福建省", cities: ["福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"], terrain: "闽东山海", house: "土墙木屋" },
  { province: "江西省", cities: ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市"], terrain: "赣鄱丘陵", house: "红土院落" },
  { province: "山东省", cities: ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "临沂市", "德州市", "聊城市", "滨州市", "菏泽市"], terrain: "齐鲁丘原", house: "海风石屋" },
  { province: "河南省", cities: ["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市"], terrain: "中原平原", house: "黄土庭院" },
  { province: "湖北省", cities: ["武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市"], terrain: "江汉湖泽", house: "临湖木屋" },
  { province: "湖南省", cities: ["长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市"], terrain: "湘江丘陵", house: "吊脚小楼" },
  { province: "广东省", cities: ["广州市", "韶关市", "深圳市", "珠海市", "汕头市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"], terrain: "岭南丘陵", house: "骑楼花屋" },
  { province: "广西壮族自治区", cities: ["南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"], terrain: "喀斯特山地", house: "竹廊小屋" },
  { province: "海南省", cities: ["海口市", "三亚市", "三沙市", "儋州市"], terrain: "热带海岛", house: "椰影小屋" },
  { province: "重庆市", cities: ["重庆市"], terrain: "山城坡地", house: "坡屋顶小楼" },
  { province: "四川省", cities: ["成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "资阳市"], terrain: "川西盆地", house: "竹影院落" },
  { province: "贵州省", cities: ["贵阳市", "六盘水市", "遵义市", "安顺市", "毕节市", "铜仁市"], terrain: "黔中山地", house: "苗岭木楼" },
  { province: "云南省", cities: ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市"], terrain: "云岭高原", house: "花窗小院" },
  { province: "西藏自治区", cities: ["拉萨市", "日喀则市", "昌都市", "林芝市", "山南市", "那曲市"], terrain: "高原河谷", house: "石墙小屋" },
  { province: "陕西省", cities: ["西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市"], terrain: "秦岭黄土", house: "窑洞花院" },
  { province: "甘肃省", cities: ["兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市"], terrain: "河西山谷", house: "夯土小屋" },
  { province: "青海省", cities: ["西宁市", "海东市"], terrain: "高原草甸", house: "牧野小屋" },
  { province: "宁夏回族自治区", cities: ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"], terrain: "塞上绿洲", house: "绿洲院落" },
  { province: "新疆维吾尔自治区", cities: ["乌鲁木齐市", "克拉玛依市", "吐鲁番市", "哈密市"], terrain: "绿洲戈壁", house: "葡萄架小院" },
  { province: "香港特别行政区", cities: ["香港特别行政区"], terrain: "港岛山海", house: "海风小楼" },
  { province: "澳门特别行政区", cities: ["澳门特别行政区"], terrain: "海岸街巷", house: "花砖小屋" },
  { province: "台湾省", cities: ["台北市", "新北市", "桃园市", "台中市", "台南市", "高雄市"], terrain: "岛屿山海", house: "海岛花屋" },
];

const onboardingCityCenters = [
  { province: "福建省", city: "宁德市", lng: 119.5479, lat: 26.6664, adcode: "350900" },
  { province: "浙江省", city: "杭州市", lng: 120.1551, lat: 30.2741, adcode: "330100" },
  { province: "北京市", city: "北京市", lng: 116.4074, lat: 39.9042, adcode: "110000" },
  { province: "上海市", city: "上海市", lng: 121.4737, lat: 31.2304, adcode: "310000" },
  { province: "广东省", city: "广州市", lng: 113.2644, lat: 23.1291, adcode: "440100" },
  { province: "广东省", city: "深圳市", lng: 114.0579, lat: 22.5431, adcode: "440300" },
  { province: "四川省", city: "成都市", lng: 104.0665, lat: 30.5728, adcode: "510100" },
  { province: "湖北省", city: "武汉市", lng: 114.3054, lat: 30.5931, adcode: "420100" },
  { province: "江苏省", city: "南京市", lng: 118.7969, lat: 32.0603, adcode: "320100" },
  { province: "陕西省", city: "西安市", lng: 108.9398, lat: 34.3416, adcode: "610100" },
  { province: "重庆市", city: "重庆市", lng: 106.5516, lat: 29.563, adcode: "500000" },
  { province: "山东省", city: "青岛市", lng: 120.3826, lat: 36.0671, adcode: "370200" },
  { province: "云南省", city: "昆明市", lng: 102.8329, lat: 24.8801, adcode: "530100" },
  { province: "海南省", city: "海口市", lng: 110.1999, lat: 20.0442, adcode: "460100" },
];

const localeCopy = {
  "zh-CN": {
    nameTitle: "给花园起名",
    nameText: "门牌要亮起来了。",
    nameLabel: "花园名",
    languageLabel: "语言",
    regionTitle: "选择出发地",
    regionText: "种种会记住这片风土。",
    locate: "读取当前位置",
    locateIdle: "也可以手动选择地区。",
    province: "地区 · 省份",
    city: "地级市",
    birthdayTitle: "唤醒生日种子",
    birthdayText: "它会在你的日子发芽。",
    birthday: "生日",
    prev: "上一步",
    next: "下一步",
    submit: "载入花园",
    loadingStart: "花园还在眨眼",
    loadingMid: "天光一点点进来",
    loadingBuild: "小路和屋顶醒来了",
    loadingEnd: "种种听见你来了",
  },
  en: {
    nameTitle: "Name Your Garden",
    nameText: "The gate sign is waking.",
    nameLabel: "Garden Name",
    languageLabel: "Language",
    regionTitle: "Choose a Starting Place",
    regionText: "Sprigs will remember its weather.",
    locate: "Use Current Location",
    locateIdle: "You can also choose manually.",
    province: "Province",
    city: "City",
    birthdayTitle: "Wake the Birthday Seed",
    birthdayText: "It will sprout on your day.",
    birthday: "Sprout Day",
    prev: "Back",
    next: "Next",
    submit: "Load Garden",
    loadingStart: "The garden is blinking awake",
    loadingMid: "Morning light is coming in",
    loadingBuild: "Paths and roofs are waking",
    loadingEnd: "The sprigs heard you arrive",
  },
  "zh-TW": {
    nameTitle: "替花園起名",
    nameText: "門牌要亮起來了。",
    nameLabel: "花園名",
    languageLabel: "語言",
    regionTitle: "選擇出發地",
    regionText: "種種會記住這片風土。",
    locate: "讀取目前位置",
    locateIdle: "也可以手動選擇地區。",
    province: "地區 · 省份",
    city: "地級市",
    birthdayTitle: "喚醒生日種子",
    birthdayText: "它會在你的日子發芽。",
    birthday: "生日",
    prev: "上一步",
    next: "下一步",
    submit: "載入花園",
    loadingStart: "花園正在眨眼醒來",
    loadingMid: "天光慢慢進來",
    loadingBuild: "小路和屋頂醒來了",
    loadingEnd: "種種聽見你來了",
  },
  ja: {
    nameTitle: "庭に名前をつける",
    nameText: "門札が光りはじめます。",
    nameLabel: "庭の名前",
    languageLabel: "言語",
    regionTitle: "出発地を選ぶ",
    regionText: "種々はその風を覚えます。",
    locate: "現在地を使う",
    locateIdle: "手動でも選べます。",
    province: "省",
    city: "市",
    birthdayTitle: "誕生日の種を起こす",
    birthdayText: "あなたの日に芽を出します。",
    birthday: "芽の日",
    prev: "戻る",
    next: "次へ",
    submit: "庭に入る",
    loadingStart: "庭がゆっくり目を開ける",
    loadingMid: "光が少しずつ入る",
    loadingBuild: "道と屋根が目覚める",
    loadingEnd: "種々があなたに気づいた",
  },
};

const specialtyLevels = [
  { level: 1, label: "普通", tone: "common" },
  { level: 2, label: "少见", tone: "uncommon" },
  { level: 3, label: "精良", tone: "fine" },
  { level: 4, label: "稀有", tone: "rare" },
  { level: 5, label: "珍稀", tone: "legend" },
];

const atlasMilestones = [
  { level: 1, count: 5, rewards: { seeds: 3, stamina: 5, badge: "新芽章" } },
  { level: 2, count: 10, rewards: { seeds: 5, stamina: 8, badge: "叶片章" } },
  { level: 3, count: 25, rewards: { seeds: 8, stamina: 10, badge: "花苞章" } },
  { level: 4, count: 50, rewards: { seeds: 12, stamina: 12, badge: "开花章" } },
  { level: 5, count: 100, rewards: { seeds: 18, stamina: 15, badge: "风物章" } },
];

const atlasCategories = [
  {
    id: "pingnan",
    label: "屏南",
    icon: "garden",
    tone: "garden",
    scaleLabel: "151",
    description: "已制作的地方图鉴。",
    empty: "屏南页还没有记录。先去花园或地图里遇见一只种种。",
    modelCount: 151,
    match: () => true,
  },
  {
    id: "hangzhou",
    label: "杭州",
    icon: "region",
    tone: "region",
    scaleLabel: "100",
    description: "正在生长中的城市图鉴。",
    empty: "杭州页正在长叶。扫描和探险会慢慢点亮它。",
    modelCount: 100,
    match: () => false,
    locked: true,
  },
  {
    id: "huadong",
    label: "华东",
    icon: "land",
    tone: "land",
    scaleLabel: "135",
    description: "山地、水乡和城市缝隙里的种种。",
    empty: "华东页还在等待更多记录。",
    modelCount: 135,
    match: (entry) => (entry.regionScope || []).includes("华东"),
  },
  {
    id: "huanan",
    label: "华南",
    icon: "aquatic",
    tone: "aquatic",
    scaleLabel: "107",
    description: "湿热树影和雨水里生长的种种。",
    empty: "华南页还在等待扫描记录。",
    modelCount: 107,
    match: (entry) => (entry.regionScope || []).includes("华南"),
  },
  {
    id: "xinan",
    label: "西南",
    icon: "pot",
    tone: "pot",
    scaleLabel: "96",
    description: "雾气、坡地和山谷里的种种。",
    empty: "西南页还没有亮起来。",
    modelCount: 96,
    match: (entry) => (entry.regionScope || []).includes("西南"),
  },
  {
    id: "huabei",
    label: "华北",
    icon: "epiphyte",
    tone: "epiphyte",
    scaleLabel: "72",
    description: "平原、季风和路边草坡的种种。",
    empty: "华北页还没有解锁。",
    modelCount: 72,
    match: (entry) => (entry.regionScope || []).includes("华北"),
    locked: true,
  },
];

const atlasModelCompatibility = {
  scaleLabel: "30000+",
  icon: "aquatic",
  id: "garden",
  virtual: "gardens",
  description: "按地方气候、山海水土和城市环境归类。",
};

const atlasKnownProgressCopy = "种种图鉴 · 已认识";

const specialtyPool = [
  { name: "风干种子包", terrain: "北方平原", icon: "seed" },
  { name: "山泉茶芽", terrain: "闽东山海", icon: "tea" },
  { name: "青瓦花签", terrain: "丘陵水乡", icon: "tile" },
  { name: "江南露米", terrain: "江南水网", icon: "rice" },
  { name: "竹影香囊", terrain: "川西盆地", icon: "bamboo" },
  { name: "岭南花砖", terrain: "岭南丘陵", icon: "brick" },
  { name: "海风贝扣", terrain: "热带海岛", icon: "shell" },
  { name: "高原石叶", terrain: "高原河谷", icon: "stone" },
  { name: "绿洲葡萄签", terrain: "绿洲戈壁", icon: "grape" },
  { name: "本地小礼物", terrain: "default", icon: "parcel" },
];

const specialtyIconImages = {
  seed: "./assets/items/seed.png",
  tea: "./assets/items/tea.png",
  tile: "./assets/items/tile.png",
  rice: "./assets/items/rice.png",
  bamboo: "./assets/items/bamboo.png",
  brick: "./assets/items/brick.png",
  shell: "./assets/items/shell.png",
  stone: "./assets/items/stone.png",
  grape: "./assets/items/grape.png",
  parcel: "./assets/items/parcel.png",
};

const landformRegionImages = {
  jiangnan: "./assets/landforms/regions/jiangnan.png",
  mountain: "./assets/landforms/regions/mountain.png",
  northwest: "./assets/landforms/regions/northwest.png",
  coast: "./assets/landforms/regions/coast.png",
  plateau: "./assets/landforms/regions/plateau.png",
  greenhouse: "./assets/landforms/regions/greenhouse.png",
};

const specialtyRegions = [
  {
    id: "jiangnan",
    title: "江南水网",
    shortTitle: "水网",
    cities: "杭州 / 苏州 / 宁波",
    landform: "河埠、湿地、石桥和低丘",
    terrains: ["丘陵水乡", "江南水网"],
  },
  {
    id: "mountain",
    title: "山地林野",
    shortTitle: "山林",
    cities: "宁德 / 成都 / 贵阳",
    landform: "山路、竹林、云雾坡地",
    terrains: ["闽东山海", "川西盆地", "岭南丘陵"],
  },
  {
    id: "northwest",
    title: "平原与绿洲",
    shortTitle: "绿洲",
    cities: "北京 / 西安 / 吐鲁番",
    landform: "田埂、风口、戈壁边缘",
    terrains: ["北方平原", "绿洲戈壁"],
  },
  {
    id: "coast",
    title: "海岸岛屿",
    shortTitle: "海岸",
    cities: "厦门 / 海口 / 三亚",
    landform: "潮线、礁石、海风林带",
    terrains: ["热带海岛"],
  },
  {
    id: "plateau",
    title: "高原河谷",
    shortTitle: "高原",
    cities: "昆明 / 拉萨 / 大理",
    landform: "高原水边、石坡、日照河谷",
    terrains: ["高原河谷", "default"],
  },
];

const futureGardenRegions = [
  { name: "川西高山花园", description: "高山草甸和针叶林边缘的种种还在长叶。", status: "growing" },
  { name: "岭南雨林花园", description: "潮湿树影、藤蔓和墙角会藏着新的种种。", status: "growing" },
  { name: "江南水网花园", description: "河埠、池塘和石桥边的水汽正在发芽。", status: "growing" },
  { name: "西北绿洲花园", description: "风沙和灌丛之间还没有完整图鉴。", status: "locked" },
  { name: "云贵山地花园", description: "坡地、石缝和雾气里的线索等待记录。", status: "locked" },
  { name: "北方平原花园", description: "田埂、路边和季风里的种种还在整理。", status: "locked" },
];


const runtimeLocaleCopy = {
  "zh-CN": {
    identityTitle: "种种背包",
    atlasRelation: "图鉴收集关系",
    specialtyBag: "风物集合",
    carryItems: "携带物品",
    house: "房屋",
    sprigFriends: "种种好友",
    story: "小传",
    edit: "编辑",
    save: "保存",
    expeditionIdle: "读取你所在的花园",
    expeditionButton: "开始探险",
    specialtyEmptyTitle: "风物集合还空着",
    specialtyEmptyText: "探险结束后，带回的风物会归档到这里。",
    defaultUserName: "花园观察员",
    gardenLabel: "花园",
    birthdayLabel: "生日",
    regionLabel: "地区",
    houseLabel: "房屋",
    atlasShort: "图鉴经验",
    knownSprigs: "已认识",
    expeditionLabel: "探险",
  },
  en: {
    identityTitle: "Sprig Pack",
    atlasRelation: "Atlas Links",
    specialtyBag: "Local Souvenirs",
    carryItems: "Items",
    house: "Home",
    sprigFriends: "Sprig Friends",
    story: "Story",
    edit: "Edit",
    save: "Save",
    expeditionIdle: "Reading your garden",
    expeditionButton: "Start Trip",
    specialtyEmptyTitle: "Souvenir Bag Empty",
    specialtyEmptyText: "After a trip, a set of local souvenirs will appear here.",
    defaultUserName: "Garden Keeper",
    gardenLabel: "Garden",
    birthdayLabel: "Birthday",
    regionLabel: "Region",
    houseLabel: "House",
    atlasShort: "Atlas EXP",
    knownSprigs: "Known sprigs",
    expeditionLabel: "Trip",
  },
  "zh-TW": {
    identityTitle: "種種背包",
    atlasRelation: "圖鑑收集關係",
    specialtyBag: "地方特產袋",
    carryItems: "攜帶物品",
    house: "房屋",
    sprigFriends: "種種好友",
    story: "小傳",
    edit: "編輯",
    save: "保存",
    expeditionIdle: "讀取你所在的花園",
    expeditionButton: "開始探險",
    specialtyEmptyTitle: "特產袋還空著",
    specialtyEmptyText: "探險結束後，會依照當地地貌帶回一組特產。",
    defaultUserName: "花園觀察員",
    gardenLabel: "花園",
    birthdayLabel: "生日",
    regionLabel: "地區",
    houseLabel: "房屋",
    atlasShort: "圖鑑經驗",
    knownSprigs: "已認識",
    expeditionLabel: "探險",
  },
  ja: {
    identityTitle: "種々バッグ",
    atlasRelation: "図鑑リンク",
    specialtyBag: "地元のおみやげ",
    carryItems: "持ち物",
    house: "家",
    sprigFriends: "種々の友だち",
    story: "ストーリー",
    edit: "編集",
    save: "保存",
    expeditionIdle: "庭を読み込み中",
    expeditionButton: "探索へ",
    specialtyEmptyTitle: "袋はまだ空っぽ",
    specialtyEmptyText: "探索が終わると、地元のおみやげがまとまって入ります。",
    defaultUserName: "庭の観察員",
    gardenLabel: "庭",
    birthdayLabel: "誕生日",
    regionLabel: "地域",
    houseLabel: "家",
    atlasShort: "図鑑EXP",
    knownSprigs: "知っている種々",
    expeditionLabel: "探索",
  },
};

const featureTips = [
  ["#profileButton", "身份卡"],
  ["#photoButton", "拍张花园照"],
  ["#guideButton", "让种种带路"],
  [".pill--seed", "种子数量"],
  [".stamina-pill", "当前体力"],
  ['.dock [data-panel="panel-identity"]', "背包"],
  ['.dock [data-panel="panel-map"]', "寻找线索"],
  ["#homeButton", "回到花园"],
  [".garden-action-button--expedition", "派出探险"],
  ["#captureButton", "继续识别"],
  ["#discoverFromMap", "去发现"],
  [".map-dot", "探索点"],
  ["#dispatchButton", "出发"],
  [".duration-picker", "选择时长"],
  [".quest-claim", "领取体力"],
];

function openPanel(id, options = {}) {
  const targetId = id === "panel-atlas" ? "panel-identity" : id;
  panels.forEach((panel) => panel.classList.toggle("is-open", panel.id === targetId));
  gardenStage.classList.add("has-open-panel");
  gardenStage.classList.toggle("has-identity-panel", targetId === "panel-identity");
  if (targetId === "panel-identity") {
    const requestedTab = id === "panel-atlas" ? "atlas" : options.identityTab;
    setIdentityTab(requestedTab || "card");
  }
  if (targetId === "panel-expedition") renderMapPackPicker();
  syncDockActive(id);
  knowledgePop.classList.add("is-hidden");
  hideSprigInfo();
  hideFeatureTip();
  if (targetId !== "panel-discover") stopArCamera();
}

function closePanels() {
  panels.forEach((panel) => panel.classList.remove("is-open"));
  gardenStage.classList.remove("has-open-panel");
  gardenStage.classList.remove("has-identity-panel");
  syncDockActive("garden");
  hideFeatureTip();
  stopArCamera();
}

function syncDockActive(activePanelId) {
  dockNavButtons.forEach((button) => {
    const isHome = button.id === "homeButton";
    const isActive = isHome ? activePanelId === "garden" : button.dataset.panel === activePanelId;
    button.classList.toggle("is-active", isActive);
  });
}

function setIdentityTab(tab = "card") {
  const identityPanel = document.querySelector("#panel-identity");
  if (identityPanel) identityPanel.dataset.activeIdentityTab = tab;
  document.querySelectorAll("[data-identity-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.identityTab === tab);
  });
  document.querySelectorAll("[data-identity-page]").forEach((page) => {
    page.classList.toggle("is-hidden", page.dataset.identityPage !== tab);
  });
  if (tab === "atlas") renderAtlas();
  if (tab === "items") renderSpecialtyShelf();
  // Scroll the inner pages surface (panel itself is overflow:hidden on purpose).
  identityPanel?.querySelector("#identityPages")?.scrollTo?.({ top: 0, behavior: "auto" });
  identityPanel?.scrollTo?.({ top: 0, behavior: "auto" });
}

function foldAtlasIntoBackpack() {
  const atlasPanel = document.querySelector("#panel-atlas");
  const identityPanel = document.querySelector("#panel-identity");
  const identityPagesRoot = identityPanel?.querySelector("#identityPages");
  const identityTabs = identityPanel?.querySelector(".identity-tabs");
  if (!atlasPanel || !identityPanel || !identityPagesRoot || !identityTabs || atlasPanel.dataset.foldedIntoBackpack === "1") return;
  atlasPanel.dataset.foldedIntoBackpack = "1";
  atlasPanel.className = "identity-section identity-page identity-atlas-page is-hidden";
  atlasPanel.dataset.identityPage = "atlas";
  atlasPanel.removeAttribute("aria-label");
  atlasPanel.querySelector(".atlas-back")?.remove();
  const atlasMapButton = atlasPanel.querySelector(".atlas-map");
  if (atlasMapButton) {
    atlasMapButton.textContent = "⌖";
    atlasMapButton.setAttribute("aria-label", "去地图探索");
  }
  identityPagesRoot.insertAdjacentElement("beforeend", atlasPanel);
}

function hideSprigInfo() {
  sprigInfoCard.classList.add("is-hidden");
}

function showSprigInfo() {
  sprigInfoCard.classList.remove("is-hidden");
}

function getDefaultSpeakingSprigId() {
  const candidates = [
    state.discoverySprigId,
    getBirthdaySeasonStarter()?.id,
    ...Array.from(state.gardenSprigs || []),
    ...Array.from(state.unlockedSprigs || []),
  ];
  return candidates.find((id) => getSprigButtonById(id) && !getSprigButtonById(id).classList.contains("is-hidden")) || "";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function hasSeenGuide() {
  try {
    return localStorage.getItem(GUIDE_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markGuideSeen() {
  try {
    localStorage.setItem(GUIDE_SEEN_KEY, "1");
  } catch {
    // Local storage can be unavailable in private browsing.
  }
}

function resetGuideSeen() {
  try {
    localStorage.removeItem(GUIDE_SEEN_KEY);
  } catch {
    // Local storage can be unavailable in private browsing.
  }
}

function prepareGuideStep(step) {
  document.querySelectorAll(".guide-scroll-glow, .guide-observe-glow").forEach((element) => {
    element.classList.remove("guide-scroll-glow", "guide-observe-glow", "is-dragging");
  });
  if (step.panel) {
    openPanel(step.panel);
  } else {
    closePanels();
  }
  knowledgePop.classList.add("is-hidden");
  hideFeatureTip();
}

function stopGuideTyping() {
  if (!state.guideTypingTimer) return;
  clearTimeout(state.guideTypingTimer);
  state.guideTypingTimer = null;
}

function stopGuideTransition() {
  if (!state.guideTransitionTimer) return;
  clearTimeout(state.guideTransitionTimer);
  state.guideTransitionTimer = null;
}

function setGuideObservationReady(ready) {
  state.guideObservationReady = ready;
  guideNext.disabled = !ready;
  guideNext.setAttribute("aria-disabled", String(!ready));
  if (ready) {
    guideNext.textContent = state.guideStep >= guideSteps.length - 1 ? "完成" : "继续";
  } else {
    guideNext.textContent = "看一眼";
  }
}

function typeGuideText(text) {
  stopGuideTyping();
  guideText.textContent = "";
  guideText.classList.add("is-typing");

  const chars = Array.from(text);
  let index = 0;
  const tick = () => {
    guideText.textContent = chars.slice(0, index).join("");
    index += 1;

    if (index <= chars.length) {
      state.guideTypingTimer = setTimeout(tick, index < 8 ? 28 : 42);
      return;
    }

    guideText.classList.remove("is-typing");
    state.guideTypingTimer = null;
  };

  tick();
}

function restartGuideMotion() {
  guideLayer.classList.remove("is-stepping");
  guideCard.classList.remove("is-stepping");
  guideCard.classList.remove("is-leaving");
  guideHighlight.classList.remove("is-stepping");
  guideMascotFrame.classList.remove("is-acting");

  requestAnimationFrame(() => {
    guideLayer.classList.add("is-stepping");
    guideCard.classList.add("is-stepping");
    guideHighlight.classList.add("is-stepping");
    guideMascotFrame.classList.add("is-acting");
  });
}

function moveGuideToTarget(selector) {
  let target = document.querySelector(selector);
  if ((!target || target.offsetParent === null) && selector?.startsWith(".sprig--")) {
    target = document.querySelector(".sprig:not(.is-hidden)");
  }
  const stageRect = gardenStage.getBoundingClientRect();
  const stagePadding = 12;

  if (!target || target.offsetParent === null) {
    guideHighlight.classList.add("is-hidden");
    guideCard.style.left = `${stagePadding}px`;
    guideCard.style.top = `${stageRect.height * 0.34}px`;
    return;
  }

  const rect = target.getBoundingClientRect();
  const pad = 8;
  const targetX = rect.left - stageRect.left + rect.width / 2;
  const targetY = rect.top - stageRect.top + rect.height / 2;
  guideHighlight.classList.remove("is-hidden");
  guideHighlight.style.left = `${rect.left - stageRect.left - pad}px`;
  guideHighlight.style.top = `${rect.top - stageRect.top - pad}px`;
  guideHighlight.style.width = `${rect.width + pad * 2}px`;
  guideHighlight.style.height = `${rect.height + pad * 2}px`;
  guideLayer.style.setProperty("--guide-x", `${targetX}px`);
  guideLayer.style.setProperty("--guide-y", `${targetY}px`);

  const cardRect = guideCard.getBoundingClientRect();
  const cardWidth = cardRect.width || Math.min(stageRect.width - stagePadding * 2, 360);
  const cardHeight = cardRect.height || 220;
  let left = targetX - cardWidth / 2;
  let top = rect.bottom - stageRect.top + 18;

  const isSprigTarget = target.classList.contains("sprig");
  const isLowTarget = targetY > stageRect.height * 0.62;
  const isDockTarget = Boolean(target.closest(".dock"));

  if (isSprigTarget) {
    const placeRight = targetX < stageRect.width * 0.55;
    left = placeRight ? rect.right - stageRect.left + 18 : rect.left - stageRect.left - cardWidth - 18;
    const below = rect.bottom - stageRect.top + 34;
    const above = rect.top - stageRect.top - cardHeight - 34;
    top = below + cardHeight < stageRect.height - stagePadding ? below : above;
  }

  if (isDockTarget || isLowTarget) {
    const above = rect.top - stageRect.top - cardHeight - 20;
    const below = rect.bottom - stageRect.top + 20;
    top = above >= stagePadding ? above : below;
  } else if (!isSprigTarget && top + cardHeight > stageRect.height - stagePadding) {
    const above = rect.top - stageRect.top - cardHeight - 18;
    const below = rect.bottom - stageRect.top + 18;
    top = above >= stagePadding ? above : below;
  }

  guideCard.style.left = `${clamp(left, stagePadding, stageRect.width - cardWidth - stagePadding)}px`;
  guideCard.style.top = `${clamp(top, stagePadding, stageRect.height - cardHeight - stagePadding)}px`;
  restartGuideMotion();
}

function showGuideStep(index) {
  stopGuideTransition();
  state.guideStep = clamp(index, 0, guideSteps.length - 1);
  state.guidePrimed = false;
  state.guideObserving = false;
  state.guideObservationReady = false;
  const step = guideSteps[state.guideStep];
  prepareGuideStep(step);
  guideLayer.classList.remove("is-hidden");
  guideLayer.classList.remove("is-awaiting-target", "is-observing", "is-confirming");
  guideLayer.setAttribute("aria-hidden", "false");
  guideStepLabel.textContent = `${state.guideStep + 1} / ${guideSteps.length}`;
  const speakerName = (step.speaker || sprigs[step.sprigId]?.name || "种种").split("·")[0].trim();
  guideSpeaker.textContent = speakerName;
  guideTitle.textContent = step.title;
  typeGuideText(step.text);
  guideMascot.src = step.mascot;
  guideMascot.alt = speakerName;
  guideMascotFrame.dataset.expression = step.expression || "curious";
  guideMascotFrame.dataset.motion = step.motion || "nod";
  guideMeter.style.width = `${((state.guideStep + 1) / guideSteps.length) * 100}%`;
  guidePrev.disabled = state.guideStep === 0;
  guidePrev.setAttribute("aria-disabled", String(state.guideStep === 0));
  guideNext.textContent = step.action || "我来点";
  requestAnimationFrame(() => moveGuideToTarget(step.selector));
}

function completeCurrentGuideStep() {
  if (state.guideTransitioning || guideLayer.classList.contains("is-hidden") || state.guideObserving) return;
  state.guidePrimed = false;
  state.guideObserving = true;
  guideLayer.classList.remove("is-awaiting-target");
  guideLayer.classList.add("is-confirming");

  const step = guideSteps[state.guideStep];
  const pauseAfter = step.pauseAfter || GUIDE_ADVANCE_MS;
  const observeTarget = step.observeSelector ? document.querySelector(step.observeSelector) : null;
  if (observeTarget) {
    guideLayer.classList.remove("is-confirming");
    guideLayer.classList.add("is-observing");
    requestAnimationFrame(() => moveGuideToTarget(step.observeSelector));
    observeTarget.classList.add(step.observeClass || "guide-observe-glow");
    setGuideObservationReady(false);
    state.guideTransitionTimer = window.setTimeout(() => {
      setGuideObservationReady(true);
      state.guideTransitionTimer = null;
    }, pauseAfter);
    return;
  }

  if (state.guideStep >= guideSteps.length - 1) {
    window.setTimeout(() => {
      closeGuide(true);
      openPanel("panel-nursery");
      nurseryResult.textContent = "拖进温室，种子才会醒。";
    }, pauseAfter);
    return;
  }

  window.setTimeout(() => {
    state.guideObserving = false;
    guideLayer.classList.remove("is-confirming");
    goToGuideStep(state.guideStep + 1);
  }, pauseAfter);
}

function isGuideTargetClick(target) {
  if (guideLayer.classList.contains("is-hidden") || state.guideTransitioning || state.guideObserving) return false;
  if (target.closest(".guide-card")) return false;
  if (!state.guidePrimed) return false;
  const selector = guideSteps[state.guideStep]?.selector;
  return Boolean(selector && target.closest(selector));
}

function openPlantScanPanelFromMap() {
  state.selectedMapPoi = null;
  state.lastScan = null;
  updateCaptureUi();
  captureText.textContent = `拍眼前的叶片、花或整株植物。`;
  openPanel("panel-discover");
}

function playGuideTargetFeedback(target) {
  const selector = guideSteps[state.guideStep]?.selector;
  const guideTarget = selector ? target.closest(selector) : null;
  if (!guideTarget) return;

  guideTarget.classList.add("guide-target-nudge");
  window.setTimeout(() => guideTarget.classList.remove("guide-target-nudge"), 650);

  if (guideTarget.dataset.panel) {
    openPanel(guideTarget.dataset.panel);
  } else if (guideTarget.id === "homeButton") {
    closePanels();
  } else if (guideTarget.id === "mapPlantScanButton") {
    openPlantScanPanelFromMap();
  } else if (guideTarget.id === "captureButton") {
    captureArRecognition();
  } else if (guideTarget.id === "dispatchButton") {
    dispatchExpedition();
  } else if (guideTarget.classList.contains("sprig")) {
    const sprig = sprigs[guideTarget.dataset.sprig] || atlasEntryById[guideTarget.dataset.sprig];
    if (sprig) showKnowledgeForSprig(guideTarget, sprig);
  }
}

function goToGuideStep(index) {
  if (state.guideTransitioning) return;
  const nextStep = clamp(index, 0, guideSteps.length - 1);
  if (nextStep === state.guideStep) return;

  state.guideTransitioning = true;
  guideLayer.classList.add("is-transitioning");
  guideNext.disabled = true;
  guidePrev.disabled = true;

  requestAnimationFrame(() => {
    showGuideStep(nextStep);
    state.guideTransitionTimer = setTimeout(() => {
      state.guideTransitioning = false;
      guideLayer.classList.remove("is-transitioning");
      guideNext.disabled = false;
      guidePrev.disabled = state.guideStep === 0;
      guidePrev.setAttribute("aria-disabled", String(state.guideStep === 0));
      state.guideTransitionTimer = null;
    }, GUIDE_ENTER_MS);
  });
}

function startGuide(manual = true) {
  if (!manual && hasSeenGuide()) return false;
  state.guideStartedManually = manual;
  showGuideStep(0);
  return true;
}

function closeGuide(remember = true) {
  const shouldShowCheckin = remember && state.checkinAfterGuide && !state.guideStartedManually;
  stopGuideTransition();
  stopGuideTyping();
  state.guideTransitioning = false;
  state.guidePrimed = false;
  state.guideObserving = false;
  state.guideObservationReady = false;
  guideLayer.classList.add("is-hidden");
  guideLayer.classList.remove("is-transitioning", "is-stepping", "is-awaiting-target", "is-observing", "is-confirming");
  guideLayer.setAttribute("aria-hidden", "true");
  guideHighlight.classList.add("is-hidden");
  guideCard.classList.remove("is-leaving", "is-stepping");
  guideMascotFrame.classList.remove("is-acting");
  document.querySelectorAll(".guide-scroll-glow, .guide-observe-glow").forEach((element) => {
    element.classList.remove("guide-scroll-glow", "guide-observe-glow", "is-dragging");
  });
  closePanels();
  if (remember) markGuideSeen();
  state.checkinAfterGuide = false;
  if (shouldShowCheckin) {
    window.setTimeout(maybeShowDailyCheckinPrompt, 420);
  }
}

function positionFeatureTip(target, text) {
  if (!guideLayer.classList.contains("is-hidden")) return;

  featureTip.textContent = text;
  featureTip.classList.remove("is-hidden");
  requestAnimationFrame(() => {
    const stageRect = gardenStage.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const tipRect = featureTip.getBoundingClientRect();
    const padding = 10;
    let left = targetRect.left - stageRect.left + targetRect.width / 2 - tipRect.width / 2;
    let top = targetRect.top - stageRect.top - tipRect.height - 10;

    if (top < padding) {
      top = targetRect.bottom - stageRect.top + 10;
    }

    featureTip.style.left = `${clamp(left, padding, stageRect.width - tipRect.width - padding)}px`;
    featureTip.style.top = `${clamp(top, padding, stageRect.height - tipRect.height - padding)}px`;
  });
}

function hideFeatureTip() {
  featureTip.classList.add("is-hidden");
}

function setupFeatureTips() {
  featureTips.forEach(([selector, text]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.dataset.featureTip = text;
      element.addEventListener("pointerenter", () => positionFeatureTip(element, text));
      element.addEventListener("pointerleave", hideFeatureTip);
      element.addEventListener("focus", () => positionFeatureTip(element, text));
      element.addEventListener("blur", hideFeatureTip);
      element.addEventListener("pointerdown", () => {
        positionFeatureTip(element, text);
        window.clearTimeout(element.featureTipTimer);
        element.featureTipTimer = window.setTimeout(hideFeatureTip, 1800);
      });
    });
  });
}

function getDiscoveryContext() {
  const sprigId = atlasEntryById[state.discoverySprigId] ? state.discoverySprigId : atlasEntries[0]?.id;
  return {
    sprigId,
    sprig: atlasEntryById[sprigId],
    poi: state.selectedMapPoi,
    scan: state.lastScan,
  };
}

function getUnlockedEntries() {
  return atlasEntries.filter((entry) => state.unlockedSprigs.has(entry.id));
}

function getBirthdaySeasonStarter(birthday = state.onboarding.birthday) {
  const month = getBirthdayParts(birthday)?.month;
  const config = birthdaySeasonSprigs.find((item) => item.months.includes(month)) || birthdaySeasonSprigs[7];
  const id = atlasEntryById[config.id] ? config.id : atlasEntries[0]?.id;
  const sprig = atlasEntryById[id] || atlasEntries[0];
  return {
    ...config,
    id,
    sprig,
  };
}

function syncGuideStarterStep(starter = getBirthdaySeasonStarter()) {
  if (!starter?.sprig) return;
  guideSteps[0] = {
    ...guideSteps[0],
    speaker: `${starter.sprig.name} · 第一位住民`,
    mascot: starter.sprig.image,
    text: "先看护照。",
    action: "点左上身份卡",
  };
  guideSteps[1] = {
    ...guideSteps[1],
    selector: `.sprig--${starter.id}`,
    sprigId: starter.id,
    speaker: `${starter.sprig.name} · ${starter.term}`,
    mascot: starter.sprig.image,
    title: "第一颗芽",
    text: "它在等你点一下。",
    action: `点${starter.sprig.name.replace("种种", "")}`,
  };
}

function hashSprigMoment(id = "", salt = "") {
  const source = `${id}|${salt}|${todayKey()}`;
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) {
    hash = (hash * 31 + source.charCodeAt(index)) % 9973;
  }
  return hash;
}

function getSprigWeatherScene() {
  return state.currentWeather?.scene || weatherScene || "calm";
}

function chooseSprigBehavior(sprig, reason = "idle") {
  const scene = getSprigWeatherScene();
  const hour = new Date().getHours();
  const weatherMatched = sprigBehaviorProfiles.filter((behavior) => behavior.weather.includes(scene));
  if (["rain", "storm"].includes(scene)) {
    return weatherMatched.find((behavior) => behavior.id === "rain") || sprigBehaviorProfiles[0];
  }
  if (scene === "snow") {
    return weatherMatched.find((behavior) => behavior.id === "snow") || sprigBehaviorProfiles[0];
  }
  if (hour >= 22 || hour < 7) {
    return sprigBehaviorProfiles.find((behavior) => behavior.id === "sleeping");
  }
  if (reason === "tap") {
    return sprigBehaviorProfiles.find((behavior) => ["singing", "playing", "reading"][hashSprigMoment(sprig?.id, reason) % 3] === behavior.id);
  }
  const pool = weatherMatched.length ? weatherMatched : sprigBehaviorProfiles.filter((behavior) => behavior.weather.includes("calm"));
  return pool[hashSprigMoment(sprig?.id, reason) % pool.length] || sprigBehaviorProfiles[0];
}

function applySprigBehavior(button, behavior) {
  if (!button || !behavior) return;
  button.dataset.action = behavior.id;
  button.dataset.mood = behavior.mood || "curious";
  button.title = behavior.label;
}

function getSprigCompanionLine(sprigId) {
  const visible = Array.from(document.querySelectorAll(".sprig:not(.is-hidden)"))
    .map((button) => button.dataset.sprig)
    .filter((id) => id && id !== sprigId);
  const companion = visible[hashSprigMoment(sprigId, "companion") % Math.max(1, visible.length)];
  return companion && atlasEntryById[companion] ? `旁边可以有${atlasEntryById[companion].name}一起互动，但不要抢主角。` : "画面里只有这一只小精灵也可以。";
}

function buildSprigAnimationPrompt(sprig, behavior, reason = "idle") {
  const weather = state.currentWeather || {};
  const label = weather.label || "花园天气";
  const temperature = Number.isFinite(weather.temperature) ? `${weather.temperature}度` : "温度不明显";
  return [
    "生成一段适合手机端像素风植物养成游戏的短动画。",
    `主角：${sprig.name}，植物原型是${sprig.plant || "地方植物"}，性格是${sprig.personality || "亲近、好奇"}。`,
    `动作：${behavior.prompt}。`,
    `天气：${label}，${temperature}，场景保持在种种花园中。`,
    `${getSprigCompanionLine(sprig.id)}重点表现小精灵之间自然的互动关系、表情和情绪变化。`,
    "风格：可爱像素质感，年轻明亮，2.5D 游戏感，不要写实摄影，不要油腻3D，不要人形角色，不要文字字幕。",
    `触发来源：${reason}。时长约5秒，可循环。`,
  ].join("\n");
}

async function requestSprigAnimation(sprig, behavior, reason = "idle") {
  if (!sprig || window.location.protocol === "file:") return null;
  const key = `${sprig.id}:${behavior.id}`;
  const lastRequested = sprigAnimationCooldown.get(key) || 0;
  if (Date.now() - lastRequested < 3 * 60 * 1000) return state.sprigAnimationTasks[key] || null;
  sprigAnimationCooldown.set(key, Date.now());
  try {
    const response = await fetch("/api/generate-animation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: buildSprigAnimationPrompt(sprig, behavior, reason),
        duration: 5,
        ratio: "9:16",
        watermark: false,
        generate_audio: false,
      }),
    });
    const payload = await response.json().catch(() => ({}));
    state.sprigAnimationTasks[key] = {
      requestedAt: Date.now(),
      configured: Boolean(payload.configured),
      task: payload.task || null,
      behavior: behavior.id,
    };
    saveGardenProfile();
    return payload;
  } catch {
    return null;
  }
}

function runSprigDailyLife(reason = "idle") {
  document.querySelectorAll(".sprig:not(.is-hidden)").forEach((button) => {
    const sprig = atlasEntryById[button.dataset.sprig] || sprigs[button.dataset.sprig];
    if (!sprig) return;
    const behavior = chooseSprigBehavior(sprig, reason);
    applySprigBehavior(button, behavior);
    button.classList.add("is-expressing");
    window.setTimeout(() => button.classList.remove("is-expressing"), 1700);
  });
  syncKnowledgePopSpeakerPosition();
}

function setStarterSprigFromBirthday(birthday = state.onboarding.birthday, { unlock = true } = {}) {
  const starter = getBirthdaySeasonStarter(birthday);
  if (!starter?.sprig) return null;
  state.discoverySprigId = starter.id;
  syncGuideStarterStep(starter);
  if (unlock) {
    state.unlockedSprigs = new Set([starter.id]);
    state.gardenSprigs = new Set([starter.id]);
    syncGardenSprigs();
    renderAtlas();
    updateCaptureUi();
  }
  return starter;
}

function syncGardenSprigs() {
  document.querySelectorAll(".sprig").forEach((button) => {
    const entry = atlasEntryById[button.dataset.sprig];
    const image = button.querySelector("img");
    if (entry && image) {
      image.src = entry.image;
      image.alt = entry.name;
    }
    const isUnlocked = state.gardenSprigs.has(button.dataset.sprig);
    button.classList.toggle("is-hidden", !isUnlocked);
    if (isUnlocked) {
      applySprigBehavior(button, chooseSprigBehavior(entry, "sync"));
    } else {
      button.dataset.mood = "";
      button.dataset.action = "";
    }
  });
}

function setupSprigWander() {
  document.querySelectorAll(".sprig").forEach((button) => {
    button.dataset.baseX = String(parseFloat(button.style.getPropertyValue("--x")) || 50);
    button.dataset.baseY = String(parseFloat(button.style.getPropertyValue("--y")) || 50);
  });
}

function wanderSprigs() {
  if (!guideLayer.classList.contains("is-hidden")) return;
  document.querySelectorAll(".sprig:not(.is-hidden)").forEach((button) => {
    const baseX = Number(button.dataset.baseX || 50);
    const baseY = Number(button.dataset.baseY || 50);
    const driftX = (Math.random() - 0.5) * 5.2;
    const driftY = (Math.random() - 0.5) * 4.2;
    button.style.setProperty("--x", `${clamp(baseX + driftX, 12, 88)}%`);
    button.style.setProperty("--y", `${clamp(baseY + driftY, 20, 78)}%`);
    const sprig = atlasEntryById[button.dataset.sprig] || sprigs[button.dataset.sprig];
    const behavior = chooseSprigBehavior(sprig, "wander");
    button.classList.add("is-expressing");
    applySprigBehavior(button, behavior);
    window.setTimeout(() => button.classList.remove("is-expressing"), 1700);
  });
  syncKnowledgePopSpeakerPosition();
}

function createAtlasEmpty(text) {
  const article = document.createElement("article");
  article.className = "atlas-empty";
  article.textContent = text;
  return article;
}

function getAtlasShortType(entry = {}) {
  const habitat = `${entry.habitat || ""}${entry.modelHint || ""}`;
  if (habitat.includes("水生") || habitat.includes("湿地")) return "水生";
  if (habitat.includes("盆生") || habitat.includes("庭院")) return "盆生";
  if (habitat.includes("附生") || habitat.includes("林下")) return "附生";
  if (habitat.includes("陆生")) return "陆生";
  if (entry.tone === "aquatic") return "水生";
  if (entry.tone === "pot") return "盆生";
  if (entry.tone === "epiphyte") return "附生";
  if (entry.tone === "land") return "陆生";
  if (entry.tone === "garden") return "花园";
  return "地域";
}

function getAtlasCategoryLabel(entry) {
  if (entry.habitat?.includes("水生") || entry.habitat?.includes("湿地")) return "水生";
  if (entry.habitat?.includes("盆生") || entry.habitat?.includes("庭院")) return "盆生";
  if (entry.habitat?.includes("附生")) return "附生";
  if (entry.habitat?.includes("陆生")) return "陆生";
  return entry.regionScope?.[0] || "地域";
}

function getActiveAtlasCategory() {
  return atlasCategories.find((item) => item.id === state.atlasCategory) || atlasCategories[0];
}

function getAtlasRoster() {
  const real = atlasEntries.filter(Boolean);
  const pageSlots = Math.max(ATLAS_DEX_PAGE_SIZE, Math.ceil(Math.max(real.length, 1) / ATLAS_DEX_PAGE_SIZE) * ATLAS_DEX_PAGE_SIZE);
  const roster = real.map((entry) => ({
    ...entry,
    locked: !state.unlockedSprigs.has(entry.id),
  }));
  while (roster.length < pageSlots) {
    const index = roster.length + 1;
    roster.push({
      id: `virtual-slot-${index}`,
      name: "？？？",
      image: "./assets/ui/seed.png",
      rarity: "未知",
      region: getGardenLabel(),
      habitat: "待发现",
      personality: "",
      knowledge: [],
      voiceLines: [],
      weatherLines: [],
      virtual: true,
      locked: true,
    });
  }
  return roster;
}

function getAtlasDexPageEntries() {
  const roster = getAtlasRoster();
  const pageCount = Math.max(1, Math.ceil(roster.length / ATLAS_DEX_PAGE_SIZE));
  state.atlasPage = clamp(state.atlasPage, 0, pageCount - 1);
  const start = state.atlasPage * ATLAS_DEX_PAGE_SIZE;
  return {
    roster,
    pageCount,
    pageEntries: roster.slice(start, start + ATLAS_DEX_PAGE_SIZE),
  };
}

function createAtlasDexCell(entry, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "atlas-dex-cell";
  button.setAttribute("role", "listitem");
  button.dataset.sprig = entry.id;
  button.dataset.slot = String(index);
  button.classList.toggle("is-locked", Boolean(entry.locked));
  button.classList.toggle("is-virtual", Boolean(entry.virtual));
  button.setAttribute("aria-label", entry.locked ? "未解锁种种" : `${entry.name}图鉴`);

  const image = document.createElement("img");
  image.src = entry.image || "./assets/ui/seed.png";
  image.alt = "";
  image.setAttribute("aria-hidden", "true");

  const label = document.createElement("b");
  label.textContent = entry.locked ? "？？？" : entry.name;

  button.append(image, label);
  return button;
}

function hideAtlasDexDetail() {
  state.atlasSelectedId = null;
  if (!atlasDexDetail) return;
  atlasDexDetail.classList.add("is-hidden");
  atlasDexDetail.hidden = true;
  atlasDexGrid?.querySelectorAll(".atlas-dex-cell.is-active").forEach((cell) => cell.classList.remove("is-active"));
}

function showAtlasDexDetail(entry) {
  if (!atlasDexDetail || !entry) return;
  state.atlasSelectedId = entry.id;
  const locked = Boolean(entry.locked);
  const image = entry.image || "./assets/ui/seed.png";
  const rarity = entry.rarity || "普通";
  const typeLabel = getAtlasShortType(entry);
  const place = locked
    ? "？？？"
    : [entry.region || getGardenLabel(), (entry.habitat || "").split("·").pop()?.trim()].filter(Boolean).join(" · ") || getGardenLabel();
  const weather = locked
    ? "？？？"
    : entry.weatherLines?.[0]?.slice(0, 18) || entry.habitat || "天气随园而变";
  const status = locked ? "未发现" : entry.status || (state.gardenSprigs.has(entry.id) ? "已放入花园" : "已记录");
  const blurb = locked
    ? "继续扫描植物，并到对应地点完成发现，问号会一点点亮起来。"
    : entry.personality || entry.knowledge?.[0] || entry.voiceLines?.[0] || entry.hint || "这一页还很安静。";

  if (atlasDexDetailImage) {
    atlasDexDetailImage.src = image;
    atlasDexDetailImage.alt = locked ? "未解锁种种剪影" : entry.name;
    atlasDexDetailImage.classList.toggle("is-silhouette", locked);
  }
  if (atlasDexDetailKicker) atlasDexDetailKicker.textContent = locked ? "未解锁 · ？？？" : `${typeLabel}系 / ${rarity}`;
  if (atlasDexDetailName) atlasDexDetailName.textContent = locked ? "？？？" : entry.name;
  if (atlasDexDetailPlace) atlasDexDetailPlace.textContent = place;
  if (atlasDexDetailWeather) atlasDexDetailWeather.textContent = weather;
  if (atlasDexDetailStatus) atlasDexDetailStatus.textContent = status;
  if (atlasDexDetailBlurb) atlasDexDetailBlurb.textContent = blurb;
  if (atlasDexDetailGarden) {
    atlasDexDetailGarden.disabled = locked || !state.gardenSprigs.has(entry.id);
    atlasDexDetailGarden.classList.toggle("is-hidden", locked);
  }

  atlasDexDetail.classList.remove("is-hidden");
  atlasDexDetail.hidden = false;
  atlasDexGrid?.querySelectorAll(".atlas-dex-cell").forEach((cell) => {
    cell.classList.toggle("is-active", cell.dataset.sprig === entry.id);
  });
}

function openAtlasDexCell(cell) {
  if (!cell?.dataset?.sprig) return;
  const { roster } = getAtlasDexPageEntries();
  const entry = roster.find((item) => item.id === cell.dataset.sprig);
  if (!entry) return;
  showAtlasDexDetail(entry);
}

function renderAtlas() {
  const unlocked = getUnlockedEntries();
  const { pageCount, pageEntries, roster } = getAtlasDexPageEntries();
  const { milestone, percent } = getAtlasGrowthProgress(unlocked.length);
  const rewardMilestone = getAtlasRewardMilestone(unlocked.length);

  if (atlasProgress) atlasProgress.textContent = `种种图鉴 · 已认识：${unlocked.length}`;
  if (atlasProgressBar) atlasProgressBar.style.width = `${percent}%`;
  renderAtlasRewards(rewardMilestone, unlocked.length);

  if (atlasDexCount) {
    atlasDexCount.textContent = `已发现 ${unlocked.length} / ${Math.max(roster.filter((item) => !item.virtual).length, unlocked.length)}`;
  }
  if (atlasPageLabel) atlasPageLabel.textContent = `${state.atlasPage + 1} / ${pageCount}`;
  if (atlasPrevPage) atlasPrevPage.disabled = state.atlasPage <= 0;
  if (atlasNextPage) atlasNextPage.disabled = state.atlasPage >= pageCount - 1;

  if (atlasDexGrid) {
    atlasDexGrid.replaceChildren(...pageEntries.map((entry, index) => createAtlasDexCell(entry, index)));
  }

  if (state.atlasSelectedId) {
    const selected = roster.find((item) => item.id === state.atlasSelectedId);
    if (selected) showAtlasDexDetail(selected);
    else hideAtlasDexDetail();
  } else {
    hideAtlasDexDetail();
  }

  renderIdentityCard();
}

function getAtlasCategoryCount(category) {
  if (category.virtual === "gardens") {
    const packs = Array.isArray(window.SPRIG_MAP_PACKS) ? window.SPRIG_MAP_PACKS : [activeMapPack].filter(Boolean);
    return Math.max(category.modelCount || 0, packs.length);
  }
  const realCount = atlasEntries.filter(category.match).length;
  return Math.max(category.modelCount || realCount, realCount);
}

function getAtlasTotalCount() {
  return NATIONAL_ATLAS_COUNT;
}

function getAtlasMilestone(unlockedCount) {
  return atlasMilestones.find((milestone) => unlockedCount < milestone.count) || {
    level: Math.max(6, Math.floor(unlockedCount / 50) + 1),
    count: Math.ceil((unlockedCount + 1) / 50) * 50,
    rewards: { seeds: 20, stamina: 18, badge: "远行章" },
  };
}

function getAtlasGrowthProgress(unlockedCount) {
  const milestone = getAtlasMilestone(unlockedCount);
  const previousMilestone = [...atlasMilestones].reverse().find((item) => unlockedCount >= item.count)?.count || 0;
  const milestoneSpan = Math.max(1, milestone.count - previousMilestone);
  const percent = clamp(((unlockedCount - previousMilestone) / milestoneSpan) * 100, 0, 100);
  return { milestone, percent };
}

function getClaimableAtlasMilestone(unlockedCount) {
  return atlasMilestones.find((milestone) => unlockedCount >= milestone.count && !state.claimedAtlasLevels.has(String(milestone.level))) || null;
}

function getAtlasRewardMilestone(unlockedCount) {
  return getClaimableAtlasMilestone(unlockedCount) || getAtlasMilestone(unlockedCount);
}

function getPassportStageName(level) {
  const stages = ["新芽阶段", "叶片阶段", "花苞阶段", "开花阶段", "风物守护阶段"];
  return stages[Math.max(0, Math.min(stages.length - 1, level - 1))] || "风物守护阶段";
}

function createAtlasRewardChip(type, label) {
  const chip = document.createElement("span");
  chip.className = `atlas-reward-chip atlas-reward-chip--${type}`;
  chip.innerHTML = `<i aria-hidden="true"></i><b>${label}</b>`;
  return chip;
}

function renderAtlasRewards(milestone, unlockedCount) {
  if (!atlasRewardList) return;
  const rewards = milestone.rewards || {};
  const isClaimable = unlockedCount >= milestone.count && !state.claimedAtlasLevels.has(String(milestone.level));
  const isClaimed = state.claimedAtlasLevels.has(String(milestone.level));
  atlasRewardList.replaceChildren(
    createAtlasRewardChip("seed", `种子 +${rewards.seeds || 0}`),
    createAtlasRewardChip("stamina", `体力 +${rewards.stamina || 0}`),
    createAtlasRewardChip("badge", rewards.badge || "徽章"),
  );
  if (atlasRewardButton) {
    atlasRewardButton.classList.toggle("is-ready", isClaimable);
    atlasRewardButton.classList.toggle("is-claimed", isClaimed);
    atlasRewardButton.dataset.rewardLevel = String(milestone.level);
    atlasRewardButton.setAttribute("aria-label", isClaimable ? `领取 Lv.${milestone.level} 图鉴奖励` : `查看 Lv.${milestone.level} 图鉴奖励`);
  }
  if (atlasRewardButtonText) {
    atlasRewardButtonText.textContent = isClaimable ? "大礼包" : isClaimed ? "已领" : "礼包";
  }
  if (atlasRewardTitle) {
    atlasRewardTitle.textContent = `Lv.${milestone.level} 礼包`;
  }
  if (atlasRewardText) {
    atlasRewardText.textContent = isClaimable ? "已经成熟，点一下收进背包。" : `收集到 ${milestone.count} 只后打开。`;
  }
}

function toggleAtlasRewardPopover(force) {
  if (!atlasRewardPopover || !atlasRewardButton) return;
  const willOpen = typeof force === "boolean" ? force : atlasRewardPopover.classList.contains("is-hidden");
  atlasRewardPopover.classList.toggle("is-hidden", !willOpen);
  atlasRewardButton.setAttribute("aria-expanded", String(willOpen));
}

function claimAtlasReward() {
  const unlockedCount = getUnlockedEntries().length;
  const milestone = getClaimableAtlasMilestone(unlockedCount);
  if (!milestone) {
    toggleAtlasRewardPopover();
    return;
  }
  const rewards = milestone.rewards || {};
  state.claimedAtlasLevels.add(String(milestone.level));
  if (rewards.seeds) addSeeds(rewards.seeds);
  if (rewards.stamina) setStamina(state.stamina + rewards.stamina);
  renderAtlasRewards(getAtlasRewardMilestone(unlockedCount), unlockedCount);
  if (atlasRewardText) atlasRewardText.textContent = `${rewards.badge || "徽章"} 已收进背包。`;
  toggleAtlasRewardPopover(true);
  saveGardenProfile();
}

function getMapPackStatusLabel(status) {
  const labels = {
    available: "已制作版本",
    growing: "正在生长中",
    locked: "未来预留",
  };
  return labels[status] || "地图包";
}

function formatUserLocation(location) {
  if (!location) return "当前位置";
  return `${Number(location.lat).toFixed(3)}, ${Number(location.lng).toFixed(3)}`;
}

function rebuildActiveMapPack(mapPack) {
  if (!mapPack?.sprigs?.length) return;
  activeMapPack = mapPack;
  atlasEntries = activeMapPack.sprigs || [];
  sprigs = Object.fromEntries(atlasEntries.map((entry) => [entry.id, entry]));
  sprigIds = Object.keys(sprigs);
  atlasEntryById = Object.fromEntries(atlasEntries.map((entry) => [entry.id, entry]));

  const starter = getBirthdaySeasonStarter();
  const firstSprigId = starter.id || atlasEntries[0]?.id;
  if (firstSprigId && !atlasEntryById[state.discoverySprigId]) {
    state.discoverySprigId = firstSprigId;
  }
  if (firstSprigId && !Array.from(state.unlockedSprigs).some((id) => atlasEntryById[id])) {
    state.unlockedSprigs = new Set([firstSprigId]);
  }
  if (firstSprigId && !Array.from(state.gardenSprigs).some((id) => atlasEntryById[id])) {
    state.gardenSprigs = new Set([firstSprigId]);
  }
  syncGuideStarterStep(starter);
  syncGardenSprigs();
  renderExpeditionSquad();
  renderAtlas();
  updateCaptureUi();
}

function getGardenLabel() {
  if (state.currentMapPack) return state.currentMapPack.locationLabel || state.currentMapPack.name;
  if (state.explorationMode === "unknown") return state.user.location || "未知花园";
  return "种种大世界";
}

function getRegionMeta(province = regionSelect.value) {
  return chinaRegions.find((item) => item.province === province) || chinaRegions[0];
}

function getCityOptions(province = regionSelect.value) {
  return getRegionMeta(province).cities;
}

function getSelectedRegionProfile() {
  const meta = getRegionMeta(regionSelect.value);
  const city = citySelect.value || meta.cities[0];
  return {
    region: meta.province,
    province: meta.province,
    city,
    terrain: meta.terrain,
    house: meta.house,
  };
}

function getSelectedCityCenter() {
  return onboardingCityCenters.find(
    (item) => item.province === state.onboarding.province && item.city === state.onboarding.city,
  ) || onboardingCityCenters.find((item) => item.province === "浙江省" && item.city === "杭州市");
}

function getCityCenterByRegion(province = "", city = "") {
  return onboardingCityCenters.find((item) => item.province === province && item.city === city) || null;
}

function getCityCenterFromText(value = "") {
  const text = String(value || "");
  return onboardingCityCenters.find((item) => text.includes(item.city) || text.includes(item.province)) || null;
}

function populateRegionSelects() {
  if (!regionSelect || !citySelect) return;
  regionSelect.replaceChildren(
    ...chinaRegions.map((item) => {
      const option = document.createElement("option");
      option.value = item.province;
      option.textContent = item.province;
      return option;
    }),
  );
  regionSelect.value = state.onboarding.province;
  syncCitySelect(state.onboarding.city);
}

function syncCitySelect(preferredCity = "") {
  const cities = getCityOptions(regionSelect.value);
  citySelect.replaceChildren(
    ...cities.map((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      return option;
    }),
  );
  citySelect.value = cities.includes(preferredCity) ? preferredCity : cities[0];
}

function syncOnboardingRegion({ located = state.onboarding.located } = {}) {
  state.onboarding = {
    ...state.onboarding,
    ...getSelectedRegionProfile(),
    language: languageSelect.value,
    birthday: birthdayInput.value,
    located,
  };
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function getBirthdaySelection() {
  return getBirthdayParts(birthdayInput.value) || { year: 2002, month: 3, day: 9 };
}

function setBirthdaySelection({ year, month, day }, { scroll = true } = {}) {
  const safeYear = clamp(Number(year) || 2002, BIRTHDAY_START_YEAR, BIRTHDAY_END_YEAR);
  const safeMonth = clamp(Number(month) || 1, 1, 12);
  const safeDay = clamp(Number(day) || 1, 1, daysInMonth(safeYear, safeMonth));
  birthdayInput.value = `${safeYear}-${String(safeMonth).padStart(2, "0")}-${String(safeDay).padStart(2, "0")}`;
  state.onboarding.birthday = birthdayInput.value;

  if (scroll) {
    scrollBirthdayColumn(birthdayYearColumn, safeYear);
    scrollBirthdayColumn(birthdayMonthColumn, safeMonth);
    populateBirthdayDays(safeYear, safeMonth, safeDay);
    scrollBirthdayColumn(birthdayDayColumn, safeDay);
  }
}

function createBirthdayOption(value, label, selected) {
  const option = document.createElement("button");
  option.type = "button";
  option.className = selected ? "is-selected" : "";
  option.dataset.value = String(value);
  option.setAttribute("role", "option");
  option.setAttribute("aria-selected", String(selected));
  option.textContent = label;
  option.addEventListener("click", () => {
    option.parentElement.scrollTo({ top: option.offsetTop - BIRTHDAY_ROW_HEIGHT, behavior: "smooth" });
  });
  return option;
}

function scrollBirthdayColumn(column, value) {
  if (!column) return;
  const option = column.querySelector(`[data-value="${value}"]`);
  if (!option) return;
  column.scrollTo({ top: option.offsetTop - BIRTHDAY_ROW_HEIGHT, behavior: "auto" });
}

function selectNearestBirthdayOption(column) {
  if (!column) return null;
  const center = column.scrollTop + column.clientHeight / 2;
  const options = [...column.querySelectorAll("button")];
  return options.reduce((nearest, option) => {
    const optionCenter = option.offsetTop + option.offsetHeight / 2;
    const distance = Math.abs(center - optionCenter);
    return !nearest || distance < nearest.distance ? { option, distance } : nearest;
  }, null)?.option || null;
}

function updateBirthdayColumnSelection(column) {
  const selected = selectNearestBirthdayOption(column);
  if (!selected) return null;
  column.querySelectorAll("button").forEach((option) => {
    const isSelected = option === selected;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-selected", String(isSelected));
  });
  return Number(selected.dataset.value);
}

function populateBirthdayDays(year, month, selectedDay = getBirthdaySelection().day) {
  const maxDay = daysInMonth(year, month);
  const safeDay = clamp(selectedDay, 1, maxDay);
  birthdayDayColumn.replaceChildren(
    ...Array.from({ length: maxDay }, (_, index) => {
      const value = index + 1;
      return createBirthdayOption(value, `${value}日`, value === safeDay);
    }),
  );
}

function populateBirthdayPicker() {
  if (!birthdayYearColumn || !birthdayMonthColumn || !birthdayDayColumn) return;
  const selected = getBirthdaySelection();
  birthdayYearColumn.replaceChildren(
    ...Array.from({ length: BIRTHDAY_END_YEAR - BIRTHDAY_START_YEAR + 1 }, (_, index) => {
      const value = BIRTHDAY_START_YEAR + index;
      return createBirthdayOption(value, `${value}年`, value === selected.year);
    }),
  );
  birthdayMonthColumn.replaceChildren(
    ...Array.from({ length: 12 }, (_, index) => {
      const value = index + 1;
      return createBirthdayOption(value, `${value}月`, value === selected.month);
    }),
  );
  populateBirthdayDays(selected.year, selected.month, selected.day);
  setBirthdaySelection(selected);
}

function syncBirthdayFromWheel(column) {
  const current = getBirthdaySelection();
  const value = updateBirthdayColumnSelection(column);
  if (!value) return;
  const part = column.dataset.birthdayPart;
  const next = { ...current, [part]: value };
  const dayCount = daysInMonth(next.year, next.month);
  next.day = clamp(next.day, 1, dayCount);
  if (part === "year" || part === "month") populateBirthdayDays(next.year, next.month, next.day);
  setBirthdaySelection(next, { scroll: false });
}

function setupBirthdayWheel() {
  populateBirthdayPicker();
  [birthdayYearColumn, birthdayMonthColumn, birthdayDayColumn].forEach((column) => {
    if (!column) return;
    let wheelTimer = null;
    column.addEventListener("scroll", () => {
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        syncBirthdayFromWheel(column);
        const selected = selectNearestBirthdayOption(column);
        if (selected) column.scrollTo({ top: selected.offsetTop - BIRTHDAY_ROW_HEIGHT, behavior: "smooth" });
      }, 90);
    });
  });
}

function inferOnboardingRegionFromLocation(userLocation) {
  const distanceKm = mapPackUtils.distanceKm;
  if (!distanceKm || !userLocation) return null;
  return onboardingCityCenters
    .map((item) => ({
      ...item,
      distance: distanceKm(userLocation, [item.lng, item.lat]),
    }))
    .sort((a, b) => a.distance - b.distance)[0] || null;
}

function setOnboardingStep(index) {
  const nextIndex = clamp(index, 0, setupSteps.length - 1);
  setupSteps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === nextIndex));
  nameForm.dataset.step = String(nextIndex);
  setupPrev.disabled = nextIndex === 0;
  setupNext.classList.toggle("is-hidden", nextIndex === setupSteps.length - 1);
  setupSubmit.classList.toggle("is-hidden", nextIndex !== setupSteps.length - 1);
}

function getOnboardingStep() {
  return Number(nameForm.dataset.step || 0);
}

function canAdvanceOnboardingStep() {
  const step = getOnboardingStep();
  if (step === 0 && !gardenNameInput.value.trim()) {
    gardenNameInput.focus();
    return false;
  }
  return true;
}

async function locateForOnboarding() {
  locateOnboardingButton.disabled = true;
  locationPermissionStatus.textContent = "正在请求定位权限。";
  try {
    const userLocation = await requestUserLocation();
    const inferred = inferOnboardingRegionFromLocation(userLocation);
    state.userLocation = userLocation;
    if (inferred) {
      regionSelect.value = inferred.province;
      syncCitySelect(inferred.city);
      syncOnboardingRegion({ located: true });
      state.userLocation = userLocation;
      updateWeather(userLocation);
      locationPermissionStatus.textContent = `已定位到 ${inferred.province} · ${inferred.city} 附近。`;
    } else {
      syncOnboardingRegion({ located: true });
      state.userLocation = userLocation;
      updateWeather(userLocation);
      locationPermissionStatus.textContent = "已经读取坐标，请继续选择省份和地级市。";
    }
  } catch {
    locationPermissionStatus.textContent = "定位权限没有打开，可以手动选择省份和地级市。";
  } finally {
    locateOnboardingButton.disabled = false;
  }
}

function getOnboardingRegionLabel() {
  if (state.onboarding.province && state.onboarding.city) {
    return `${state.onboarding.province} · ${state.onboarding.city}`;
  }
  return "种种大世界";
}

function getMapPackRegionLabel(pack = null) {
  if (!pack) return state.onboarding.city || "选择花园";
  if (pack.locationLabel) return pack.locationLabel;
  return (pack.expeditionLabel || pack.name || "未知花园")
    .replace(/植物地图|探索包|精灵图鉴|地图包/g, "")
    .trim();
}

function normalizeGardenPickerLabel(value = "") {
  return String(value || "")
    .replace(/[·\s/｜|,，、-]/g, "")
    .replace(/省|市|地区|探索包|植物地图|精灵图鉴|地图包/g, "")
    .trim();
}

function getKnownGardenLabel(candidate = {}) {
  const province = String(candidate.province || "").replace(/省$/, "");
  const city = String(candidate.city || "").replace(/市$/, "");
  if (province && city) return `${province}·${city}`;
  return city || province || "已读取地点";
}

function renderMapPackPicker(message = "", options = {}) {
  if (!mapPackPicker) return;
  const { expanded = false, locating = false } = options;
  const currentLabel = getMapPackRegionLabel(state.currentMapPack);
  const currentNormalized = normalizeGardenPickerLabel(currentLabel || getOnboardingRegionLabel());
  const currentRegionNormalized = normalizeGardenPickerLabel(getOnboardingRegionLabel());
  const currentCityNormalized = normalizeGardenPickerLabel(state.onboarding.city);
  const seenLabels = new Set([currentNormalized, currentRegionNormalized, currentCityNormalized].filter(Boolean));
  mapPackPicker.replaceChildren();
  mapPackPicker.classList.toggle("is-expanded", expanded);
  mapPackPicker.classList.toggle("is-locating", locating);

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "map-pack-toggle";
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.innerHTML = `<i aria-hidden="true"></i><span>${expanded || locating ? "读取花园" : getMapPackRegionLabel(state.currentMapPack)}</span>`;
  mapPackPicker.append(toggle);

  if (expanded) {
    const locateButton = document.createElement("button");
    locateButton.type = "button";
    locateButton.className = "map-pack-locate";
    locateButton.dataset.locateGarden = "true";
    locateButton.disabled = locating;
    const locateTitle = document.createElement("strong");
    locateTitle.textContent = locating ? "读取花园中" : "读取花园";
    const locateHint = document.createElement("span");
    locateHint.textContent = locating ? "正在获得定位" : "获得定位";
    locateButton.append(locateTitle, locateHint);
    mapPackPicker.append(locateButton);

    const helper = document.createElement("p");
    helper.className = "map-pack-helper";
    helper.textContent = locating ? "正在读取附近花园" : "读取到的花园";
    mapPackPicker.append(helper);
  }

  getKnownCityExplorationCandidates().forEach((candidate) => {
    const label = getKnownGardenLabel(candidate);
    const normalized = normalizeGardenPickerLabel(label);
    if (!normalized || seenLabels.has(normalized)) return;
    seenLabels.add(normalized);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-pack-option map-pack-option--known";
    button.dataset.knownLocationKey = candidate.key;
    button.dataset.status = "known";
    const title = document.createElement("strong");
    title.textContent = label;
    button.append(title);
    mapPackPicker.append(button);
  });

  mapPacks.forEach((pack) => {
    const label = getMapPackRegionLabel(pack);
    const normalized = normalizeGardenPickerLabel(label);
    if (pack.id === state.currentMapPack?.id || !normalized || seenLabels.has(normalized)) return;
    seenLabels.add(normalized);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-pack-option";
    button.dataset.mapPackId = pack.id;
    button.dataset.status = pack.status;
    button.disabled = pack.status === "locked";
    const title = document.createElement("strong");
    title.textContent = label;
    button.append(title);
    mapPackPicker.append(button);
  });
}

async function locateFromMapPackPicker() {
  if (!mapPackPicker || state.dispatched) return;
  renderMapPackPicker("", { expanded: true, locating: true });
  try {
    const userLocation = await requestUserLocation();
    const inferred = userLocation.city
      ? getCityCenterFromText(`${userLocation.province || ""} ${userLocation.city || ""}`) || inferOnboardingRegionFromLocation(userLocation)
      : inferOnboardingRegionFromLocation(userLocation);
    if (inferred) {
      state.onboarding = {
        ...state.onboarding,
        province: inferred.province,
        city: inferred.city,
        located: true,
      };
      updateWeather(userLocation);
    }
    const match = findNearestMapPack(userLocation, mapPacks);
    if (match.mapPack) {
      enterMapPack(match.mapPack, match.userLocation || userLocation, "located");
    } else {
      enterUnknownGarden(match.userLocation || userLocation);
    }
  } catch {
    const knownCandidate = getKnownCityExplorationCandidates()[0];
    if (knownCandidate) enterKnownCityExploration(knownCandidate);
  } finally {
    renderMapPackPicker("", { expanded: true, locating: false });
    syncExpeditionChoice();
  }
}

function enterGardenAfterReading(callback) {
  renderMapPackPicker("", { expanded: true, locating: true });
  expeditionTitle.textContent = "读取花园";
  expeditionTimer.textContent = "正在定位";
  expeditionText.textContent = "正在确认这片花园。";
  window.setTimeout(() => {
    callback();
    renderMapPackPicker("", { expanded: true, locating: false });
    syncExpeditionChoice();
  }, 520);
}

function clearMapPackPicker() {
  renderMapPackPicker();
}

function unlockSprig(id, scan = null, reward = null) {
  const entry = atlasEntryById[id] || atlasEntryById.mystery;
  const wasLocked = !state.unlockedSprigs.has(entry.id);
  state.unlockedSprigs.add(entry.id);
  state.gardenSprigs.add(entry.id);
  state.discoverySprigId = entry.id;
  state.lastScan = scan;
  syncGardenSprigs();
  renderAtlas();

  if (wasLocked) {
    setQuestProgress("capture", "1 / 1");
    setQuestProgress("atlas", "1 / 1");
    syncQuestClaims();
    addSeeds(reward?.seeds ?? 5);
    updateLevel(reward?.xp ?? 35);
  }

  saveGardenProfile();
  return entry;
}

function unlockAtlasEntryOnly(id) {
  const entry = atlasEntryById[id] || atlasEntryById.mystery;
  const wasLocked = !state.unlockedSprigs.has(entry.id);
  state.unlockedSprigs.add(entry.id);
  state.discoverySprigId = entry.id;
  renderAtlas();
  updateCaptureUi();
  if (wasLocked) {
    setQuestProgress("atlas", "1 / 1");
    syncQuestClaims();
  }
  saveGardenProfile();
  return { entry, wasLocked };
}

function normalizeScanText(value) {
  return String(value || "").toLowerCase();
}

function matchSprigFromScan(suggestion) {
  const searchText = normalizeScanText([
    suggestion?.name,
    ...(suggestion?.commonNames || []),
    suggestion?.taxonomy?.genus,
    suggestion?.taxonomy?.family,
  ].join(" "));

  const match = atlasEntries.find((entry) =>
    entry.aliases.some((alias) => searchText.includes(normalizeScanText(alias))),
  );

  return match?.id || "mystery";
}

function hashScanSeed(value) {
  return Array.from(String(value || "")).reduce((hash, char) => {
    return (hash * 31 + char.charCodeAt(0)) % 9973;
  }, 17);
}

function resolveScanRarity(entry, suggestion = null, sourceLabel = "") {
  if (!entry || entry.id === "mystery") {
    return { id: "unknown", label: "未知", tone: "unknown", seeds: 2, xp: 18 };
  }

  const dayKey = new Date().toISOString().slice(0, 10);
  const confidence = Math.round((suggestion?.probability || 0) * 100);
  const sourceBonus = sourceLabel.includes("照片") ? 6 : 0;
  const poiBonus = state.selectedMapPoi?.sprigId === entry.id ? -16 : 0;
  const packBonus = activeMapPack?.sprigs?.some((sprig) => sprig.id === entry.id) ? -8 : 0;
  const confidenceBonus = confidence >= 85 ? -8 : confidence && confidence < 50 ? 10 : 0;
  const roll = clamp(
    hashScanSeed(`${entry.id}:${getGardenLabel()}:${dayKey}:${sourceLabel}`) % 100
      + sourceBonus
      + poiBonus
      + packBonus
      + confidenceBonus,
    0,
    100,
  );

  return scanRarityTiers.find((tier) => roll < tier.threshold) || scanRarityTiers[0];
}

function readImageAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = () => reject(new Error("read-file-failed"));
    reader.readAsDataURL(file);
  });
}

function setScanBusy(isBusy, label = "识别中") {
  captureButton.disabled = true;
  uploadScanButton.disabled = isBusy;
  captureButton.disabled = isBusy;
  if (isBusy) setCaptureButtonLabel(label);
}

function setCaptureButtonLabel(label) {
  captureButton.textContent = label;
  captureButton.dataset.actionLabel = label;
}

function appendPlantScanRecord(record) {
  if (!scanRecordList || !record) return;
  const center = getSelectedCityCenter();
  const enrichedRecord = {
    province: state.onboarding.province || center?.province || "",
    city: state.onboarding.city || center?.city || "",
    adcode: center?.adcode || "",
    ...record,
  };
  state.scanRecords = [enrichedRecord, ...state.scanRecords].slice(0, 4);
  saveGardenProfile();
  renderExpeditionSquad();
  scanRecordList.replaceChildren(
    ...state.scanRecords.map((item) => {
      const article = document.createElement("article");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const meta = document.createElement("span");
      meta.textContent = item.meta;
      const text = document.createElement("p");
      text.textContent = item.text;
      article.append(title, meta, text);
      return article;
    }),
  );
}

function createTemporaryPlantScan(sourceLabel, reason = "pending-identification") {
  const generated = generateSprigFromLocation(state.userLocation, null);
  const sprig = generated.sprig;
  const locationLabel = getGardenLabel();
  const coordinateLabel = state.userLocation ? ` · ${formatUserLocation(state.userLocation)}` : "";
  const scan = {
    name: "未知植物线索",
    probability: 0,
    temporary: true,
    source: reason,
    rarity: "未知",
    commonNames: [],
  };

  state.lastScan = scan;
  state.generatedSprig = generated;
  discoverTitle.textContent = sprig.name;
  arTarget.src = sprig.image;
  arTarget.alt = sprig.name;
  arTarget.classList.add("is-visible", "is-encounter");
  scanResultText.textContent = "未知 · 线索";
  appendPlantScanRecord({
    title: `${sourceLabel} · ${sprig.name}`,
    meta: `未知 · ${locationLabel}${coordinateLabel}`,
    text: "先收进线索页。",
  });
  return generated;
}

function getArFrameBase64() {
  if (!arCamera.videoWidth || !arCamera.videoHeight) return "";
  const maxWidth = 960;
  const scale = Math.min(1, maxWidth / arCamera.videoWidth);
  arCanvas.width = Math.round(arCamera.videoWidth * scale);
  arCanvas.height = Math.round(arCamera.videoHeight * scale);
  const context = arCanvas.getContext("2d");
  context.drawImage(arCamera, 0, 0, arCanvas.width, arCanvas.height);
  const dataUrl = arCanvas.toDataURL("image/jpeg", 0.86);
  return dataUrl.split(",")[1] || "";
}

async function identifyPlantImage(image, sourceLabel = "取景画面") {
  if (!image) return;
  setScanBusy(true);
  arTarget.classList.remove("is-encounter");
  scanResultText.textContent = "识别中";

  try {
    const response = await fetch("/api/identify-plant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image,
        latitude: state.userLocation?.lat,
        longitude: state.userLocation?.lng,
      }),
    });
    const result = await response.json();

    if (!result.configured) {
      const generated = createTemporaryPlantScan(sourceLabel, "plant-api-missing");
      captureText.textContent = `${generated.sprig.name} 先躲进线索页。`;
      return;
    }

    if (!response.ok) {
      throw new Error(result.error || "identify-failed");
    }

    const suggestion = result.suggestions?.[0];
    if (!suggestion) {
      const generated = createTemporaryPlantScan(sourceLabel, "unclear-plant");
      captureText.textContent = `${generated.sprig.name} 还没报上名字。`;
      return;
    }

    const sprigId = matchSprigFromScan(suggestion);
    const entry = atlasEntryById[sprigId] || atlasEntryById.mystery;
    const rarity = resolveScanRarity(entry, suggestion, sourceLabel);
    const entryAfterUnlock = unlockSprig(sprigId, { ...suggestion, rarity: rarity.label }, rarity);
    const probability = Math.round((suggestion.probability || 0) * 100);
    discoverTitle.textContent = entryAfterUnlock.name;
    arTarget.src = entryAfterUnlock.image;
    arTarget.alt = entryAfterUnlock.name;
    arTarget.dataset.rarity = rarity.tone;
    arTarget.classList.add("is-visible", "is-encounter");
    scanResultText.textContent = `${rarity.label}${probability ? ` · ${probability}%` : ""}`;
    captureText.textContent = `${entryAfterUnlock.name} 出现了。`;
    appendPlantScanRecord({
      title: `${sourceLabel} · ${entryAfterUnlock.name}`,
      meta: `${rarity.label} · ${suggestion.commonNames?.[0] || suggestion.name}`,
      text: `种子 +${rarity.seeds} · 经验 +${rarity.xp}`,
    });
  } catch (error) {
    const generated = createTemporaryPlantScan(sourceLabel, "scan-offline");
    captureText.textContent = `${generated.sprig.name} 先躲进线索页。`;
  } finally {
    setScanBusy(false);
    setCaptureButtonLabel(arStream ? "识别画面" : "打开取景");
    if (scanInput) scanInput.value = "";
  }
}

async function identifyPlantFile(file) {
  if (!file) return;
  const image = await readImageAsBase64(file);
  await identifyPlantImage(image, "照片");
}

async function startArCamera() {
  if (arStream) return true;
  if (!navigator.mediaDevices?.getUserMedia) {
    scanResultText.textContent = "当前浏览器不支持摄像头。";
    captureText.textContent = "可以改用上传照片识别。";
    return false;
  }

  try {
    scanResultText.textContent = "正在打开摄像头。";
    arStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
      audio: false,
    });
    arCamera.srcObject = arStream;
    await arCamera.play();
    arCamera.classList.add("is-active");
    setCaptureButtonLabel("识别画面");
    scanResultText.textContent = "取景已开启。";
    captureText.textContent = "把植物放进扫描框里，再点一下。";
    return true;
  } catch {
    scanResultText.textContent = "摄像头没有打开。";
    captureText.textContent = "请允许摄像头权限，或用上传照片识别。";
    return false;
  }
}

function stopArCamera() {
  if (!arStream) return;
  arStream.getTracks().forEach((track) => track.stop());
  arStream = null;
  arCamera.srcObject = null;
  arCamera.classList.remove("is-active");
}

async function captureArRecognition() {
  if (!arStream) {
    await startArCamera();
    return;
  }

  const image = getArFrameBase64();
  if (!image) {
    scanResultText.textContent = "还没有取到画面。";
    return;
  }
  await identifyPlantImage(image, "取景画面");
}

function normalizePosition(position) {
  if (Array.isArray(position)) return [Number(position[0]), Number(position[1])];
  if (!position) return null;
  if (typeof position.getLng === "function" && typeof position.getLat === "function") {
    return [Number(position.getLng()), Number(position.getLat())];
  }
  if ("lng" in position && "lat" in position) return [Number(position.lng), Number(position.lat)];
  return null;
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function distanceMeters(from, to) {
  if (!from || !to) return null;
  const earthRadius = 6371000;
  const lat1 = toRadians(from[1]);
  const lat2 = toRadians(to[1]);
  const deltaLat = toRadians(to[1] - from[1]);
  const deltaLng = toRadians(to[0] - from[0]);
  const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  return Math.round(earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function angleFromCenter(from, to) {
  if (!from || !to) return null;
  return (Math.atan2(to[1] - from[1], to[0] - from[0]) * 180) / Math.PI;
}

function chooseSprigIdForPoi(poi, index) {
  const text = `${poi.name || ""} ${poi.type || ""} ${poi.address || ""} ${poi.keyword || ""}`;
  const rules = [
    ["tea", /茶|农庄|田园|采摘|乡村|山庄/],
    ["fern", /森林|公园|湿地|溪|峡谷|自然|山/],
    ["orchid", /花|园艺|景区|风景|名胜|兰/],
    ["fisheye", /菜|餐|小吃|市场|农贸|田埂/],
    ["plantain", /路|街|道|村|广场|学校/],
    ["huangjing", /药|中医|养生|林下|古村/],
    ["clover", /民宿|咖啡|休闲|幸运|广场/],
    ["dandelion", /草|绿地|开放|停车|路边/],
  ];
  const match = rules.find(([, pattern]) => pattern.test(text));
  return match ? match[0] : sprigIds[index % sprigIds.length];
}

function formatMapDistance(distance) {
  if (!Number.isFinite(distance)) return "附近";
  if (distance < 1000) return `${Math.max(20, Math.round(distance / 10) * 10)}m`;
  return `${(distance / 1000).toFixed(1)}km`;
}

function loadAmapLoader() {
  if (window.AMapLoader) return Promise.resolve(window.AMapLoader);
  if (amapLoaderPromise) return amapLoaderPromise;

  amapLoaderPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://webapi.amap.com/loader.js";
    script.async = true;
    script.dataset.amapLoader = "true";
    script.onload = () => {
      if (window.AMapLoader) {
        resolve(window.AMapLoader);
      } else {
        reject(new Error("amap-loader-empty"));
      }
    };
    script.onerror = () => reject(new Error("amap-loader-failed"));
    document.head.appendChild(script);
  });

  return amapLoaderPromise;
}

function loadAmap() {
  if (!AMAP_CONFIG.key) return Promise.reject(new Error("missing-amap-key"));
  if (amapPromise) return amapPromise;
  if (AMAP_CONFIG.securityJsCode) {
    window._AMapSecurityConfig = {
      securityJsCode: AMAP_CONFIG.securityJsCode,
    };
  }

  amapPromise = loadAmapLoader()
    .then((loader) =>
      loader.load({
        key: AMAP_CONFIG.key,
        version: "2.0",
        plugins: ["AMap.Geolocation", "AMap.PlaceSearch"],
      }),
    )
    .catch((error) => {
      amapPromise = null;
      throw error;
    });
  return amapPromise;
}

function getAmapCenter(AMap) {
  return new Promise((resolve) => {
    const activeCenter = state.userLocation
      ? [state.userLocation.lng, state.userLocation.lat]
      : state.currentMapPack?.center || AMAP_CONFIG.fallbackCenter;
    const fallback = {
      center: activeCenter,
      label: getGardenLabel(),
    };

    try {
      AMap.plugin("AMap.Geolocation", () => {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 8000,
        });

        geolocation.getCurrentPosition((status, result) => {
          const center = normalizePosition(result?.position);
          if (status === "complete" && center) {
            resolve({
              center,
              label: "当前位置",
            });
            return;
          }
          resolve(fallback);
        });
      });
    } catch {
      resolve(fallback);
    }
  });
}

function requestAmapUserLocation() {
  return loadAmap().then(
    (AMap) =>
      new Promise((resolve, reject) => {
        try {
          AMap.plugin("AMap.Geolocation", () => {
            const geolocation = new AMap.Geolocation({
              enableHighAccuracy: true,
              timeout: 8000,
              GeoLocationFirst: true,
              needAddress: true,
            });

            geolocation.getCurrentPosition((status, result) => {
              const center = normalizePosition(result?.position);
              if (status === "complete" && center) {
                const address = result.addressComponent || {};
                resolve({
                  ...center,
                  province: address.province || "",
                  city: address.city || address.district || "",
                  adcode: address.adcode || "",
                  source: "amap",
                });
                return;
              }
              reject(new Error(result?.message || "amap-geolocation-failed"));
            });
          });
        } catch (error) {
          reject(error);
        }
      }),
  );
}

function requestBrowserUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("geolocation-unsupported"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
          source: "browser",
        });
      },
      (error) => reject(error || new Error("geolocation-failed")),
      {
        enableHighAccuracy: true,
        timeout: 9000,
        maximumAge: 60 * 1000,
      },
    );
  });
}

function searchAmapPois(AMap, center) {
  return new Promise((resolve) => {
    try {
      AMap.plugin("AMap.PlaceSearch", () => {
        const searches = AMAP_CONFIG.keywords.map(
          (keyword) =>
            new Promise((done) => {
              const placeSearch = new AMap.PlaceSearch({
                city: AMAP_CONFIG.city,
                pageSize: 8,
                extensions: "base",
              });
              placeSearch.searchNearBy(keyword, center, AMAP_CONFIG.radius, (status, result) => {
                if (status === "complete" && result?.poiList?.pois?.length) {
                  done(result.poiList.pois.map((poi) => ({ ...poi, keyword })));
                  return;
                }
                done([]);
              });
            }),
        );
        Promise.all(searches).then((results) => resolve(results.flat()));
      });
    } catch {
      resolve([]);
    }
  });
}

function normalizeAmapPois(pois, center) {
  const seen = new Set();
  return pois
    .filter((poi) => {
      const key = `${poi.id || poi.name}-${poi.address || ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 8)
    .map((poi, index) => {
      const location = normalizePosition(poi.location);
      const distance = Number(poi.distance) || distanceMeters(center, location) || 500 + index * 260;
      return {
        id: poi.id || `amap-${index}`,
        name: poi.name || "附近线索",
        type: poi.type || poi.keyword || "高德地点",
        address: poi.address || "当前位置附近",
        distance,
        sprigId: chooseSprigIdForPoi(poi, index),
        angle: angleFromCenter(center, location) ?? index * 47 - 120,
        source: "amap",
      };
    });
}

function radarPositionForPoi(poi, index) {
  const ratio = clamp((Number(poi.distance) || 400 + index * 220) / AMAP_CONFIG.radius, 0.18, 0.86);
  const angle = toRadians(poi.angle ?? index * 53 - 90);
  return {
    x: clamp(50 + Math.cos(angle) * ratio * 43, 8, 92),
    y: clamp(50 + Math.sin(angle) * ratio * 43, 10, 90),
  };
}

function renderMapPois(pois, statusText) {
  state.mapPois = pois.slice(0, 8);
  mapDots.replaceChildren();
  mapResults.replaceChildren();
  mapStatus.textContent = statusText;

  if (!state.mapPois.length) {
    const empty = document.createElement("p");
    empty.textContent = "附近暂时没有识别到线索。";
    mapResults.append(empty);
    return;
  }

  state.mapPois.forEach((poi, index) => {
    const sprig = sprigs[poi.sprigId] || sprigs.dandelion;
    const position = radarPositionForPoi(poi, index);
    const dot = document.createElement("button");
    dot.className = "map-dot";
    dot.type = "button";
    dot.dataset.poiIndex = String(index);
    dot.style.left = `${position.x}%`;
    dot.style.top = `${position.y}%`;
    dot.title = `${poi.name} · ${formatMapDistance(poi.distance)}`;

    const icon = document.createElement("img");
    icon.src = sprig.image;
    icon.alt = "";
    const label = document.createElement("span");
    label.textContent = sprig.plant;
    dot.append(icon, label);
    mapDots.append(dot);

    const item = document.createElement("button");
    item.className = "map-result";
    item.type = "button";
    item.dataset.poiIndex = String(index);
    const name = document.createElement("strong");
    name.textContent = poi.name;
    const meta = document.createElement("span");
    meta.textContent = `${sprig.name} · ${formatMapDistance(poi.distance)}`;
    item.append(name, meta);
    mapResults.append(item);
  });
}

function renderFallbackMapPois(statusText = "雷达待机，等待附近线索。") {
  const pack = state.currentMapPack || (state.explorationReady ? activeMapPack : null);
  if (!pack) {
    renderMapPois([], statusText);
    return;
  }
  const center = state.userLocation
    ? [state.userLocation.lng, state.userLocation.lat]
    : pack?.center || AMAP_CONFIG.fallbackCenter;
  const pois = (pack?.locations || []).map((poi, index) => ({
    id: poi.id || `pack-${pack.id}-${index}`,
    name: poi.name || "附近线索",
    type: poi.type || "地图包点位",
    address: poi.address || pack.locationLabel || pack.name,
    distance: Number.isFinite(poi.distance) ? poi.distance : distanceMeters(center, poi.position) || 500 + index * 260,
    sprigId: poi.sprigId || sprigIds[index % sprigIds.length],
    angle: angleFromCenter(center, poi.position) ?? index * 47 - 120,
    source: "map-pack",
  }));
  renderMapPois(pois, statusText);
}

function selectMapPoi(index) {
  const poi = state.mapPois[index];
  if (!poi) return;
  state.discoverySprigId = poi.sprigId;
  state.selectedMapPoi = poi;
  state.lastScan = null;
  updateCaptureUi();
  openPanel("panel-discover");
}

async function scanNearbySprigs() {
  discoverFromMap.disabled = true;
  mapStatus.textContent = "正在向地图取线索。";

  try {
    const AMap = await loadAmap();
    mapStatus.textContent = "正在读取附近。";
    const { center, label } = await getAmapCenter(AMap);
    mapStatus.textContent = "正在筛选植物线索。";
    const rawPois = await searchAmapPois(AMap, center);
    const pois = normalizeAmapPois(rawPois, center);
    if (!pois.length) throw new Error("no-amap-pois");
    renderMapPois(pois, `${label} · ${pois.length} 条线索`);
  } catch (error) {
    const gardenLabel = getGardenLabel();
    const fallbackText =
      error?.message === "missing-amap-key"
        ? `地图 key 还没接好，先看${gardenLabel}。`
        : `附近线索暂时没回来，先看${gardenLabel}。`;
    renderFallbackMapPois(fallbackText);
  } finally {
    discoverFromMap.disabled = false;
  }
}

function showKnowledgeForSprig(button, sprig) {
  closePanels();
  const behavior = chooseSprigBehavior(sprig, "tap");
  applySprigBehavior(button, behavior);
  button.classList.add("is-expressing");
  window.setTimeout(() => button.classList.remove("is-expressing"), 1900);
  knowledgePop.textContent = getNextSprigLine(sprig, behavior, "talk");
  anchorKnowledgePopToSprig(button);
  positionKnowledgePopOnSprig(button);
  requestSprigAnimation(sprig, behavior, "tap").then((payload) => {
    if (!payload?.configured) return;
    button.dataset.animationState = "requested";
  });

  infoImage.src = sprig.image;
  infoImage.alt = sprig.name;
  infoName.textContent = sprig.name;
  infoMeta.textContent = `${behavior.label} · ${sprig.npcRole || sprig.plant}`;
  showSprigInfo();
  hideSprigInfo();
}

function getNextSprigLine(sprig, behavior = {}, mode = "talk") {
  if (!sprig) return "花园里有一点小动静。";
  const weatherSceneLines = ["rain", "storm", "cloud", "mist", "snow"].includes(state.currentWeather?.scene)
    ? sprig.weatherLines || []
    : [];
  const touchLines = mode === "touch" ? sprig.touchLines || [] : [];
  const talkLines = mode === "touch" ? [] : sprig.voiceLines || [];
  const behaviorLine = behavior?.line && mode !== "touch" ? [behavior.line] : [];
  const fallbackLines = sprig.knowledge || [];
  const lines = [...touchLines, ...talkLines, ...weatherSceneLines, ...fallbackLines, ...behaviorLine].filter(Boolean);
  const key = `${sprig.id || sprig.name}-${mode}`;
  const currentIndex = state.knowledgeIndexes[key] || 0;
  const nextLine = lines[currentIndex % Math.max(1, lines.length)] || "我在这里。";
  state.knowledgeIndexes[key] = currentIndex + 1;
  return nextLine;
}

function anchorKnowledgePopToSprig(button) {
  knowledgePop.dataset.speakerSprig = button?.dataset?.sprig || "";
  knowledgePop.dataset.anchor = button ? "sprig" : "";
}

function showTouchForSprig(button, sprig) {
  if (!button || !sprig || button.classList.contains("is-hidden")) return;
  closePanels();
  knowledgePop.classList.add("is-hidden");
  knowledgePop.dataset.speakerSprig = "";
  knowledgePop.dataset.anchor = "";
  const behavior = { id: "touch", label: "心情变好", mood: "happy", line: "" };
  applySprigBehavior(button, behavior);
  button.classList.add("is-petted", "is-expressing");
  window.setTimeout(() => button.classList.remove("is-petted", "is-expressing"), 1500);
  infoImage.src = sprig.image;
  infoImage.alt = sprig.name;
  infoName.textContent = sprig.name;
  infoMeta.textContent = `${behavior.label} · ${sprig.personality || sprig.plant}`;
  hideSprigInfo();
}

function getSprigButtonById(id) {
  return Array.from(document.querySelectorAll(".sprig")).find((button) => button.dataset.sprig === id) || null;
}

function positionKnowledgePopOnSprig(button) {
  if (!button) return false;
  const stageRect = gardenStage.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  if (!stageRect.width || !buttonRect.width) return false;
  knowledgePop.classList.remove("is-hidden");
  const previousVisibility = knowledgePop.style.visibility;
  knowledgePop.style.visibility = "hidden";
  const popRect = knowledgePop.getBoundingClientRect();
  const padding = 12;
  const anchorX = buttonRect.left - stageRect.left + buttonRect.width / 2;
  const anchorY = buttonRect.top - stageRect.top + buttonRect.height * 0.04;
  const minLeft = popRect.width / 2 + padding;
  const maxLeft = stageRect.width - popRect.width / 2 - padding;
  const minTop = popRect.height + padding + 6;
  const maxTop = stageRect.height - buttonRect.height * 0.5;
  knowledgePop.style.left = `${clamp(anchorX, minLeft, Math.max(minLeft, maxLeft))}px`;
  knowledgePop.style.top = `${clamp(anchorY, minTop, Math.max(minTop, maxTop))}px`;
  knowledgePop.style.visibility = previousVisibility;
  return true;
}

function syncKnowledgePopSpeakerPosition() {
  if (knowledgePop.classList.contains("is-hidden")) return;
  const button = getSprigButtonById(knowledgePop.dataset.speakerSprig);
  if (button && !button.classList.contains("is-hidden")) positionKnowledgePopOnSprig(button);
}

function showSystemMessage(title, text, label = "System", sprigId = getDefaultSpeakingSprigId()) {
  closePanels();
  knowledgePop.textContent = text;
  const speakerId = sprigId || getDefaultSpeakingSprigId();
  const speakerButton = getSprigButtonById(speakerId) || getSprigButtonById(getDefaultSpeakingSprigId());
  anchorKnowledgePopToSprig(speakerButton);
  positionKnowledgePopOnSprig(speakerButton);

  const speakerSprig = atlasEntryById[speakerId] || sprigs[speakerId] || atlasEntryById[state.discoverySprigId] || atlasEntries[0] || sprigs.fern;
  infoImage.src = speakerSprig?.image || sprigs.fern.image;
  infoImage.alt = speakerSprig?.name || "";
  infoName.textContent = title;
  infoMeta.textContent = speakerSprig?.name || label;
  hideSprigInfo();
}

function showSprigSystemMessage(sprigId, title, text, label = "System") {
  closePanels();
  const sprig = atlasEntryById[sprigId] || sprigs[sprigId] || sprigs.plantain || atlasEntries[0];
  const button = getSprigButtonById(sprigId) || getSprigButtonById(getDefaultSpeakingSprigId());
  knowledgePop.textContent = text;
  anchorKnowledgePopToSprig(button);
  positionKnowledgePopOnSprig(button);

  infoImage.src = sprig?.image || "./assets/ui/seed.png";
  infoImage.alt = sprig?.name || "";
  infoName.textContent = title;
  infoMeta.textContent = label;
  hideSprigInfo();
}

function updateLevel(amount) {
  state.levelProgress = Math.min(100, state.levelProgress + amount);

  if (state.levelProgress >= 100) {
    levelValue.textContent = "2";
  }
}

function addSeeds(amount) {
  state.seeds += amount;
  seedValue.textContent = state.seeds;
  syncIdentityNurseryStatus();
  saveGardenProfile();
}

function getWeatherIcon(code = 0) {
  if ([0, 1].includes(code)) return "☼";
  if ([2, 3].includes(code)) return "◐";
  if (code >= 45 && code <= 48) return "≋";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "☂";
  if (code >= 71 && code <= 77) return "✦";
  if (code >= 95) return "⚡";
  return "☼";
}

function getWeatherLabel(code = 0) {
  if ([0, 1].includes(code)) return "晴";
  if ([2, 3].includes(code)) return "多云";
  if (code >= 45 && code <= 48) return "雾";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "小雨";
  if (code >= 71 && code <= 77) return "雪";
  if (code >= 95) return "雷雨";
  return "天气";
}

function getWeatherIconFromText(text = "") {
  if (/雷/.test(text)) return "⚡";
  if (/雪|冰雹/.test(text)) return "✦";
  if (/雨|阵雨|毛毛雨/.test(text)) return "☂";
  if (/雾|霾|沙|尘/.test(text)) return "≋";
  if (/多云|阴|云/.test(text)) return "◐";
  if (/晴/.test(text)) return "☼";
  return "◐";
}

function getWeatherSceneFromText(text = "") {
  if (/雷/.test(text)) return "storm";
  if (/雪|冰雹/.test(text)) return "snow";
  if (/多云|阴|云/.test(text)) return "cloud";
  if (/雨|阵雨|毛毛雨/.test(text)) return "rain";
  if (/雾|霾|沙|尘/.test(text)) return "mist";
  if (/晴/.test(text)) return "sunny";
  return "calm";
}

function getWeatherScene(code = 0, precipitation = 0) {
  if (code >= 95) return precipitation > 0.1 ? "storm" : "cloud";
  if (code >= 71 && code <= 77) return "snow";
  if (code === 0) return "sunny";
  if (code === 1) return "rainbow";
  if ([2, 3].includes(code)) return "cloud";
  if (((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) && precipitation <= 0.1) return "cloud";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || precipitation > 0.1) return "rain";
  if (code >= 45 && code <= 48) return "mist";
  return "calm";
}

function normalizeWeatherData(data = {}) {
  const weatherText = String(data.weatherText || "").trim();
  const temp = Math.round(Number(data.temperature));
  if (weatherText) {
    return {
      icon: getWeatherIconFromText(weatherText),
      label: weatherText,
      scene: getWeatherSceneFromText(weatherText),
      temperature: Number.isFinite(temp) ? temp : null,
      source: data.source || "weather",
      observedAt: data.observedAt || "",
    };
  }

  const code = Number(data.weatherCode || 0);
  const precipitation = Number(data.precipitation || 0);
  if ((code >= 51 && code <= 67 && precipitation <= 0.1) || (code >= 80 && code <= 82 && precipitation <= 0.1) || (code >= 95 && precipitation <= 0.1)) {
    return {
      icon: "◐",
      label: "多云",
      scene: "cloud",
      temperature: Number.isFinite(temp) ? temp : null,
      source: data.source || "open-meteo",
      observedAt: data.observedAt || "",
    };
  }

  return {
    icon: getWeatherIcon(code),
    label: getWeatherLabel(code),
    scene: getWeatherScene(code, precipitation),
    temperature: Number.isFinite(temp) ? temp : null,
    source: data.source || "open-meteo",
    observedAt: data.observedAt || "",
  };
}

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

function resizeWeatherCanvas() {
  if (!weatherCanvas) return null;
  const rect = gardenStage.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  if (weatherCanvasSize.width === width && weatherCanvasSize.height === height && weatherCanvasSize.ratio === ratio) {
    return weatherCanvas.getContext("2d");
  }
  weatherCanvasSize = { width, height, ratio };
  weatherCanvas.width = Math.round(width * ratio);
  weatherCanvas.height = Math.round(height * ratio);
  weatherCanvas.style.width = `${width}px`;
  weatherCanvas.style.height = `${height}px`;
  const context = weatherCanvas.getContext("2d");
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  weatherParticles = [];
  return context;
}

function makeWeatherParticle(scene) {
  const { width, height } = weatherCanvasSize;
  if (scene === "snow") {
    return {
      x: randomRange(0, width),
      y: randomRange(-height, height),
      size: randomRange(1.2, 2.8),
      speed: randomRange(12, 30),
      drift: randomRange(-6, 8),
      alpha: randomRange(0.42, 0.82),
      phase: randomRange(0, Math.PI * 2),
    };
  }
  const storm = scene === "storm";
  return {
    x: randomRange(-width * 0.15, width * 1.08),
    y: randomRange(-height, height),
    length: randomRange(storm ? 20 : 16, storm ? 34 : 28),
    speed: randomRange(storm ? 430 : 250, storm ? 640 : 410),
    drift: randomRange(storm ? -58 : -42, storm ? -30 : -24),
    alpha: randomRange(storm ? 0.34 : 0.3, storm ? 0.62 : 0.54),
    width: randomRange(1.05, storm ? 1.75 : 1.45),
    splash: Math.random() > 0.68,
  };
}

function seedWeatherParticles(scene) {
  const { width, height } = weatherCanvasSize;
  const area = width * height;
  const count = scene === "snow"
    ? Math.max(22, Math.round(area / 11500))
    : Math.max(scene === "storm" ? 92 : 76, Math.round(area / (scene === "storm" ? 3900 : 4700)));
  weatherParticles = Array.from({ length: count }, () => makeWeatherParticle(scene));
}

function stopWeatherAnimation() {
  if (weatherAnimationFrame) {
    cancelAnimationFrame(weatherAnimationFrame);
    weatherAnimationFrame = null;
  }
  const context = resizeWeatherCanvas();
  context?.clearRect(0, 0, weatherCanvasSize.width, weatherCanvasSize.height);
}

function drawWeatherFrame(previousTime = performance.now()) {
  const context = resizeWeatherCanvas();
  if (!context || !["rain", "storm", "snow"].includes(weatherScene)) {
    stopWeatherAnimation();
    return;
  }
  if (!weatherParticles.length) seedWeatherParticles(weatherScene);
  const now = performance.now();
  const delta = Math.min(0.04, Math.max(0.008, (now - previousTime) / 1000));
  const { width, height } = weatherCanvasSize;
  context.clearRect(0, 0, width, height);

  if (weatherScene === "snow") {
    weatherParticles.forEach((flake) => {
      flake.y += flake.speed * delta;
      flake.x += (flake.drift + Math.sin(now / 900 + flake.phase) * 8) * delta;
      if (flake.y > height + 8 || flake.x < -12 || flake.x > width + 12) {
        Object.assign(flake, makeWeatherParticle("snow"), { y: randomRange(-24, -4) });
      }
      context.fillStyle = `rgba(248, 255, 255, ${flake.alpha})`;
      context.fillRect(Math.round(flake.x), Math.round(flake.y), flake.size, flake.size);
    });
  } else {
    const storm = weatherScene === "storm";
    weatherParticles.forEach((drop) => {
      drop.y += drop.speed * delta;
      drop.x += drop.drift * delta;
      if (drop.y > height + drop.length || drop.x < -width * 0.2) {
        Object.assign(drop, makeWeatherParticle(weatherScene), { y: randomRange(-42, -6) });
      }
      context.strokeStyle = `rgba(76, 118, 156, ${drop.alpha})`;
      context.lineWidth = drop.width;
      context.beginPath();
      context.moveTo(Math.round(drop.x), Math.round(drop.y));
      context.lineTo(Math.round(drop.x - drop.length * 0.28), Math.round(drop.y + drop.length));
      context.stroke();
      if (drop.splash && drop.y > height * 0.58) {
        context.fillStyle = `rgba(83, 126, 164, ${drop.alpha * 0.55})`;
        context.fillRect(Math.round(drop.x - 2), Math.round(drop.y + drop.length), 4, 1);
      }
    });
    if (storm && Math.random() > 0.985) {
      context.fillStyle = "rgba(255, 246, 177, 0.16)";
      context.fillRect(0, 0, width, height);
    }
  }
  weatherAnimationFrame = requestAnimationFrame(() => drawWeatherFrame(now));
}

function startWeatherAnimation(scene) {
  resizeWeatherCanvas();
  seedWeatherParticles(scene);
  if (!weatherAnimationFrame) {
    weatherAnimationFrame = requestAnimationFrame(drawWeatherFrame);
  }
}

function setWeatherScene(scene = "calm") {
  if (weatherScene === scene) return;
  weatherScene = scene;
  gardenStage.dataset.weather = scene;
  if (["rain", "storm", "snow"].includes(scene)) {
    startWeatherAnimation(scene);
  } else {
    stopWeatherAnimation();
  }
}

function getWeatherFallback(label) {
  return {
    text: `${label} 天气读取中`,
    scene: "calm",
  };
}

function setWeatherIconScene(scene = "calm") {
  if (!weatherIcon) return;
  const normalizedScene = ["sunny", "rainbow", "cloud", "rain", "storm", "snow", "mist"].includes(scene)
    ? scene
    : "calm";
  weatherIcon.className = `weather-icon weather-icon--${normalizedScene}`;
  weatherIcon.dataset.scene = normalizedScene;
}

function renderWeatherFallback(label = state.onboarding.city || "杭州") {
  if (!weatherValue || !weatherIcon) return;
  const fallback = getWeatherFallback(label);
  setWeatherIconScene(fallback.scene);
  weatherValue.textContent = fallback.text;
  setWeatherScene(fallback.scene);
}

async function fetchWeatherFromLocal(lat, lng, cityCode = "") {
  if (window.location.protocol === "file:") return null;
  const params = new URLSearchParams({
    lat: String(lat),
    lng: String(lng),
  });
  if (cityCode) params.set("city", cityCode);
  const response = await fetch(`/api/weather?${params.toString()}`);
  if (!response.ok) throw new Error("local-weather-failed");
  return response.json();
}

async function fetchWeatherFromAmap(cityCode = "") {
  if (!AMAP_CONFIG.key || !cityCode) return null;
  const params = new URLSearchParams({
    key: AMAP_CONFIG.key,
    city: cityCode,
    extensions: "base",
    output: "JSON",
  });
  const response = await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?${params.toString()}`);
  if (!response.ok) throw new Error("amap-weather-failed");
  const payload = await response.json();
  const live = payload?.lives?.[0];
  if (payload.status !== "1" || !live) return null;
  const temperature = Number(live.temperature);
  return {
    source: "amap",
    weatherText: live.weather || "",
    temperature: Number.isFinite(temperature) ? Math.round(temperature) : null,
    observedAt: live.reporttime || "",
  };
}

async function fetchWeatherFromOpenMeteo(lat, lng) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    current: "temperature_2m,weather_code,precipitation",
    timezone: "auto",
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!response.ok) throw new Error("weather-failed");
  const data = await response.json();
  return {
    source: "open-meteo",
    temperature: Math.round(Number(data.current?.temperature_2m)),
    weatherCode: Number(data.current?.weather_code || 0),
    precipitation: Number(data.current?.precipitation || 0),
    observedAt: data.current?.time || "",
  };
}

async function fetchWeatherWithFallbacks(lat, lng, cityCode = "") {
  const attempts = [
    ["local", () => fetchWeatherFromLocal(lat, lng, cityCode)],
    ["amap", () => fetchWeatherFromAmap(cityCode)],
    ["open-meteo", () => fetchWeatherFromOpenMeteo(lat, lng)],
  ];
  const errors = [];

  for (const [source, fetcher] of attempts) {
    try {
      const data = await fetcher();
      if (data) return data;
    } catch (error) {
      errors.push(`${source}:${error?.message || "failed"}`);
    }
  }

  throw new Error(errors.join(",") || "weather-unavailable");
}

async function updateWeather(location = null) {
  if (!weatherPill) return;
  const cityCenter = getSelectedCityCenter();
  const lng = Number(location?.lng ?? cityCenter?.lng ?? 120.1551);
  const lat = Number(location?.lat ?? cityCenter?.lat ?? 30.2741);
  const label = state.onboarding.city || cityCenter?.city || "杭州";
  const cityCode = cityCenter?.adcode || "";
  setWeatherIconScene("calm");
  weatherValue.textContent = `${label} 天气读取中`;
  setWeatherScene("calm");
  try {
    const data = await fetchWeatherWithFallbacks(lat, lng, cityCode);
    const weather = normalizeWeatherData(data);
    state.currentWeather = weather;
    setWeatherIconScene(weather.scene);
    weatherValue.textContent = Number.isFinite(weather.temperature)
      ? `${label} ${weather.label} ${weather.temperature}°`
      : `${label} ${weather.label} --°`;
    weatherPill.title = `天气源：${weather.source}${weather.observedAt ? ` · ${weather.observedAt}` : ""}`;
    setWeatherScene(weather.scene);
    runSprigDailyLife("weather");
  } catch {
    state.currentWeather = { label: "暂不可用", scene: "calm", temperature: null, source: "", observedAt: "" };
    setWeatherIconScene("calm");
    weatherValue.textContent = `${label} 天气暂不可用`;
    weatherPill.title = "天气源暂不可用";
    setWeatherScene("calm");
    runSprigDailyLife("weather");
  }
}

function todayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function syncDailyCheckin() {
  const claimed = state.lastDailyCheckin === todayKey();
  if (dailyCheckinModalButton) {
    dailyCheckinModalButton.disabled = claimed;
    dailyCheckinModalButton.textContent = claimed ? "已领取" : "领取";
  }
  if (dailyCheckinReward) {
    const seedBonus = state.dailyStreak > 0 && (state.dailyStreak + 1) % 3 === 0;
    dailyCheckinReward.innerHTML = seedBonus
      ? `<span class="daily-pixel-icon daily-pixel-icon--seed" aria-hidden="true"><img src="./assets/ui/icon-seed.svg" alt="" /></span><strong>体力 +6 · 种子 +2</strong>`
      : `<span class="daily-pixel-icon daily-pixel-icon--energy" aria-hidden="true"><img src="./assets/ui/daily-icons/task.png" alt="" /></span><strong>体力 +6</strong>`;
  }
}

function claimDailyCheckin() {
  if (state.lastDailyCheckin === todayKey()) {
    dailyCheckinModal?.classList.add("is-hidden");
    return;
  }
  state.dailyStreak += 1;
  state.lastDailyCheckin = todayKey();
  localStorage.setItem("sprigDailyStreak", String(state.dailyStreak));
  localStorage.setItem("sprigLastDailyCheckin", state.lastDailyCheckin);
  localStorage.setItem(CHECKIN_PROMPT_KEY, state.lastDailyCheckin);
  setStamina(Math.min(MAX_STAMINA, state.stamina + 6));
  if (state.dailyStreak % 3 === 0) addSeeds(2);
  syncDailyCheckin();
  dailyCheckinModal?.classList.add("is-hidden");
  showSystemMessage("签到完成", state.dailyStreak % 3 === 0 ? "体力回来了，还多拿到 2 颗种子。" : "体力回来了，今天也能出门看看。", "今日记分板");
}

function maybeShowDailyCheckinPrompt() {
  if (!dailyCheckinModal) return;
  const today = todayKey();
  const hasProfile = Boolean(localStorage.getItem(PROFILE_KEY));
  const alreadyPrompted = localStorage.getItem(CHECKIN_PROMPT_KEY) === today;
  const alreadyClaimed = state.lastDailyCheckin === today;
  if (!hasProfile || alreadyPrompted || alreadyClaimed) return;
  syncDailyCheckin();
  dailyCheckinModal.classList.remove("is-hidden");
  dailyCheckinModalButton?.focus({ preventScroll: true });
}

function serializeGardenProfile() {
  return {
    playerId: state.playerId,
    gardenName: state.gardenName,
    onboarding: state.onboarding,
    user: state.user,
    seeds: state.seeds,
    stamina: state.stamina,
    levelProgress: state.levelProgress,
    unlockedSprigs: Array.from(state.unlockedSprigs),
    gardenSprigs: Array.from(state.gardenSprigs),
    expeditionSquadIds: state.expeditionSquadIds,
    discoverySprigId: state.discoverySprigId,
    specialties: state.specialties,
    scanRecords: state.scanRecords,
    lastScan: state.lastScan,
    sprigAnimationTasks: state.sprigAnimationTasks,
    firstLoginAt: state.firstLoginAt || "",
    lastLoginAt: state.lastLoginAt || "",
    loginCount: state.loginCount || 0,
    dailyStreak: state.dailyStreak,
    lastDailyCheckin: state.lastDailyCheckin,
    claimedAtlasLevels: Array.from(state.claimedAtlasLevels),
    nurserySprigId: state.nurserySprigId,
    nurseryStartedAt: state.nurseryStartedAt,
    nurseryEndAt: state.nurseryEndAt,
    expeditionDuration: state.expeditionDuration,
    expeditionEndAt: state.expeditionEndAt,
    savedAt: Date.now(),
  };
}

function applyGardenProfile(profile = {}) {
  state.gardenName = profile.gardenName || state.gardenName;
  state.onboarding = { ...state.onboarding, ...(profile.onboarding || {}) };
  state.user = { ...state.user, ...(profile.user || {}) };
  state.seeds = Number.isFinite(Number(profile.seeds)) ? Number(profile.seeds) : state.seeds;
  state.stamina = Number.isFinite(Number(profile.stamina)) ? Number(profile.stamina) : state.stamina;
  state.levelProgress = Number.isFinite(Number(profile.levelProgress)) ? Number(profile.levelProgress) : state.levelProgress;
  state.unlockedSprigs = new Set(Array.isArray(profile.unlockedSprigs) ? profile.unlockedSprigs : Array.from(state.unlockedSprigs));
  state.gardenSprigs = new Set(Array.isArray(profile.gardenSprigs) ? profile.gardenSprigs : Array.from(state.gardenSprigs));
  state.expeditionSquadIds = Array.isArray(profile.expeditionSquadIds)
    ? profile.expeditionSquadIds.filter((id) => atlasEntryById[id]).slice(0, 3)
    : state.expeditionSquadIds;
  state.discoverySprigId = profile.discoverySprigId || state.discoverySprigId;
  state.specialties = Array.isArray(profile.specialties) ? profile.specialties : state.specialties;
  state.scanRecords = Array.isArray(profile.scanRecords) ? profile.scanRecords.slice(0, 4) : state.scanRecords;
  state.lastScan = profile.lastScan || state.lastScan;
  state.sprigAnimationTasks = profile.sprigAnimationTasks && typeof profile.sprigAnimationTasks === "object" ? profile.sprigAnimationTasks : state.sprigAnimationTasks;
  state.firstLoginAt = profile.firstLoginAt || state.firstLoginAt || "";
  state.lastLoginAt = profile.lastLoginAt || state.lastLoginAt || "";
  state.loginCount = Number.isFinite(Number(profile.loginCount)) ? Number(profile.loginCount) : state.loginCount || 0;
  state.dailyStreak = Number.isFinite(Number(profile.dailyStreak)) ? Number(profile.dailyStreak) : state.dailyStreak;
  state.lastDailyCheckin = profile.lastDailyCheckin || state.lastDailyCheckin;
  state.claimedAtlasLevels = new Set(Array.isArray(profile.claimedAtlasLevels) ? profile.claimedAtlasLevels.map(String) : Array.from(state.claimedAtlasLevels));
  state.nurserySprigId = profile.nurserySprigId || state.nurserySprigId;
  state.nurseryStartedAt = Number(profile.nurseryStartedAt || state.nurseryStartedAt || 0);
  state.nurseryEndAt = Number(profile.nurseryEndAt || state.nurseryEndAt || 0);
  state.expeditionDuration = profile.expeditionDuration || state.expeditionDuration;
  state.expeditionEndAt = Number(profile.expeditionEndAt || state.expeditionEndAt || 0);

  localStorage.setItem(NURSERY_ID_KEY, state.nurserySprigId);
  localStorage.setItem(NURSERY_START_KEY, String(state.nurseryStartedAt));
  localStorage.setItem(NURSERY_END_KEY, String(state.nurseryEndAt));
  localStorage.setItem("sprigDailyStreak", String(state.dailyStreak));
  localStorage.setItem("sprigLastDailyCheckin", state.lastDailyCheckin);
  if (state.expeditionEndAt > Date.now()) {
    localStorage.setItem("sprigExpeditionEndAt", String(state.expeditionEndAt));
    localStorage.setItem("sprigExpeditionDuration", state.expeditionDuration);
  }

  gardenNameInput.value = state.gardenName;
  languageSelect.value = state.onboarding.language || "zh-CN";
  applyLanguage();
  landingTitle.textContent = state.gardenName;
  syncUserHud();
  syncGardenSprigs();
  renderAtlas();
  renderSpecialtyShelf();
  updateCaptureUi();
  renderNurseryState();
  setStamina(state.stamina);
  seedValue.textContent = state.seeds;
  syncIdentityNurseryStatus();
}

async function saveProfileToServer(profile) {
  if (window.location.protocol === "file:") return;
  try {
    await fetch(`/api/profile?playerId=${encodeURIComponent(state.playerId)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile }),
    });
  } catch {
    // Local storage remains the playable fallback when the dev server is unavailable.
  }
}

async function restoreGardenProfileFromServer() {
  if (window.location.protocol === "file:") return false;
  try {
    const response = await fetch(`/api/profile?playerId=${encodeURIComponent(state.playerId)}`);
    if (!response.ok) return false;
    const payload = await response.json();
    if (!payload.profile) return false;
    applyGardenProfile(payload.profile);
    localStorage.setItem(PROFILE_KEY, JSON.stringify(payload.profile));
    return true;
  } catch {
    return false;
  }
}

async function recordPlayerLogin() {
  if (window.location.protocol === "file:") return;
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playerId: state.playerId,
        profile: serializeGardenProfile(),
      }),
    });
    if (!response.ok) return;
    const payload = await response.json();
    if (payload.profile) {
      state.firstLoginAt = payload.profile.firstLoginAt || state.firstLoginAt || "";
      state.lastLoginAt = payload.profile.lastLoginAt || state.lastLoginAt || "";
      state.loginCount = Number(payload.profile.loginCount || state.loginCount || 0);
      localStorage.setItem(PROFILE_KEY, JSON.stringify(payload.profile));
    }
  } catch {
    // The garden still works offline; login analytics resumes when the server is available.
  }
}

function saveGardenProfile() {
  const profile = serializeGardenProfile();
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  saveProfileToServer(profile);
}

function restoreGardenProfileForLogin() {
  const raw = localStorage.getItem(PROFILE_KEY);
  if (!raw) return false;
  try {
    const profile = JSON.parse(raw);
    applyGardenProfile(profile);
    nameScreen.classList.add("is-hidden");
    loginScreen.classList.remove("is-hidden");
    updateWeather();
    return true;
  } catch {
    localStorage.removeItem(PROFILE_KEY);
    return false;
  }
}

function setStamina(value) {
  state.stamina = Math.max(0, Math.min(MAX_STAMINA, value));
  const staminaPercent = (state.stamina / MAX_STAMINA) * 100;
  staminaValue.textContent = state.stamina;
  staminaBar.style.width = `${staminaPercent}%`;
  expeditionStaminaValue.textContent = `${state.stamina} / ${MAX_STAMINA}`;
  expeditionStaminaBar.style.width = `${staminaPercent}%`;
  saveGardenProfile();
}

function updateGoalCount() {
  if (!goalCount) return;
  const dailyIds = ["capture", "dispatch", "atlas"];
  const left = dailyIds.filter((id) => !state.completedTasks.has(id)).length;
  goalCount.textContent = `今日还有 ${left} 个任务`;
}

function setQuestProgress(taskId, value) {
  const targets = {
    capture: [captureTask],
    dispatch: [dispatchTask],
    atlas: [atlasTask],
  }[taskId] || [];

  targets.forEach((target) => {
    if (target) target.textContent = value;
  });
}

function formatClock(date) {
  const dayLabels = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  return `${dayLabels[date.getDay()]}\u00A0\u00A0${String(date.getHours()).padStart(2, "0")} ${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatRemaining(seconds) {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const hours = Math.floor(safeSeconds / 3600);
  const mins = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;
  return `剩余 ${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function formatDuration(seconds) {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const hours = Math.floor(safeSeconds / 3600);
  const mins = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function syncGameClock() {
  gameClock.textContent = formatClock(new Date());
}

function isQuestComplete(card) {
  const progress = card?.querySelector("div > span")?.textContent.trim();
  if (!progress) return false;

  const match = progress.match(/^(\d+)\s*\/\s*(\d+)$/);
  return Boolean(match && Number(match[1]) >= Number(match[2]));
}

function syncQuestClaims() {
  questClaimButtons.forEach((button) => {
    const isClaimed = state.completedTasks.has(button.dataset.claim);
    const canClaim = isQuestComplete(button.closest(".quest-card"));
    button.disabled = isClaimed || !canClaim;
    button.classList.toggle("is-ready", canClaim && !isClaimed);
    button.classList.toggle("is-claimed", isClaimed);
    button.textContent = isClaimed ? "✓" : "+";
    button.setAttribute("aria-label", isClaimed ? "奖励已领取" : "领取奖励");
  });
}

function getSelectedExpedition() {
  return expeditionDurations[state.expeditionDuration];
}

function requestUserLocation() {
  return requestAmapUserLocation().catch(() => requestBrowserUserLocation());
}

function getKnownCityExplorationCandidates() {
  const candidates = [];
  const pushCenter = (center, reason = "known") => {
    if (!center) return;
    const key = `${center.province || ""}:${center.city || ""}:${center.lng}:${center.lat}`;
    if (candidates.some((item) => item.key === key)) return;
    candidates.push({
      key,
      reason,
      province: center.province || "",
      city: center.city || "",
      lng: Number(center.lng),
      lat: Number(center.lat),
      adcode: center.adcode || "",
      source: reason,
    });
  };

  pushCenter(getCityCenterByRegion(state.onboarding.province, state.onboarding.city), "onboarding-city");
  state.scanRecords.forEach((record) => {
    pushCenter(getCityCenterByRegion(record.province, record.city), "scan-city");
    pushCenter(getCityCenterFromText(`${record.title} ${record.meta} ${record.text}`), "scan-text");
  });
  pushCenter(getSelectedCityCenter(), "selected-city");
  return candidates;
}

function enterKnownCityExploration(candidate) {
  if (!candidate) return false;
  const userLocation = { lng: candidate.lng, lat: candidate.lat, source: candidate.source };
  const match = findNearestMapPack(userLocation, mapPacks);
  if (match.mapPack) {
    enterMapPack(match.mapPack, match.userLocation || userLocation, candidate.reason);
    return true;
  }
  enterUnknownGarden(match.userLocation || userLocation, candidate.city ? `${candidate.city}野外探索` : "野外探索");
  return true;
}

function applyGeneratedSprig(generated) {
  state.generatedSprig = generated;
  if (!generated?.sprig) return;
  if (!generated.temporary && atlasEntryById[generated.sprig.id]) {
    state.discoverySprigId = generated.sprig.id;
  }
}

function enterMapPack(mapPack, userLocation = null, mode = "manual") {
  state.currentMapPack = mapPack;
  state.userLocation = userLocation;
  state.explorationMode = mode;
  state.explorationReady = true;
  state.locationError = "";
  state.user.location = mapPack.locationLabel || mapPack.name;
  rebuildActiveMapPack(mapPack);
  applyGeneratedSprig(generateSprigFromLocation(userLocation, mapPack));
  clearMapPackPicker();
  mapTitle.textContent = `${mapPack.name}雷达`;
  syncUserHud();
  syncExpeditionChoice();
  renderFallbackMapPois(`${mapPack.name} · ${getMapPackStatusLabel(mapPack.status)}`);
}

function enterUnknownGarden(userLocation = null, label = "未知花园") {
  state.currentMapPack = null;
  state.userLocation = userLocation;
  state.explorationMode = "unknown";
  state.explorationReady = true;
  state.locationError = "";
  state.user.location = label;
  applyGeneratedSprig(generateSprigFromLocation(userLocation, null));
  clearMapPackPicker();
  mapTitle.textContent = "野外探索雷达";
  syncUserHud();
  syncExpeditionChoice();
  renderMapPois([], "你附近还没有完整地图包。");
}

async function startLocationExploration() {
  if (state.dispatched) return;
  dispatchButton.disabled = true;
  dispatchButton.textContent = "读取位置";
  expeditionTitle.textContent = "读取你所在的花园";
  expeditionTimer.textContent = "正在定位";
  expeditionText.textContent = "正在寻找附近的种种。";
  clearMapPackPicker();

  try {
    const userLocation = await requestUserLocation();
    const inferred = userLocation.city
      ? getCityCenterFromText(`${userLocation.province || ""} ${userLocation.city || ""}`) || inferOnboardingRegionFromLocation(userLocation)
      : inferOnboardingRegionFromLocation(userLocation);
    if (inferred) {
      state.onboarding = {
        ...state.onboarding,
        province: inferred.province,
        city: inferred.city,
        located: true,
      };
      updateWeather(userLocation);
    }
    const match = findNearestMapPack(userLocation, mapPacks);
    if (match.mapPack) {
      enterMapPack(match.mapPack, match.userLocation || userLocation, "located");
      return;
    }
    enterUnknownGarden(match.userLocation || userLocation);
  } catch (error) {
    const knownCandidate = getKnownCityExplorationCandidates()[0];
    if (enterKnownCityExploration(knownCandidate)) {
      expeditionTimer.textContent = "已读取城市";
      expeditionText.textContent = `${knownCandidate.city || "已记录城市"}附近可派出小队。`;
      return;
    }
    state.explorationReady = false;
    state.explorationMode = "manual";
    state.locationError = error?.message || "geolocation-failed";
    state.currentMapPack = null;
    state.userLocation = null;
    state.generatedSprig = null;
    mapTitle.textContent = "附近花园雷达";
    expeditionTitle.textContent = "选择一片花园开始探险";
    expeditionTimer.textContent = "等待选择";
    expeditionText.textContent = "位置没读到，先手动选一片花园。";
    renderMapPackPicker("位置没读到，先选花园。");
  } finally {
    dispatchButton.disabled = false;
    syncExpeditionChoice();
  }
}

function syncExpeditionChoice() {
  const selected = getSelectedExpedition();
  const squadCount = getSelectedExpeditionSquadEntries().length;
  const squadLabel = squadCount ? `${squadCount}位种种` : "选择种种";
  durationButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.duration === state.expeditionDuration);
    button.disabled = state.dispatched;
  });
  const generated = state.generatedSprig?.sprig;
  const pack = state.currentMapPack;

  dispatchButton.classList.toggle("is-ready", Boolean(state.explorationReady && !state.dispatched));
  if (!state.dispatched) {
    dispatchButton.textContent = state.explorationReady ? "派出探险" : "开始探险";
    if (pack) {
      expeditionTitle.textContent = getMapPackRegionLabel(pack);
      expeditionPlanText.textContent = `${squadLabel} · ${selected.label}`;
      expeditionTimer.textContent = "可立即出发";
      expeditionText.textContent = generated?.name
        ? `已读取附近花园。${generated.name} 可以一起去寻找风物。`
        : "已读取附近花园，可以派出小队寻找风物。";
      return;
    }

    if (state.explorationMode === "unknown") {
      expeditionTitle.textContent = "野外探索";
      expeditionPlanText.textContent = `${squadLabel} · ${selected.label}`;
      expeditionTimer.textContent = "可立即出发";
      expeditionText.textContent = generated?.name
        ? `这里还没有完整记录。${generated.name} 会先带回一点线索。`
        : "这里还没有完整记录，先派出小队带回线索。";
      return;
    }

    expeditionTitle.textContent = state.explorationMode === "manual" ? "选择一片花园开始探险" : "读取你所在的花园";
    expeditionPlanText.textContent = `选择花园 · ${squadLabel} · ${selected.label}`;
    expeditionTimer.textContent = state.explorationMode === "manual" ? "等待选择" : "等待定位";
    expeditionText.textContent =
      state.explorationMode === "manual"
        ? "位置没读到，先手动选一片花园。"
        : "正在寻找附近的种种。";
  }
}

function syncUserHud() {
  hudName.textContent = state.user.name;
  hudLocation.textContent = state.user.location;
  renderExpeditionSquad();
  renderIdentityCard();
}

function getCopy() {
  return localeCopy[state.onboarding.language] || localeCopy["zh-CN"];
}

function getRuntimeCopy() {
  return runtimeLocaleCopy[state.onboarding.language] || runtimeLocaleCopy["zh-CN"];
}

function setOptionalText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function applyLanguage() {
  const copy = getCopy();
  const runtime = getRuntimeCopy();
  document.documentElement.lang = state.onboarding.language;
  setupSteps[0].querySelector("h1").textContent = copy.nameTitle;
  const nameIntro = setupSteps[0].querySelector("p");
  if (nameIntro) nameIntro.textContent = copy.nameText;
  setupSteps[0].querySelector("label span").textContent = copy.nameLabel;
  languageSelect.closest("label").querySelector("span").textContent = copy.languageLabel;
  setupSteps[1].querySelector("h1").textContent = copy.regionTitle;
  setupSteps[1].querySelector("p").textContent = copy.regionText;
  locateOnboardingButton.lastChild.textContent = copy.locate;
  if (!state.onboarding.located) locationPermissionStatus.textContent = copy.locateIdle;
  regionSelect.closest("label").querySelector("span").textContent = copy.province;
  citySelect.closest("label").querySelector("span").textContent = copy.city;
  setupSteps[2].querySelector("h1").textContent = copy.birthdayTitle;
  setupSteps[2].querySelector("p").textContent = copy.birthdayText;
  setupPrev.textContent = copy.prev;
  setupNext.textContent = copy.next;
  setupSubmit.textContent = copy.submit;
  document.querySelector(".identity-topbar h2").textContent = runtime.identityTitle;
  if (specialtyBagTitle) specialtyBagTitle.textContent = state.onboarding.language === "en" ? "Terrain" : "地貌";
  document.querySelector(".seed-pouch-section h3").textContent = state.onboarding.language === "en" ? "Seed Pouch" : "种子袋";
  setOptionalText(".house-section h3", runtime.house);
  setOptionalText(".relation-section h3", runtime.sprigFriends);
  setOptionalText(".story-section h3", runtime.story);
  const growthTitle = document.querySelector(".growth-card h4");
  if (growthTitle) growthTitle.textContent = runtime.atlasShort;
  document.querySelector(".garden-action-button--expedition b").textContent = runtime.expeditionLabel;
  editIdentityName.setAttribute("aria-label", runtime.edit);
  if (saveIdentityName) saveIdentityName.textContent = runtime.save;
  if (!state.explorationReady && !state.dispatched) {
    expeditionTitle.textContent = runtime.expeditionIdle;
    dispatchButton.textContent = runtime.expeditionButton;
  }
  renderExpeditionLoot(null);
  renderExpeditionSquad();
  renderIdentityCard();
  setOnboardingStep(getOnboardingStep());
}

function getBirthdayParts(value) {
  if (!value) return null;
  const match = String(value).trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!year || month < 1 || month > 12 || day < 1 || day > 31) return null;
  return { year, month, day };
}

function formatBirthday(value) {
  const parts = getBirthdayParts(value);
  if (!parts) return state.onboarding.language === "en" ? "Not set" : "等待填写";
  if (state.onboarding.language === "en") return `${parts.month}/${parts.day}`;
  if (state.onboarding.language === "ja") return `${parts.month}月${parts.day}日`;
  return `${parts.month}月${parts.day}日`;
}

function getPassportId() {
  const source = `${state.gardenName}|${state.user.name}|${state.onboarding.province}|${state.onboarding.city}|${state.onboarding.birthday}`;
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) {
    hash = (hash * 31 + source.charCodeAt(index)) % 999999;
  }
  return `SG-${String(hash || 1).padStart(6, "0")}`;
}

function identityProfileLabels(runtime) {
  const labels = identityName.closest(".identity-profile").querySelectorAll("li b");
  const values = [runtime.gardenLabel, runtime.birthdayLabel, runtime.regionLabel, runtime.houseLabel];
  labels.forEach((label, index) => {
    label.textContent = values[index] || label.textContent;
  });
}

function renderIdentityCard() {
  if (!identityName) return;
  const runtime = getRuntimeCopy();
  const unlocked = getUnlockedEntries();
  const { milestone, percent } = getAtlasGrowthProgress(unlocked.length);
  identityName.textContent = state.user.name;
  identityNameInput.value = state.user.name;
  const defaultBio =
    state.onboarding.language === "en"
      ? `A garden keeper from ${state.onboarding.city || "nearby"}.`
      : `${state.onboarding.city || "附近"}的花园观察员。`;
  const signature = state.user.bio || defaultBio;
  if (identityBioInput) identityBioInput.value = signature;
  identityGardenName.textContent = state.gardenName;
  identityBirthday.textContent = formatBirthday(state.onboarding.birthday);
  identityLocation.textContent = getOnboardingRegionLabel();
  identityHouse.textContent = state.onboarding.house || "芽屋";
  const passportId = getPassportId();
  identityPassportId.textContent = passportId;
  passportShareName.textContent = state.user.name;
  passportShareId.textContent = `ID ${passportId}`;
  passportShareRegion.textContent = getOnboardingRegionLabel();
  identityProfileLabels(runtime);
  identityBio.textContent = signature;
  if (identityWorldLine) {
    identityWorldLine.textContent =
      state.onboarding.language === "en"
        ? `You wandered into Sprig Garden by chance, and the garden stamped this passport for you.`
        : `你恰巧进入了种种世界，花园把这本护照认给了你。`;
  }
  const starterSprig = getBirthdaySeasonStarter().sprig;
  passportStampImage.src = starterSprig.image;
  passportStampImage.alt = starterSprig.name;
  identityPassportStage.textContent = `Lv.${milestone.level} · ${getPassportStageName(milestone.level)}`;
  if (identityStory) {
    identityStory.textContent =
      state.onboarding.language === "en"
        ? `${state.gardenName} woke up from ${state.onboarding.terrain || "a patch of grass"}. The first friend is ${starterSprig.name}.`
        : `${state.gardenName}从${state.onboarding.terrain || "一片草地"}醒来，第一位伙伴是${starterSprig.name}。`;
  }
  if (identityHouseText) {
    identityHouseText.innerHTML =
      state.onboarding.language === "en"
        ? `Type: ${state.onboarding.house || "Sprout House"}<br />Terrain: ${state.onboarding.terrain || "Sprig Garden"}<br />Visible to friends: ${getOnboardingRegionLabel()}`
        : `类型：${state.onboarding.house || "芽屋"}<br />地貌：${state.onboarding.terrain || "种种大世界"}<br />好友可见：${getOnboardingRegionLabel()}`;
  }
  identityAtlasCount.textContent = `Lv.${milestone.level}`;
  identityAtlasText.textContent = `Lv.${milestone.level} · ${getPassportStageName(milestone.level)}`;
  identityAtlasBar.style.width = `${percent}%`;
  identityFriendList.replaceChildren(
    ...unlocked.slice(0, 4).map((entry) => {
      const item = document.createElement("article");
      item.innerHTML = `<img src="${entry.image}" alt="" /><b>${entry.name}</b><span>${entry.npcRole || "花园伙伴"}</span>`;
      return item;
    }),
  );
  identitySeedCount.textContent = state.onboarding.language === "en" ? `${state.seeds} seeds` : `${state.seeds} 颗种子`;
  syncIdentityNurseryStatus();
  renderSpecialtyShelf();
}

function syncIdentityNurseryStatus() {
  if (!identityNurseryStatus) return;
  const sprig = atlasEntryById[state.nurserySprigId];
  const remaining = Math.max(0, Math.ceil((state.nurseryEndAt - Date.now()) / 1000));
  if (sprig && remaining > 0) {
    identityNurseryStatus.textContent =
      state.onboarding.language === "en"
        ? `Growing: ${formatDuration(remaining)}.`
        : `正在醒来：${formatDuration(remaining)}。`;
    return;
  }
  identityNurseryStatus.textContent =
    state.onboarding.language === "en"
      ? "Drag into greenhouse."
      : "拖进温室。";
}

async function setupWechatShare(payload) {
  if (!window.wx) return false;
  try {
    const response = await fetch(`/api/wechat-signature?url=${encodeURIComponent(location.href.split("#")[0])}`);
    if (!response.ok) throw new Error("wechat-signature-missing");
    const config = await response.json();
    window.wx.config({
      debug: false,
      appId: config.appId,
      timestamp: config.timestamp,
      nonceStr: config.nonceStr,
      signature: config.signature,
      jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"],
    });
    window.wx.ready(() => {
      window.wx.updateTimelineShareData(payload);
      window.wx.updateAppMessageShareData(payload);
    });
    return true;
  } catch {
    return false;
  }
}

async function sharePassportCard() {
  renderIdentityCard();
  passportShareCard.classList.remove("is-hidden");
  passportShareCard.focus?.({ preventScroll: true });
  const payload = {
    title: `${state.user.name}的种种护照`,
    text: `${state.gardenName} · ${getOnboardingRegionLabel()} · ${getPassportId()}`,
    url: location.href,
  };
  await setupWechatShare({
    title: payload.title,
    desc: payload.text,
    link: payload.url,
    imgUrl: new URL(passportStampImage.getAttribute("src"), location.href).href,
  });

  try {
    if (navigator.share) {
      await navigator.share(payload);
      return;
    }
    await navigator.clipboard?.writeText(`${payload.title}\n${payload.text}\n${payload.url}`);
  } catch {
    // Keep the passport card visible so the player can still save or screenshot it.
  }
}

function renderSpecialtyShelf() {
  if (!specialtyShelf) return;
  const discoveredNames = new Set(state.specialties.map((item) => item.name));
  renderLandformOverview(discoveredNames);
  specialtyShelf.replaceChildren(
    ...specialtyRegions.map((region) => {
      const collected = sortSpecialties(state.specialties.filter((item) => getSpecialtyRegion(item).id === region.id)).slice(0, 4);
      const locked = specialtyPool.filter((item) => !discoveredNames.has(item.name) && getSpecialtyRegion(item).id === region.id).slice(0, 3);
      return createSpecialtyRegionSection(region, collected, locked);
    }),
  );
  selectLandformRegion(specialtyRegions[currentLandformIndex]?.id || specialtyRegions[0]?.id, { scrollSection: false });
}

function renderLandformOverview(discoveredNames = new Set()) {
  if (!landformRegionList) return;
  const visibleRegions = specialtyRegions;
  currentLandformIndex = Math.min(currentLandformIndex, visibleRegions.length - 1);
  landformRegionList.replaceChildren(
    ...visibleRegions.map((region, index) => {
      const collected = state.specialties.filter((item) => getSpecialtyRegion(item).id === region.id);
      const total = specialtyPool.filter((item) => getSpecialtyRegion(item).id === region.id).length;
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.landformRegion = region.id;
      button.title = `${region.title} ${collected.length}/${total}`;
      button.setAttribute("aria-label", `${region.title}，已点亮 ${collected.length}/${total}`);
      button.className = `landform-region-chip landform-region-chip--${region.id}`;
      button.classList.toggle("is-active", index === currentLandformIndex);
      const regionImage = landformRegionImages[region.id] || landformRegionImages.greenhouse;
      button.innerHTML = `
        <i class="terrain-sprite terrain-sprite--${region.id}" aria-hidden="true"><img src="${regionImage}" alt="" /></i>
        <strong>${region.shortTitle}</strong>
      `;
      return button;
    }),
  );
}

function selectLandformRegion(regionId, options = {}) {
  const { scrollSection = true } = options;
  const index = specialtyRegions.findIndex((region) => region.id === regionId);
  if (index < 0) return;
  currentLandformIndex = index;

  landformRegionList?.querySelectorAll("[data-landform-region]").forEach((button) => {
    const isTarget = button.dataset.landformRegion === regionId;
    button.classList.toggle("is-active", isTarget);
    if (isTarget) button.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  });

  const panorama = document.querySelector(".landform-panorama");
  if (panorama && specialtyRegions.length > 1) {
    const maxScroll = Math.max(0, panorama.scrollWidth - panorama.clientWidth);
    panorama.scrollTo({
      left: maxScroll * (index / (specialtyRegions.length - 1)),
      behavior: scrollSection ? "smooth" : "auto",
    });
  }

  const section = specialtyShelf?.querySelector(`[data-specialty-region="${regionId}"]`);
  const toggle = section?.querySelector(".specialty-region-toggle");
  const grid = section?.querySelector(".specialty-region-grid");
  if (!section || !toggle || !grid) return;

  specialtyShelf.querySelectorAll(".specialty-region").forEach((region) => {
    const regionToggle = region.querySelector(".specialty-region-toggle");
    const regionGrid = region.querySelector(".specialty-region-grid");
    const isTarget = region === section;
    region.classList.toggle("is-collapsed", !isTarget);
    regionToggle?.setAttribute("aria-expanded", String(isTarget));
    if (regionGrid) regionGrid.hidden = !isTarget;
  });

  if (scrollSection) section.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function shiftLandformRegion(step) {
  if (!specialtyRegions.length) return;
  const nextIndex = (currentLandformIndex + step + specialtyRegions.length) % specialtyRegions.length;
  selectLandformRegion(specialtyRegions[nextIndex].id, { scrollSection: false });
}

function getSpecialtyRegion(item) {
  const terrain = item?.terrain || "default";
  return specialtyRegions.find((region) => region.terrains.includes(terrain)) || specialtyRegions[specialtyRegions.length - 1];
}

function createSpecialtyRegionSection(region, collected, locked) {
  const section = document.createElement("section");
  const totalCount = collected.length + locked.length;
  section.className = `specialty-region specialty-region--${region.id}`;
  section.dataset.specialtyRegion = region.id;
  section.innerHTML = `
    <button class="specialty-region-toggle" type="button" aria-expanded="true">
      <div>
        <h4>${region.shortTitle}</h4>
      </div>
      <em>${collected.length}/${totalCount}</em>
    </button>
    <div class="specialty-region-grid"></div>
  `;
  const grid = section.querySelector(".specialty-region-grid");
  grid.replaceChildren(
    ...(collected.length ? collected.map((item) => createSpecialtyCard(item)) : [createSpecialtyEmptyCard(region)]),
    ...locked.map((item) => createLockedSpecialtyCard(item)),
  );
  return section;
}

function createSpecialtyCard(item) {
  const article = document.createElement("article");
  const region = getSpecialtyRegion(item);
  const place = item.region || state.onboarding.city || getGardenLabel();
  article.className = `specialty-card specialty-card--${item.tone}`;
  article.innerHTML = `
    <span class="specialty-scene specialty-scene--${region.id}" aria-hidden="true"><i></i></span>
    ${specialtyIconMarkup(item)}
    <div>
      <strong>${item.name}</strong>
      <span class="specialty-place">${place}</span>
    </div>
    ${rarityPipsMarkup(item.level, item.rarity)}
  `;
  return article;
}

function createSpecialtyEmptyCard(region = null) {
  const article = document.createElement("article");
  article.className = "specialty-empty";
  article.textContent = region ? "未解锁" : getRuntimeCopy().specialtyEmptyText;
  return article;
}

function createLockedSpecialtyCard(item) {
  const article = document.createElement("article");
  article.className = "specialty-card specialty-card--locked";
  const region = getSpecialtyRegion(item);
  const place = item.terrain === "default" ? "未知地方" : item.terrain;
  article.innerHTML = `
    <span class="specialty-scene specialty-scene--${region.id} is-locked" aria-hidden="true"><i></i></span>
    ${specialtyIconMarkup(item, "specialty-icon--locked")}
    <div><strong>${place}</strong></div>
    <em class="rarity-pips rarity-pips--locked" aria-label="未解锁"><i></i><i></i><i></i></em>
  `;
  return article;
}

function archiveSpecialties(items) {
  const list = Array.isArray(items) ? items : [];
  if (!list.length) return;
  state.specialties = sortSpecialties([...list, ...state.specialties]).slice(0, 36);
  renderSpecialtyShelf();
  saveGardenProfile();
}

function showSpecialtyReward(items, selected = getSelectedExpedition()) {
  const list = sortSpecialties(items);
  state.pendingSpecialties = list;
  if (!specialtyReward || !specialtyRewardList) {
    archiveSpecialties(list);
    return;
  }
  specialtyRewardTitle.textContent = "探险归来";
  specialtyRewardText.textContent = `${getGardenLabel()}带回 ${list.length} 件风物。`;
  specialtyRewardList.replaceChildren(
    ...list.map((item) => {
      const article = createSpecialtyCard(item);
      article.className = `specialty-reward-card specialty-reward-card--${item.tone}`;
      return article;
    }),
  );
  specialtyReward.classList.remove("is-hidden");
  specialtyRewardButton?.focus({ preventScroll: true });
}

function collectSpecialtyReward() {
  archiveSpecialties(state.pendingSpecialties);
  state.pendingSpecialties = [];
  specialtyReward?.classList.add("is-hidden");
  renderIdentityCard();
}

function generateLocalSpecialty({ specialReaction = false } = {}) {
  const terrain = state.onboarding.terrain || state.currentMapPack?.name || "default";
  const base = specialtyPool.find((item) => item.terrain === terrain) || specialtyPool.find((item) => item.terrain === "default");
  const roll = Math.random();
  const level = specialReaction && roll > 0.72 ? 5 : specialReaction && roll > 0.42 ? 4 : roll > 0.88 ? 3 : roll > 0.46 ? 2 : 1;
  const rarity = specialtyLevels[level - 1];
  return {
    ...base,
    id: `${Date.now()}-${Math.round(Math.random() * 1000)}`,
    level,
    rarity: rarity.label,
    tone: rarity.tone,
    region: state.onboarding.city || getGardenLabel(),
  };
}

function sortSpecialties(items) {
  return [...items].sort((a, b) => b.level - a.level || a.name.localeCompare(b.name, "zh-Hans-CN"));
}

function specialtyIconMarkup(item, extraClass = "") {
  const icon = item?.icon || "parcel";
  const tone = item?.tone || "common";
  const image = specialtyIconImages[icon] || specialtyIconImages.parcel;
  return `<b class="specialty-icon specialty-icon--${icon} specialty-icon--${tone} ${extraClass}" aria-hidden="true"><img src="${image}" alt="" /></b>`;
}

function rarityPipsMarkup(level = 1, label = "") {
  const count = Math.max(1, Math.min(5, Number(level) || 1));
  return `<em class="rarity-pips" aria-label="${label}">${Array.from({ length: count }, () => "<i></i>").join("")}</em>`;
}

function generateExpeditionLoot(selected = getSelectedExpedition()) {
  const count = selected.seconds >= 8 * 60 * 60 ? 4 : selected.seconds >= 2 * 60 * 60 ? 3 : 2;
  const specialReaction = state.explorationReady && Math.random() > 0.72;
  return Array.from({ length: count }, (_, index) => generateLocalSpecialty({ specialReaction: specialReaction && index === 0 }));
}

function renderExpeditionLoot(items = null) {
  if (!expeditionLoot) return;
  const list = Array.isArray(items) ? sortSpecialties(items) : items ? [items] : [];
  if (!list.length) {
    expeditionLoot.hidden = true;
    expeditionLoot.classList.add("is-empty");
    expeditionLoot.replaceChildren();
    return;
  }
  expeditionLoot.hidden = false;
  expeditionLoot.classList.remove("is-empty");
  expeditionLoot.innerHTML = `<div class="loot-list">${list
    .map(
      (item) =>
        `<article class="loot-chip loot-chip--${item.tone}">${specialtyIconMarkup(item)}<span>${item.name}</span>${rarityPipsMarkup(item.level, item.rarity)}</article>`,
    )
    .join("")}</div>`;
}

function getSprigIdFromScanRecord(record = {}) {
  const text = normalizeScanText([record.title, record.meta, record.text].filter(Boolean).join(" "));
  return atlasEntries.find((entry) => {
    const names = [entry.id, entry.name, entry.plant, ...(entry.aliases || [])].filter(Boolean);
    return names.some((name) => text.includes(normalizeScanText(name)));
  })?.id || null;
}

function getExpeditionSquadEntries() {
  const ids = [
    ...Array.from(state.gardenSprigs || []),
    state.discoverySprigId,
    ...Array.from(state.unlockedSprigs || []),
    ...(state.scanRecords || []).map(getSprigIdFromScanRecord),
  ];
  const unique = [...new Set(ids)].filter((id) => atlasEntryById[id]);
  return unique.map((id) => atlasEntryById[id]);
}

function getSelectedExpeditionSquadIds() {
  const availableIds = getExpeditionSquadEntries().map((entry) => entry.id);
  const selected = [...new Set(state.expeditionSquadIds || [])].filter((id) => availableIds.includes(id)).slice(0, 3);
  if (!selected.length && availableIds.length) selected.push(availableIds[0]);
  state.expeditionSquadIds = selected;
  return selected;
}

function getSelectedExpeditionSquadEntries() {
  return getSelectedExpeditionSquadIds().map((id) => atlasEntryById[id]).filter(Boolean);
}

function closeSquadPicker() {
  squadPicker?.classList.add("is-hidden");
}

function renderSquadPicker() {
  if (!squadPicker) return;
  const entries = getExpeditionSquadEntries();
  const selectedIds = new Set(getSelectedExpeditionSquadIds());
  if (!entries.length) {
    squadPicker.innerHTML = `<p>还没有可派出的种种。</p>`;
    squadPicker.classList.remove("is-hidden");
    return;
  }
  squadPicker.replaceChildren(
    ...entries.map((entry) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `squad-picker-option${selectedIds.has(entry.id) ? " is-selected" : ""}`;
      button.dataset.sprig = entry.id;
      button.innerHTML = `<img src="${entry.image}" alt="" /><span>${entry.name}</span>`;
      button.setAttribute("aria-label", `派出${entry.name}`);
      return button;
    }),
  );
  squadPicker.classList.remove("is-hidden");
}

function renderExpeditionSquad() {
  if (!expeditionSquad) return;
  const selectedIds = getSelectedExpeditionSquadIds();
  const slots = Array.from({ length: 3 }, (_, index) => atlasEntryById[selectedIds[index]] || null);
  expeditionSquad.replaceChildren(
    ...slots.map((entry, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `squad-slot${entry ? "" : " is-empty"}`;
      button.setAttribute("aria-label", entry ? `${entry.name} 已入队，点击更换` : "安置种种");
      button.innerHTML = entry
        ? `<img src="${entry.image}" alt="" /><span>${entry.name}</span>`
        : `<b aria-hidden="true">+</b><span>空位</span>`;
      button.dataset.slot = String(index);
      button.dataset.openSquadPicker = "true";
      return button;
    }),
  );
  if (!squadPicker?.classList.contains("is-hidden")) renderSquadPicker();
}

function growSeedInNursery() {
  if (state.nurseryEndAt > Date.now()) {
    renderNurseryState();
    nurseryDropZone.classList.add("is-growing");
    window.setTimeout(() => nurseryDropZone.classList.remove("is-growing"), 500);
    return;
  }

  if (state.seeds <= 0) {
    nurseryResult.textContent = "种子袋空了，先去花园里收一点种子吧。";
    nurseryDropZone.classList.add("is-empty");
    window.setTimeout(() => nurseryDropZone.classList.remove("is-empty"), 600);
    return;
  }

  const locked = atlasEntries.filter((entry) => !state.unlockedSprigs.has(entry.id));
  const candidates = locked.length ? locked : atlasEntries;
  const sprig = candidates[Math.floor(Math.random() * candidates.length)];
  if (!sprig) return;

  state.seeds = Math.max(0, state.seeds - 1);
  seedValue.textContent = state.seeds;
  state.nurserySprigId = sprig.id;
  state.nurseryStartedAt = Date.now();
  state.nurseryEndAt = state.nurseryStartedAt + NURSERY_HATCH_MS;
  localStorage.setItem(NURSERY_ID_KEY, state.nurserySprigId);
  localStorage.setItem(NURSERY_START_KEY, String(state.nurseryStartedAt));
  localStorage.setItem(NURSERY_END_KEY, String(state.nurseryEndAt));
  saveGardenProfile();
  nurseryDropZone.classList.add("is-growing");
  window.setTimeout(() => nurseryDropZone.classList.remove("is-growing"), 700);
  renderNurseryState();
  syncIdentityNurseryStatus();
  knowledgePop.textContent = "种子已经放入温室槽。";
  knowledgePop.classList.remove("is-hidden");
  knowledgePop.style.left = "50%";
  knowledgePop.style.top = "22%";
  window.setTimeout(() => knowledgePop.classList.add("is-hidden"), 1800);
}

function clearNurseryState() {
  state.nurserySprigId = "";
  state.nurseryStartedAt = 0;
  state.nurseryEndAt = 0;
  localStorage.removeItem(NURSERY_ID_KEY);
  localStorage.removeItem(NURSERY_START_KEY);
  localStorage.removeItem(NURSERY_END_KEY);
  syncIdentityNurseryStatus();
  saveGardenProfile();
}

function finishNurseryHatch() {
  const sprig = atlasEntryById[state.nurserySprigId];
  if (!sprig) {
    clearNurseryState();
    renderNurseryState();
    return;
  }

  const { wasLocked } = unlockAtlasEntryOnly(sprig.id);
  clearNurseryState();
  showHatchReward(sprig, wasLocked);
  nurseryResult.innerHTML = `<img src="${sprig.image}" alt="" /><div><strong>${sprig.name}图鉴已解锁</strong></div>`;
  nurseryDropZone.classList.remove("is-growing");
  knowledgePop.classList.add("is-hidden");
}

function showHatchReward(sprig, wasLocked = true) {
  if (!hatchReward || !hatchRewardImage || !hatchRewardText) return;
  if (hatchRewardTitle) hatchRewardTitle.textContent = wasLocked ? `解锁图鉴：${sprig.name}` : `${sprig.name} 又醒了一点`;
  hatchRewardImage.src = sprig.image;
  hatchRewardImage.alt = sprig.name;
  hatchRewardImage.classList.toggle("is-unlocked-sprig", Boolean(wasLocked));
  hatchRewardText.textContent = wasLocked
    ? `${sprig.name} 已写进图鉴。`
    : `${sprig.name} 的图鉴熟悉度增加了。`;
  if (hatchRewardButton) {
    hatchRewardButton.disabled = true;
    hatchRewardButton.textContent = "看一看";
    window.setTimeout(() => {
      hatchRewardButton.disabled = false;
      hatchRewardButton.textContent = "确定";
      hatchRewardButton.focus({ preventScroll: true });
    }, 1600);
  }
  hatchReward.classList.remove("is-hidden");
}

function hideHatchReward() {
  hatchReward?.classList.add("is-hidden");
}

function renderNurseryState() {
  const sprig = atlasEntryById[state.nurserySprigId];
  const remaining = Math.max(0, Math.ceil((state.nurseryEndAt - Date.now()) / 1000));
  const isGrowing = Boolean(sprig && remaining > 0);
  if (identitySeedCount) {
    identitySeedCount.textContent = state.onboarding.language === "en" ? `${state.seeds} seeds` : `${state.seeds} 颗种子`;
  }
  syncIdentityNurseryStatus();
  growSeedButton.disabled = isGrowing;
  growSeedButton.textContent = isGrowing ? "正在发芽" : "唤醒种种";
  nurseryDropZone.classList.toggle("is-growing", isGrowing);

  if (isGrowing) {
    const total = Math.max(1, Math.ceil((state.nurseryEndAt - state.nurseryStartedAt) / 1000));
    const progress = clamp(((total - remaining) / total) * 100, 0, 100);
    nurseryResult.innerHTML = `<span class="nursery-result-icon" aria-hidden="true"></span><div><strong>种子正在发芽</strong><p>${formatDuration(remaining)}</p><i class="nursery-progress" aria-hidden="true"><em style="width: ${progress}%"></em></i></div>`;
    return;
  }

  if (state.nurseryEndAt && remaining <= 0) {
    finishNurseryHatch();
    return;
  }
}

function finishLogin({ autoGuide = true, showWakeMessage = true, showCheckin = true } = {}) {
  state.user = {
    name: getRuntimeCopy().defaultUserName,
    avatar: "园",
    location: getOnboardingRegionLabel(),
    bio: state.user.bio || "",
  };
  syncUserHud();
  nameScreen.classList.add("is-hidden");
  bootLoading.classList.add("is-hidden");
  loginScreen.classList.add("is-hidden");
  if (showWakeMessage) {
    const starterId = state.discoverySprigId || getBirthdaySeasonStarter().id;
    showSprigSystemMessage(starterId, state.gardenName, "第一颗芽芽已经醒来，去读取你所在的花园，会遇见更多种种。", "园丁登入");
  }
  saveGardenProfile();
  recordPlayerLogin();
  if (autoGuide) {
    state.checkinAfterGuide = showCheckin && !hasSeenGuide();
    window.setTimeout(() => {
      const started = startGuide(false);
      if (!started && showCheckin) {
        window.setTimeout(maybeShowDailyCheckinPrompt, 260);
      }
    }, showWakeMessage ? 450 : 180);
  } else if (showCheckin) {
    window.setTimeout(maybeShowDailyCheckinPrompt, showWakeMessage ? 900 : 300);
  }
}

function playStarterReveal(starter) {
  return new Promise((resolve) => {
    if (!starterReveal || !starterLightButton || !starterAcceptButton || !starter?.sprig) {
      resolve();
      return;
    }

    starterRevealImage.src = starter.sprig.image;
    starterRevealImage.alt = starter.sprig.name;
    starterRevealKicker.textContent = "生日种子";
    starterRevealName.textContent = "一点光";
    starterRevealText.textContent = "点一下。";
    starterAcceptButton.classList.add("is-hidden");
    starterRevealStage.dataset.phase = "glow";
    starterReveal.classList.remove("is-hidden");

    const revealSprig = () => {
      starterLightButton.disabled = true;
      starterRevealStage.dataset.phase = "listening";
      starterRevealName.textContent = "落土";
      starterRevealText.textContent = "嘘。";

      window.setTimeout(() => {
        starterRevealStage.dataset.phase = "seed";
        starterRevealName.textContent = "醒了";
        starterRevealText.textContent = "壳里有声音。";
      }, 900);

      window.setTimeout(() => {
        starterRevealStage.dataset.phase = "sprout";
        starterRevealName.textContent = "冒芽";
        starterRevealText.textContent = "你的节令到了。";
      }, 2500);

      window.setTimeout(() => {
        starterRevealStage.dataset.phase = "sprig";
        starterRevealKicker.textContent = starter.term;
        starterRevealName.textContent = starter.sprig.name;
        starterRevealText.textContent = starter.greeting || starter.line;
        starterAcceptButton.textContent = "确定";
        starterAcceptButton.classList.remove("is-hidden");
        starterAcceptButton.focus({ preventScroll: true });
      }, 4900);
    };

    const finishReveal = () => {
      starterReveal.classList.add("is-hidden");
      starterLightButton.disabled = false;
      setStarterSprigFromBirthday(state.onboarding.birthday, { unlock: true });
      starterLightButton.removeEventListener("click", revealSprig);
      starterAcceptButton.removeEventListener("click", finishReveal);
      resolve();
    };

    starterLightButton.addEventListener("click", revealSprig, { once: true });
    starterAcceptButton.addEventListener("click", finishReveal, { once: true });
  });
}

function enterGardenAfterLoading() {
  const starter = setStarterSprigFromBirthday(state.onboarding.birthday, { unlock: false });
  const copy = getCopy();
  bootLoading.classList.remove("is-hidden");
  bootLoadingText.textContent = copy.loadingStart;
  window.setTimeout(() => {
    if (!bootLoading.classList.contains("is-hidden")) bootLoadingText.textContent = copy.loadingEnd;
  }, BOOT_LOADING_LINE_MS);
  window.setTimeout(async () => {
    finishLogin({ autoGuide: false, showWakeMessage: false, showCheckin: false });
    state.unlockedSprigs = new Set();
    state.gardenSprigs = new Set();
    syncGardenSprigs();
    renderAtlas();
    await playStarterReveal(starter);
    resetGuideSeen();
    startGuide(false);
  }, BOOT_LOADING_MS);
}

function updateCaptureUi() {
  const context = getDiscoveryContext();
  setCaptureButtonLabel(arStream ? "识别画面" : "打开取景");
  discoverTitle.textContent = context.scan ? context.sprig.name : "植物扫描";
  captureText.textContent = context.poi
    ? `${context.poi.name}附近，拍一株植物。`
    : "拍植物，或上传照片。";
  scanResultText.textContent = context.scan?.rarity
    ? `${context.scan.rarity} · ${context.scan.name}`
    : context.scan?.name || "等待取景。";
  arTarget.src = context.sprig.image;
  arTarget.alt = context.sprig.name;
  arTarget.classList.toggle("is-visible", Boolean(context.scan));
  arTarget.classList.toggle("is-encounter", Boolean(context.scan));
}

function finishExpedition() {
  const selected = getSelectedExpedition();
  const loot = generateExpeditionLoot(selected);
  state.dispatched = false;
  state.expeditionRemainingSeconds = 0;
  state.expeditionEndAt = 0;
  localStorage.removeItem("sprigExpeditionEndAt");
  localStorage.removeItem("sprigExpeditionDuration");
  syncExpeditionChoice();
  dispatchButton.textContent = "再次派遣";
  expeditionTitle.textContent = "探险完成";
  expeditionTimer.textContent = "已返回";
  expeditionText.textContent = `小队巡回结束，带回 ${loot.length} 件风物。`;
  renderExpeditionLoot(loot);
  renderExpeditionSquad();
  archiveSpecialties(loot);
  addSeeds(5);
  updateLevel(20);
}

function restoreExpeditionState() {
  const endAt = Number(localStorage.getItem("sprigExpeditionEndAt") || 0);
  const savedDuration = localStorage.getItem("sprigExpeditionDuration");
  if (savedDuration && expeditionDurations[savedDuration]) {
    state.expeditionDuration = savedDuration;
  }
  if (!endAt) return;
  state.expeditionEndAt = endAt;
  const remaining = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
  if (remaining <= 0) {
    finishExpedition();
    return;
  }
  state.dispatched = true;
  state.expeditionRemainingSeconds = remaining;
  dispatchButton.textContent = "探险中";
  dispatchButton.classList.remove("is-ready");
  expeditionTitle.textContent = "探险中";
  expeditionTimer.textContent = formatRemaining(remaining);
  expeditionText.textContent = `种种小队还在路上，回来时会带回地方风物。`;
  renderExpeditionSquad();
  syncExpeditionChoice();
}

function tickGameTime() {
  const now = Date.now();
  const elapsedSeconds = Math.max(0, (now - state.lastTickAt) / 1000);
  state.lastTickAt = now;
  syncGameClock();
  renderNurseryState();

  if (!state.dispatched) return;
  state.expeditionRemainingSeconds = state.expeditionEndAt
    ? Math.max(0, Math.ceil((state.expeditionEndAt - now) / 1000))
    : Math.max(0, state.expeditionRemainingSeconds - elapsedSeconds);
  expeditionTimer.textContent = formatRemaining(state.expeditionRemainingSeconds);
  expeditionText.textContent = `小队巡回中，${formatRemaining(state.expeditionRemainingSeconds)}。`;

  if (state.expeditionRemainingSeconds <= 0) {
    finishExpedition();
  }
}

document.addEventListener("click", (event) => {
  const panelButton = event.target.closest("[data-panel]");
  if (!panelButton) return;
  openPanel(panelButton.dataset.panel);
});

document.querySelectorAll("[data-close-panel]").forEach((button) => {
  button.addEventListener("click", closePanels);
});

document.querySelector("#homeButton").addEventListener("click", () => {
  closePanels();
  showSystemMessage(state.gardenName, "靠近种种时，它会用小动作回应你。", state.user.name);
});

guideButton.addEventListener("click", () => startGuide(true));

guideSkip.addEventListener("click", () => closeGuide(true));

guidePrev.addEventListener("click", () => goToGuideStep(state.guideStep - 1));

guideNext.addEventListener("click", () => {
  if (state.guideTransitioning) return;
  if (state.guideObserving) {
    if (!state.guideObservationReady) return;
    state.guideObserving = false;
    state.guideObservationReady = false;
    guideLayer.classList.remove("is-observing", "is-confirming");
    if (state.guideStep >= guideSteps.length - 1) {
      closeGuide(true);
      openPanel("panel-nursery");
      nurseryResult.textContent = "拖进温室，种子才会醒。";
      return;
    }
    goToGuideStep(state.guideStep + 1);
    return;
  }
  const step = guideSteps[state.guideStep];
  state.guidePrimed = true;
  guideLayer.classList.add("is-awaiting-target");
  guideNext.textContent = step.action ? step.action : "点高亮位置";
  moveGuideToTarget(step.selector);
  const target = document.querySelector(step.selector);
  target?.classList.add("guide-target-nudge");
  window.setTimeout(() => target?.classList.remove("guide-target-nudge"), 650);
});

document.addEventListener("click", (event) => {
  if (guideLayer.classList.contains("is-hidden") || state.guideObserving) return;
  if (event.target.closest(".guide-card")) return;
  if (!isGuideTargetClick(event.target)) {
    event.preventDefault();
    event.stopPropagation();
    if (state.guidePrimed) {
      guideCursor.classList.add("is-shaking");
      window.setTimeout(() => guideCursor.classList.remove("is-shaking"), 360);
    }
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  playGuideTargetFeedback(event.target);
  window.setTimeout(completeCurrentGuideStep, 520);
}, true);

window.addEventListener("resize", () => {
  if (["rain", "storm", "snow"].includes(weatherScene)) {
    resizeWeatherCanvas();
    seedWeatherParticles(weatherScene);
  }
  if (guideLayer.classList.contains("is-hidden")) return;
  moveGuideToTarget(guideSteps[state.guideStep].selector);
});

document.addEventListener("keydown", (event) => {
  if (guideLayer.classList.contains("is-hidden")) return;
  if (state.guideTransitioning && event.key !== "Escape") return;

  if (event.key === "Escape") {
    closeGuide(true);
  }

  if (event.key === "ArrowRight" || event.key === "Enter") {
    guideNext.click();
  }

  if (event.key === "ArrowLeft" && state.guideStep > 0) {
    guidePrev.click();
  }
});

photoButton.addEventListener("click", () => {
  closePanels();
  knowledgePop.classList.add("is-hidden");
  gardenStage.classList.add("is-photo-mode");
  setTimeout(() => {
    gardenStage.classList.remove("is-photo-mode");
    showSystemMessage("照片已存入", "今日花园照收进照片记录。", "花园相机");
  }, 1200);
});

populateRegionSelects();
setupBirthdayWheel();
setOnboardingStep(0);
applyLanguage();
restoreGardenProfileForLogin();

regionSelect.addEventListener("change", () => {
  syncCitySelect();
  syncOnboardingRegion({ located: false });
  locationPermissionStatus.textContent = "地区已更新，花园会按这里生成。";
  updateWeather();
});

citySelect.addEventListener("change", () => {
  syncOnboardingRegion({ located: false });
  locationPermissionStatus.textContent = "地级市已更新，好友能在身份卡看到这里。";
  updateWeather();
});

languageSelect.addEventListener("change", () => {
  syncOnboardingRegion();
  applyLanguage();
});

setupPrev.addEventListener("click", () => setOnboardingStep(getOnboardingStep() - 1));

setupNext.addEventListener("click", () => {
  if (!canAdvanceOnboardingStep()) return;
  syncOnboardingRegion();
  setOnboardingStep(getOnboardingStep() + 1);
});

locateOnboardingButton.addEventListener("click", locateForOnboarding);

function beginInlineNameEdit() {
  if (!identityNameInput || !identityNameInput.classList.contains("is-hidden")) return;
  if (identityBioInput && !identityBioInput.classList.contains("is-hidden")) finishInlineBioEdit(false);
  identityNameInput.value = state.user.name || identityName.textContent.trim();
  identityName.classList.add("is-hidden");
  identityNameInput.classList.remove("is-hidden");
  identityNameInput.closest(".identity-name-row")?.classList.add("is-editing");
  identityNameInput.focus();
  identityNameInput.select();
}

function finishInlineNameEdit(save = true) {
  if (save) {
    const value = identityNameInput.value.trim() || getRuntimeCopy().defaultUserName;
    state.user.name = value;
    syncUserHud();
    saveGardenProfile();
  }
  identityNameInput.classList.add("is-hidden");
  identityName.classList.remove("is-hidden");
  identityNameInput.closest(".identity-name-row")?.classList.remove("is-editing");
  renderIdentityCard();
}

function beginInlineBioEdit() {
  if (!identityBioInput || !identityBioInput.classList.contains("is-hidden")) return;
  if (identityNameInput && !identityNameInput.classList.contains("is-hidden")) finishInlineNameEdit(false);
  identityBioInput.value = state.user.bio || identityBio.textContent.trim();
  identityBio.classList.add("is-hidden");
  identityBioInput.classList.remove("is-hidden");
  identityBioInput.closest(".identity-signature")?.classList.add("is-editing");
  identityBioInput.focus();
  identityBioInput.select();
}

function finishInlineBioEdit(save = true) {
  if (save) {
    state.user.bio = identityBioInput.value.trim();
    saveGardenProfile();
  }
  identityBioInput.classList.add("is-hidden");
  identityBio.classList.remove("is-hidden");
  identityBioInput.closest(".identity-signature")?.classList.remove("is-editing");
  renderIdentityCard();
}

if (editIdentityName) editIdentityName.addEventListener("click", beginInlineNameEdit);
if (editIdentityNameQuick) editIdentityNameQuick.addEventListener("click", beginInlineNameEdit);
if (identityName) identityName.addEventListener("click", beginInlineNameEdit);
if (identityName) identityName.addEventListener("dblclick", beginInlineNameEdit);
if (identityName) identityName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") beginInlineNameEdit();
});
if (editIdentityBio) editIdentityBio.addEventListener("click", beginInlineBioEdit);
if (identityBio) identityBio.addEventListener("dblclick", beginInlineBioEdit);
if (identityBio) identityBio.addEventListener("keydown", (event) => {
  if (event.key === "Enter") beginInlineBioEdit();
});
if (identityNameInput) identityNameInput.addEventListener("blur", () => finishInlineNameEdit(true));
if (identityNameInput) identityNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    finishInlineNameEdit(true);
  }
  if (event.key === "Escape") {
    event.preventDefault();
    finishInlineNameEdit(false);
  }
});
if (identityBioInput) identityBioInput.addEventListener("blur", () => finishInlineBioEdit(true));
if (identityBioInput) identityBioInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    finishInlineBioEdit(true);
  }
  if (event.key === "Escape") {
    event.preventDefault();
    finishInlineBioEdit(false);
  }
});

shareIdentityCard.addEventListener("click", sharePassportCard);

closePassportShare.addEventListener("click", () => {
  passportShareCard.classList.add("is-hidden");
});

identityTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-identity-tab]");
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  setIdentityTab(button.dataset.identityTab);
});

if (saveIdentityName) {
  saveIdentityName.addEventListener("click", () => finishInlineNameEdit(true));
}

if (saveIdentityBio) {
  saveIdentityBio.addEventListener("click", () => finishInlineBioEdit(true));
}

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!birthdayInput.value) {
    setOnboardingStep(2);
    return;
  }
  const value = gardenNameInput.value.trim() || "种种大世界";
  state.gardenName = value;
  state.onboarding = {
    ...state.onboarding,
    ...getSelectedRegionProfile(),
    region: regionSelect.value,
    language: languageSelect.value,
    birthday: birthdayInput.value,
  };
  state.user = {
    ...state.user,
    name: getRuntimeCopy().defaultUserName,
    location: `${state.onboarding.province || state.onboarding.region} · ${state.onboarding.city}`,
  };
  saveGardenProfile();
  applyLanguage();
  landingTitle.textContent = value;
  nameScreen.classList.add("is-hidden");
  loginScreen.classList.add("is-hidden");
  enterGardenAfterLoading();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  finishLogin();
});

document.querySelectorAll(".sprig").forEach((button) => {
  button.addEventListener("pointerenter", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    const sprig = sprigs[button.dataset.sprig];
    showTouchForSprig(button, sprig);
  });

  button.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") return;
    const sprigId = button.dataset.sprig;
    window.clearTimeout(state.touchTimers[sprigId]);
    state.touchTimers[sprigId] = window.setTimeout(() => {
      button.dataset.justPetted = "1";
      showTouchForSprig(button, sprigs[sprigId]);
    }, 420);
  });

  button.addEventListener("pointerup", () => {
    const sprigId = button.dataset.sprig;
    window.clearTimeout(state.touchTimers[sprigId]);
  });

  button.addEventListener("pointercancel", () => {
    const sprigId = button.dataset.sprig;
    window.clearTimeout(state.touchTimers[sprigId]);
  });

  button.addEventListener("click", () => {
    if (button.dataset.justPetted === "1") {
      button.dataset.justPetted = "";
      return;
    }
    const sprig = sprigs[button.dataset.sprig];
    showKnowledgeForSprig(button, sprig);
  });
});

discoverFromMap.addEventListener("click", scanNearbySprigs);

mapPlantScanButton.addEventListener("click", openPlantScanPanelFromMap);

mapPackPicker?.addEventListener("click", (event) => {
  const toggle = event.target.closest(".map-pack-toggle");
  if (toggle) {
    const expanded = !mapPackPicker.classList.contains("is-expanded");
    mapPackPicker.classList.toggle("is-expanded", expanded);
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.querySelector("span").textContent = expanded ? "读取花园" : getMapPackRegionLabel(state.currentMapPack);
    if (expanded) {
      window.setTimeout(() => mapPackPicker.querySelector(".map-pack-locate")?.scrollIntoView({ block: "nearest" }), 60);
      locateFromMapPackPicker();
    }
    return;
  }

  const locateButton = event.target.closest("[data-locate-garden]");
  if (locateButton) {
    locateFromMapPackPicker();
    return;
  }

  const knownButton = event.target.closest("[data-known-location-key]");
  if (knownButton) {
    const candidate = getKnownCityExplorationCandidates().find((item) => item.key === knownButton.dataset.knownLocationKey);
    enterGardenAfterReading(() => enterKnownCityExploration(candidate));
    return;
  }

  const button = event.target.closest("[data-map-pack-id]");
  if (!button) return;
  const mapPack = mapPacks.find((pack) => pack.id === button.dataset.mapPackId);
  if (!mapPack) return;
  enterGardenAfterReading(() => enterMapPack(mapPack, null, "manual"));
});

mapDots.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-poi-index]");
  if (!dot) return;
  selectMapPoi(Number(dot.dataset.poiIndex));
});

mapResults.addEventListener("click", (event) => {
  const item = event.target.closest("[data-poi-index]");
  if (!item) return;
  selectMapPoi(Number(item.dataset.poiIndex));
});

questClaimButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("is-try-target");
    const taskId = button.dataset.claim;
    if (state.completedTasks.has(taskId)) return;
    const card = button.closest(".quest-card");
    if (!isQuestComplete(card)) return;

    state.completedTasks.add(taskId);
    syncQuestClaims();
    setStamina(state.stamina + 5);
    updateGoalCount();
  });
});

seedPill.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "sprig-seed");
  event.dataTransfer.effectAllowed = "move";
});

nurseryDropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  nurseryDropZone.classList.add("is-dragging");
});

nurseryDropZone.addEventListener("dragleave", () => {
  nurseryDropZone.classList.remove("is-dragging");
});

nurseryDropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  nurseryDropZone.classList.remove("is-dragging");
  if (event.dataTransfer.getData("text/plain") !== "sprig-seed") return;
  growSeedInNursery();
});

// Mobile / touch: pointer-drag the seed pill into the greenhouse drop zone.
(() => {
  let dragging = false;
  let activePointerId = null;

  const isNurseryOpen = () => Boolean(document.querySelector("#panel-nursery.is-open"));

  const endPointerDrag = (event) => {
    if (!dragging) return;
    if (activePointerId != null && event.pointerId !== activePointerId) return;
    const under = document.elementFromPoint(event.clientX, event.clientY);
    const dropped = Boolean(under?.closest?.("#nurseryDropZone"));
    dragging = false;
    activePointerId = null;
    seedPill.classList.remove("is-nursery-dragging");
    nurseryDropZone.classList.remove("is-dragging");
    try {
      seedPill.releasePointerCapture?.(event.pointerId);
    } catch {
      // Pointer may already be released.
    }
    if (dropped) growSeedInNursery();
  };

  seedPill.addEventListener("pointerdown", (event) => {
    if (!isNurseryOpen()) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    // Keep native HTML5 drag for mouse; pointer path covers touch / pen.
    if (event.pointerType === "mouse") return;
    dragging = true;
    activePointerId = event.pointerId;
    seedPill.classList.add("is-nursery-dragging");
    nurseryDropZone.classList.add("is-dragging");
    seedPill.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  });

  seedPill.addEventListener("pointermove", (event) => {
    if (!dragging || event.pointerId !== activePointerId) return;
    const under = document.elementFromPoint(event.clientX, event.clientY);
    nurseryDropZone.classList.toggle("is-dragging", Boolean(under?.closest?.("#nurseryDropZone")));
  });

  seedPill.addEventListener("pointerup", endPointerDrag);
  seedPill.addEventListener("pointercancel", endPointerDrag);
})();

growSeedButton.addEventListener("click", () => {
  if (state.nurseryEndAt > Date.now()) {
    renderNurseryState();
    return;
  }
  // Primary action: wake a seed. Works on mobile where HTML5 drag is unreliable.
  growSeedInNursery();
});
hatchRewardButton?.addEventListener("click", hideHatchReward);
specialtyRewardButton?.addEventListener("click", collectSpecialtyReward);

atlasDexGrid?.addEventListener("click", (event) => {
  const cell = event.target.closest(".atlas-dex-cell");
  if (!cell) return;
  openAtlasDexCell(cell);
});

atlasDexDetailClose?.addEventListener("click", hideAtlasDexDetail);
atlasDexDetailDismiss?.addEventListener("click", hideAtlasDexDetail);
atlasDexDetailBackdrop?.addEventListener("click", hideAtlasDexDetail);

atlasDexDetailGarden?.addEventListener("click", () => {
  const entryId = state.atlasSelectedId;
  hideAtlasDexDetail();
  closePanels();
  if (entryId && state.gardenSprigs.has(entryId)) {
    const button = document.querySelector(`.sprig[data-sprig="${entryId}"]`);
    button?.focus?.({ preventScroll: true });
    button?.classList.add("is-expressing");
    window.setTimeout(() => button?.classList.remove("is-expressing"), 1400);
  }
});

atlasRewardButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  claimAtlasReward();
});

atlasRewardPopover?.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!atlasRewardPopover || atlasRewardPopover.classList.contains("is-hidden")) return;
  if (event.target.closest("#atlasRewardButton") || event.target.closest("#atlasRewardPopover")) return;
  toggleAtlasRewardPopover(false);
});

atlasPrevPage?.addEventListener("click", () => {
  state.atlasPage = Math.max(0, state.atlasPage - 1);
  hideAtlasDexDetail();
  renderAtlas();
});

atlasNextPage?.addEventListener("click", () => {
  state.atlasPage += 1;
  hideAtlasDexDetail();
  renderAtlas();
});

dailyCheckinModalButton?.addEventListener("click", claimDailyCheckin);
dailyCheckinClose?.addEventListener("click", () => {
  localStorage.setItem(CHECKIN_PROMPT_KEY, todayKey());
  dailyCheckinModal?.classList.add("is-hidden");
});

durationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (state.dispatched) return;
    state.expeditionDuration = button.dataset.duration;
    syncExpeditionChoice();
  });
});

expeditionSquad?.addEventListener("click", (event) => {
  const slot = event.target.closest("[data-open-squad-picker]");
  if (!slot || state.dispatched) return;
  state.squadPickerSlot = Number(slot.dataset.slot || 0);
  renderSquadPicker();
});

squadPicker?.addEventListener("click", (event) => {
  const option = event.target.closest("[data-sprig]");
  if (!option || state.dispatched) return;
  const sprigId = option.dataset.sprig;
  const selected = getSelectedExpeditionSquadIds();
  const next = selected.filter((id) => id !== sprigId);
  next[state.squadPickerSlot || 0] = sprigId;
  state.expeditionSquadIds = next.filter(Boolean).slice(0, 3);
  closeSquadPicker();
  renderExpeditionSquad();
  syncExpeditionChoice();
  saveGardenProfile();
});

document.addEventListener("click", (event) => {
  if (!squadPicker || squadPicker.classList.contains("is-hidden")) return;
  if (event.target.closest("#expeditionSquad") || event.target.closest("#squadPicker")) return;
  closeSquadPicker();
});

captureButton.addEventListener("click", captureArRecognition);

uploadScanButton.addEventListener("click", () => {
  scanInput.click();
});

scanInput.addEventListener("change", () => {
  identifyPlantFile(scanInput.files?.[0]);
});

specialtyShelf?.addEventListener("click", (event) => {
  const toggle = event.target.closest(".specialty-region-toggle");
  if (!toggle) return;
  const section = toggle.closest(".specialty-region");
  const grid = section?.querySelector(".specialty-region-grid");
  if (!section || !grid) return;
  const willOpen = section.classList.contains("is-collapsed");
  section.classList.toggle("is-collapsed", !willOpen);
  toggle.setAttribute("aria-expanded", String(willOpen));
  grid.hidden = !willOpen;
});

landformRegionList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-landform-region]");
  if (!button) return;
  selectLandformRegion(button.dataset.landformRegion);
});

landformPrev?.addEventListener("click", () => shiftLandformRegion(-1));
landformNext?.addEventListener("click", () => shiftLandformRegion(1));

async function dispatchExpedition() {
  if (state.dispatched) return;
  if (!state.explorationReady) {
    await startLocationExploration();
    if (!state.explorationReady) return;
  }

  const selected = getSelectedExpedition();
  const squad = getSelectedExpeditionSquadEntries();
  if (state.stamina < selected.cost) {
    showSystemMessage("体力不足", `${selected.label} 探险需要 ${selected.cost} 体力。`, "探险");
    return;
  }

  state.dispatched = true;
  state.expeditionRemainingSeconds = selected.seconds;
  state.expeditionEndAt = Date.now() + selected.seconds * 1000;
  localStorage.setItem("sprigExpeditionEndAt", String(state.expeditionEndAt));
  localStorage.setItem("sprigExpeditionDuration", state.expeditionDuration);
  state.lastTickAt = Date.now();
  dispatchButton.textContent = "探险中";
  expeditionTitle.textContent = "探险中";
  expeditionTimer.textContent = formatRemaining(state.expeditionRemainingSeconds);
  expeditionText.textContent = `${squad.length || 1} 位种种已出发，去${getGardenLabel()}寻找线索。`;
  renderExpeditionLoot(null);
  renderExpeditionSquad();
  setQuestProgress("dispatch", "1 / 1");
  syncQuestClaims();
  syncExpeditionChoice();
  setStamina(state.stamina - selected.cost);
  updateLevel(55);
}

dispatchButton.addEventListener("click", dispatchExpedition);

foldAtlasIntoBackpack();
setupSprigWander();
syncGardenSprigs();
renderAtlas();
updateCaptureUi();
setStamina(state.stamina);
syncGameClock();
syncExpeditionChoice();
restoreExpeditionState();
updateGoalCount();
syncQuestClaims();
renderMapPois([], "读取你所在的花园后，会显示附近可探索点位。");
setupFeatureTips();
syncDailyCheckin();
updateWeather();
renderNurseryState();
restoreGardenProfileFromServer().then((restored) => {
  if (!restored) return;
  restoreExpeditionState();
  syncExpeditionChoice();
  updateGoalCount();
  syncQuestClaims();
  syncDailyCheckin();
  updateWeather(state.userLocation);
});
setInterval(tickGameTime, TICK_MS);
setInterval(wanderSprigs, 6200);
setInterval(() => updateWeather(state.userLocation), WEATHER_REFRESH_MS);
