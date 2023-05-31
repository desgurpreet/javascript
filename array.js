let marks = [32, 54, 67, 45];
console.log(marks);
console.log(marks[1]); //access any index number of marks
console.log("The length of marks array is", marks.length);
marks[4] = 65; //adding new value to the array [action can perform in array not in string]
marks[0] = 35; //changing the value of an array [action can perform in array not in string]
console.log(marks);

//Methods of array
let num = [1, 2, 3, 4, 5];
let a = num.toString(); //a is now a string
console.log(a, typeof a);
let b = num.join("-");
console.log(b);
let c = num.pop(); //pop remove last element[return the popped element]
// console.log(c);//print popped element
console.log(num, c);
let d = num.push(6); //add new element last position[push return the new array length element]
// console.log(d);//print array new length
console.log(num, d);
let e = num.shift(); // remove first position element
// console.log(e);//return the new array length element
console.log(num, e);
let f = num.unshift(0); //add  first position element
// console.log(f); //return the new array length
console.log(num, f);

let num1 = [2, 3, 4, 5, 6];
let num2 = [44, 7, 6, 8];
let num3 = [45, 17, 16, 118];
let g = delete num1[0];
console.log(num1, g);
// concate
let newArray = num2.concat(num3);
console.log(newArray);
//sort
num3.sort(); //sorting by alphabetically(like firstly 1 vale then 2,3,4,5 so on)
console.log(num3);
// sorting by small value to large value(ascending order)
let compare = (a, b) => {
  return a - b;
};
num3.sort(compare);
console.log(num3);
// sorting by large value to small value(decending order)
let compare1 = (a, b) => {
  return b - a;
};
num3.sort(compare1);
console.log(num3);

//splice and slice
let num4 = [2, 3, 4, 5, 6];
let splicevalue = num4.splice(2, 3, 78, 89, 45);
console.log(num4);
console.log(splicevalue);
//slice
let num5 = [12, 13, 14, 15, 16];
let slicevalue = num5.slice(3);
let slicevalue1 = num5.slice(1, 3);
console.log(slicevalue);
console.log(slicevalue1);
console.log(num5);
