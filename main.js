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
const atlasSeedCount = document.querySelector("#atlasSeedCount");
const atlasCollectedTitle = document.querySelector("#atlasCollectedTitle");
const atlasLockedTitle = document.querySelector("#atlasLockedTitle");
const atlasCollectedList = document.querySelector("#atlasCollectedList");
const atlasLockedGrid = document.querySelector("#atlasLockedGrid");
const atlasBookmarks = document.querySelector("#atlasBookmarks");
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
const identityPages = document.querySelectorAll("[data-identity-page]");
const editIdentityName = document.querySelector("#editIdentityName");
const editIdentityNameQuick = document.querySelector("#editIdentityNameQuick");
const identityNameEditor = document.querySelector("#identityNameEditor");
const identityNameInput = document.querySelector("#identityNameInput");
const saveIdentityName = document.querySelector("#saveIdentityName");
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
const ATLAS_LOCKED_PAGE_SIZE = 12;
const ATLAS_MODEL_SOURCE = "Flora of China Checklist";
const BOOT_LOADING_MS = 6200;
const BIRTHDAY_START_YEAR = 1940;
const BIRTHDAY_END_YEAR = new Date().getFullYear();
const BIRTHDAY_ROW_HEIGHT = 68;

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
  scanRecords: [],
  specialties: [],
  pendingSpecialties: [],
  dailyStreak: Number(localStorage.getItem("sprigDailyStreak") || 0),
  lastDailyCheckin: localStorage.getItem("sprigLastDailyCheckin") || "",
  atlasCategory: "all",
  atlasStoryIndex: 0,
  atlasPage: 0,
  mapPois: [],
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
  },
  knowledgeIndexes: {},
  guideStep: 0,
  guidePrimed: false,
  guideObserving: false,
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
const GUIDE_ADVANCE_MS = 280;
const NURSERY_HATCH_MS = 10 * 60 * 1000;
const NURSERY_END_KEY = "sprigNurseryEndAt";
const NURSERY_ID_KEY = "sprigNurserySprigId";
const NURSERY_START_KEY = "sprigNurseryStartAt";

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
    title: "花园醒着呢",
    text: "嘘，园丁先把名字放进身份卡。小芽芽帮你看门，来过的花园都会在这里留脚印。",
    action: "轻触身份卡",
    expression: "curious",
    motion: "nod",
  },
  {
    selector: ".sprig--plantain",
    sprigId: "plantain",
    speaker: "铃兰种种 · 路边小向导",
    mascot: sprigs.plantain.image,
    title: "路边有动静",
    text: "小芽芽蹲在路边很久啦。点一下叶尖，它会把今天听见的脚步声和叶脉秘密讲给你。",
    action: "叫醒它",
    expression: "happy",
    motion: "leaf-wave",
  },
  {
    selector: '.dock [data-panel="panel-identity"]',
    sprigId: "fern",
    speaker: "蕨芽种种 · 慢半拍的档案员",
    mascot: sprigs.fern.image,
    title: "把遇见收起来",
    text: "图鉴已经收进背包第二页。先打开背包，护照、图鉴、物品都在同一本册子里。",
    action: "打开背包",
    expression: "focused",
    motion: "peek",
    pauseAfter: 1800,
  },
  {
    selector: '.dock [data-panel="panel-map"]',
    sprigId: "dandelion",
    speaker: "蒲公英种种 · 顺风信使",
    mascot: sprigs.dandelion.image,
    title: "风从地图那边来",
    text: "蒲蒲刚从风里回来，口袋里全是坐标。雷达扫一圈，附近哪片草在招手，它会先抖给你看。",
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
    title: "试试看扫描",
    text: "现在点地图里的“扫描植物”。它会带你进入取景框，之后新的种种线索会进图鉴。",
    action: "点扫描植物",
    expression: "bright",
    motion: "sway",
    pauseAfter: 1800,
  },
  {
    selector: ".garden-action-button--expedition",
    sprigId: "tea",
    speaker: "豌豆种种 · 山路茶馆老板",
    mascot: sprigs.tea.image,
    title: "让伙伴去附近看看",
    text: "茶茶把小包袱扎好了。读到你脚下这片花园后，它能沿着山路出门，带回一口热乎乎的地方消息。",
    action: "打开探险袋",
    expression: "ready",
    motion: "step",
  },
  {
    selector: '.duration-picker [data-duration="2h"]',
    panel: "panel-expedition",
    sprigId: "fisheye",
    speaker: "苔藓种种 · 嘴硬的路队长",
    mascot: sprigs.fisheye.image,
    title: "体力要省着花",
    text: "折折先闻一闻路况。短途轻装，远行带灯；体力格子亮着，队伍才走得稳。",
    action: "掂量这趟路",
    expression: "thinking",
    motion: "tilt",
  },
  {
    selector: ".garden-action-button--nursery",
    sprigId: "clover",
    speaker: "三叶草种种 · 好运保管员",
    mascot: sprigs.clover.image,
    title: "种子要慢慢孵",
    text: "有种子时，把它拖进种子温室就会开始倒计时。成熟后先解锁图鉴，不会直接住进花园，这样探险和扫描才有意义。",
    action: "打开温室",
    expression: "happy",
    motion: "bounce",
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
  { level: 1, count: 5 },
  { level: 2, count: 10 },
  { level: 3, count: 25 },
  { level: 4, count: 50 },
  { level: 5, count: 100 },
];

