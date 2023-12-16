//map(arr,transformation)
//map take two parameter one array variables and function
//

const input = [1, 2, 3, 4, 5];
const ans = input.map(function (i) {
  return i * 2;
});
console.log(ans);

//filter
const arr = [10, 23, 43, 44, 66];
const ans2 = arr.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans2);

// assingnment
// create map function that take an array and transformation function
// as input and return transformed array as output

function customMap(array, transformFunction) {
  let transformedArray = [];

  for (let i = 0; i < array.length; i++) {
    transformedArray.push(transformFunction(array[i]));
  }
  return transformedArray;
}
// example
let numbers = [1, 2, 3, 4, 5]; //customap take array as number from here
let squaredNumbers = customMap(numbers, function (number) {
  //customap take transformFunction here
  return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//in simple way using map to calculale square
let number = [11, 12, 13, 14, 15];
let squaredNumber = number.map(function (number) {
  return number * number;
});
console.log(squaredNumber);
