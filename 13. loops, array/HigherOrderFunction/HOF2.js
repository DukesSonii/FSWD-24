//Definition of Higher order function -> a fun which takes anther function as a argument
// or return a function fodm it is HOF

const radius = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
const calculate = function (radius, logic) {
  const op = [];
  for (let i = 0; i < radius.length; i++) {
    op.push(logic(radius[i]));
  }
  return op;
};

console.log(calculate(radius, area));

console.log(calculate(radius, circumference));

console.log(calculate(radius, diameter));
