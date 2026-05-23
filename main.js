const panels = document.querySelectorAll(".panel");
const knowledgePop = document.querySelector("#knowledgePop");
const sprigInfoCard = document.querySelector("#sprigInfoCard");
const infoImage = document.querySelector("#infoImage");
const infoName = document.querySelector("#infoName");
const infoMeta = document.querySelector("#infoMeta");
const loginScreen = document.querySelector("#loginScreen");
const loginForm = document.querySelector("#loginForm");
const profileButton = document.querySelector("#profileButton");
const photoButton = document.querySelector("#photoButton");
const gardenStage = document.querySelector("#gardenStage");
const hudAvatar = document.querySelector("#hudAvatar");
const hudName = document.querySelector("#hudName");
const profileAvatar = document.querySelector("#profileAvatar");
const profileName = document.querySelector("#profileName");
const profileLevel = document.querySelector("#profileLevel");
const profileLocation = document.querySelector("#profileLocation");
const profileSeeds = document.querySelector("#profileSeeds");
const profileAtlas = document.querySelector("#profileAtlas");
const profileStamina = document.querySelector("#profileStamina");
const resetUserButton = document.querySelector("#resetUserButton");
const captureButton = document.querySelector("#captureButton");
const captureText = document.querySelector("#captureText");
const arTarget = document.querySelector("#arTarget");
const dandelionSprig = document.querySelector('[data-sprig="dandelion"]');
const dandelionEntry = document.querySelector("#dandelionEntry");
const atlasProgress = document.querySelector("#atlasProgress");
const atlasProgressBar = document.querySelector("#atlasProgressBar");
const captureTask = document.querySelector("#captureTask");
const dispatchTask = document.querySelector("#dispatchTask");
const atlasTask = document.querySelector("#atlasTask");
const dispatchButton = document.querySelector("#dispatchButton");
const questDispatchButton = document.querySelector("#questDispatchButton");
const questClaimButtons = document.querySelectorAll(".quest-claim");
const durationButtons = document.querySelectorAll("[data-duration]");
const expeditionPlanText = document.querySelector("#expeditionPlanText");
const expeditionText = document.querySelector("#expeditionText");
const expeditionTitle = document.querySelector("#expeditionTitle");
const expeditionTimer = document.querySelector("#expeditionTimer");
const goalCount = document.querySelector("#goalCount");
const seedValue = document.querySelector("#seedValue");
const levelValue = document.querySelector("#levelValue");
const levelProgress = document.querySelector("#levelProgress");
const levelProgressText = document.querySelector("#levelProgressText");
const staminaValue = document.querySelector("#staminaValue");
const staminaBar = document.querySelector("#staminaBar");
const expeditionStaminaValue = document.querySelector("#expeditionStaminaValue");
const expeditionStaminaBar = document.querySelector("#expeditionStaminaBar");
const phoneGardenButton = document.querySelector("#phoneGardenButton");
const gameClock = document.querySelector("#gameClock");

const MAX_STAMINA = 30;
const TICK_MS = 1000;

