//promise chaining .then() calls
let a1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolve");
    resolve(20);
  }, 2000);
});
a1.then((value) => {
  console.log(value);
  let a2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 2");
    }, 5000);
  });
  return a2;
})
  .then((value) => {
    console.log(value);
    return 5;
  })
  .then((value) => {
    console.log(value);
  });
