const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

let currentInput = "0";
let expression = "";
let lastInputType = ""; // "num", "operator", "equals", "decimal"
let evaluated = false;

// Utility: safely evaluate expression using Function constructor (better than eval)
function safeEval(exp) {
  try {
    // Replace × and ÷ with * and / if used
    // Here, we only use * and / directly.
    // Limit precision to 6 decimals.
    let result = Function(`"use strict"; return (${exp})`)();
    if (typeof result === "number") {
      return parseFloat(result.toFixed(6));
    }
    return result;
  } catch {
    return "Error";
  }
}

// Update display content
function updateDisplay() {
  display.textContent = currentInput;
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

buttons.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.matches("button")) return;

  const id = target.id;

  if (id === "clear") {
    // Reset all
    currentInput = "0";
    expression = "";
    lastInputType = "";
    evaluated = false;
    updateDisplay();
    return;
  }

  if (id === "equals") {
    if (lastInputType === "operator") {
      // Remove trailing operator before evaluation
      expression = expression.slice(0, -1);
    } else {
      expression += currentInput;
    }
    let result = safeEval(expression);
    currentInput = result.toString();
    updateDisplay();
    expression = currentInput;
    evaluated = true;
    lastInputType = "equals";
    return;
  }

  // Number buttons
  if (
    [
      "zero","one","two","three","four",
      "five","six","seven","eight","nine"
    ].includes(id)
  ) {
    const num = {
      zero: "0",
      one: "1",
      two: "2",
      three: "3",
      four: "4",
      five: "5",
      six: "6",
      seven: "7",
      eight: "8",
      nine: "9",
    }[id];

    if (evaluated) {
      // Start new input after equals
      currentInput = num;
      expression = "";
      evaluated = false;
    } else if (lastInputType === "operator") {
      // New number after operator
      currentInput = num;
    } else if (currentInput === "0") {
      // Prevent multiple leading zeros
      if (num === "0") {
        // do nothing
        return;
      } else {
        currentInput = num;
      }
    } else {
      currentInput += num;
    }
    updateDisplay();
    lastInputType = "num";
    return;
  }

  // Decimal point
  if (id === "decimal") {
    if (evaluated) {
      currentInput = "0.";
      expression = "";
      evaluated = false;
    } else if (!currentInput.includes(".")) {
      currentInput += ".";
    }
    updateDisplay();
    lastInputType = "decimal";
    return;
  }

  // Operators
  if (["add", "subtract", "multiply", "divide"].includes(id)) {
    const op = {
      add: "+",
      subtract: "-",
      multiply: "*",
      divide: "/",
    }[id];

    if (lastInputType === "operator") {
      // Replace last operator with new one except negative sign
      if (op === "-" && expression.slice(-1) !== "-") {
        // Allow negative sign after operator
        currentInput = "-";
        expression += op;
        lastInputType = "operator";
        updateDisplay();
        return;
      }
      // Replace last operator(s) with this operator (except negative sign)
      // Remove trailing operators
      expression = expression.replace(/[\+\-\*\/]+$/, "") + op;
    } else if (lastInputType === "equals") {
      // Start new expression with previous result + operator
      expression = currentInput + op;
    } else {
      expression += currentInput + op;
    }
    currentInput = op;
    updateDisplay();
    lastInputType = "operator";
    evaluated = false;
  }
});
