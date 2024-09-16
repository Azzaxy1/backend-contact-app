const http = require("http");
const fs = require("fs");

const renderPath = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const url = req.url;

  if (url === "/about") {
    renderPath("./about.html", res);
  } else if (url === "/contact") {
    renderPath("./contact.html", res);
  } else {
    renderPath("./index.html", res);
  }
});

server.listen(8000, () => {
  console.log("Server berjalan di port 8000....");
});
