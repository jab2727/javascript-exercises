const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let results = 0;
  for (let number in array) {
    results += array[number];
  }
  return results;
};

const multiply = function (array) {
  let results = 1;
  for (let number in array) {
    results *= array[number];
  }
  return results;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  }
  let result = a;
  while (a > 1) {
    result *= a - 1;
    a--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
