// let promise = new Promise(function (resolve, reject) {
//   alert("Hello");
//   resolve(56);
// });
// console.log("Hello One");
// setTimeout(function () {
//   console.log("Hello two");
// }, 3000);
// console.log("My name is " + "Hello three");
// console.log(promise);
// //promise (.then() and .catch())
// let p1 = new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("promise is resolve");
//     resolve(true);
//   }, 3000);
// });
// let p2 = new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("promise is reject");
//     reject(false);
//   }, 5000);
// });
// p1.then((value) => {
//   //then for getting value
//   console.log(value);
// });
// p2.catch((value) => {
//   //catch for getting error
//   console.log(value);
// });

//promise chaining .then() calls
// let a1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("resolve");
//     resolve(20);
//   }, 2000);
// });
// a1.then((value) => {
//   console.log(value);
//   let a2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise 2");
//     }, 5000);
//   });
//   return a2;
// })
//   .then((value) => {
//     console.log(value);
//     return 5;
//   })
//   .then((value) => {
//     console.log(value);
//   });

// // promise API methods
// let b1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 1");
//   }, 1000);
// });
// let b2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 2");
//   }, 2000);
// });
// let b3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 3");
//   }, 3000);
// });
// let promise_all = Promise.all([b1, b2, b3]);
// promise_all.then((value) => {
//   console.log("promise all");
//   console.log(value);
// });
// let promise_settled = Promise.allSettled([b1, b2, b3]);
// promise_settled.then((value) => {
//   console.log("promise allSettled");
//   console.log(value);
// });
// let promise_race = Promise.race([b1, b2, b3]);
// promise_race.then((value) => {
//   console.log("promise race");
//   console.log(value);
// });
// let promise_re = Promise.resolve(7);
// promise_re.then((value) => {
//   console.log("promise resolved");
//   console.log(value);
// });

// //async or await function in js
// async function wait() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("30 deg");
//     }, 2000);
//   });
//   let bangloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("30 deg");
//     }, 5000);
//   });
//   console.log("fetching delhi weather please wait...");
//   let delhiW = await delhiWeather;
//   console.log("fetched delhi weather :" + delhiW);
//   console.log("fetching banglore weather please wait...");
//   let bangloreW = await bangloreWeather;
//   console.log("fetched banglore weather :" + bangloreW);
// }
// let a = wait();
// a.then((value) => {
//   console.log(a);
// });

// // fetch api used to get information from network

// let p = fetch("https://goweather.herokuapp.com/weather/ny");
// p.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
//   return response.json();
// }).then((value2) => {
//   console.log(value2);
// });

// // sending post request with fetch api
// let option = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "preet",
//     body: "singh",
//     userId: 1,
//   }),
// };
// fetch("https://jsonplaceholder.typicode.com/posts", option)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//cookies in js
// console.log(document.cookie);
// document.cookie = "name=preet123";
// document.cookie = "name=preet456";
// document.cookie = "name=preet789";
// let key = prompt("Enter your key");
// let value = prompt("Enter your value");
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
// console.log(document.cookie);

// localstorage and related methods
let key = prompt("enter key you want to set");
let value = prompt("enter value you want to set");
localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
if (key == "red" || key == "blue") {
  localStorage.removeItem(key);
}
if (key == 0) {
  localStorage.clear();
}
