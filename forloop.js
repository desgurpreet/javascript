// for loop
for (let a = 0; a < 5; a++) {
  console.log(a + 1); //print 1 to 5
}

// program to add first n natural numbers
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log("Sum of  " + n + " natural numbers is " + sum);

let obj = {
  preet: 38,
  harry: 34,
  garry: 35,
};
//print key of object
//for in loop
for (let a in obj) {
  console.log(a);
  console.log("Marks of " + a + " are " + obj[a]);
}

// for of loop
let x = "preet";
for (let y of x) {
  console.log(y);
}
