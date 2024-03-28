const GITHUB_API = "https://api.github.com/DukesSonii";
const user = fetch(GITHUB_API);
console.log(user);

//output is coming
//when this log statement is executed at this point the promise is in pending
//bcoz JS executes whatever it does not wait for anything. it execute line 1,2,3
//in line 2 fetch return promise and at that point it is in pending state so js doessnt wait and it execytes so it is in pending state

//after some time data should come in promise ibject so when we open promise it shows curr state -> fulfilled state
//initially it is in pending state bcoz

//what if callback is attached
// user.then(function (data) {
//   console.log(data);
// });

//this is a special object in JS, it brings a lot of trust in the transaction bcoz JS guarantees that thi spromise can ve resolved only once
//either fulfilled or rejected
// state can be 3 pending, fulfilled or rejected.
//Also PRomise objects are immutable -> when promise is ful.d and we have data inside promises we can pass data here and there and there is no worry that someone can mutate that data

//in callback hell there is a situation of function inside function so we use promise chaining
//so in below creatorder is returning us a promise object and then we attach a callback function to return a promise object

const cart = [pants, jeans, shoes, gloves];
createOrder(cart, function (orderId) {
  proceedtopayment(orderId);
});
const promise = createOrder(cart);

promise

  .then(function (orderId) {
    proceedtopayment(orderId);
  })
  //if we also have to show order summary then
  .then(function (paymentinfo) {
    showordersummary(paymentinfo);
  })
  .then(function (paymentinfo) {
    updatecart(paymentinfo);
  });

//it gives the ability to come out of callback hell
