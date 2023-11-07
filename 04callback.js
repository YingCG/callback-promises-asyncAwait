function first() {
  console.log(1);
}

function second(callback) {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 0);
}

function thrid() {
  console.log(3);
}

first();
second(thrid);
