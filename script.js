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
const rightSymbols = ['÷', '×', '-', '+', '='];
const topSymbols = ['AC', '+/-', '%'];
const display = document.querySelector('.display');

let a, b, operator, numA, numB;
const clearAll = function () {
  a = [];
  b = [];
  operator = [];
};
clearAll();
for (let i = 0; i < buttonValues.length; i++) {
  // Create buttons
  let value = buttonValues[i];
  let button = document.createElement('button');
  button.innerText = value;
  // Span 0 button
  if (value === '0') {
    button.style.width = '200px';
    button.style.gridColumn = '1/3';
  }
  if (rightSymbols.includes(value)) {
    // Styling buttons
    button.style.backgroundColor = '#FF9500';
  } else if (topSymbols.includes(value)) {
    button.style.backgroundColor = '#D4D4D2';
    button.style.color = '#1c1c1c';
  }
  // Listen clicks
  button.addEventListener('click', function () {
    if (rightSymbols.includes(value)) {
      if (value === '=' && a != null) {
        b = display.value;
        numA = Number(a);
        numB = Number(b);

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
        operator = value;
        a = display.value;
        display.value = '';
      }
    } else if (topSymbols.includes(value)) {
      if (value === 'AC') {
        display.value = '';
        clearAll();
      } else if (value === '+/-') {
        display.value = Number(display.value) * -1;
      } else if (value === '%') {
        display.value = Number(display.value) / 100;
      }
    }
    // Numbers
    else {
      if (value === '.') {
        if (
          display.value !== '' &&
          !display.value.includes(value)
          // !display.value.includes('0')
        ) {
          display.value += value;
        }
      } else if (display.value === '0') {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });

  // Add created buttons in HTML
  document.querySelector('.buttons').appendChild(button);
}