const sprigs = {
  fern: {
    name: "蕨类种种",
    plant: "蕨类",
    rarity: "普通",
    region: "屏南",
    status: "伸懒腰",
    image: "./assets/sprigs/fern-front.png",
    knowledge: [
      "屏南湿润林下，常能遇见多种蕨类。",
      "蕨类喜欢阴湿环境，常出现在溪边和林下。",
      "蕨类没有花，却用孢子延续生命。",
      "看到蕨类时，可以留意周围是否更凉、更湿。",
      "蕨类像森林留下的古老纹理。",
    ],
  },
  clover: {
    name: "四叶草种种",
    plant: "四叶草",
    rarity: "幸运",
    region: "屏南",
    status: "藏好运",
    image: "./assets/sprigs/clover-front.png",
    knowledge: [
      "四叶草常被看作幸运的信号。",
      "寻找四叶草时，人的视线会慢下来。",
      "幸运也可以是一种认真观察后的发现。",
      "它适合放在图鉴里，提醒园丁保留一点偶然。",
      "小小叶片像花园递出的绿色暗号。",
    ],
  },
  tea: {
    name: "野生茶种种",
    plant: "野生茶",
    rarity: "常见",
    region: "屏南",
    status: "闻茶香",
    image: "./assets/sprigs/tea-front.png",
    knowledge: [
      "茶树连接着屏南山路、村落和日常劳作。",
      "屏南山地气候适合茶树生长。",
      "茶常常不只是作物，也是一种地方生活方式。",
      "茶园边的杂草，也能提示季节变化。",
      "观察茶树叶片，可以看到人工栽培和山地环境的关系。",
    ],
  },
  orchid: {
    name: "屏南石豆兰种种",
    plant: "石豆兰",
    rarity: "稀有",
    region: "屏南",
    status: "低调发光",
    image: "./assets/sprigs/orchid-front.png",
    knowledge: [
      "石豆兰常躲在山林和树石之间。",
      "小型兰科植物需要更细心的观察方式。",
      "遇见它时，先记录环境，不急着靠近。",
      "屏南山林里的微小植物，也有完整的生活空间。",
      "稀有不只是少见，也意味着需要更温柔地对待。",
    ],
  },
  huangjing: {
    name: "黄精种种",
    plant: "黄精",
    rarity: "较少见",
    region: "屏南",
    status: "读书",
    image: "./assets/sprigs/huangjing-front.png",
    knowledge: [
      "黄精常生长在林下湿润地带。",
      "黄精出现在许多药食植物知识里。",
      "认识黄精，比采摘黄精更重要。",
      "林下植物常和村民的经验记忆有关。",
      "黄精喜欢安静、阴凉、有腐殖质的土壤。",
    ],
  },
  fisheye: {
    name: "折耳根种种",
    plant: "折耳根",
    rarity: "常见",
    region: "屏南",
    status: "有点倔",
    image: "./assets/sprigs/fisheye-front.png",
    knowledge: [
      "折耳根的气味很有辨识度。",
      "它常把地方饮食、野菜经验和个人记忆连在一起。",
      "对喜欢的人来说，它是很亲切的味道。",
      "对不习惯的人来说，它也是一次地方经验的入口。",
      "记录折耳根，可以同时记录味觉和植物知识。",
    ],
  },
  plantain: {
    name: "车前草种种",
    plant: "车前草",
    rarity: "普通",
    region: "屏南",
    status: "蹲在路边",
    image: "./assets/sprigs/plantain-front.png",
    knowledge: [
      "车前草常在路边出现，记录人的行走痕迹。",
      "越普通的植物，越容易陪伴日常生活。",
      "车前草常见于村道、田埂和庭院边。",
      "观察路边植物，可以理解人和植物共享的空间。",
      "车前草的叶脉很清楚，适合新手辨认。",
    ],
  },
  dandelion: {
    name: "蒲公英种种",
    plant: "蒲公英",
    rarity: "普通",
    region: "屏南",
    status: "刚搬进花园",
    image: "./assets/sprigs/dandelion-front.png",
    knowledge: [
      "蒲公英是进入田野观察的第一扇门。",
      "蒲公英种子会随风旅行，像小小的探险队。",
      "它常见于草地、田埂和路边。",
      "常见植物也能带来地方知识。",
      "记录蒲公英，就是记录一次真实行走。",
    ],
  },
};

const state = {
  captureStage: 0,
  unlockedDandelion: true,
  dispatched: false,
  expeditionDuration: "30m",
  expeditionRemainingSeconds: 0,
  lastTickAt: Date.now(),
  seeds: 10,
  stamina: MAX_STAMINA,
  levelProgress: 0,
  completedTasks: new Set(),
  user: {
    name: "小屏园丁",
    avatar: "园",
    location: "福建·屏南",
  },
  knowledgeIndexes: {},
};

const expeditionDurations = {
  "30m": {
    label: "30分钟",
    cost: 5,
    seconds: 30 * 60,
    reward: "短途采集：植物照片、少量种子、屏南田野记录。",
  },
  "2h": {
    label: "2小时",
    cost: 10,
    seconds: 2 * 60 * 60,
    reward: "村落巡游：地方故事、装饰线索、植物照片。",
  },
  "8h": {
    label: "8小时",
    cost: 20,
    seconds: 8 * 60 * 60,
    reward: "山林深探：稀有种子、古村故事、限定装饰。",
  },
  "24h": {
    label: "24小时",
    cost: 30,
    seconds: 24 * 60 * 60,
    reward: "远行探险：高概率带回稀有种种和完整地方传闻。",
  },
};

const captureFlow = [
  {
    button: "拍照",
    text: "拍照识别路边的蒲公英，让隐藏其中的种种现身。",
    visible: false,
  },
  {
    button: "识别植物",
    text: "识别结果：蒲公英。它常见于路边、田埂和草地，是适合新手园丁的第一次发现。",
    visible: false,
  },
  {
    button: "AR显示种种",
    text: "植物反应出现了。屏幕里有一只小小的蒲公英种种正在绕着光点转圈。",
    visible: true,
  },
  {
    button: "捕捉",
    text: "轻轻靠近，不要把它吓跑。捕捉后会解锁图鉴，并回到花园。",
    visible: true,
  },
  {
    button: "带回花园",
    text: "蒲公英种种已加入花园。它会带来关于日常植物和屏南田野观察的新知识。",
    visible: true,
  },
];

