const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
// const url = "mongodb://172.0.0.1:27017";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// DB Name
const dbName = "mydb";

const connectedDB = async () => {
  await client.connect();
  console.log("Connected sucessfully to database!");

  const db = client.db(dbName);
  const collection = db.collection("mahasiswa");

  //* Menambahkan 1 data ke collection mahasiswa
  // const insertMhs = await collection.insertOne({
  //   nama: "Siti Rohmah",
  //   email: "rohmah@gmail.com",
  // });
  // console.log("Insert document => ", insertMhs);

  //* Menambahkan lebih dari 1 data ke collection mahasiswa
  const insertManyMhs = await collection.insertMany([
    {
      nama: "Abdurrohman Azis",
      email: "azis@gmail.com",
    },
    {
      nama: "Siti Rohmah",
      email: "rohmah@gmail.com",
    },
  ]);
  console.log("Insert many document => ", insertManyMhs);

  //* Menampilkan semua document didalam collection
  // const findMhs = await collection.find().toArray();
  // console.log("Found Document =>", findMhs);

  //* Menampilkan document sesuai kriteria didalam collection
  // const findMhs = await collection
  //   .find({ _id: new ObjectId("66f1af526fb96dc8d1d7b2a4") })
  //   .toArray();
  // console.log("Found Document =>", findMhs);

  //* Mengupdate document didalam collection
  // const updateMhs = await collection.updateOne(
  //   { email: "jukri@gmail.com" },
  //   { $set: { email: "barack@gmail.com" } }
  // );
  // console.log("Update document => ", updateMhs);

  //* Menghapus 1 document didalam collection
  const deleteMhs = await db
    .collection("mahasiswa")
    .deleteOne({ nama: "Siti Rohmah" });
  console.log("Deleted Mahasiswa =>", deleteMhs);

  //* Menghapus lebih dari 1 document didalam collection
  // const deleteManyMhs = await db
  //   .collection("mahasiswa")
  //   .deleteMany({ nama: "Abdurrohman Azis" });
  // console.log("Deleted Many Mahasiswa =>", deleteManyMhs);
};

connectedDB()
  .catch(console.error)
  .finally(() => client.close());
