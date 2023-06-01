function sum(x, y) {
  return x + y;
}

let a = 1;
let b = 2;
let c = 3;
console.log("Sum of a and b is :", sum(a, b));
console.log("Sum of b and c is :", sum(b, c));
console.log("Sum of a and c is :", sum(a, c));

//average through arrow function
const avg = (p, q) => {
  return (p + q) / 2;
};
console.log(avg(4, 4));

const h = () => {
  console.log("hello"); //this value print through call funtion like h1()
  return "hi"; //return value print by console
};
h();
//return of hi
let v = h();
console.log(v);
