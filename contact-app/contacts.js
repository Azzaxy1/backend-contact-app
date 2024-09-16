const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

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

const loadContact = () => {
  const data = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(data);
  return contacts;
};

const simpanContact = (nama, email, noHP) => {
  const newContact = { nama, email, noHP };

  const contacts = loadContact();

  // Cek duplikat nama
  const duplicate = contacts.find((contact) => contact.nama === nama);
  if (duplicate) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    return false;
  }

  // Cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
      return;
    }
  }

  // Cek no HP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("No Handphone tidak valid!"));
    return;
  }

  contacts.push(newContact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

  console.log(chalk.green.inverse.bold(`Terimakasih sudah menginputkan data`));
};

const listContact = () => {
  const contacts = loadContact();

  console.log(chalk.cyan.inverse.bold("Daftar Kontak : "));

  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noHP);

  if (contact.email) {
    console.log(contact.email);
  }
};

module.exports = { simpanContact, listContact, detailContact };
