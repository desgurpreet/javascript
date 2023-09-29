// promise API methods
let b1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 1");
  }, 1000);
});
let b2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 2");
  }, 2000);
});
let b3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});
let promise_all = Promise.all([b1, b2, b3]);
promise_all.then((value) => {
  console.log("promise all");
  console.log(value);
});
let promise_settled = Promise.allSettled([b1, b2, b3]);
promise_settled.then((value) => {
  console.log("promise allSettled");
  console.log(value);
});
let promise_race = Promise.race([b1, b2, b3]);
promise_race.then((value) => {
  console.log("promise race");
  console.log(value);
});
let promise_re = Promise.resolve(7);
promise_re.then((value) => {
  console.log("promise resolved");
  console.log(value);
});
