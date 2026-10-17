const convertedNum = document.getElementById("converted-num");
const submitBtn = document.getElementById("submit-btn");
const userInput = document.getElementById("user-temp");
const userCtoF = document.getElementById("user-CtoF");
const userFtoC = document.getElementById("user-FtoC");

submitBtn.onclick = function () {
    let currTemp = (userInput.value);

    if (currTemp == "") window.alert("It's not a number!")
    currTemp = Number(currTemp);

    if (userFtoC.checked) {
        currTemp = (currTemp - 32) / 1.8;
        convertedNum.textContent = currTemp.toFixed(2);
    } else if (userCtoF.checked) {
        currTemp = (currTemp * 1.8) + 32;
        convertedNum.textContent = currTemp.toFixed(2);
    } else {
        window.alert("Pls choose a converter");
    }
}