const atlasCategories = [
  {
    id: "all",
    label: "全部",
    icon: "✣",
    tone: "all",
    scaleLabel: "30000+",
    description: "所有已经记录和等待发现的种种。",
    empty: "还没有新的记录。先去花园或地图里遇见一只种种。",
    modelCount: NATIONAL_ATLAS_COUNT,
    match: () => true,
  },
  {
    id: "region",
    label: "地域",
    icon: "▰",
    tone: "region",
    scaleLabel: "9000+",
    description: "按地方气候、山海水土和城市环境归类。",
    empty: "还没认识带有地方线索的种种。去地图里读一下附近的花园。",
    modelCount: 9600,
    match: (entry) => (entry.regionScope || []).some((region) => region !== "全国广布"),
  },
  {
    id: "land",
    label: "陆生",
    icon: "♣",
    tone: "land",
    scaleLabel: "18000+",
    description: "在土地、林下、路边和草坡生活的种种。",
    empty: "陆生页还空着。路边、草地和林下会更容易遇见它们。",
    modelCount: 18600,
    match: (entry) => entry.habitat?.includes("陆生"),
  },
  {
    id: "aquatic",
    label: "水生",
    icon: "≈",
    tone: "aquatic",
    scaleLabel: "2000+",
    description: "靠近池塘、湿地、溪流和水边的种种。",
    empty: "水生页还没有记录。去池塘、溪边或湿地附近看看。",
    modelCount: 2300,
    match: (entry) => entry.habitat?.includes("水生") || entry.habitat?.includes("湿地"),
  },
  {
    id: "pot",
    label: "盆生",
    icon: "▤",
    tone: "pot",
    scaleLabel: "1000+",
    description: "花盆、庭院、阳台和小温室里的种种。",
    empty: "盆生页还没亮起来。花盆、庭院和阳台也会藏着线索。",
    modelCount: 1600,
    match: (entry) => entry.habitat?.includes("盆生") || entry.habitat?.includes("庭院"),
  },
  {
    id: "epiphyte",
    label: "附生",
    icon: "⌁",
    tone: "epiphyte",
    scaleLabel: "900+",
    description: "依附在树干、石面或潮湿角落生活的种种。",
    empty: "附生页还在等第一条记录。树干、石缝和潮湿墙角值得看看。",
    modelCount: 980,
    match: (entry) => entry.habitat?.includes("附生") || entry.habitat?.includes("林下"),
  },
];

const specialtyPool = [
  { name: "风干种子包", terrain: "北方平原", icon: "◇" },
  { name: "山泉茶芽", terrain: "闽东山海", icon: "✦" },
  { name: "青瓦花签", terrain: "丘陵水乡", icon: "▧" },
  { name: "江南露米", terrain: "江南水网", icon: "◌" },
  { name: "竹影香囊", terrain: "川西盆地", icon: "✧" },
  { name: "岭南花砖", terrain: "岭南丘陵", icon: "▣" },
  { name: "海风贝扣", terrain: "热带海岛", icon: "◇" },
  { name: "高原石叶", terrain: "高原河谷", icon: "◆" },
  { name: "绿洲葡萄签", terrain: "绿洲戈壁", icon: "✹" },
  { name: "本地小礼物", terrain: "default", icon: "◇" },
];

