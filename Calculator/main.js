const calculator = {
  display: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector('.calculator-display');
  display.value = calculator.display;
}

function inputDigit(digit) {
  const { display, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand) {
    calculator.display = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.display = display === '0' ? digit : display + digit;
  }
  updateDisplay();
}

function inputDecimal(dot) {
  if (!calculator.display.includes(dot)) {
    calculator.display += dot;
    updateDisplay();
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, display, operator } = calculator;
  const inputValue = parseFloat(display);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.display = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  updateDisplay();
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') return firstOperand + secondOperand;
  if (operator === '-') return firstOperand - secondOperand;
  if (operator === '*') return firstOperand * secondOperand;
  if (operator === '/') return firstOperand / secondOperand;
  if (operator === '√') return Math.sqrt(secondOperand);
  if (operator === '%') return firstOperand % secondOperand;
  return secondOperand;
}

function resetCalculator() {
  calculator.display = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  updateDisplay();
}

function handleEqual() {
  const { firstOperand, display, operator } = calculator;
  const inputValue = parseFloat(display);

  if (operator && !calculator.waitingForSecondOperand) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.display = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = null;
    calculator.operator = null;
    calculator.waitingForSecondOperand = false;
    updateDisplay();
  }
}

document.querySelector('.calculator-key').addEventListener('click', (event) => {
  const target = event.target;
  if (!target.matches('button')) return;

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    return;
  }

  if (target.classList.contains('equal-sign')) {
    handleEqual();
    return;
  }

  inputDigit(target.value);
});
document.addEventListener('DOMContentLoaded', () => {
  updateDisplay();
});