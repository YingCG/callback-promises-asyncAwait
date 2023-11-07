function callbackHell() {
  setTimeout(() => {
    const greeting = { user: "Somebody" };
    console.log(greeting);
    setTimeout(() => {
      const data = { info: "bla bla bla" };
      console.log(data);
      console.log("Data has been Updated");
    }, 1000);
  }, 500);
}

callbackHell();
