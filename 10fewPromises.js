const setOne = new Promise((resolve, reject) => {
  resolve("Set 1 Downloaded");
});
const setTwo = new Promise((resolve, reject) => {
  resolve("Set 2 Downloaded");
});
const setThree = new Promise((resolve, reject) => {
  resolve("Set 3 Downloaded");
});

// Promise.all to run all, promise.race to run as soon as one ready instead of wait for all
// Promise.all([setOne, setTwo, setThree]).then((messages) => {
//   console.log(messages);
// });
Promise.race([setOne, setTwo, setThree]).then((messages) => {
  console.log(messages);
});
