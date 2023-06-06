let first = document.getElementById("first");
let a = first.getAttribute("class"); //return first class text content
console.log(a);
console.log(first.hasAttribute("class")); //hasAttribute find which attributes are appy in html
console.log(first.hasAttribute("style"));
console.log(first.setAttribute("class", "sachin")); //changing class name in html code [first class]
//NOTE CHANGES ARE APPLY ONLY ON WEBPAGE NOT INSIDE HTML CODE
console.log(first.removeAttribute("class"));
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);
