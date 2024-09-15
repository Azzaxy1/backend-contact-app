const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// membuat func untuk pertanyaan
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (pertanyaan) => {
      resolve(pertanyaan);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const newContact = { nama, email, noHP };
  const data = fs.readFileSync("data/contacts.json", "utf-8");

  const contacts = JSON.parse(data);

  contacts.push(newContact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

  console.log(`Terimakasih ${nama} sudah menginputkan data`);

  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
