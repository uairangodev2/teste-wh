const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.all("/", (req, res) => {
  console.log("Rodando");
  res.send("Rodando");
});

// all (GET, POST, PUT, DELETE)
app.all("/webhook", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

let server = app.listen(process.env.PORT || port, () => {
  console.log(
    `App listening at ${server.address().address}:${server.address().port}`
  );
});
