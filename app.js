const elements = {
  dateLabel: document.querySelector("#dateLabel"),
  appTitle: document.querySelector("#appTitle"),
  startLabel: document.querySelector("#startLabel"),
  endLabel: document.querySelector("#endLabel"),
  durationLabel: document.querySelector("#durationLabel"),
  countLabel: document.querySelector("#countLabel"),
  flowerLabel: document.querySelector("#flowerLabel"),
  goalLabel: document.querySelector("#goalLabel"),
  bloomCountTitle: document.querySelector("#bloomCountTitle"),
  volumeLabel: document.querySelector("#volumeLabel"),
  volumeMeter: document.querySelector("#volumeMeter"),
  volumeFill: document.querySelector("#volumeFill"),
  thresholdMark: document.querySelector("#thresholdMark"),
  settingsToggle: document.querySelector("#settingsToggle"),
  teacherPanel: document.querySelector("#teacherPanel"),
  recordPanel: document.querySelector("#recordArea"),
  studentMessage: document.querySelector("#studentMessage"),
  bloomStageLabel: document.querySelector("#bloomStageLabel"),
  flowersLayer: document.querySelector("#flowersLayer"),
  petalsLayer: document.querySelector("#petalsLayer"),
  fullBloomOverlay: document.querySelector("#fullBloomOverlay"),
  highFiveButton: document.querySelector("#highFiveButton"),
  aisatsuMascot: document.querySelector("#aisatsuMascot"),
  greetingBubble: document.querySelector("#greetingBubble"),
  gazeNote: document.querySelector("#gazeNote"),
  gazeVideo: document.querySelector("#gazeVideo"),
  gazeStatus: document.querySelector("#gazeStatus"),
  startButton: document.querySelector("#startButton"),
  stopButton: document.querySelector("#stopButton"),
  saveButton: document.querySelector("#saveButton"),
  testFlowerButton: document.querySelector("#testFlowerButton"),
  themeSelect: document.querySelector("#themeSelect"),
  saveFormatSelect: document.querySelector("#saveFormatSelect"),
  highFiveToggle: document.querySelector("#highFiveToggle"),
  gazeToggle: document.querySelector("#gazeToggle"),
  greetingModeSelect: document.querySelector("#greetingModeSelect"),
  customGreetingLabel: document.querySelector("#customGreetingLabel"),
  customGreetingInput: document.querySelector("#customGreetingInput"),
  thresholdInput: document.querySelector("#thresholdInput"),
  thresholdOutput: document.querySelector("#thresholdOutput"),
  holdInput: document.querySelector("#holdInput"),
  cooldownInput: document.querySelector("#cooldownInput"),
  maxFlowersInput: document.querySelector("#maxFlowersInput"),
  gazeHoldInput: document.querySelector("#gazeHoldInput"),
  gazeCooldownInput: document.querySelector("#gazeCooldownInput"),
  memoInput: document.querySelector("#memoInput"),
  historyList: document.querySelector("#historyList"),
  clearHistoryButton: document.querySelector("#clearHistoryButton"),
  sakuraSvg: document.querySelector("#sakuraSvg"),
  treeImage: document.querySelector("#treeImage"),
};

