// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

// Function to perform the operation based on user input
function calculator() {
  // Get user input for the operation and numbers
  let operation = prompt("Enter operation (+, -, *, /):");
  let num1 = parseFloat(prompt("Enter first number:"));
  let num2 = parseFloat(prompt("Enter second number:"));

  // Perform the calculation based on the operation
  let result;
  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operation";
  }

  // Display the result
  alert("Result: " + result);
}

// Call the calculator function to start the program
calculator();
