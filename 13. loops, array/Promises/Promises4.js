// const cart = ["pant", "jeans", "T-shirt", "shoes"];

// const promise = createOrder(cart);

// promise
//   .then(function (orderId) {
//     console.log("order created with Id", orderId);
//     return proceedtopayment(orderId);
//   })
//   .then(function (paymentinfo) {
//     console.log("Payment Info", paymentinfo);
//     return showOrderSummary(paymentinfo);
//   })

//   .then(function (ordersummary) {
//     console.log("Order Summary", ordersummary);
//     return updaatewallet(ordersummary);
//   })
//   .catch(function (err) {
//     console.log("Error", err);
//   });

// function createOrder(cart) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       const orderId = "545510";
//       res(orderId);
//     }, 3000);
//   });
// }
// function proceedtopayment(orderId) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       const paymentinfo = "Payment Successfull";
//       res(paymentinfo);
//     }, 3000);
//   });
// }

// function showOrderSummary(paymentinfo) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       const ordersummary = "Order Summary";
//       res(ordersummary);
//     }, 3000);
//   });
// }

// function updaatewallet(ordersummary) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       console.log("Wallet balance updated");
//     }, 3000);
//   });
// }

const cart = ["shoes", "jeans", "sneakers"];

const promise = createOrder(cart);
promise
  .then(function (orderId) {
    console.log("Order ID: " + orderId);
  })
  .then(function (paymentinfo) {
    console.log("Payment Info", paymentinfo);
  });
function createOrder(cart) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const orderid = "84515";
      res(orderid);
    }, 3000);
  });
}