const themes = {
  sakura: {
    title: "あいさつのさくら",
    fileNamePart: "さくら",
    treeImage: "./assets/storybook-sakura.png",
    flowerImage: "./assets/sakura-flower.png",
    itemSize: 64,
    positions: "tree",
    countTitle: "<ruby>咲<rt>さ</rt></ruby>いた<ruby>花<rt>はな</rt></ruby>",
    resultItemLabel: "咲いた花",
    stageFull: "<ruby>満開<rt>まんかい</rt></ruby>",
    stageEighty: "<ruby>八分咲<rt>はちぶざ</rt></ruby>き",
    stageHalf: "<ruby>五分咲<rt>ごぶざ</rt></ruby>き",
    stageStart: "<ruby>咲<rt>さ</rt></ruby>きはじめ",
    fullMessage: '<ruby>目標達成<rt>もくひょうたっせい</rt></ruby>！みんなのあいさつで<ruby>桜<rt>さくら</rt></ruby>が<ruby>満開<rt>まんかい</rt></ruby>になりました！',
    eightyMessage: 'みんなの<ruby>声<rt>こえ</rt></ruby>で、<ruby>桜<rt>さくら</rt></ruby>が<ruby>満開<rt>まんかい</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づいています',
    halfMessage: '<ruby>桜<rt>さくら</rt></ruby>がたくさん<ruby>咲<rt>さ</rt></ruby>いてきました！',
    thanksMessage: (remaining) => `あいさつをありがとう！ あと${remaining}<ruby>回<rt>かい</rt></ruby>で<ruby>満開<rt>まんかい</rt></ruby>です`,
  },
  sunflower: {
    title: 'あいさつのひまわり',
    fileNamePart: "ひまわり",
    treeImage: "./assets/storybook-sunflower-field.png",
    flowerImage: "./assets/sunflower-flower.png",
    itemSize: 54,
    positions: "field",
    countTitle: "<ruby>咲<rt>さ</rt></ruby>いた<ruby>花<rt>はな</rt></ruby>",
    resultItemLabel: "咲いた花",
    stageFull: "<ruby>満開<rt>まんかい</rt></ruby>",
    stageEighty: "もうすぐ<ruby>満開<rt>まんかい</rt></ruby>",
    stageHalf: "たくさん<ruby>咲<rt>さ</rt></ruby>いた",
    stageStart: "<ruby>咲<rt>さ</rt></ruby>きはじめ",
    fullMessage: '<ruby>目標達成<rt>もくひょうたっせい</rt></ruby>！みんなのあいさつでひまわりが<ruby>満開<rt>まんかい</rt></ruby>になりました！',
    eightyMessage: 'みんなの<ruby>声<rt>こえ</rt></ruby>で、ひまわりが<ruby>満開<rt>まんかい</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づいています',
    halfMessage: 'ひまわりがたくさん<ruby>咲<rt>さ</rt></ruby>いてきました！',
    thanksMessage: (remaining) => `あいさつをありがとう！ あと${remaining}<ruby>回<rt>かい</rt></ruby>で<ruby>満開<rt>まんかい</rt></ruby>です`,
  },
  momiji: {
    title: "あいさつのもみじ",
    fileNamePart: "もみじ",
    treeImage: "./assets/storybook-momiji.png",
    flowerImage: "./assets/momiji-leaf.png",
    itemSize: 58,
    positions: "tree",
    countTitle: "<ruby>色<rt>いろ</rt></ruby>づいた<ruby>葉<rt>は</rt></ruby>",
    resultItemLabel: "色づいた葉",
    stageFull: "<ruby>見<rt>み</rt></ruby>ごろ",
    stageEighty: "もうすぐ<ruby>見<rt>み</rt></ruby>ごろ",
    stageHalf: "たくさん<ruby>色<rt>いろ</rt></ruby>づいた",
    stageStart: "<ruby>色<rt>いろ</rt></ruby>づきはじめ",
    fullMessage: '<ruby>目標達成<rt>もくひょうたっせい</rt></ruby>！みんなのあいさつでもみじが<ruby>見<rt>み</rt></ruby>ごろになりました！',
    eightyMessage: 'みんなの<ruby>声<rt>こえ</rt></ruby>で、もみじが<ruby>見<rt>み</rt></ruby>ごろに<ruby>近<rt>ちか</rt></ruby>づいています',
    halfMessage: 'もみじがたくさん<ruby>色<rt>いろ</rt></ruby>づいてきました！',
    thanksMessage: (remaining) => `あいさつをありがとう！ あと${remaining}<ruby>回<rt>かい</rt></ruby>で<ruby>見<rt>み</rt></ruby>ごろです`,
  },
  tsubaki: {
    title: "あいさつのつばき",
    fileNamePart: "つばき",
    treeImage: "./assets/storybook-tsubaki.png",
    flowerImage: "./assets/tsubaki-flower.png",
    itemSize: 60,
    positions: "field",
    countTitle: "<ruby>咲<rt>さ</rt></ruby>いた<ruby>花<rt>はな</rt></ruby>",
    resultItemLabel: "咲いた花",
    stageFull: "<ruby>満開<rt>まんかい</rt></ruby>",
    stageEighty: "もうすぐ<ruby>満開<rt>まんかい</rt></ruby>",
    stageHalf: "たくさん<ruby>咲<rt>さ</rt></ruby>いた",
    stageStart: "<ruby>咲<rt>さ</rt></ruby>きはじめ",
    fullMessage: '<ruby>目標達成<rt>もくひょうたっせい</rt></ruby>！みんなのあいさつでつばきが<ruby>満開<rt>まんかい</rt></ruby>になりました！',
    eightyMessage: 'みんなの<ruby>声<rt>こえ</rt></ruby>で、つばきが<ruby>満開<rt>まんかい</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づいています',
    halfMessage: 'つばきがたくさん<ruby>咲<rt>さ</rt></ruby>いてきました！',
    thanksMessage: (remaining) => `あいさつをありがとう！ あと${remaining}<ruby>回<rt>かい</rt></ruby>で<ruby>満開<rt>まんかい</rt></ruby>です`,
  },
};

const state = {
  audioContext: null,
  analyser: null,
  microphone: null,
  stream: null,
  gazeStream: null,
  gazeDetector: null,
  gazeDetectorKind: null,
  gazeAnimationId: null,
  gazeSince: null,
  lastGazeCountedAt: 0,
  animationId: null,
  startedAt: null,
  endedAt: null,
  greetingCount: 0,
  flowerCount: 0,
  loudSince: null,
  lastCountedAt: 0,
  running: false,
  latestVolume: 0,
  theme: "sakura",
  inputCounts: {
    voice: 0,
    highFive: 0,
    gaze: 0,
  },
};

const gazeDetectorConfig = {
  tasksVisionUrl: "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14",
  wasmUrl: "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",
  modelUrl: "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite",
};

const greetingWords = {
  ohayo: "おはよう",
  konnichiwa: "こんにちは",
  sayonara: "さようなら",
};

const greetingSounds = {
  ohayo: new Audio("./assets/audio/ohayo.wav"),
  konnichiwa: new Audio("./assets/audio/konnichiwa.wav"),
  sayonara: new Audio("./assets/audio/sayonara.wav"),
};

Object.values(greetingSounds).forEach((audio) => {
  audio.preload = "auto";
});

