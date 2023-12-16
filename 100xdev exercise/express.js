
const express = require("express");
const app = express();
app.use(express.json());

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.health;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json("done");
});
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json("done");
});
app.delete("/", function (req, res) {
  const newkidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newkidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newkidneys;
  res.json("done");
});
app.listen(3000);
