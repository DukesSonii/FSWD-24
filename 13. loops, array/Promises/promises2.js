const cart = ["pants", "jeans", "shoes", "gloves"];

//consumer
//when we call this api it will create a new promise and return this promise below createorder then we can res/rej the promise see logic in funtion
//after creting the promise we are consuming this promise
const promise = createOrder(cart);
// console.log(promise);
promise
  .then(function (orderId) {
    console.log(orderId);
    proceedtopayment(orderId);
  })

  //if promise fails dont display red error display proper message so use catch
  .catch(function (error) {
    console.log(error.message);
  });

//now we(producer) have to write createorder -> how to create new promise and set it to cosumer

//producer- we are creater of this API
function createOrder(cart) {
  //this is a promise constructor and it takes resolve and reject
  const pr = new Promise(function (resolve, reject) {
    //inside pr we write logic
    //create an order
    //validatecard

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

function validateCard(cart) {
  return true;
}

//if we console log promise when we use settimeout then intitally promise should be in pending
//state but if we dont use any stetimeout it directly prints the orderid
//bcoz settimeout is asycn and JS engine execute line by line -> dont wait for anything thats why inityially it is in pending state

//how to catch an error -> we write a catch and we attach a callback failure method using catch. this will catch all the errors that are thrown
//if there is long chain and we want to catch error for specific poriton of the chain sp we'll place catch() just below that portion -> that catch
//will handle all the error on top of it
//and if place catch() at last of the chain, it will handle for all the top of the chain
