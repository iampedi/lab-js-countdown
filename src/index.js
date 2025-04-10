const DURATION = 10;
let remainingTime = DURATION;
let timer = null;

const startBtn = document.querySelector("#start-btn");
const timeDisplay = document.querySelector("#time");

const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToast = document.querySelector("#close-toast");

startBtn.addEventListener("click", startCountdown);

function startCountdown() {
  if (timer !== null) return;

  startBtn.disabled = true;
  timeDisplay.textContent = remainingTime;

  timer = setInterval(() => {
    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      showToast("Lift off! 🚀");
      startBtn.disabled = false;
      remainingTime = DURATION;
    } else {
      remainingTime--;
      const randomColor = getRandomColor();
      document.documentElement.style.setProperty("--timer-color", randomColor);
      timeDisplay.textContent = remainingTime;
    }
  }, 1000);
}

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");
}

closeToast.addEventListener("click", () => {
  toast.classList.remove("show");
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
