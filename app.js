const express = require("express");
const { request } = require("http");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ call: "Hello Get", msg: "Success" });
});

app.post("/", (request, res) => {
  const name = request.body.name;
  const city = request.body.city;
  res.json({ call: "Hello post", msg: "Success", name: name, city: city });
});

app.put("/", (req, res) => {
  res.json({ call: "Hello put", msg: "Success" });
});

app.delete("/", (req, res) => {
  res.json({ call: "Hello delete", msg: "Success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
