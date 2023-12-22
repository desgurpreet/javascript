const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const secretKey = "123";
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://desgurpreet:preet.s%402022@desgurpreet.q8hrvnx.mongodb.net/user_info" //user_info database name
);
const User = mongoose.model("users", { name: String, password: String });
app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const password = req.body.password;
  var token = jwt.sign({ name: name }, secretKey);
  res.send({
    token,
  });
  // const existUser = await User.findOne({ name: name });
  // if (existUser) {
  //   return res.status(400).send("Username already exists");
  // }
  const user = new User({
    name: name,
    password: password,
  });
  user.save();
  // res.json("user is created");
});
app.listen(3000);
