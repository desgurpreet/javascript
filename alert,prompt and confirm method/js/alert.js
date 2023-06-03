//alert and prompt
alert("Enter the value of a"); //use to print message
let a = prompt("Enter a here"); //get value from user
a = Number.parseInt(a);
// document.write(a);
//conform[asked question then perform action according to provide ans..]
let write = confirm("Did you enter value of a");
if (write) {
  document.write(a);
} else {
  document.write("Please enter the value of a");
}
