const { tulisPertanyaan, simpanContact } = require("./contacts");

// func untuk menjalankan pertanyaan
const main = async () => {
  const nama = await tulisPertanyaan("Masukan nama anda : ");
  const email = await tulisPertanyaan("Masukan email anda : ");
  const noHP = await tulisPertanyaan("Masukan no Hp anda : ");

  simpanContact(nama, email, noHP);
};

main();
