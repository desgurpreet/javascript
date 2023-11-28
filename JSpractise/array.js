const fruit = ["apple", "mango", "banana"];
fruit[3] = "date";
fruit.push("grapes");
fruit.unshift("pineapple");
fruit.pop();
console.log(Array.isArray(fruit));
console.log(fruit.indexOf("mango"));
console.log(fruit);