const runtimeLocaleCopy = {
  "zh-CN": {
    identityTitle: "▣ 种种背包 ◒",
    atlasRelation: "▤ 图鉴收集关系",
    specialtyBag: "◇ 风物集合",
    carryItems: "🎒 携带物品",
    house: "⌂ 房屋",
    sprigFriends: "♣ 种种好友",
    story: "▤ 小传",
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
    identityTitle: "▣ Sprig Pack ◒",
    atlasRelation: "▤ Atlas Links",
    specialtyBag: "◇ Local Souvenirs",
    carryItems: "🎒 Items",
    house: "⌂ Home",
    sprigFriends: "♣ Sprig Friends",
    story: "▤ Story",
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
    identityTitle: "▣ 種種背包 ◒",
    atlasRelation: "▤ 圖鑑收集關係",
    specialtyBag: "◇ 地方特產袋",
    carryItems: "🎒 攜帶物品",
    house: "⌂ 房屋",
    sprigFriends: "♣ 種種好友",
    story: "▤ 小傳",
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
    identityTitle: "▣ 種々バッグ ◒",
    atlasRelation: "▤ 図鑑リンク",
    specialtyBag: "◇ 地元のおみやげ",
    carryItems: "🎒 持ち物",
    house: "⌂ 家",
    sprigFriends: "♣ 種々の友だち",
    story: "▤ ストーリー",
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

function openPanel(id) {
  panels.forEach((panel) => panel.classList.toggle("is-open", panel.id === id));
  gardenStage.classList.add("has-open-panel");
  gardenStage.classList.toggle("has-identity-panel", id === "panel-identity");
  if (id === "panel-identity") setIdentityTab("card");
  syncDockActive(id);
  knowledgePop.classList.add("is-hidden");
  hideSprigInfo();
  hideFeatureTip();
  if (id !== "panel-discover") stopArCamera();
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
  document.querySelectorAll("[data-identity-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.identityTab === tab);
  });
  document.querySelectorAll("[data-identity-page]").forEach((page) => {
    page.classList.toggle("is-hidden", page.dataset.identityPage !== tab);
  });
}

function foldAtlasIntoBackpack() {
  const atlasPanel = document.querySelector("#panel-atlas");
  const identityPanel = document.querySelector("#panel-identity");
  const identityTabs = identityPanel?.querySelector(".identity-tabs");
  if (!atlasPanel || !identityPanel || !identityTabs || atlasPanel.dataset.foldedIntoBackpack === "1") return;
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
  identityTabs.insertAdjacentElement("afterend", atlasPanel);
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
  const target = document.querySelector(selector);
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

  if (state.guideStep >= guideSteps.length - 1) {
    window.setTimeout(() => {
      closeGuide(true);
      openPanel("panel-nursery");
      nurseryResult.textContent = "把种子拖进温室槽，成熟后会解锁图鉴。";
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
  guideLayer.classList.add("is-hidden");
  guideLayer.classList.remove("is-transitioning", "is-stepping", "is-awaiting-target", "is-observing", "is-confirming");
  guideLayer.setAttribute("aria-hidden", "true");
  guideHighlight.classList.add("is-hidden");
  guideCard.classList.remove("is-leaving", "is-stepping");
  guideMascotFrame.classList.remove("is-acting");
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
    text: `${starter.sprig.name}刚从生日种子里醒来。先点身份卡，它会把你们的第一段缘分盖进护照。`,
    action: "点左上身份卡",
  };
  guideSteps[1] = {
    ...guideSteps[1],
    selector: `.sprig--${starter.id}`,
    sprigId: starter.id,
    speaker: `${starter.sprig.name} · ${starter.term}`,
    mascot: starter.sprig.image,
    title: "生日节令的第一颗芽",
    text: `${starter.line} 现在点花园里的${starter.sprig.name.replace("种种", "")}，它会把只对你说的第一句悄悄话讲出来。`,
    action: `点${starter.sprig.name.replace("种种", "")}`,
  };
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
    button.dataset.mood = isUnlocked ? ["curious", "happy", "sleepy"][Math.floor(Math.random() * 3)] : "";
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
    button.classList.add("is-expressing");
    button.dataset.mood = ["curious", "happy", "sleepy"][Math.floor(Math.random() * 3)];
    window.setTimeout(() => button.classList.remove("is-expressing"), 1700);
  });
  syncKnowledgePopSpeakerPosition();
}

function createAtlasArticle(entry, locked = false) {
  const article = document.createElement("article");
  article.classList.toggle("locked", locked);
  article.dataset.sprig = entry.id;
  article.dataset.habitat = entry.habitat || "";
  article.dataset.atlasTone = entry.tone || getActiveAtlasCategory().tone || "all";

  const icon = document.createElement("b");
  const image = document.createElement("img");
  image.src = entry.image || "./assets/ui/seed.png";
  image.alt = locked ? "" : entry.name;
  icon.append(image);

  const copy = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = locked ? entry.slotName || "等待发现" : entry.name;
  const text = document.createElement("span");
  text.textContent = locked
    ? `${getAtlasCategoryLabel(entry)} · ${entry.modelHint || "待发现线索"}`
    : `${entry.habitat || "植物线索"} · ${entry.knowledge?.[0] || entry.hint}`;
  copy.append(title, text);

  const count = document.createElement("em");
  count.textContent = locked ? entry.slotCode || "??" : "1/5";
  article.append(icon, copy, count);
  return article;
}

function createAtlasStoryBook(entries, category) {
  const storyIndex = clamp(state.atlasStoryIndex, 0, Math.max(0, entries.length - 1));
  state.atlasStoryIndex = storyIndex;
  const entry = entries[storyIndex];
  const article = document.createElement("article");
  article.className = "atlas-storybook";
  article.dataset.sprig = entry.id;
  article.dataset.atlasTone = entry.tone || category.tone || "all";

  const image = entry.image || "./assets/ui/seed.png";
  const plantName = entry.plant || "植物线索";
  const region = entry.regionScope?.join("、") || state.onboarding.city || "种种大世界";
  const habitat = entry.habitat || "待记录的生境";
  const personality = entry.personality || "喜欢把路边的小事记得很清楚";
  const status = entry.status || "已记录";
  const voiceLine = entry.voiceLines?.[0] || entry.hint || "我把今天遇见的风，夹在这一页里。";
  const knowledge = entry.knowledge?.[0] || entry.hint || "这条记录还在慢慢长出新的注释。";
  const pageLabel = entries.length > 1 ? `${storyIndex + 1} / ${entries.length}` : "1 / 1";

  article.innerHTML = `
    <section class="atlas-story-page atlas-story-page--portrait" aria-label="${entry.name} 图册左页">
      <p class="atlas-story-kicker">${category.label} · 活页记录</p>
      <div class="atlas-story-portrait">
        <img src="${image}" alt="${entry.name}" />
      </div>
      <h3>${entry.name}</h3>
      <dl>
        <div><dt>植物</dt><dd>${plantName}</dd></div>
        <div><dt>风土</dt><dd>${region}</dd></div>
        <div><dt>栖息</dt><dd>${habitat}</dd></div>
      </dl>
    </section>
    <section class="atlas-story-page atlas-story-page--notes" aria-label="${entry.name} 图册右页">
      <p class="atlas-story-kicker">第 ${pageLabel} 页</p>
      <h3>${status}</h3>
      <blockquote>${voiceLine}</blockquote>
      <p>${knowledge}</p>
      <dl>
        <div><dt>性格</dt><dd>${personality}</dd></div>
        <div><dt>关系</dt><dd>已经被你的花园认出来了。</dd></div>
      </dl>
      <button class="atlas-page-corner" type="button" ${entries.length <= 1 ? "disabled" : ""} aria-label="翻到下一只种种">
        <span>翻</span>
      </button>
    </section>
  `;
  return article;
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

function getAtlasCategoryCount(category) {
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
  };
}

function getAtlasGrowthProgress(unlockedCount) {
  const milestone = getAtlasMilestone(unlockedCount);
  const previousMilestone = [...atlasMilestones].reverse().find((item) => unlockedCount >= item.count)?.count || 0;
  const milestoneSpan = Math.max(1, milestone.count - previousMilestone);
  const percent = clamp(((unlockedCount - previousMilestone) / milestoneSpan) * 100, 0, 100);
  return { milestone, percent };
}

function getPassportStageName(level) {
  const stages = ["新芽阶段", "叶片阶段", "花苞阶段", "开花阶段", "风物守护阶段"];
  return stages[Math.max(0, Math.min(stages.length - 1, level - 1))] || "风物守护阶段";
}

function createVirtualAtlasEntry(category, offset) {
  const safeOffset = Math.max(1, offset);
  const source = atlasEntries[safeOffset % Math.max(1, atlasEntries.length)] || {};
  const habitatMap = {
    region: "地方特有线索",
    land: "陆生植物线索",
    aquatic: "水生 / 湿地植物线索",
    pot: "盆生 / 庭院植物线索",
    epiphyte: "附生 / 林下植物线索",
    all: "全国植物线索",
  };
  return {
    id: `virtual-${category.id}-${safeOffset}`,
    image: source.image || "./assets/ui/seed.png",
    habitat: habitatMap[category.id] || "植物线索",
    regionScope: category.id === "region" ? [state.onboarding.province || "中国"] : ["全国"],
    tone: category.tone,
    slotName: `第 ${String(safeOffset).padStart(4, "0")} 号剪影`,
    slotCode: "???",
    modelHint: `${ATLAS_MODEL_SOURCE} 预留位`,
  };
}

function getLockedAtlasPage(category, realLocked, lockedTotal) {
  const safePage = clamp(state.atlasPage, 0, Math.max(0, Math.ceil(lockedTotal / ATLAS_LOCKED_PAGE_SIZE) - 1));
  state.atlasPage = safePage;
  const start = safePage * ATLAS_LOCKED_PAGE_SIZE;
  const end = Math.min(start + ATLAS_LOCKED_PAGE_SIZE, lockedTotal);
  const pageEntries = [];
  for (let index = start; index < end; index += 1) {
    if (index < realLocked.length) {
      pageEntries.push({
        ...realLocked[index],
        slotName: `第 ${String(index + 1).padStart(4, "0")} 号剪影`,
        slotCode: "???",
        modelHint: "真实种种线索",
        tone: category.tone,
      });
    } else {
      pageEntries.push(createVirtualAtlasEntry(category, index - realLocked.length + 1));
    }
  }
  return pageEntries;
}

function renderAtlasBookmarks() {
  if (!atlasBookmarks) return;
  atlasBookmarks.replaceChildren(
    ...atlasCategories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.atlasCategory = category.id;
      button.dataset.atlasTone = category.tone;
      button.setAttribute("aria-label", `${category.label}：${category.description}`);
      button.classList.toggle("is-active", category.id === state.atlasCategory);
      button.innerHTML = `<strong aria-hidden="true">${category.icon || category.label}</strong><i>${category.label}</i><span>${category.description}<small>${category.scaleLabel}</small></span>`;
      return button;
    }),
  );
}

