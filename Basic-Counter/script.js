const increaseBtn = document.getElementById("inc-btn");
const decreaseBtn = document.getElementById("dec-btn");
const resetBtn = document.getElementById("reset-btn");
const mainCounter = document.getElementById("counter");
const greetUser = document.getElementById("greet-user");

let username = window.prompt("Enter your username")
let initValue = Number(window.prompt("Enter your Number!"));

if (username == null) {
    username = "Anonymous";
}

if (initValue == 0) {
    initValue = 1;
}

let counter = initValue;
mainCounter.textContent = counter;

greetUser.textContent = `Hello there! ${username} <3`

increaseBtn.onclick = function () {
    counter++;
    mainCounter.textContent = counter;
}

decreaseBtn.onclick = function () {
    counter--;
    mainCounter.textContent = counter;
}

resetBtn.onclick = function () {
    counter = initValue;
    mainCounter.textContent = counter;
}