function openPanel(id) {
  panels.forEach((panel) => panel.classList.toggle("is-open", panel.id === id));
  knowledgePop.classList.add("is-hidden");
  if (id === "panel-profile") syncProfile();
}

function closePanels() {
  panels.forEach((panel) => panel.classList.remove("is-open"));
}

function showKnowledgeForSprig(button, sprig) {
  closePanels();
  const currentIndex = state.knowledgeIndexes[sprig.name] || 0;
  knowledgePop.textContent = sprig.knowledge[currentIndex];
  state.knowledgeIndexes[sprig.name] = (currentIndex + 1) % sprig.knowledge.length;
  knowledgePop.style.left = button.style.getPropertyValue("--x");
  knowledgePop.style.top = button.style.getPropertyValue("--y");
  knowledgePop.classList.remove("is-hidden");

  infoImage.src = sprig.image;
  infoImage.alt = sprig.name;
  infoName.textContent = sprig.name;
  infoMeta.textContent = `${sprig.plant} · ${sprig.rarity} · ${sprig.region} · ${sprig.status}`;
}

function showSystemMessage(title, text, label = "System") {
  closePanels();
  knowledgePop.textContent = text;
  knowledgePop.style.left = "50%";
  knowledgePop.style.top = "52%";
  knowledgePop.classList.remove("is-hidden");

  infoImage.src = "./assets/sprigs/fern-front.png";
  infoImage.alt = "";
  infoName.textContent = title;
  infoMeta.textContent = label;
}

function updateLevel(amount) {
  state.levelProgress = Math.min(100, state.levelProgress + amount);
  levelProgress.style.width = `${state.levelProgress}%`;
  levelProgressText.textContent = `Lv.1 进度 ${state.levelProgress}%`;

  if (state.levelProgress >= 100) {
    levelValue.textContent = "2";
    levelProgressText.textContent = "Lv.2 已解锁";
  }
}

function addSeeds(amount) {
  state.seeds += amount;
  seedValue.textContent = state.seeds;
  profileSeeds.textContent = state.seeds;
}

function setStamina(value) {
  state.stamina = Math.max(0, Math.min(MAX_STAMINA, value));
  const staminaPercent = (state.stamina / MAX_STAMINA) * 100;
  staminaValue.textContent = state.stamina;
  staminaBar.style.width = `${staminaPercent}%`;
  expeditionStaminaValue.textContent = `${state.stamina} / ${MAX_STAMINA}`;
  expeditionStaminaBar.style.width = `${staminaPercent}%`;
  profileStamina.textContent = state.stamina;
}

function updateGoalCount() {
  const left = Math.max(0, 7 - state.completedTasks.size);
  goalCount.textContent = `${left} goals left for today`;
}

function formatClock(date) {
  const dayLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return `${dayLabels[date.getDay()]}\u00A0\u00A0${String(date.getHours()).padStart(2, "0")} ${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatRemaining(seconds) {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const hours = Math.floor(safeSeconds / 3600);
  const mins = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;
  return `back in ${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
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

function syncExpeditionChoice() {
  const selected = getSelectedExpedition();
  durationButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.duration === state.expeditionDuration);
    button.disabled = state.dispatched;
  });
  expeditionPlanText.textContent = `屏南田野 · ${selected.label}`;
  if (!state.dispatched) {
    expeditionTimer.textContent = "可立即出发";
    expeditionText.textContent = `可前往：福建·屏南。${selected.reward}`;
  }
}

function syncUserHud() {
  hudName.textContent = state.user.name;
  profileName.textContent = state.user.name;
  profileLocation.textContent = state.user.location;
}

function syncProfile() {
  syncUserHud();
  profileLevel.textContent = levelValue.textContent;
  profileSeeds.textContent = state.seeds;
  profileAtlas.textContent = "8 / 8";
  profileStamina.textContent = state.stamina;
}

function finishLogin() {
  state.user = {
    name: "小屏园丁",
    avatar: "园",
    location: "福建·屏南",
  };
  syncProfile();
  loginScreen.classList.add("is-hidden");
  showSystemMessage("欢迎，小屏园丁", "点击种种，查看它头上的地方知识。", "园丁登入");
}

function updateCaptureUi() {
  const current = captureFlow[state.captureStage];
  captureButton.textContent = current.button;
  captureText.textContent = current.text;
  arTarget.classList.toggle("is-visible", current.visible);
}

function finishExpedition() {
  const selected = getSelectedExpedition();
  state.dispatched = false;
  state.expeditionRemainingSeconds = 0;
  syncExpeditionChoice();
  dispatchButton.textContent = "再次派遣";
  expeditionTitle.textContent = "探险完成";
  expeditionTimer.textContent = "已返回";
  expeditionText.textContent = `${selected.label} 探险已返回：${selected.reward}`;
  addSeeds(5);
  updateLevel(20);
}