function renderAtlas() {
  const unlocked = getUnlockedEntries();
  const locked = atlasEntries.filter((entry) => !state.unlockedSprigs.has(entry.id));
  const category = getActiveAtlasCategory();
  const visibleUnlocked = unlocked.filter(category.match);
  const visibleLocked = locked.filter(category.match);
  const categoryCount = getAtlasCategoryCount(category);
  const lockedTotal = Math.max(categoryCount - visibleUnlocked.length, visibleLocked.length);
  const pageCount = Math.max(1, Math.ceil(lockedTotal / ATLAS_LOCKED_PAGE_SIZE));
  const visibleLockedPage = getLockedAtlasPage(category, visibleLocked, lockedTotal);
  const { milestone, percent } = getAtlasGrowthProgress(unlocked.length);

  atlasProgress.textContent = `图鉴经验 Lv.${milestone.level} · ${unlocked.length} / ${milestone.count}`;
  atlasProgressBar.style.width = `${percent}%`;
  atlasSeedCount.textContent = unlocked.length;
  renderAtlasBookmarks();
  atlasCollectedTitle.innerHTML = `<span>☘</span> ${category.label} · 已收集（${visibleUnlocked.length}）`;
  atlasLockedTitle.innerHTML = `<span>▣</span> ${category.label} · 待发现`;
  atlasPageLabel.textContent = `第 ${state.atlasPage + 1} 页`;
  atlasPrevPage.disabled = state.atlasPage <= 0;
  atlasNextPage.disabled = state.atlasPage >= pageCount - 1;
  atlasCollectedList.replaceChildren(
    visibleUnlocked.length
      ? createAtlasStoryBook(visibleUnlocked, category)
      : createAtlasEmpty(category.empty || "这一页还没有记录。去花园或地图里遇见一只种种。"),
  );
  atlasLockedGrid.replaceChildren(
    ...(visibleLockedPage.length ? visibleLockedPage.map((entry) => createAtlasArticle(entry, true)) : [createAtlasEmpty("这一页暂时没有新的待发现线索。")]),
  );
  renderIdentityCard();
}

function createAtlasEmpty(text) {
  const article = document.createElement("article");
  article.className = "atlas-empty";
  article.textContent = text;
  return article;
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
  renderAtlas();
  updateCaptureUi();
}

function getGardenLabel() {
  if (state.currentMapPack) return state.currentMapPack.locationLabel || state.currentMapPack.name;
  if (state.explorationMode === "unknown") return "未知花园";
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

function renderMapPackPicker(message = "") {
  if (!mapPackPicker) return;
  mapPackPicker.replaceChildren();

  if (message) {
    const note = document.createElement("p");
    note.textContent = message;
    mapPackPicker.append(note);
  }

  mapPacks.forEach((pack) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.mapPackId = pack.id;
    button.dataset.status = pack.status;
    button.disabled = pack.status === "locked";
    const title = document.createElement("strong");
    title.textContent = `${pack.expeditionLabel || pack.name}：${getMapPackStatusLabel(pack.status)}`;
    const text = document.createElement("span");
    text.textContent = pack.description;
    button.append(title, text);
    mapPackPicker.append(button);
  });
}

function clearMapPackPicker() {
  if (mapPackPicker) mapPackPicker.replaceChildren();
}

