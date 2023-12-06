// closers
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
fn();
fn();
fn();

// currying
function sum(a, b, c) {
  return a + b + c;
}
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curried_sum = curry(sum);
console.log(curried_sum(2)(3)(5));
// console.log(curry(1)(2)(3)(5));

// implicit binding
const person = {
  name: "preet",
  my_name: function () {
    console.log(`My name is ${this.name}`);
  },
};
person.my_name();

// explicit binding
function my_name() {
  console.log(`My name is ${this.name}`);
}
my_name.call(person);

// new  binding
function Person(name) {
  this.name = name;
}
const p1 = new Person("harry");
const p2 = new Person("garry");
console.log(p1.name, p2.name);

// prototype
function student(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}
const student1 = new student("gurpreet", "singh");
const student2 = new student("harpreet", "singh");

student.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(student1.getFullName());
console.log(student2.getFullName());
