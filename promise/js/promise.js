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
