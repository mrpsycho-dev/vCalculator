"use strict";
const buttonValues = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

for (let i = 0; i < buttonValues.length; i++) {
  // Create buttons
  let value = buttonValues[i];
  let button = document.createElement("button");
  button.innerText = value;
  // Span 0 button
  if (value === "0") {
    button.style.width = "200px";
    button.style.gridColumn = "1/3";
  }
  if (rightSymbols.includes(value)) {
    // Styling buttons
    button.style.backgroundColor = "#FF9500";
  } else if (topSymbols.includes(value)) {
    button.style.backgroundColor = "#D4D4D2";
    button.style.color = "#1c1c1c";
  }

  // Add created buttons in HTML
  document.querySelector(".buttons").appendChild(button);
}
