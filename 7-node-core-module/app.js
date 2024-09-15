// Core Module
// File System

const fs = require("fs");

// menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous!");
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile("data/test.txt", "Hello World", (e) => {
//   console.log(e);
// });

// Membaca isi file (synchronous)
// const dataRead = fs.readFileSync("data/test.txt", "utf-8");
// console.log(dataRead);

// Membaca isi file (asynchronous)
// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Membaca diterminal
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
  rl.question("Masukan No Hp anda: ", (noHp) => {
    const newContact = { nama, noHp };

    const data = fs.readFileSync("data/contacts.json", "utf-8");

    contacts = JSON.parse(data);
    console.log(contacts);

    contacts.push(newContact);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

    console.log(`Terimakasih ${nama}, sudah menginputkan ${noHp}`);

    rl.close();
  });
});
