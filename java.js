//operators
let a1 = 10;
let b1 = 2;
console.log("a1+b1=", a1 + b1);
console.log("a1-b1=", a1 - b1);
console.log("a1/b1=", a1 / b1);
console.log("a1*b1=", a1 * b1);
console.log("a1**b1=", a1 ** b1); //b1 raise to power a1(10*10)
console.log("a1%b1=", a1 % b1); //show remainder
console.log("a1++=", a1++); //increment value but not show ,when we use a1 then it work with increment value
console.log("++a1=", ++a1); //increment value at time
console.log("a1--=", a1--); //similarly in decrement case
console.log("--a1=", --a1);
console.log("a1=", a1);

//Assignment operators
let ass = 1;
ass += 5;
console.log("ass+=", ass);
ass -= 1;
console.log("ass-=", ass);
ass *= 2;
console.log("ass*=", ass);
ass /= 5;
console.log("ass/=", ass);
ass **= 2;
console.log("ass**=", ass);

//comparison operators
let com1 = 6;
let com2 = 6;
console.log("com1<com2 is", com1 < com2);
console.log("com1>com2 is", com1 > com2);
console.log("com1<=com2 is", com1 <= com2);
console.log("com1>=com2 is", com1 >= com2);
console.log("com1==com2 is", com1 == com2);
console.log("com1!=com2 is", com1 != com2);
console.log("com1===com2 is", com1 === com2);
console.log("com1!==com2 is", com1 !== com2);
// or
console.log("other way");
let comp = 6;
let comp1 = "6";
console.log("comp==comp1 is", comp == comp1);
console.log("comp!=comp1 is", comp != comp1);
console.log("comp===comp1 is", comp === comp1); //return accoding to type of value
console.log("comp!==comp1 is", comp !== comp1);

//Logical operators
let x = 2;
let y = 4;
console.log(x < y && x == 4); //both true then result true otherwise false
console.log(x < y || x == 4); //any one true result true otherwise false
console.log(!x < y);