function unlockSprig(id, scan = null) {
  const entry = atlasEntryById[id] || atlasEntryById.mystery;
  const wasLocked = !state.unlockedSprigs.has(entry.id);
  state.unlockedSprigs.add(entry.id);
  state.gardenSprigs.add(entry.id);
  state.discoverySprigId = entry.id;
  state.lastScan = scan;
  syncGardenSprigs();
  renderAtlas();

  if (wasLocked) {
    captureTask.textContent = "1 / 1";
    atlasTask.textContent = "1 / 1";
    syncQuestClaims();
    addSeeds(5);
    updateLevel(35);
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
    atlasTask.textContent = "1 / 1";
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
  if (isBusy) captureButton.textContent = label;
}

function appendPlantScanRecord(record) {
  if (!scanRecordList || !record) return;
  state.scanRecords = [record, ...state.scanRecords].slice(0, 4);
  saveGardenProfile();
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
    commonNames: [],
  };

  state.lastScan = scan;
  state.generatedSprig = generated;
  discoverTitle.textContent = sprig.name;
  arTarget.src = sprig.image;
  arTarget.alt = sprig.name;
  arTarget.classList.add("is-visible");
  appendPlantScanRecord({
    title: `${sourceLabel} · ${sprig.name}`,
    meta: `${locationLabel}${coordinateLabel}`,
    text: "已保存为临时植物线索，之后可以用植物识别或人工整理加入正式地图包。",
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

async function identifyPlantImage(image, sourceLabel = "AR画面") {
  if (!image) return;
  setScanBusy(true);
  scanResultText.textContent = "正在连接植物识别 API。";

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
      scanResultText.textContent = "已生成临时未知种种。";
      captureText.textContent = `还没有配置 PLANT_ID_API_KEY，${generated.sprig.name} 已先作为植物线索保存。`;
      return;
    }

    if (!response.ok) {
      throw new Error(result.error || "identify-failed");
    }

    const suggestion = result.suggestions?.[0];
    if (!suggestion) {
      const generated = createTemporaryPlantScan(sourceLabel, "unclear-plant");
      scanResultText.textContent = "发现一只未知种种。";
      captureText.textContent = `没有识别出明确植物，${generated.sprig.name} 已先保存为未知线索。`;
      return;
    }

    const sprigId = matchSprigFromScan(suggestion);
    const entry = unlockSprig(sprigId, suggestion);
    const probability = Math.round((suggestion.probability || 0) * 100);
    discoverTitle.textContent = entry.name;
    arTarget.src = entry.image;
    arTarget.alt = entry.name;
    arTarget.classList.add("is-visible");
    scanResultText.textContent = `${suggestion.name}${probability ? ` · ${probability}%` : ""}`;
    captureText.textContent = `${sourceLabel}识别到了 ${suggestion.commonNames?.[0] || suggestion.name}，${entry.name} 已写入图鉴。`;
    appendPlantScanRecord({
      title: `${sourceLabel} · ${entry.name}`,
      meta: `${suggestion.name}${probability ? ` · ${probability}%` : ""}`,
      text: `已写入图鉴，并和${getGardenLabel()}的探索记录关联。`,
    });
  } catch (error) {
    const generated = createTemporaryPlantScan(sourceLabel, "scan-offline");
    scanResultText.textContent = "离线保存为未知种种。";
    captureText.textContent = `识别服务暂时不可用，${generated.sprig.name} 已先作为临时线索保存。`;
  } finally {
    setScanBusy(false);
    captureButton.textContent = arStream ? "识别当前画面" : "开启 AR 识别";
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
    captureButton.textContent = "识别当前画面";
    scanResultText.textContent = "AR 取景已开启。";
    captureText.textContent = "把植物放进扫描框里，再识别当前画面。";
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
    scanResultText.textContent = "还没有取到 AR 画面。";
    return;
  }
  await identifyPlantImage(image, "AR画面");
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
  mapStatus.textContent = "雷达正在连接高德地图。";

  try {
    const AMap = await loadAmap();
    mapStatus.textContent = "雷达正在定位附近环境。";
    const { center, label } = await getAmapCenter(AMap);
    mapStatus.textContent = "雷达正在识别附近地点。";
    const rawPois = await searchAmapPois(AMap, center);
    const pois = normalizeAmapPois(rawPois, center);
    if (!pois.length) throw new Error("no-amap-pois");
    renderMapPois(pois, `高德地图 · ${label} · ${pois.length} 条线索`);
  } catch (error) {
    const gardenLabel = getGardenLabel();
    const fallbackText =
      error?.message === "missing-amap-key"
        ? `未配置高德 key，先使用${gardenLabel}的地图包线索。`
        : `高德定位或搜索暂时不可用，先使用${gardenLabel}的地图包线索。`;
    renderFallbackMapPois(fallbackText);
  } finally {
    discoverFromMap.disabled = false;
  }
}

function showKnowledgeForSprig(button, sprig) {
  closePanels();
  const currentIndex = state.knowledgeIndexes[sprig.name] || 0;
  const lines = sprig.voiceLines?.length ? sprig.voiceLines : sprig.knowledge;
  knowledgePop.textContent = lines[currentIndex % lines.length];
  state.knowledgeIndexes[sprig.name] = (currentIndex + 1) % lines.length;
  knowledgePop.dataset.speakerSprig = button.dataset.sprig || "";
  positionKnowledgePopOnSprig(button);

  infoImage.src = sprig.image;
  infoImage.alt = sprig.name;
  infoName.textContent = sprig.name;
  infoMeta.textContent = `${sprig.npcRole || sprig.plant} · ${sprig.personality || sprig.status}`;
  showSprigInfo();
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
  const anchorY = buttonRect.top - stageRect.top + buttonRect.height * 0.18;
  const minLeft = popRect.width / 2 + padding;
  const maxLeft = stageRect.width - popRect.width / 2 - padding;
  const minTop = popRect.height * 1.3 + padding;
  const maxTop = stageRect.height - padding;
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
  knowledgePop.dataset.speakerSprig = sprigId || "";
  if (!positionKnowledgePopOnSprig(getSprigButtonById(sprigId))) {
    knowledgePop.style.left = "50%";
    knowledgePop.style.top = "52%";
    knowledgePop.classList.remove("is-hidden");
  }

  const speakerSprig = atlasEntryById[sprigId] || sprigs[sprigId] || atlasEntryById[state.discoverySprigId] || atlasEntries[0] || sprigs.fern;
  infoImage.src = speakerSprig?.image || sprigs.fern.image;
  infoImage.alt = speakerSprig?.name || "";
  infoName.textContent = title;
  infoMeta.textContent = speakerSprig?.name || label;
  hideSprigInfo();
}

function showSprigSystemMessage(sprigId, title, text, label = "System") {
  closePanels();
  const sprig = atlasEntryById[sprigId] || sprigs[sprigId] || sprigs.plantain || atlasEntries[0];
  const button = getSprigButtonById(sprigId);
  knowledgePop.textContent = text;
  knowledgePop.dataset.speakerSprig = sprigId || "";
  if (!positionKnowledgePopOnSprig(button)) {
    knowledgePop.style.left = "50%";
    knowledgePop.style.top = "52%";
  }
  knowledgePop.classList.remove("is-hidden");

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
    icon: "◐",
    text: `${label} 天气读取中`,
    scene: "calm",
  };
}

