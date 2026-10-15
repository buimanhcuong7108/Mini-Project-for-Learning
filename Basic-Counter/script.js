const increaseBtn = document.getElementById("inc-btn");
const decreaseBtn = document.getElementById("dec-btn");
const resetBtn = document.getElementById("reset-btn");
const mainCounter = document.getElementById("counter");
const greetUser = document.getElementById("greet-user");
const username = window.prompt("Enter your username")
const initValue = Number(window.prompt("Enter your Number!"));

greetUser.textContent = `Hello there! ${username} <3`
let counter = initValue;
mainCounter.textContent = counter;

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