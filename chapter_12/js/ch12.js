// iife(immediately invoked function expressions)
let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 2000);
  });
};
// inside bracket is called iife
(async () => {
  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);
})();


