let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.parentElement);
console.log(t.childElementCount); //thead chile
console.log(t.lastElementChild); //provide only last child element
console.log(t.lastChild); //provide last child element include with element space
console.log(t.tHead.firstElementChild.firstElementChild);

// console.log(t.tBodies.firstElementChild);
let m =
  document.body.firstElementChild.firstElementChild.firstElementChild
    .nextElementSibling;
console.log(m); //find next sibling tbody
console.log(m.firstElementChild); //first tr in tbody
console.log(m.firstElementChild.cells);
console.log(m.rows);
let n =
  document.body.firstElementChild.firstElementChild.firstElementChild
    .nextElementSibling.firstElementChild.nextElementSibling;
console.log(n); //find next tr in tbody
console.log(n.nextElementSibling);
