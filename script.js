const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const timeElement = document.getElementById("time");
const lapsElement = document.getElementById("laps");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;
let lapTimes = [];

function updateTime() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  timeElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
    .toString()
    .padStart(3, "0")}`;
}

startButton.addEventListener("click", () => {
  intervalId = setInterval(() => {
    updateTime();
  }, 10);
});

pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  lapTimes = [];
  timeElement.textContent = "00:00:00";
  lapsElement.innerHTML = "";
});

lapButton.addEventListener("click", () => {
  lapTimes.push(
    `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(3, "0")}`
  );

  lapsElement.innerHTML = "";
  lapTimes.forEach((lap) => {
    const li = document.createElement("li");
    li.textContent = lap;
    lapsElement.appendChild(li);
  });
});
