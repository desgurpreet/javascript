let promise = new Promise(function (resolve, reject) {
  alert("Hello");
  resolve(56);
});
console.log("Hello One");
setTimeout(function () {
  console.log("Hello two");
}, 3000);
console.log("My name is " + "Hello three");
console.log(promise);
//promise (.then() and .catch())
let p1 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("promise is resolve");
    resolve(true);
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("promise is reject");
    reject(false);
  }, 5000);
});
p1.then((value) => {
  //then for getting value
  console.log(value);
});
p2.catch((value) => {
  //catch for getting error
  console.log(value);
});
