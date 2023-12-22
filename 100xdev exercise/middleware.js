const express = require("express");
const app = express();
app.use(express.json());
// reqcount by middleware
// let requestCount = 0;
// app.use(function (req, res, next) {
//   requestCount++;
//   next();
// });
// app.get("/user", function (req, res) {
//   res.status(200).json({ name: "john" });
// });
// app.get("/requestCount", function (req, res) {
//   res.status(200).json({ requestCount });
// });

// error count
let errorCount = 0;
app.use(function (req, res, next) {
  errorCount++;
  next();
});
app.get("/user", function (req, res) {
  throw new Error("some error");
  res.status(200).json({ name: "john" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});
app.listen(3000);
