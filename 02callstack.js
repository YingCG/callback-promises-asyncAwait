console.log("message");
logger();
console.log(1);

function logger() {
  console.log(2);
  runner();
  console.log(3);
  function runner() {
    console.log("running complete");
  }
}
