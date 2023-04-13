const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/mamad", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  //res.status(200).json({
  // result: num1 * num2,
  //});
  res.send(`result is ${num1 * num2}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
