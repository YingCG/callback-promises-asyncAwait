function first() {
  console.log(1);
}

function second() {
  setTimeout(() => {
    console.log(2);
  }, 0);
}

function thrid() {
  console.log(3);
}

first();
second();
thrid();
