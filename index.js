const startBtn = document.querySelector(".start"),
  pauseBtn = document.querySelector(".pause"),
  resetBtn = document.querySelector(".reset"),
  timer = document.querySelector(".counter"),
  btnGroup = document.querySelector(".btn-gr");

let sec = 0;
let min = 0;
let interval;
function int() {
  sec++;
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (sec == 60) {
    sec = 0;
    min += 1;
    if (min < 10) {
      min = "0" + min;
    }
  }
  timer.innerHTML = `${min}:${sec}`;
}

function start() {
  interval = setInterval(int, 1000);
}
function stop() {
  clearInterval(interval);
}
function reset() {
  clearInterval(interval);
  sec = 0
  min = 0
  timer.textContent = "00:00";
}
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