function renderWeatherFallback(label = state.onboarding.city || "杭州") {
  if (!weatherValue || !weatherIcon) return;
  const fallback = getWeatherFallback(label);
  weatherIcon.textContent = fallback.icon;
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

async function updateWeather(location = null) {
  if (!weatherPill) return;
  const cityCenter = getSelectedCityCenter();
  const lng = Number(location?.lng ?? cityCenter?.lng ?? 120.1551);
  const lat = Number(location?.lat ?? cityCenter?.lat ?? 30.2741);
  const label = state.onboarding.city || cityCenter?.city || "杭州";
  const cityCode = cityCenter?.adcode || "";
  weatherIcon.textContent = "◐";
  weatherValue.textContent = `${label} 天气读取中`;
  setWeatherScene("calm");
  try {
    const data =
      (await fetchWeatherFromLocal(lat, lng, cityCode)) ||
      (await fetchWeatherFromAmap(cityCode)) ||
      (await fetchWeatherFromOpenMeteo(lat, lng));
    const weather = normalizeWeatherData(data);
    weatherIcon.textContent = weather.icon;
    weatherValue.textContent = Number.isFinite(weather.temperature)
      ? `${label} ${weather.label} ${weather.temperature}°`
      : `${label} ${weather.label} --°`;
    weatherPill.title = `天气源：${weather.source}${weather.observedAt ? ` · ${weather.observedAt}` : ""}`;
    setWeatherScene(weather.scene);
  } catch {
    weatherIcon.textContent = "◐";
    weatherValue.textContent = `${label} 天气暂不可用`;
    weatherPill.title = "天气源暂不可用";
    setWeatherScene("calm");
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
    dailyCheckinReward.textContent = state.dailyStreak > 0 && (state.dailyStreak + 1) % 3 === 0 ? "体力 +6 · 种子 +2" : "体力 +6";
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
    discoverySprigId: state.discoverySprigId,
    specialties: state.specialties,
    scanRecords: state.scanRecords,
    lastScan: state.lastScan,
    dailyStreak: state.dailyStreak,
    lastDailyCheckin: state.lastDailyCheckin,
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
  state.discoverySprigId = profile.discoverySprigId || state.discoverySprigId;
  state.specialties = Array.isArray(profile.specialties) ? profile.specialties : state.specialties;
  state.scanRecords = Array.isArray(profile.scanRecords) ? profile.scanRecords.slice(0, 4) : state.scanRecords;
  state.lastScan = profile.lastScan || state.lastScan;
  state.dailyStreak = Number.isFinite(Number(profile.dailyStreak)) ? Number(profile.dailyStreak) : state.dailyStreak;
  state.lastDailyCheckin = profile.lastDailyCheckin || state.lastDailyCheckin;
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
  const left = Math.max(0, 7 - state.completedTasks.size);
  if (!goalCount) return;
  goalCount.textContent = `今日还有 ${left} 个任务`;
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
  });
}

function getSelectedExpedition() {
  return expeditionDurations[state.expeditionDuration];
}

function requestUserLocation() {
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

function enterUnknownGarden(userLocation = null) {
  state.currentMapPack = null;
  state.userLocation = userLocation;
  state.explorationMode = "unknown";
  state.explorationReady = true;
  state.locationError = "";
  state.user.location = "未知花园";
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
    const match = findNearestMapPack(userLocation, mapPacks);
    if (match.mapPack) {
      enterMapPack(match.mapPack, match.userLocation || userLocation, "located");
      return;
    }
    enterUnknownGarden(match.userLocation || userLocation);
  } catch (error) {
    state.explorationReady = false;
    state.explorationMode = "manual";
    state.locationError = error?.message || "geolocation-failed";
    state.currentMapPack = null;
    state.userLocation = null;
    state.generatedSprig = null;
    mapTitle.textContent = "附近花园雷达";
    expeditionTitle.textContent = "选择一片花园开始探险";
    expeditionTimer.textContent = "等待选择";
    expeditionText.textContent = "无法读取你的位置。你也可以选择一片花园开始探险。";
    renderMapPackPicker("无法读取你的位置。你也可以选择一片花园开始探险。");
  } finally {
    dispatchButton.disabled = false;
    syncExpeditionChoice();
  }
}

function syncExpeditionChoice() {
  const selected = getSelectedExpedition();
  durationButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.duration === state.expeditionDuration);
    button.disabled = state.dispatched;
  });
  const generated = state.generatedSprig?.sprig;
  const pack = state.currentMapPack;

  if (!state.dispatched) {
    dispatchButton.textContent = state.explorationReady ? "派出探险" : "开始探险";
    if (pack) {
      expeditionTitle.textContent = pack.name;
      expeditionPlanText.textContent = `${pack.expeditionLabel || pack.name} · ${selected.label}`;
      expeditionTimer.textContent = "可立即出发";
      expeditionText.textContent = `${pack.description} 推荐：${generated?.name || "未知种种"}。${selected.reward}`;
      return;
    }

    if (state.explorationMode === "unknown") {
      expeditionTitle.textContent = "野外探索";
      expeditionPlanText.textContent = `未知花园 · ${selected.label}`;
      expeditionTimer.textContent = "可立即出发";
      expeditionText.textContent = `你来到了一片尚未记录的花园。这里还没有完整地图包，但也许可以发现新的种种。${generated?.name ? `发现一只${generated.name}。` : ""}`;
      return;
    }

    expeditionTitle.textContent = state.explorationMode === "manual" ? "选择一片花园开始探险" : "读取你所在的花园";
    expeditionPlanText.textContent = `选择一片花园 · ${selected.label}`;
    expeditionTimer.textContent = state.explorationMode === "manual" ? "等待选择" : "等待定位";
    expeditionText.textContent =
      state.explorationMode === "manual"
        ? "无法读取你的位置。你也可以选择一片花园开始探险。"
        : "读取你所在的花园，正在寻找附近的种种。";
  }
}

