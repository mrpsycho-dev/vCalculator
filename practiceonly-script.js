'use strict';

const buttonValues = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '×',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];
const topSymbols = ['AC', '+/-', '%'];
const rightSymbols = ['÷', '×', '-', '+', '='];
const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');

let a, b, operator, numA, numB;

const clearAll = function () {
  a = [];
  b = [];
  operator = [];
};
clearAll();

for (let i = 0; i < buttonValues.length; i++) {
  let value = buttonValues[i];
  let button = document.createElement('button');
  button.innerText = value;
  // buttons.appendChild(button);

  if (value === '0') {
    button.style.width = '181px';
    button.style.gridColumn = '1/3';
  }

  if (rightSymbols.includes(value)) {
    button.style.backgroundColor = 'orange';
  }
  if (topSymbols.includes(value)) {
    button.style.backgroundColor = '#fff';
    button.style.color = '#000';
  }
  button.addEventListener('click', function () {
    if (topSymbols.includes(value)) {
      if (value === 'AC') {
        display.value = '';
        clearAll();
      } else if (value === '+/-') {
        display.value = Number(display.value) * -1;
      } else if (value === '%') {
        display.value = Number(display.value) / 100;
      }
    } else if (rightSymbols.includes(value)) {
      if (value === '=' && a != null) {
        b = display.value;
        numA = Number(a);
        numB = Number(b);
        // operator = value;

        if (operator === '÷') {
          display.value = numA / numB;
        } else if (operator === '×') {
          display.value = numA * numB;
        } else if (operator === '-') {
          display.value = numA - numB;
        } else if (operator === '+') {
          display.value = numA + numB;
        }
        clearAll();
      } else {
        a = display.value;
        operator = value;
        display.value = '';
      }
    } else {
      if (value === '.') {
        if (display.value != '' && !display.value.includes('.'))
          display.value += value;
      } else if (value === '0') {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
  buttons.appendChild(button);
}
