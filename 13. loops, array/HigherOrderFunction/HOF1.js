// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// // console.log(a);
// // console.log(b);
// // console.log(c);

const radius = [1, 2, 3, 4];

const calcarea = function (radius) {
  const op = [];
  for (let i = 0; i < radius.length; i++) {
    op.push(Math.PI * radius[i] * radius[i]);
  }
  return op;
};

console.log(calcarea(radius));

//this is not a good idea to do this
//problem is code is too long, code repetition,

const area = function (radius) {
  return Math.PI * radius * radius;
};

//make calc area function generic
//put this logic Math.PI * radius[i] ... inside dun calc area from outside

const calculate = function (radius, logic) {
  const op = [];
  for (let i = 0; i < radius.length; i++) {
    op.push(logic(radius[i]));
  }
  return op;
};

//when we call calculate we pass area as logic and now this area function
//will be called with its radius again and again
console.log(calculate(radius, area));
