const x = 4;
const y = 10;
if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

if (x > 3 && y > 5) {
  console.log(`x is greater than 3 and y is greater than 5`);
}

if (x > 5 || y > 5) {
  console.log(`x is greater than 5 and y is greater than 5`);
}

const color = x > 7 ? "red" : "blue";
console.log(color);

//switch statement
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not define");
    break;
}
