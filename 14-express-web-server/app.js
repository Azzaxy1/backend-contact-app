const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  // res.status(200).json({
  //   nama: "Azis",
  //   email: "azis@gmail.com",
  //   noHP: "0866734234",
  // });
  // res.send("Hello World!");
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("Ini adalah halaman About");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  const params = req.params;
  const query = req.query;
  console.log(query);
  // res.send(query);

  res.send(`Product ID : ${params.id} <br/> Category ID : ${query}`);
});

app.get("/contact", (req, res) => {
  // res.send("Ini adalah halaman Contact");
  res.sendFile("./contact.html", { root: __dirname });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}....`);
});
