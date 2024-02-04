const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");

const addButton = document.getElementById("add-button");
const subButton = document.getElementById("sub-button");
const mulButton = document.getElementById("mul-button");
const divButton = document.getElementById("div-button");

const answer = document.getElementById("answer");

if (
  !firstNumberInput ||
  !secondNumberInput ||
  !addButton ||
  !subButton ||
  !mulButton ||
  !divButton ||
  !answer
) {
  throw new Error("One or more elements not found");
}

addButton.addEventListener("click", () => {
  // @ts-ignore
  const fn = parseInt(firstNumberInput.value);
  // @ts-ignore
  const sn = parseInt(secondNumberInput.value);

  if (isNaN(fn) || isNaN(sn)) {
    answer.innerText = "Please input valid numbers";
  } else {
    answer.innerText = (fn + sn).toString();
  }
});

subButton.addEventListener("click", () => {
  // @ts-ignore
  const fn = parseInt(firstNumberInput.value);
  // @ts-ignore
  const sn = parseInt(secondNumberInput.value);

  if (isNaN(fn) || isNaN(sn)) {
    answer.innerText = "Please input valid numbers";
  } else {
    answer.innerText = (fn - sn).toString();
  }
});

mulButton.addEventListener("click", () => {
  // @ts-ignore
  const fn = parseInt(firstNumberInput.value);
  // @ts-ignore
  const sn = parseInt(secondNumberInput.value);

  if (isNaN(fn) || isNaN(sn)) {
    answer.innerText = "Please input valid numbers";
  } else {
    answer.innerText = (fn * sn).toString();
  }
});

divButton.addEventListener("click", () => {
  // @ts-ignore
  const fn = parseInt(firstNumberInput.value);
  // @ts-ignore
  const sn = parseInt(secondNumberInput.value);

  if (isNaN(fn) || isNaN(sn)) {
    answer.innerText = "Please input valid numbers";
  } else if (sn === 0) {
    answer.innerText = "Cannot divide by zero";
  } else {
    answer.innerText = (fn / sn).toString();
  }
});

answer.innerText = "Welcome to calculator";
