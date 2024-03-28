const arr = [4, 80, 64, 55, 44, 81, 9];

const ouptput = arr.filter(function filter(x) {
  return x > 50;
});

const op = arr.filter((x) => x % 2 != 0);
console.log(op);
