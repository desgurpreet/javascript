let a = "Gurpreet";
console.log(a);

//Template literals
let frnd1 = "Gurpreet";
let frnd2 = "Manpreet";
console.log(`${frnd1} and ${frnd2} both are friend`);

//Escape Sequence Characters
let fruit = "Bana'na"; //for print Bana'na
console.log(fruit);
let name = "Gurpreet\nSingh"; //singh print in next line
console.log(name);
let name1 = "Gurpreet\tSingh"; //for tab space
console.log(name1);
let name2 = "Gurpreet\rSingh"; //combine without space
console.log(name2);

//String methods
let friend = "Ramanpreet";
console.log(friend.toUpperCase());
console.log(friend.toLowerCase());
console.log(friend.slice(2, 5));
console.log(friend.slice(2));
console.log(friend.replace("Raman", "Gur"));
let friend1 = "Simran";
console.log(friend.concat(" is a neighbour of ", friend1));
let friend3 = "      harry     ";
console.log(friend3.trim());
