const fibonacci = function (iterations) {
  let firstNumber = 1;
  let secondNumber = 0;
  if (Number(iterations) < 0) {
    return "OOPS";
  }
  for (i = 0; i < Number(iterations); i++) {
    solution = firstNumber + secondNumber;
    secondNumber = firstNumber;
    firstNumber = solution;
    console.log(secondNumber);
  }
  return secondNumber;
};

console.log(fibonacci(0));

// Do not edit below this line
module.exports = fibonacci;