const sakuraFlowerPositions = [
  [450, 238, 1.08], [390, 250, 1.02], [510, 250, 1.02], [338, 266, 0.98], [562, 266, 0.98],
  [282, 286, 0.96], [618, 286, 0.96], [228, 310, 0.94], [674, 310, 0.94], [178, 342, 0.9],
  [724, 342, 0.9], [130, 376, 0.86], [772, 376, 0.86], [410, 198, 0.96], [490, 198, 0.96],
  [354, 184, 0.92], [546, 184, 0.92], [300, 170, 0.9], [600, 170, 0.9], [246, 158, 0.86],
  [654, 158, 0.86], [198, 148, 0.82], [702, 148, 0.82], [444, 144, 0.9], [456, 104, 0.82],
  [396, 126, 0.82], [504, 126, 0.82], [342, 112, 0.78], [558, 112, 0.78], [610, 100, 0.76],
  [286, 116, 0.76], [668, 114, 0.74], [230, 128, 0.74], [168, 174, 0.78], [734, 174, 0.78],
  [120, 220, 0.74], [780, 220, 0.74], [208, 238, 0.88], [692, 238, 0.88], [254, 222, 0.9],
  [646, 222, 0.9], [312, 220, 0.96], [588, 220, 0.96], [374, 220, 1.0], [526, 220, 1.0],
  [430, 290, 1.04], [470, 290, 1.04], [372, 318, 1.0], [528, 318, 1.0], [314, 344, 0.94],
  [586, 344, 0.94], [258, 370, 0.9], [642, 370, 0.9], [202, 398, 0.84], [698, 398, 0.84],
  [450, 342, 1.0], [398, 378, 0.94], [502, 378, 0.94], [344, 412, 0.86], [556, 412, 0.86],
  [292, 444, 0.78], [608, 444, 0.78], [452, 408, 0.9], [416, 454, 0.78], [484, 454, 0.78],
  [384, 158, 0.82], [516, 158, 0.82], [324, 142, 0.78], [576, 142, 0.78], [264, 144, 0.74],
  [636, 144, 0.74], [430, 92, 0.72], [470, 92, 0.72], [376, 82, 0.7], [524, 82, 0.7],
  [320, 88, 0.68], [580, 88, 0.68], [710, 206, 0.76], [190, 206, 0.76], [150, 272, 0.76],
  [750, 272, 0.76], [236, 282, 0.86], [664, 282, 0.86], [300, 306, 0.92], [600, 306, 0.92],
  [360, 292, 0.98], [540, 292, 0.98], [416, 260, 1.02], [484, 260, 1.02], [450, 176, 0.88],
  [354, 242, 0.92], [546, 242, 0.92], [274, 334, 0.9], [626, 334, 0.9], [224, 358, 0.84],
  [676, 358, 0.84], [330, 382, 0.88], [570, 382, 0.88], [386, 430, 0.78], [514, 430, 0.78],
  [450, 468, 0.7], [356, 468, 0.68], [544, 468, 0.68], [160, 318, 0.72], [740, 318, 0.72],
];