function syncUserHud() {
  hudName.textContent = state.user.name;
  hudLocation.textContent = state.user.location;
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
  setupSteps[0].querySelector("p").textContent = copy.nameText;
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
  document.querySelector(".specialty-section h3").textContent = runtime.specialtyBag;
  document.querySelector(".seed-pouch-section h3").textContent = state.onboarding.language === "en" ? "◇ Seeds" : "◇ 种子";
  setOptionalText(".house-section h3", runtime.house);
  setOptionalText(".relation-section h3", runtime.sprigFriends);
  setOptionalText(".story-section h3", runtime.story);
  const growthTitle = document.querySelector(".growth-card h4");
  if (growthTitle) growthTitle.textContent = runtime.atlasShort;
  document.querySelector(".garden-action-button--expedition b").textContent = runtime.expeditionLabel;
  editIdentityName.setAttribute("aria-label", runtime.edit);
  saveIdentityName.textContent = runtime.save;
  if (!state.explorationReady && !state.dispatched) {
    expeditionTitle.textContent = runtime.expeditionIdle;
    dispatchButton.textContent = runtime.expeditionButton;
  }
  renderExpeditionLoot(state.specialties[0] || null);
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
  identityBio.textContent =
    state.onboarding.language === "en"
      ? `A garden keeper from ${state.onboarding.city || "nearby"}, collecting sprigs into the atlas.`
      : `${state.onboarding.city || "附近"}的花园观察员，正在把遇见的种种收进图鉴。`;
  identityWorldLine.textContent =
    state.onboarding.language === "en"
      ? `You wandered into Sprig Garden by chance, and the garden stamped this passport for you.`
      : `你恰巧进入了种种世界，花园把这本护照认给了你。`;
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
        ? `A greenhouse seed is growing: ${formatDuration(remaining)}.`
        : `温室里有种子正在生长：${formatDuration(remaining)}。`;
    return;
  }
  identityNurseryStatus.textContent =
    state.onboarding.language === "en"
      ? "Drag seeds into the greenhouse to unlock atlas pages."
      : "可以拖进种子温室，成熟后解锁图鉴。";
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
  const payload = {
    title: `${state.user.name}的种种护照`,
    text: `${state.gardenName} · ${getOnboardingRegionLabel()} · ${getPassportId()}`,
    url: location.href,
  };
  const wechatReady = await setupWechatShare({
    title: payload.title,
    desc: payload.text,
    link: payload.url,
    imgUrl: new URL(passportStampImage.getAttribute("src"), location.href).href,
  });

  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(`${payload.title}\n${payload.text}\n${payload.url}`);
    showSystemMessage("护照已生成", wechatReady ? "微信分享资料已准备好，也复制了一份分享文字。" : "已复制分享文字。朋友圈发布需要正式域名和微信 JS-SDK 签名。", "种种护照");
  } catch {
    showSystemMessage("护照已生成", wechatReady ? "微信分享资料已准备好。" : "朋友圈发布需要正式域名和微信 JS-SDK 签名。", "种种护照");
  }
}

function renderSpecialtyShelf() {
  if (!specialtyShelf) return;
  const collected = sortSpecialties(state.specialties).slice(0, 12);
  const discoveredNames = new Set(state.specialties.map((item) => item.name));
  const locked = specialtyPool.filter((item) => !discoveredNames.has(item.name)).slice(0, Math.max(4, 8 - collected.length));
  specialtyShelf.replaceChildren(
    ...(collected.length ? collected.map((item) => createSpecialtyCard(item)) : [createSpecialtyEmptyCard()]),
    ...locked.map((item) => createLockedSpecialtyCard(item)),
  );
}

function createSpecialtyCard(item) {
  const article = document.createElement("article");
  article.className = `specialty-card specialty-card--${item.tone}`;
  article.innerHTML = `<b>${item.icon}</b><div><strong>${item.name}</strong><span>${item.region} · ${item.rarity}</span></div><em>${"★".repeat(item.level)}</em>`;
  return article;
}

function createSpecialtyEmptyCard() {
  const article = document.createElement("article");
  article.className = "specialty-empty";
  article.textContent = getRuntimeCopy().specialtyEmptyText;
  return article;
}

