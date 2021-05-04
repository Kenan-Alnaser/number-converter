let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const convertBtn = document.querySelector("#convertBtn");

function registerUserValue(e) {
  userNumber = e.target.value;
}

function convert() {
  currentNumber = parseInt(userNumber);
  return (result.innerHTML = currentNumber.toString(2));
}

userInput.addEventListener("keyup", registerUserValue);
convertBtn.addEventListener("click", convert);
