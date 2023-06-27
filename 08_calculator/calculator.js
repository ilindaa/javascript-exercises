const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(...arr) {
  return arr.reduce((product, current) => product * current);
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

/*
  // how factorial by recursion works (refresher)
  5! -> so it gets the answer to the factorial(1) and brings that answer up
  then it gets the answer to factorial(2) and keeps multiplying upwards

  num * factorial(num) [answer to factorial obtained from the "lower" number answer] = {num!}
  5 * factorial(4) [24] = 120
  4 * factorial(3) [6] = 24
  3 * factorial(2) [2] = 6
  2 * factorial(1) [1] = 2


 // factorial using while loop is below
  let factorial = 1;
  while(num >= 1) {
    factorial *= num;
    num -= 1;
  }
  return factorial;
*/
const factorial = function(num) {
  if(num === 0) {
    return 1;
  } else { // factorial by recursion
    return num * factorial(num-1);
  }
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