function createLockedSpecialtyCard(item) {
  const article = document.createElement("article");
  article.className = "specialty-card specialty-card--locked";
  article.innerHTML = `<b>?</b><div><strong>待发现风物</strong><span>${item.terrain === "default" ? "未知地方" : item.terrain}</span></div><em>未解锁</em>`;
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
  specialtyRewardTitle.textContent = `带回 ${list.length} 件风物`;
  specialtyRewardText.textContent = `${getGardenLabel()}的${selected.label}探险结束了，风物会收进背包里的风物集合。`;
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

function generateExpeditionLoot(selected = getSelectedExpedition()) {
  const count = selected.seconds >= 8 * 60 * 60 ? 4 : selected.seconds >= 2 * 60 * 60 ? 3 : 2;
  const specialReaction = state.explorationReady && Math.random() > 0.72;
  return Array.from({ length: count }, (_, index) => generateLocalSpecialty({ specialReaction: specialReaction && index === 0 }));
}

function renderExpeditionLoot(items = null) {
  if (!expeditionLoot) return;
  const list = Array.isArray(items) ? sortSpecialties(items) : items ? [items] : [];
  if (!list.length) {
    const runtime = getRuntimeCopy();
    expeditionLoot.classList.add("is-empty");
    expeditionLoot.innerHTML = `<span>◇</span><div><strong>${runtime.specialtyEmptyTitle}</strong><p>${runtime.specialtyEmptyText}</p></div>`;
    return;
  }
  expeditionLoot.classList.remove("is-empty");
  expeditionLoot.innerHTML = `<div class="loot-list">${list
    .map((item) => `<article class="loot-chip loot-chip--${item.tone}"><b>${item.icon}</b><span>${item.name}</span><em>${item.rarity}</em></article>`)
    .join("")}</div>`;
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
  hatchRewardImage.src = sprig.image;
  hatchRewardImage.alt = sprig.name;
  hatchRewardText.textContent = wasLocked
    ? `得到了一页 ${sprig.name} 图鉴。`
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
  growSeedButton.textContent = isGrowing ? "温室照料中" : "指引拖入";
  nurseryDropZone.classList.toggle("is-growing", isGrowing);

  if (isGrowing) {
    const total = Math.max(1, Math.ceil((state.nurseryEndAt - state.nurseryStartedAt) / 1000));
    const progress = clamp(((total - remaining) / total) * 100, 0, 100);
    nurseryResult.innerHTML = `<span class="nursery-result-icon" aria-hidden="true"></span><div><strong>种子正在温室里生长</strong><p>${formatDuration(remaining)}</p><i class="nursery-progress" aria-hidden="true"><em style="width: ${progress}%"></em></i></div>`;
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
    starterRevealName.textContent = "有一点光落在花园里";
    starterRevealText.textContent = "轻轻点一下，看看它为什么等你。";
    starterAcceptButton.classList.add("is-hidden");
    starterRevealStage.dataset.phase = "glow";
    starterReveal.classList.remove("is-hidden");

    const revealSprig = () => {
      starterLightButton.disabled = true;
      starterRevealStage.dataset.phase = "seed";
      starterRevealName.textContent = "种子听见了你的生日";
      starterRevealText.textContent = "它在土里翻了个身，像是认出了你。";

      window.setTimeout(() => {
        starterRevealStage.dataset.phase = "sprout";
        starterRevealName.textContent = "种子发芽了";
        starterRevealText.textContent = starter.line;
      }, 1600);

      window.setTimeout(() => {
        starterRevealStage.dataset.phase = "sprig";
        starterRevealKicker.textContent = `${starter.term} · 登记奖励`;
        starterRevealName.textContent = starter.sprig.name;
        starterRevealText.textContent = starter.greeting || starter.line;
        starterAcceptButton.textContent = "确定";
        starterAcceptButton.classList.remove("is-hidden");
        starterAcceptButton.focus({ preventScroll: true });
      }, 3600);
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
  const bootLines = [
    starter?.line || copy.loadingStart,
    copy.loadingMid,
    `${state.onboarding.city || "杭州"}的风把门牌吹亮了`,
    `${starter?.sprig?.name || "第一颗芽芽"}在入口等你`,
  ];
  bootLoading.classList.remove("is-hidden");
  bootLoadingText.textContent = bootLines[0];
  bootLines.slice(1).forEach((line, index) => {
    window.setTimeout(() => {
      if (!bootLoading.classList.contains("is-hidden")) bootLoadingText.textContent = line;
    }, 1600 * (index + 1));
  });
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
  captureButton.textContent = arStream ? "识别当前画面" : "开启 AR 识别";
  discoverTitle.textContent = context.scan ? context.sprig.name : "植物扫描";
  captureText.textContent = context.poi
    ? `在${context.poi.name}附近打开 AR 取景，识别当前植物画面。`
    : "打开 AR 取景，对准植物后识别当前画面。";
  scanResultText.textContent = context.scan ? context.scan.name : "等待 AR 画面。";
  arTarget.src = context.sprig.image;
  arTarget.alt = context.sprig.name;
  arTarget.classList.toggle("is-visible", Boolean(context.scan));
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
  expeditionText.textContent = `${getGardenLabel()}的 ${selected.label} 探险带回了 ${loot.length} 件特产。${selected.reward}`;
  renderExpeditionLoot(loot);
  showSpecialtyReward(loot, selected);
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
  expeditionTitle.textContent = "探险中";
  expeditionTimer.textContent = formatRemaining(remaining);
  expeditionText.textContent = `种种还在路上，回来时会把特产放进背包。`;
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
  expeditionText.textContent = `探险进行中，${formatRemaining(state.expeditionRemainingSeconds)}。`;

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
  window.setTimeout(completeCurrentGuideStep, 80);
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
    showSystemMessage("纪念照片已生成", "今日花园照片已保存。", "花园相机");
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

editIdentityName.addEventListener("click", () => {
  identityNameEditor.classList.toggle("is-hidden");
  identityNameInput.focus();
});

editIdentityNameQuick.addEventListener("click", () => {
  identityNameEditor.classList.toggle("is-hidden");
  identityNameInput.focus();
});

shareIdentityCard.addEventListener("click", sharePassportCard);

closePassportShare.addEventListener("click", () => {
  passportShareCard.classList.add("is-hidden");
});

identityTabButtons.forEach((button) => {
  button.addEventListener("click", () => setIdentityTab(button.dataset.identityTab));
});

saveIdentityName.addEventListener("click", () => {
  const value = identityNameInput.value.trim() || getRuntimeCopy().defaultUserName;
  state.user.name = value;
  syncUserHud();
  identityNameEditor.classList.add("is-hidden");
  renderIdentityCard();
});

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
  button.addEventListener("click", () => {
    const sprig = sprigs[button.dataset.sprig];
    showKnowledgeForSprig(button, sprig);
  });
});

discoverFromMap.addEventListener("click", scanNearbySprigs);

mapPlantScanButton.addEventListener("click", () => {
  state.selectedMapPoi = null;
  state.lastScan = null;
  updateCaptureUi();
  captureText.textContent = `在${getGardenLabel()}打开植物扫描，拍下眼前的叶片、花或整株植物。`;
  openPanel("panel-discover");
});

mapPackPicker?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-pack-id]");
  if (!button) return;
  const mapPack = mapPacks.find((pack) => pack.id === button.dataset.mapPackId);
  if (!mapPack) return;
  enterMapPack(mapPack, null, "manual");
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

growSeedButton.addEventListener("click", () => {
  if (state.nurseryEndAt > Date.now()) return;
  seedPill.classList.add("guide-target-nudge");
  nurseryDropZone.classList.add("is-dragging");
  nurseryResult.textContent = "按住上方种子数量，把种子拖进温室槽。";
  window.setTimeout(() => {
    seedPill.classList.remove("guide-target-nudge");
    nurseryDropZone.classList.remove("is-dragging");
  }, 800);
});
hatchRewardButton?.addEventListener("click", hideHatchReward);
specialtyRewardButton?.addEventListener("click", collectSpecialtyReward);

atlasBookmarks?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-atlas-category]");
  if (!button) return;
  state.atlasCategory = button.dataset.atlasCategory;
  state.atlasPage = 0;
  state.atlasStoryIndex = 0;
  renderAtlas();
});

atlasCollectedList?.addEventListener("click", (event) => {
  const button = event.target.closest(".atlas-page-corner");
  if (!button || button.disabled) return;
  const category = getActiveAtlasCategory();
  const entries = getUnlockedEntries().filter(category.match);
  if (entries.length <= 1) return;
  state.atlasStoryIndex = (state.atlasStoryIndex + 1) % entries.length;
  renderAtlas();
});

atlasPrevPage?.addEventListener("click", () => {
  state.atlasPage = Math.max(0, state.atlasPage - 1);
  renderAtlas();
});

atlasNextPage?.addEventListener("click", () => {
  state.atlasPage += 1;
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

captureButton.addEventListener("click", captureArRecognition);

uploadScanButton.addEventListener("click", () => {
  scanInput.click();
});

scanInput.addEventListener("change", () => {
  identifyPlantFile(scanInput.files?.[0]);
});

function dispatchExpedition() {
  if (state.dispatched) return;
  if (!state.explorationReady) {
    startLocationExploration();
    return;
  }

  const selected = getSelectedExpedition();
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
  expeditionText.textContent = `已派遣 ${selected.label}，种种正在${getGardenLabel()}寻找线索。`;
  renderExpeditionLoot(null);
  dispatchTask.textContent = "1 / 1";
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
