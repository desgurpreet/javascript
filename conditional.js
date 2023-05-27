let a = prompt("What is your age");
a = Number.parseInt(a); //convert string into number

if (a > 10 && a < 18) {
  alert("you are not eligible for vote casting");
} else if (a > 18) {
  alert("you are eligible for vote casting");
} else if (a < 0) {
  alert("please checked your age");
} else {
  alert("invalid age for vote castung");
}

const fruit = prompt("Name of fruit");
switch (fruit) {
  case "orange":
    alert("please give me one orange juice");
    break;
  case "mango":
    alert("please give me one mango juice");
    break;
  case "banana":
    alert("please give me one banana juice");
    break;
  default:
    alert("sorry this juice not provided by you");
}

// ternary operator
let marks = prompt("Enter your marks");
alert(marks > 33 ? "You are pass" : " you are fail");