const sunflowerFlowerPositions = [
  [92, 334, 0.58], [142, 318, 0.62], [192, 306, 0.64], [242, 296, 0.66], [292, 288, 0.68],
  [342, 282, 0.7], [392, 278, 0.72], [442, 276, 0.72], [492, 278, 0.72], [542, 282, 0.7],
  [592, 288, 0.68], [642, 296, 0.66], [692, 306, 0.64], [742, 318, 0.62], [792, 334, 0.58],
  [78, 388, 0.56], [128, 372, 0.6], [178, 358, 0.62], [228, 346, 0.64], [278, 336, 0.66],
  [328, 328, 0.68], [378, 322, 0.7], [428, 320, 0.7], [478, 322, 0.7], [528, 328, 0.68],
  [578, 336, 0.66], [628, 346, 0.64], [678, 358, 0.62], [728, 372, 0.6], [778, 388, 0.56],
  [104, 438, 0.52], [160, 424, 0.56], [216, 412, 0.58], [272, 402, 0.6], [328, 394, 0.62],
  [384, 388, 0.64], [440, 386, 0.64], [496, 388, 0.64], [552, 394, 0.62], [608, 402, 0.6],
  [664, 412, 0.58], [720, 424, 0.56], [776, 438, 0.52], [132, 486, 0.48], [188, 474, 0.5],
  [244, 464, 0.52], [300, 456, 0.54], [356, 450, 0.56], [412, 446, 0.58], [468, 446, 0.58],
  [524, 450, 0.56], [580, 456, 0.54], [636, 464, 0.52], [692, 474, 0.5], [748, 486, 0.48],
  [168, 528, 0.44], [232, 518, 0.46], [296, 510, 0.48], [360, 504, 0.5], [424, 502, 0.5],
  [488, 502, 0.5], [552, 504, 0.5], [616, 510, 0.48], [680, 518, 0.46], [744, 528, 0.44],
  [116, 304, 0.48], [220, 326, 0.52], [318, 306, 0.54], [416, 300, 0.56], [514, 304, 0.56],
  [612, 320, 0.54], [710, 340, 0.52], [812, 360, 0.48], [86, 470, 0.42], [814, 470, 0.42],
  [130, 402, 0.5], [250, 384, 0.54], [370, 370, 0.58], [490, 370, 0.58], [610, 384, 0.54],
  [730, 402, 0.5], [202, 448, 0.48], [322, 432, 0.52], [442, 426, 0.54], [562, 432, 0.52],
  [682, 448, 0.48], [270, 536, 0.42], [390, 526, 0.44], [510, 526, 0.44], [630, 536, 0.42],
  [84, 426, 0.44], [818, 426, 0.44], [164, 346, 0.5], [736, 346, 0.5], [454, 352, 0.6],
];

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatDate(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatDateForFile(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatTime(date) {
  if (!date) return "--:--";
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatTimeWithSeconds(date) {
  if (!date) return "--:--:--";
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function formatDuration(start, end) {
  if (!start || !end) return "--";
  const seconds = Math.max(0, Math.round((end - start) / 1000));
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  if (minutes === 0) return `${rest}秒`;
  return `${minutes}分${rest}秒`;
}

function getSettings() {
  return {
    theme: elements.themeSelect.value,
    saveFormat: elements.saveFormatSelect.value,
    highFive: elements.highFiveToggle.checked,
    gaze: elements.gazeToggle.checked,
    greetingMode: elements.greetingModeSelect.value,
    customGreeting: elements.customGreetingInput.value.trim(),
    threshold: Number(elements.thresholdInput.value),
    holdMs: Number(elements.holdInput.value) * 1000,
    cooldownMs: Number(elements.cooldownInput.value) * 1000,
    maxFlowers: Number(elements.maxFlowersInput.value),
    gazeHoldMs: Number(elements.gazeHoldInput.value) * 1000,
    gazeCooldownMs: Number(elements.gazeCooldownInput.value) * 1000,
  };
}

function updateSettingsUi() {
  const settings = getSettings();
  state.theme = settings.theme;
  const theme = themes[state.theme];
  elements.appTitle.innerHTML = theme.title;
  elements.treeImage.setAttribute("href", theme.treeImage);
  elements.bloomCountTitle.innerHTML = theme.countTitle;
  elements.thresholdOutput.textContent = settings.threshold;
  elements.thresholdMark.style.left = `${settings.threshold}%`;
  elements.goalLabel.textContent = settings.maxFlowers;
  elements.highFiveButton.disabled = !state.running || !settings.highFive;
  elements.gazeNote.hidden = !settings.gaze;
  elements.customGreetingLabel.hidden = settings.greetingMode !== "custom";
  elements.greetingBubble.textContent = getGreetingWord();
  if (!state.running) {
    elements.gazeStatus.textContent = settings.gaze ? "開始するとカメラを使います" : "みつめて参加はオフです";
  }
  renderFlowers();
  updateMessage();
}

function getAutoGreetingWord(date = new Date()) {
  return greetingWords[getAutoGreetingKey(date)];
}

function getAutoGreetingKey(date = new Date()) {
  const hour = date.getHours();
  if (hour >= 15 && hour < 16) return "sayonara";
  if (hour < 12) return "ohayo";
  return "konnichiwa";
}

function getGreetingKey(date = new Date()) {
  const settings = getSettings();
  if (settings.greetingMode === "auto") return getAutoGreetingKey(date);
  if (settings.greetingMode === "custom") {
    return Object.keys(greetingWords).find((key) => greetingWords[key] === settings.customGreeting) || null;
  }
  return greetingWords[settings.greetingMode] ? settings.greetingMode : "ohayo";
}

function getGreetingWord(date = new Date()) {
  const settings = getSettings();
  if (settings.greetingMode === "auto") return getAutoGreetingWord(date);
  if (settings.greetingMode === "custom") return settings.customGreeting || greetingWords.ohayo;
  return greetingWords[settings.greetingMode] || greetingWords.ohayo;
}

function playGreetingSound(date = new Date()) {
  const key = getGreetingKey(date);
  const audio = key ? greetingSounds[key] : null;
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function setGazeStatus(text) {
  elements.gazeStatus.textContent = text;
}

async function loadGazeDetector() {
  if (state.gazeDetector) return true;

  try {
    const vision = await import(gazeDetectorConfig.tasksVisionUrl);
    const fileset = await vision.FilesetResolver.forVisionTasks(gazeDetectorConfig.wasmUrl);
    try {
      state.gazeDetector = await vision.FaceDetector.createFromOptions(fileset, {
        baseOptions: {
          modelAssetPath: gazeDetectorConfig.modelUrl,
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        minDetectionConfidence: 0.55,
      });
    } catch {
      state.gazeDetector = await vision.FaceDetector.createFromOptions(fileset, {
        baseOptions: {
          modelAssetPath: gazeDetectorConfig.modelUrl,
          delegate: "CPU",
        },
        runningMode: "VIDEO",
        minDetectionConfidence: 0.55,
      });
    }
    state.gazeDetectorKind = "mediapipe";
    return true;
  } catch (error) {
    console.warn("MediaPipe face detector could not be loaded.", error);
  }

  if ("FaceDetector" in window) {
    try {
      state.gazeDetector = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
      state.gazeDetectorKind = "native";
      return true;
    } catch (error) {
      console.warn("Native FaceDetector could not be started.", error);
    }
  }

  state.gazeDetector = null;
  state.gazeDetectorKind = null;
  return false;
}

function getBestFace(detections) {
  if (!detections || detections.length === 0) return null;
  return detections.reduce((best, face) => {
    const box = face.boundingBox || {};
    const area = (box.width || 0) * (box.height || 0);
    const bestBox = best.boundingBox || {};
    const bestArea = (bestBox.width || 0) * (bestBox.height || 0);
    return area > bestArea ? face : best;
  }, detections[0]);
}

function isFacingScreen(face, video) {
  const box = face.boundingBox;
  if (!box || !video.videoWidth || !video.videoHeight) return false;

  const centerX = box.originX !== undefined ? box.originX + box.width / 2 : box.x + box.width / 2;
  const centerY = box.originY !== undefined ? box.originY + box.height / 2 : box.y + box.height / 2;
  const normalizedX = centerX / video.videoWidth;
  const normalizedY = centerY / video.videoHeight;
  const normalizedWidth = box.width / video.videoWidth;
  const normalizedHeight = box.height / video.videoHeight;
  const centered = normalizedX > 0.25 && normalizedX < 0.75 && normalizedY > 0.16 && normalizedY < 0.78;
  const faceLargeEnough = normalizedWidth > 0.12 && normalizedHeight > 0.16;
  const faceNotTooClose = normalizedWidth < 0.72 && normalizedHeight < 0.82;
  return centered && faceLargeEnough && faceNotTooClose;
}

async function detectGazeFrame() {
  if (!state.running || !getSettings().gaze || !state.gazeDetector || !state.gazeStream) return;

  const video = elements.gazeVideo;
  if (video.readyState < 2) {
    state.gazeAnimationId = requestAnimationFrame(detectGazeFrame);
    return;
  }

  let detections = [];
  try {
    if (state.gazeDetectorKind === "mediapipe") {
      detections = state.gazeDetector.detectForVideo(video, performance.now()).detections || [];
    } else {
      detections = await state.gazeDetector.detect(video);
    }
  } catch (error) {
    console.warn("Gaze detection failed.", error);
    setGazeStatus("みつめて参加を確認できません");
    state.gazeAnimationId = requestAnimationFrame(detectGazeFrame);
    return;
  }

  const face = getBestFace(detections);
  const now = performance.now();
  const settings = getSettings();
  const ready = face && isFacingScreen(face, video);
  const cooledDown = now - state.lastGazeCountedAt >= settings.gazeCooldownMs;

  if (ready && cooledDown) {
    if (!state.gazeSince) state.gazeSince = now;
    const progress = Math.min(100, Math.round(((now - state.gazeSince) / settings.gazeHoldMs) * 100));
    setGazeStatus(`みつめています ${progress}%`);
    if (now - state.gazeSince >= settings.gazeHoldMs) {
      state.lastGazeCountedAt = now;
      state.gazeSince = null;
      countGreeting("gaze");
      setGazeStatus("みつめてあいさつできました");
    }
  } else {
    state.gazeSince = null;
    setGazeStatus(ready ? "つぎの検知を待っています" : "画面を見ると参加できます");
  }

  state.gazeAnimationId = requestAnimationFrame(detectGazeFrame);
}

async function startGazeCamera() {
  if (!getSettings().gaze) {
    setGazeStatus("みつめて参加はオフです");
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    setGazeStatus("この端末ではカメラを使えません");
    return;
  }

  setGazeStatus("みつめて参加を準備しています");
  const loaded = await loadGazeDetector();
  if (!loaded) {
    setGazeStatus("顔検出を読み込めませんでした");
    return;
  }
  if (!state.running || !getSettings().gaze) return;

  try {
    state.gazeStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: { ideal: 640 },
        height: { ideal: 480 },
      },
      audio: false,
    });
    elements.gazeVideo.srcObject = state.gazeStream;
    elements.gazeVideo.hidden = false;
    await elements.gazeVideo.play();
    state.gazeSince = null;
    state.lastGazeCountedAt = 0;
    setGazeStatus("画面を見ると参加できます");
    detectGazeFrame();
  } catch (error) {
    console.error(error);
    setGazeStatus("カメラを使えるようにしてください");
  }
}

function stopGazeCamera() {
  if (state.gazeAnimationId) cancelAnimationFrame(state.gazeAnimationId);
  state.gazeAnimationId = null;
  state.gazeSince = null;
  if (state.gazeStream) {
    state.gazeStream.getTracks().forEach((track) => track.stop());
  }
  state.gazeStream = null;
  elements.gazeVideo.pause();
  elements.gazeVideo.srcObject = null;
  elements.gazeVideo.hidden = true;
  setGazeStatus(getSettings().gaze ? "開始するとカメラを使います" : "みつめて参加はオフです");
}

function createFlower(x, y, scale = 1, delay = 0) {
  const theme = themes[state.theme];
  const size = theme.itemSize;
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("transform", `translate(${x} ${y}) scale(${scale})`);
  const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
  image.setAttribute("class", "flower");
  image.setAttribute("href", theme.flowerImage);
  image.setAttribute("x", String(-size / 2));
  image.setAttribute("y", String(-size / 2));
  image.setAttribute("width", String(size));
  image.setAttribute("height", String(size));
  image.setAttribute("preserveAspectRatio", "xMidYMid meet");
  image.style.animationDelay = `${delay}ms`;
  group.appendChild(image);
  return group;
}

function createPetal(index) {
  const theme = themes[state.theme];
  const petal = document.createElementNS("http://www.w3.org/2000/svg", "image");
  const x = 70 + ((index * 83) % 630);
  const y = 72 + ((index * 47) % 300);
  petal.setAttribute("class", "petal");
  petal.setAttribute("href", theme.flowerImage);
  petal.setAttribute("x", x);
  petal.setAttribute("y", y);
  petal.setAttribute("width", "24");
  petal.setAttribute("height", "24");
  petal.setAttribute("opacity", "0.72");
  petal.setAttribute("transform", `rotate(${(index * 31) % 180} ${x + 12} ${y + 12})`);
  petal.style.animationDelay = `${index * 120}ms`;
  return petal;
}

function renderFlowers() {
  elements.flowersLayer.replaceChildren();
  elements.petalsLayer.replaceChildren();
  const { items, fullBloomTarget, visible } = getFlowerRenderItems();

  for (const item of items) {
    elements.flowersLayer.appendChild(createFlower(item.x, item.y, item.scale, item.delay));
  }

  if (visible >= fullBloomTarget) {
    for (let i = 0; i < 24; i += 1) {
      elements.petalsLayer.appendChild(createPetal(i));
    }
  }
}

function updateMessage() {
  const maxFlowers = getSettings().maxFlowers;
  const theme = themes[state.theme];
  const ratio = maxFlowers > 0 ? state.flowerCount / maxFlowers : 0;
  const isFullBloom = ratio >= 1;
  elements.recordPanel.classList.toggle("full-bloom", isFullBloom);
  elements.fullBloomOverlay.style.display = isFullBloom ? "block" : "none";

  if (ratio >= 1) {
    elements.bloomStageLabel.innerHTML = theme.stageFull;
    elements.studentMessage.innerHTML = theme.fullMessage;
  } else if (ratio >= 0.8) {
    elements.bloomStageLabel.innerHTML = theme.stageEighty;
    elements.studentMessage.innerHTML = theme.eightyMessage;
  } else if (ratio >= 0.5) {
    elements.bloomStageLabel.innerHTML = theme.stageHalf;
    elements.studentMessage.innerHTML = theme.halfMessage;
  } else if (state.greetingCount > 0) {
    const remaining = Math.max(0, maxFlowers - state.greetingCount);
    elements.bloomStageLabel.innerHTML = theme.stageStart;
    elements.studentMessage.innerHTML = theme.thanksMessage(remaining);
  } else if (state.running) {
    elements.bloomStageLabel.textContent = "つぼみ";
    elements.studentMessage.innerHTML = '<ruby>大<rt>おお</rt></ruby>きな<ruby>声<rt>こえ</rt></ruby>であいさつしよう';
  } else {
    elements.bloomStageLabel.textContent = "つぼみ";
    elements.studentMessage.innerHTML = 'みんなのあいさつで<ruby>花<rt>はな</rt></ruby>を<ruby>咲<rt>さ</rt></ruby>かせよう';
  }
}

function updateUi() {
  elements.dateLabel.textContent = formatDate(state.startedAt || new Date());
  elements.startLabel.textContent = formatTime(state.startedAt);
  elements.endLabel.textContent = formatTime(state.endedAt);
  elements.durationLabel.textContent = formatDuration(state.startedAt, state.endedAt || (state.running ? new Date() : null));
  elements.countLabel.textContent = state.greetingCount;
  elements.flowerLabel.textContent = state.flowerCount;
  elements.volumeLabel.textContent = Math.round(state.latestVolume);
  elements.volumeMeter.setAttribute("aria-valuenow", String(Math.round(state.latestVolume)));
  elements.volumeFill.style.width = `${Math.min(100, state.latestVolume)}%`;
  updateMessage();
}

function resetSession() {
  state.startedAt = null;
  state.endedAt = null;
  state.greetingCount = 0;
  state.flowerCount = 0;
  state.loudSince = null;
  state.lastCountedAt = 0;
  state.latestVolume = 0;
  state.gazeSince = null;
  state.lastGazeCountedAt = 0;
  state.inputCounts = { voice: 0, highFive: 0, gaze: 0 };
  renderFlowers();
  updateUi();
}

function showGreetingReaction() {
  elements.greetingBubble.textContent = getGreetingWord();
  playGreetingSound();
  elements.highFiveButton.classList.remove("high-fived");
  window.setTimeout(() => elements.highFiveButton.classList.add("high-fived"), 0);
}

function countGreeting(source = "voice") {
  if (source === "highFive" && (!state.running || !getSettings().highFive)) return;
  if (source === "gaze" && (!state.running || !getSettings().gaze)) return;
  state.greetingCount += 1;
  state.flowerCount = Math.min(150, state.flowerCount + 1);
  if (state.inputCounts[source] !== undefined) state.inputCounts[source] += 1;
  state.lastCountedAt = performance.now();
  state.loudSince = null;
  if (source === "highFive" || source === "gaze") {
    showGreetingReaction();
  }
  renderFlowers();
  updateUi();
}

function getVolumePercent(dataArray) {
  let sum = 0;
  for (let i = 0; i < dataArray.length; i += 1) {
    const centered = dataArray[i] - 128;
    sum += centered * centered;
  }
  const rms = Math.sqrt(sum / dataArray.length);
  return Math.min(100, Math.max(0, (rms / 28) * 100));
}

function monitorVolume() {
  if (!state.running || !state.analyser) return;
  const dataArray = new Uint8Array(state.analyser.fftSize);
  const tick = () => {
    if (!state.running) return;
    state.analyser.getByteTimeDomainData(dataArray);
    state.latestVolume = getVolumePercent(dataArray);
    const now = performance.now();
    const settings = getSettings();
    const loudEnough = state.latestVolume >= settings.threshold;
    const cooledDown = now - state.lastCountedAt >= settings.cooldownMs;

    if (loudEnough && cooledDown) {
      if (!state.loudSince) state.loudSince = now;
      if (now - state.loudSince >= settings.holdMs) countGreeting();
    } else if (!loudEnough) {
      state.loudSince = null;
    }

    updateUi();
    state.animationId = requestAnimationFrame(tick);
  };
  tick();
}

async function startSession() {
  resetSession();
  state.startedAt = new Date();
  state.running = true;
  elements.startButton.disabled = true;
  elements.startButton.innerHTML = "<ruby>記録中<rt>きろくちゅう</rt></ruby>...";
  elements.stopButton.disabled = false;
  elements.saveButton.disabled = true;
  elements.highFiveButton.disabled = !getSettings().highFive;
  startGazeCamera();

  if (!navigator.mediaDevices?.getUserMedia) {
    elements.studentMessage.innerHTML = 'マイクなしでも、ハイタッチやみつめて<ruby>参加<rt>さんか</rt></ruby>できます';
    updateUi();
    return;
  }

  try {
    state.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.audioContext = new AudioContext();
    state.analyser = state.audioContext.createAnalyser();
    state.analyser.fftSize = 1024;
    state.microphone = state.audioContext.createMediaStreamSource(state.stream);
    state.microphone.connect(state.analyser);

    monitorVolume();
    updateUi();
  } catch (error) {
    if (getSettings().highFive || getSettings().gaze) {
      elements.studentMessage.innerHTML = 'マイクなしでも、ハイタッチやみつめて<ruby>参加<rt>さんか</rt></ruby>できます';
      updateUi();
      return;
    }
    stopSession();
    elements.studentMessage.innerHTML = 'マイクを<ruby>使<rt>つか</rt></ruby>えるようにしてから、もう<ruby>一度<rt>いちど</rt></ruby><ruby>開始<rt>かいし</rt></ruby>してください';
    console.error(error);
  }
}

function stopAudio() {
  state.running = false;
  if (state.animationId) cancelAnimationFrame(state.animationId);
  stopGazeCamera();
  if (state.stream) {
    state.stream.getTracks().forEach((track) => track.stop());
  }
  if (state.audioContext) {
    state.audioContext.close();
  }
  state.audioContext = null;
  state.analyser = null;
  state.microphone = null;
  state.stream = null;
}

function stopSession() {
  if (!state.startedAt) return;
  stopAudio();
  state.endedAt = new Date();
  state.latestVolume = 0;
  elements.startButton.disabled = false;
  elements.startButton.innerHTML = "<ruby>開始<rt>かいし</rt></ruby>";
  elements.stopButton.disabled = true;
  elements.saveButton.disabled = false;
  elements.highFiveButton.disabled = true;
  updateUi();
}

function getRecord() {
  const started = state.startedAt || new Date();
  const ended = state.endedAt || new Date();
  const theme = themes[state.theme];
  const dateFile = formatDateForFile(started);
  const timeFile = `${pad(started.getHours())}${pad(started.getMinutes())}`;
  return {
    date: formatDateForFile(started),
    dateLabel: formatDate(started),
    startTime: formatTimeWithSeconds(started),
    endTime: formatTimeWithSeconds(ended),
    duration: formatDuration(started, ended),
    greetingCount: state.greetingCount,
    flowerCount: state.flowerCount,
    voiceCount: state.inputCounts.voice,
    highFiveCount: state.inputCounts.highFive,
    gazeCount: state.inputCounts.gaze,
    greetingWord: getGreetingWord(started),
    resultItemLabel: theme.resultItemLabel,
    imageFileName: `あいさつの${theme.fileNamePart}_${dateFile}_${timeFile}.png`,
    csvFileName: `あいさつの${theme.fileNamePart}_${dateFile}_${timeFile}.csv`,
    memo: elements.memoInput.value.trim(),
  };
}

function csvEscape(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function downloadBlob(content, fileName, type) {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadCsv(record) {
  const header = ["日付", "開始時刻", "終了時刻", "実施時間", "あいさつの言葉", "挨拶回数", "成果の数", "声", "ハイタッチ", "みつめて", "画像ファイル名", "メモ"];
  const row = [
    record.date,
    record.startTime,
    record.endTime,
    record.duration,
    record.greetingWord,
    record.greetingCount,
    record.flowerCount,
    record.voiceCount,
    record.highFiveCount,
    record.gazeCount,
    record.imageFileName,
    record.memo,
  ];
  const csv = `\uFEFF${header.map(csvEscape).join(",")}\r\n${row.map(csvEscape).join(",")}\r\n`;
  downloadBlob(csv, record.csvFileName, "text/csv;charset=utf-8");
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = new URL(src, window.location.href).href;
  });
}

function drawImageCover(ctx, image, x, y, width, height) {
  const sourceRatio = image.naturalWidth / image.naturalHeight;
  const targetRatio = width / height;
  let sourceX = 0;
  let sourceY = 0;
  let sourceWidth = image.naturalWidth;
  let sourceHeight = image.naturalHeight;

  if (sourceRatio > targetRatio) {
    sourceWidth = sourceHeight * targetRatio;
    sourceX = (image.naturalWidth - sourceWidth) / 2;
  } else {
    sourceHeight = sourceWidth / targetRatio;
    sourceY = (image.naturalHeight - sourceHeight) / 2;
  }

  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

function getFlowerRenderItems() {
  const fullBloomTarget = Math.max(1, getSettings().maxFlowers);
  const maxVisibleFlowers = 150;
  const visible = Math.min(state.flowerCount, maxVisibleFlowers);
  const theme = themes[state.theme];
  const positions = theme.positions === "field" ? sunflowerFlowerPositions : sakuraFlowerPositions;
  const densityScale = theme.positions === "field"
    ? fullBloomTarget >= 100 ? 0.82 : fullBloomTarget >= 75 ? 0.9 : 1
    : fullBloomTarget >= 100 ? 0.68 : fullBloomTarget >= 75 ? 0.78 : 0.9;

  const items = [];
  for (let i = 0; i < visible; i += 1) {
    const [x, y, scale] = positions[i % positions.length];
    const repeat = Math.floor(i / positions.length);
    const xOffset = repeat === 0 ? 0 : ((i % 5) - 2) * 7;
    const yOffset = repeat === 0 ? 0 : (((i + 2) % 5) - 2) * 6;
    items.push({ x: x + xOffset, y: y + yOffset, scale: scale * densityScale, delay: i * 10 });
  }
  return { items, fullBloomTarget, visible };
}

async function downloadPng(record) {
  const theme = themes[state.theme];
  const [backgroundImage, flowerImage] = await Promise.all([
    loadImage(theme.treeImage),
    loadImage(theme.flowerImage),
  ]);
  const canvas = document.createElement("canvas");
  canvas.width = 1400;
  canvas.height = 1000;
  const ctx = canvas.getContext("2d");
  const scene = { x: 170, y: 185, width: 1060, height: 725 };

  ctx.fillStyle = "#f8fbf3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#b53655";
  ctx.font = "bold 76px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(theme.title, canvas.width / 2, 100);
  ctx.fillStyle = "#26382b";
  ctx.font = "32px sans-serif";
  ctx.fillText(record.dateLabel, canvas.width / 2, 150);

  drawImageCover(ctx, backgroundImage, scene.x, scene.y, scene.width, scene.height);

  const { items, fullBloomTarget, visible } = getFlowerRenderItems();
  const viewBoxWidth = 900;
  const viewBoxHeight = 620;
  const baseFlowerSize = theme.itemSize;
  items.forEach((item) => {
    const size = baseFlowerSize * item.scale * (scene.width / viewBoxWidth);
    const x = scene.x + (item.x / viewBoxWidth) * scene.width - size / 2;
    const y = scene.y + (item.y / viewBoxHeight) * scene.height - size / 2;
    ctx.drawImage(flowerImage, x, y, size, size);
  });

  if (visible >= fullBloomTarget) {
    const overlayX = scene.x + (214 / viewBoxWidth) * scene.width;
    const overlayY = scene.y + (42 / viewBoxHeight) * scene.height;
    const overlayW = (472 / viewBoxWidth) * scene.width;
    const overlayH = (86 / viewBoxHeight) * scene.height;
    ctx.fillStyle = "rgba(255,250,252,0.97)";
    ctx.strokeStyle = "#f49ab9";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(overlayX, overlayY, overlayW, overlayH, 28);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "#b53655";
    ctx.globalAlpha = 1;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.shadowColor = "rgba(255, 255, 255, 0.95)";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    ctx.font = "900 31px sans-serif";
    ctx.fillText("もくひょうたっせい！", overlayX + overlayW / 2, overlayY + 35);
    ctx.font = "900 24px sans-serif";
    ctx.fillText("みんなのあいさつでまんかい！", overlayX + overlayW / 2, overlayY + 67);
    ctx.shadowColor = "transparent";
    ctx.shadowOffsetY = 0;
  }

  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.strokeStyle = "#d8e2d2";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(120, 825, 1160, 115, 18);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "#26382b";
  ctx.font = "bold 30px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`開始 ${formatTime(state.startedAt)}   終了 ${formatTime(state.endedAt)}   実施時間 ${record.duration}`, 170, 870);
  ctx.fillText(`${record.greetingWord} ${record.greetingCount}回   ${record.resultItemLabel} ${record.flowerCount}個   ハイタッチ ${record.highFiveCount}回   みつめて ${record.gazeCount}回`, 170, 915);

  const pngBlob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  downloadBlob(pngBlob, record.imageFileName, "image/png");
}

function saveHistory(record) {
  const history = JSON.parse(localStorage.getItem("aisatsuSakuraHistory") || "[]");
  history.unshift(record);
  localStorage.setItem("aisatsuSakuraHistory", JSON.stringify(history.slice(0, 20)));
  renderHistory();
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("aisatsuSakuraHistory") || "[]");
  if (history.length === 0) {
    elements.historyList.innerHTML = '<p class="history-item">まだ記録はありません</p>';
    return;
  }
  elements.historyList.replaceChildren();
  history.forEach((record) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `<strong>${record.date} ${record.greetingCount}回</strong><span>${record.startTime} - ${record.endTime} / ${record.resultItemLabel || "成果"} ${record.flowerCount}個</span>`;
    elements.historyList.appendChild(item);
  });
}

async function saveRecord() {
  if (!state.startedAt || !state.endedAt) return;
  const settings = getSettings();
  const record = getRecord();
  saveHistory(record);
  await downloadPng(record);
  if (settings.saveFormat === "both") {
    downloadCsv(record);
  }
}

elements.startButton.addEventListener("click", startSession);
elements.stopButton.addEventListener("click", stopSession);
elements.saveButton.addEventListener("click", saveRecord);
elements.highFiveButton.addEventListener("click", () => countGreeting("highFive"));
elements.testFlowerButton.addEventListener("click", countGreeting);
elements.themeSelect.addEventListener("change", () => {
  updateSettingsUi();
});
elements.highFiveToggle.addEventListener("change", updateSettingsUi);
elements.gazeToggle.addEventListener("change", () => {
  updateSettingsUi();
  if (!state.running) return;
  if (getSettings().gaze) {
    startGazeCamera();
  } else {
    stopGazeCamera();
  }
});
elements.gazeHoldInput.addEventListener("input", updateSettingsUi);
elements.gazeCooldownInput.addEventListener("input", updateSettingsUi);
elements.greetingModeSelect.addEventListener("change", updateSettingsUi);
elements.customGreetingInput.addEventListener("input", updateSettingsUi);
elements.settingsToggle.addEventListener("click", () => {
  const isOpen = elements.teacherPanel.classList.toggle("open");
  elements.settingsToggle.setAttribute("aria-expanded", String(isOpen));
  elements.settingsToggle.innerHTML = isOpen ? "閉" : "<ruby>設定<rt>せってい</rt></ruby>";
});
elements.thresholdInput.addEventListener("input", updateSettingsUi);
elements.maxFlowersInput.addEventListener("input", () => {
  updateSettingsUi();
  renderFlowers();
  updateUi();
});
elements.clearHistoryButton.addEventListener("click", () => {
  localStorage.removeItem("aisatsuSakuraHistory");
  renderHistory();
});

if (!navigator.mediaDevices?.getUserMedia) {
  elements.studentMessage.innerHTML = 'このブラウザではマイク<ruby>入力<rt>にゅうりょく</rt></ruby>はできません。ハイタッチで<ruby>参加<rt>さんか</rt></ruby>できます';
}

updateSettingsUi();
resetSession();
renderHistory();
