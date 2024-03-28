// Reeduce - it is used at a place where u have to take all elements of Array
// and come up with a single value out of them

//take a array and iterate through that and find the sum or greatest element like that
let arr = [1, 2, 3, 4];

function findsum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findsum(arr));

//do same thing through reduce
//reduce is used when u need to iterate through all elements and find particular value

//reuduce takee 2 parameter in afunction accumulator and current

//basically  this fucntion inside reduce, it iterated over each and every ele of array
//reduce iterates over each and every element of array
//current -represents the values when we are running this function against each values
//curretn is the values 1,2,3,4
//acc - accumulator is used to accumulate the values/result for what we have to get out of those values which are
//present inside array
//in above code arr[i] is curr and acc in this case is sum
//and since in above code sum = 0 is initialized so in reduce so we pass
//other argument in reduce

const op = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0); //2nd argument

console.log(op);

//another code for max number using reduce

const maxnum = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(maxnum);
