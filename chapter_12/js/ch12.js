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

// destructuring
let arr = [1, 2, 3, 4, 5, 6, 7];
let [a1, b1, ...rest] = arr;
console.log(a1, b1, rest);
let { i, j } = { i: 1, j: 5 };
console.log(i, j);

// spread operator
let arr1 = [3, 4, 5];
let obj1 = { ...arr1 };
console.log(obj1);

function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}
console.log(sum(...arr1));

// closures
function returnFunc() {
  const x = () => {
    let e = 1;
    console.log(e);
    const y = () => {
      //   let e = 2;
      console.log(e);
      const z = () => {
        let e = 3;
        console.log(e);
      };
      z();
    };
    e = 234;
    y();
  };
  return x;
}
let f = returnFunc();
f();
