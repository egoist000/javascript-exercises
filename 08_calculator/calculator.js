const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(e => {
    sum += e;
  });
  return sum;
};

const multiply = function(array) {
  let mul = 1;
  array.forEach(e => {
    mul *= e;
  });
  return (array.length > 1) ? mul : 0;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if(a === 0 || a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
