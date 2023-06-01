console.log("Using loop in array");
let number = [1, 2, 3, 4, 5];
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

//foreach loop[use perform some action on array element]
number.forEach((element) => {
  console.log(element + element);
});
//array.from
let name = "Gurpreet";
let arr = Array.from(name); //convert into array from string
console.log(arr);

//for of [return array all element]
for (let i of number) {
  console.log(i);
}

// for in [retun array key(like 0,1,2,3,4 soon{indexnumber})]
for (let j in number) {
  console.log(j);
}
