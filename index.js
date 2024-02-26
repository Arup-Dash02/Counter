let number = 0;
let counter = document.getElementById("counter");
let running;
function startCounter() {
  running = setInterval(function () {
    number++;
    counter.innerText = number;
  }, 1000);
}
function stopCounter() {
  clearInterval(running);
}
function restartCounter() {
  clearInterval(running);
  number = 0;
  counter.innerText = number;
}
