console.log("-----MAP,FILTER,REDUCE-----");
//MAP use to create new array (according workingfunction)
let arr1 = [4, 5, 6, 7];
let a1 = arr1.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(a1);
//The filter() method creates a shallow copy of a portion of a given array,
//  filtered down to just the elements from the given array
// that pass the test implemented by the provided function

let arr2 = [32, 45, 76, 98, 5, 34, 2];
let arr3 = arr2.filter((b) => {
  return b < 50;
});
console.log(arr3);

//REDUCE
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
//callback function [ 1+2=3 then 3+3=6,6+4=10,10+5=15]
let arr4 = [1, 2, 3, 4, 5];
let newarr = arr4.reduce((a1, a2) => {
  return a1 + a2;
});
console.log(newarr);
