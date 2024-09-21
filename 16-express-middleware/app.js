const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Azis",
      email: "azis@gmail.com",
    },
    {
      nama: "Hadi",
      email: "hadi@gmail.com",
    },
    {
      nama: "Ahmad",
      email: "ahmad@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Abdurrohman Azis",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

app.get("/product/:id", (req, res) => {
  const params = req.params;
  const query = req.query;
  console.log(query);

  res.send(`Product ID : ${params.id} <br/> Category ID : ${query}`);
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}....`);
});
