const $startPauseBtn = document.getElementById("start-pause-btn");
const $resetBtn = document.querySelector(".reset-btn");
const $hour = document.querySelector(".hour");
const $min = document.querySelector(".min");
const $sec = document.querySelector(".sec");

let runningTimer = false;

$hour.addEventListener("change", function (e) {
  console.log("onchange", e.target.value);
});

const handleStartPauseBtn = (e) => {
  e.preventdefault();
};
const handleResetBtn = (e) => {
  e.preventdefault();
};

if ($hour.value || $min.value || $sec.value) {
  $startPauseBtn.disabled = false;
  $resetBtn.disabled = false;
} else {
  $startPauseBtn.disabled = true;
  $resetBtn.disabled = true;
}

$startPauseBtn.addEventListener("click", () => {
  handleStartPauseBtn();
});

$resetBtn.addEventListener("click", () => {
  handleResetBtn();
});
