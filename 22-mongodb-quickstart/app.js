const { MongoClient } = require("mongodb");

// Connection URL
// const url = "mongodb://172.0.0.1:27017";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// DB Name
const dbName = "mydb";

const connectedDB = async () => {
  await client.connect();
  console.log("Koneksi Berhasil");

  return "Done";
};

connectedDB()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
