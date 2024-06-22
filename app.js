const express = require("express");
const { request } = require("http");
const app = express();
const port = 3001;

var users = [
  {
    name: "Tejasvee",
    city: "Raipur",
    id: 100,
  },
  {
    name: "Mohak",
    city: "Jabalpur",
    id: 101,
  },
  {
    name: "Ashi",
    city: "Bhilai",
    id: 102,
  },
  {
    name: "Janhavi",
    city: "Bilaspur",
    id: 103,
  },
];

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ call: "Hello Get", msg: "Success", users: users });
});

app.post("/", (request, res) => {
  const user = request.body;
  users.push(user);
  res.json({ call: "Hello post", msg: "Success", users: users });
});

app.put("/updateUserByCity", (req, res) => {
  const userId = req.query.userId;
  const tempuserId = users.findIndex((user) => user.id == userId);
  const newCity = req.body.city;
  users[tempuserId].city = newCity;
  const updatedUser = users[tempuserId];
  res.json({
    call: "Hello updateUserByCity",
    msg: "Success",
    user: updatedUser,
  });
});

app.put("/updateUserByName", (req, res) => {
  const userId = req.query.userId;
  const tempuserId = users.findIndex((user) => user.id == userId);
  const newName = req.body.name;
  users[tempuserId].name = newName;
  const updatedUser = users[tempuserId];
  res.json({
    call: "Hello updateUserByName",
    msg: "Success",
    user: updatedUser,
  });
});

app.put("/updateUserByValue", (req, res) => {
  const userId = req.query.userId;
  const tempuserId = users.findIndex((user) => user.id == userId);
  const newName = req.body.name;
  users[tempuserId].name = newName;
  const newCity = req.body.city;
  users[tempuserId].city = newCity;
  const updatedUser = users[tempuserId];
  res.json({
    call: "Hello updateUserByValue",
    msg: "Success",
    user: updatedUser,
  });
});

app.delete("/", (req, res) => {
  const index = req.query.index;
  users.splice(index, 1);
  res.json({ call: "Hello delete", msg: "Success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