function tickGameTime() {
  const now = Date.now();
  const elapsedSeconds = Math.max(0, (now - state.lastTickAt) / 1000);
  state.lastTickAt = now;
  syncGameClock();

  if (!state.dispatched) return;
  state.expeditionRemainingSeconds = Math.max(0, state.expeditionRemainingSeconds - elapsedSeconds);
  expeditionTimer.textContent = formatRemaining(state.expeditionRemainingSeconds);
  expeditionText.textContent = `探险进行中，剩余 ${formatRemaining(state.expeditionRemainingSeconds).replace("back in ", "")}。`;

  if (state.expeditionRemainingSeconds <= 0) {
    finishExpedition();
  }
}

function unlockDandelion() {
  state.unlockedDandelion = true;
  dandelionSprig.classList.remove("is-hidden");
  dandelionEntry.classList.remove("locked");
  dandelionEntry.innerHTML = '<b><img src="./assets/sprigs/dandelion-front.png" alt="" /></b><div><strong>蒲公英种种</strong><span>随风飘扬的时候最舒服了！</span></div><em>1/5</em>';
  atlasProgress.innerHTML = "<strong>8</strong> / 8";
  atlasProgressBar.style.width = "100%";
  profileAtlas.textContent = "8 / 8";
  captureTask.textContent = "1 / 1";
  atlasTask.textContent = "1 / 1";
  syncQuestClaims();
  updateGoalCount();
  addSeeds(5);
  setStamina(state.stamina - 10);
  updateLevel(45);
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
  showSystemMessage("种种花园", "点击种种，查看它头上的地方知识。", "小屏园丁");
});

profileButton.addEventListener("click", () => openPanel("panel-profile"));

phoneGardenButton.addEventListener("click", () => {
  closePanels();
  showSystemMessage("我的花园", "已经回到桌面。点击种种，查看它们带回来的地方知识。", "种种手机");
});

photoButton.addEventListener("click", () => {
  closePanels();
  knowledgePop.classList.add("is-hidden");
  gardenStage.classList.add("is-photo-mode");
  setTimeout(() => {
    gardenStage.classList.remove("is-photo-mode");
    showSystemMessage("纪念照片已生成", "今日花园照片已保存到种种手机相册。", "Photo");
  }, 1200);
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  finishLogin();
});

resetUserButton.addEventListener("click", () => {
  closePanels();
  loginScreen.classList.remove("is-hidden");
});

document.querySelectorAll(".sprig").forEach((button) => {
  button.addEventListener("click", () => {
    const sprig = sprigs[button.dataset.sprig];
    showKnowledgeForSprig(button, sprig);
  });
});

document.querySelector("#discoverFromMap").addEventListener("click", () => {
  openPanel("panel-discover");
});

document.querySelectorAll(".map-dot").forEach((dot) => {
  dot.addEventListener("click", () => openPanel("panel-discover"));
});

questClaimButtons.forEach((button) => {
  button.addEventListener("click", () => {
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

durationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (state.dispatched) return;
    state.expeditionDuration = button.dataset.duration;
    syncExpeditionChoice();
  });
});

captureButton.addEventListener("click", () => {
  if (state.captureStage < captureFlow.length - 1) {
    state.captureStage += 1;
    updateCaptureUi();
    if (state.captureStage === captureFlow.length - 1) {
      unlockDandelion();
    }
    return;
  }

  showKnowledgeForSprig(dandelionSprig, sprigs.dandelion);
});

function dispatchExpedition() {
  if (state.dispatched) return;
  const selected = getSelectedExpedition();
  if (state.stamina < selected.cost) {
    showSystemMessage("体力不足", `${selected.label} 探险需要 ${selected.cost} 体力。`, "Expedition");
    return;
  }

  state.dispatched = true;
  state.expeditionRemainingSeconds = selected.seconds;
  state.lastTickAt = Date.now();
  dispatchButton.textContent = "探险中";
  expeditionTitle.textContent = "Adventuring";
  expeditionTimer.textContent = formatRemaining(state.expeditionRemainingSeconds);
  expeditionText.textContent = `已派遣 ${selected.label}。`;
  dispatchTask.textContent = "1 / 1";
  syncQuestClaims();
  syncExpeditionChoice();
  setStamina(state.stamina - selected.cost);
  updateLevel(55);
}

dispatchButton.addEventListener("click", dispatchExpedition);

updateCaptureUi();
setStamina(state.stamina);
syncGameClock();
syncExpeditionChoice();
updateGoalCount();
syncProfile();
syncQuestClaims();
setInterval(tickGameTime, TICK_MS);
