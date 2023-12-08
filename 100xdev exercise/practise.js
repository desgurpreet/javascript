// class
class animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speak() {
    console.log("Hi there " + this.speaks);
  }
}
let dog = new animal("dog", 4, "bhow bhow");
let cat = new animal("cat", 4, "meow meow");
console.log(dog);
cat.speak();

// objects
function objectMethods(obj) {
  console.log("original object:", obj);

  let keys = Object.keys(obj);
  console.log("After object.keys():", keys);

  let value = Object.values(obj);
  console.log("After object.keys():", value);

  let entries = Object.entries(obj);
  console.log("Afer object.entires():", entries);

  let hasProp = obj.hasOwnProperty("key1");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After object.assign():", newObj);
}
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
objectMethods(sampleObject);

// call back
function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function sumOfSomething(a, b, callback) {
  console.log(callback);
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}
const ans = sumOfSomething(2, 2, cube);
console.log(ans);

// file read
const fs = require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

// promise
function promiseReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
function onDone(data) {
  console.log(data);
}
promiseReadFile().then(onDone);
// similiarly call back
// function readFile(cd) {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     cd(data);
//   });
// }
// function onDone(data) {
//   console.log(data);
// }
// readFile(onDone);

// async await
function fun() {
  let p = new Promise(function (resolve) {
    resolve("Hi there");
  });
  return p;
}
async function main() {
  const value = await fun();
  console.log(value());
}
