//prototype in object orient
let a = {
  name: "preet",
  language: "javascript",
  run: () => {
    alert("self run");
  },
};
console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};
p.__proto__ = {
  name2: "jackie",
};
a.__proto__ = p;
a.run();
console.log(a.name2);
