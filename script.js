const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");
const result = document.getElementById("result");
const operator = document.getElementById("operator");

let currentOperator = null;
let isSecondValue = false;

function updateResult(message) {
  result.innerHTML = message;
}

function setOperator(op) {
  if (val1.value === "") {
    updateResult("Enter First Number");
    return;
  }
  currentOperator = op;
  isSecondValue = true;
  operator.innerHTML = op;
  val2.focus();
}

function calculate() {
  if (val1.value === "" || val2.value === "") {
    updateResult("Enter both numbers");
    return;
  }

  const firstValue = Number(val1.value);
  const secondValue = Number(val2.value);

  if (currentOperator === "+" || currentOperator === "add") {
    updateResult(firstValue + secondValue);
  } else if (currentOperator === "-" || currentOperator === "subtraction") {
    updateResult(firstValue - secondValue);
  } else if (currentOperator === "*" || currentOperator === "multiply") {
    updateResult(firstValue * secondValue);
  } else if (currentOperator === "÷" || currentOperator === "divide") {
    if (secondValue === 0) {
      updateResult("Can't divide by 0");
    } else {
      updateResult(firstValue / secondValue);
    }
  } else if (currentOperator === "%") {
    updateResult((firstValue * secondValue) / 100);
  }
}

function add() {
  setOperator("+");
}

function subtraction() {
  setOperator("-");
}

function multiply() {
  setOperator("*");
}

function divide() {
  setOperator("÷");
}

function inputNumber(number) {
  const activeInput = isSecondValue ? val2 : val1;
  if (number === "." && activeInput.value.includes(".")) {
    return;
  }
  activeInput.value += number;
}

function deleteLastChar() {
  if (val2.value !== "") {
    val2.value = val2.value.slice(0, -1);
  } else if (val1.value !== "") {
    val1.value = val1.value.slice(0, -1);
  }

  updateResult("");

  if (val1.value === "" && val2.value === "") {
    operator.innerHTML = "";
    isSecondValue = false;
    currentOperator = null;
  }
}

function resetCalculator() {
  val1.value = "";
  val2.value = "";
  operator.innerHTML = "";
  updateResult("");
  currentOperator = null;
  isSecondValue = false;
  val1.focus();
}
