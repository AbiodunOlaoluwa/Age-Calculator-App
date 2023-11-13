let arrow = document.getElementById("arrow");
arrow.addEventListener(onclick, calculate)

let input = document.querySelector("input");
input.addEventListener(onclick, removeError)

let inputArr = document.querySelectorAll("input")
let inputP = document.querySelectorAll(".inputP")

let errMessage = document.querySelectorAll(".error")

function removeError() {
    for (let i = 0; i < inputArr.length; i++) {
        inputArr[i].classList.remove("notFilled")
        inputP[i].classList.remove("pNotFilled")
        errMessage[i].classList.add("hidden")
    }
}




function validateInput() {
  for (let i = 0; i < inputArr.length; i++) {
    let x  = inputArr[i].value;
    if (x === "") {
      inputArr[i].classList.add("notFilled");
      inputP[i].classList.add("pNotFilled");
      errMessage[i].classList.remove("hidden")
    }
  }
}

function calculate() {
  validateInput();
}
