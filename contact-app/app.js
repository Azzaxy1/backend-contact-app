const yargs = require("yargs");
const { simpanContact, listContact, detailContact } = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

// Menampilkan daftar semua nama & no hp contact
yargs.command({
  command: "list",
  describe: "menampilkan semua nama & no HP contact",
  handler() {
    listContact();
  },
});

// menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

yargs.parse();
