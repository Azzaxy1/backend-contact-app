//* Synchronous

// const getUserSync = (id) => {
//   const name = id === 1 ? "Abdurrohman" : "Azis";
//   return { id, name };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const hello = "Hello World";
// console.log(hello);

//* Asynchronous

const getUserSync = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const name = id === 1 ? "Abdurrohman" : "Azis";
    callback({ id, name });
  }, time);
};

const userSatu = getUserSync(1, (result) => {
  console.log(result);
});

const userDua = getUserSync(2, (result) => {
  console.log(result);
});

const hello = "Hello World";
console.log(hello);
