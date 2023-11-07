const promise = new Promise((resolve, reject) => {
  resolve({ user: "Smiley Face" });
  // or
  // reject("server is down");
});

promise
  .then((data) => {
    const users = data;
    fetch("https://jsonplaceholder.typicode.com/users").then((users) => {
      return users.json();
    });
  })

  .catch((err) => {
    console.log(err);
  });
