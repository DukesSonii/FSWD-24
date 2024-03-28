const cart = ["pants", "jeans", "shoes", "gloves"];

const promise = createOrder(cart);
// console.log(promise);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //this orderid will go in below chain
  })
  //now with this orderid we want to proceed to payment
  //once we get the orderid from the promise we'll pass data into next level of promise
  .then(function (orderId) {
    return proceedtopayment(orderId);
  })
  //whatever response of proceedtopayment is -> will be passed to next callback function of this chain
  //now when we have chaining we have to keep returning thing one to aother then to other by start from top
  .then(function (paymentinfo) {
    console.log(paymentinfo);
  })
  // .then(function () {})
  .catch(function (error) {
    console.log(error.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCard(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderid = "45421";
    if (orderid) {
      setTimeout(function () {
        resolve(orderid);
      }, 4000);
    }
  });
  return pr;
}

function proceedtopayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment Successful!");
  });
}
//now when this api made we will call callback function in then then it would be handle innext level of chain see in line no 14

function validateCard(cart) {
  return true;
}
