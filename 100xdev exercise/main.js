// // 1. create a counter in js(counts down from 30 to 0)
// for (let i = 30; i >= 0; i--) {
//   console.log(i);
// }
// // 2.Calculat the time it takes between a setTimeout call and the inner function actually runing
// // 3. create terminal clock
function find_time() {
  const current_time = new Date();
  const hours = current_time.getHours();
  const minutes = current_time.getMinutes();
  const seconds = current_time.getSeconds();

  console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
}
find_time();

//.... 4....We have already covered this in the second lesson,
// but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second
function counter1(n) {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i);
    i++;
    function stopCounter() {
      if (i > n) clearInterval(interval);
    }
    stopCounter();
  }, 1000);
}
counter1(5);
// ...5....file read
const fs = require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
//  ...6....write content into file
fs.writeFile("aa.txt", "gurpreet", (err) => {
  if (err) {
    throw err;
  }
  console.log("The file has been saved!");
});

//....7..... Read a file, remove all the extra spaces and write it back to the same file.

function removeExtraSpaces(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
    }

    // Remove extra spaces
    const modifiedContent = data.replace(/\s+/g, " ");
    console.log(modifiedContent);
    fs.writeFile(filePath, modifiedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        return;
      } else {
        console.log("Extra spaces removed and file updated successfully.");
      }
    });
  });
}

removeExtraSpaces("a.txt");
