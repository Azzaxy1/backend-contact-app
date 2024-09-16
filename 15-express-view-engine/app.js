const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  const params = req.params;
  const query = req.query;
  console.log(query);

  res.send(`Product ID : ${params.id} <br/> Category ID : ${query}`);
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}....`);
});
