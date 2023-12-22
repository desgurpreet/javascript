const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const all_users = [
  {
    user_name: "abc",
    password: "abc",
  },
  {
    user_name: "efg",
    password: "efg",
  },
  {
    user_name: "xyz",
    password: "xyz",
  },
];
function userExist(user_name, password) {
  let userExist = false;
  for (let i = 0; i < all_users.length; i++) {
    if (
      all_users[i].user_name == user_name &&
      all_users[i].password == password
    ) {
      userExist = true;
    }
  }
}
app.post("/signin", function (req, res) {
  const user_name = req.body.user_name;
  const password = req.body.password;
  if (!userExist(user_name, password)) {
    res.send("user does not exist");
  }
  var token = jwt.sign({ user_name: user_name }, "pqrs");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, "pqrs");
    const user_name = decoded.user_name;
    console.log(user_name);
    res.json({
      users: all_users.filter(function (value) {
        if (value.user_name == user_name) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.send("invalid token");
  }
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
