// Elements
const breakDecrement = document.getElementById("break-decrement");
const breakIncrement = document.getElementById("break-increment");
const sessionDecrement = document.getElementById("session-decrement");
const sessionIncrement = document.getElementById("session-increment");

const breakLengthEl = document.getElementById("break-length");
const sessionLengthEl = document.getElementById("session-length");

const timerLabel = document.getElementById("timer-label");
const timeLeftEl = document.getElementById("time-left");

const startStopBtn = document.getElementById("start_stop");
const resetBtn = document.getElementById("reset");

const beep = document.getElementById("beep");

let breakLength = 5; // minutes
let sessionLength = 25; // minutes
let timeLeft = sessionLength * 60; // seconds
let timerRunning = false;
let timerInterval = null;
let onSession = true; // true = session, false = break

// Format seconds to mm:ss
function formatTime(secs) {
  let minutes = Math.floor(secs / 60);
  let seconds = secs % 60;
  return (
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}

function updateDisplay() {
  breakLengthEl.textContent = breakLength;
  sessionLengthEl.textContent = sessionLength;
  timeLeftEl.textContent = formatTime(timeLeft);
  timerLabel.textContent = onSession ? "Session" : "Break";
}

// Increment / decrement handlers with limits 1 - 60
function changeBreakLength(amount) {
  if (timerRunning) return;
  let newVal = breakLength + amount;
  if (newVal >= 1 && newVal <= 60) {
    breakLength = newVal;
    updateDisplay();
  }
}

function changeSessionLength(amount) {
  if (timerRunning) return;
  let newVal = sessionLength + amount;
  if (newVal >= 1 && newVal <= 60) {
    sessionLength = newVal;
    timeLeft = sessionLength * 60;
    updateDisplay();
  }
}

breakDecrement.addEventListener("click", () => changeBreakLength(-1));
breakIncrement.addEventListener("click", () => changeBreakLength(1));
sessionDecrement.addEventListener("click", () => changeSessionLength(-1));
sessionIncrement.addEventListener("click", () => changeSessionLength(1));

function switchTimer() {
  if (onSession) {
    onSession = false;
    timeLeft = breakLength * 60;
    timerLabel.textContent = "Break";
  } else {
    onSession = true;
    timeLeft = sessionLength * 60;
    timerLabel.textContent = "Session";
  }
  updateDisplay();
}

function tick() {
  if (timeLeft === 0) {
    beep.play();
    switchTimer();
  } else {
    timeLeft--;
    timeLeftEl.textContent = formatTime(timeLeft);
  }
}

startStopBtn.addEventListener("click", () => {
  if (!timerRunning) {
    timerRunning = true;
    timerInterval = setInterval(tick, 1000);
  } else {
    timerRunning = false;
    clearInterval(timerInterval);
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerRunning = false;

  breakLength = 5;
  sessionLength = 25;
  onSession = true;
  timeLeft = sessionLength * 60;

  beep.pause();
  beep.currentTime = 0;

  updateDisplay();
});

// Initialize display
updateDisplay();
