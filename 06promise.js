const users = [
  {
    name: "Cool Banana",
    description: "A berry and a fruit, dislike bug",
    birthday: "0311",
  },
  {
    name: "Blood Orange",
    description: "Sound bloody, bitter sweet and it give you vitamin C",
    birthday: "1210",
  },
];

const everybodySecret = new Promise((resolve, reject) => {
  let admin = "Cool Banana";
  if (users.find((user) => user.name === admin)) {
    resolve("Top secret here");
  } else {
    reject("Have you sign up yet? ");
  }
});

everybodySecret
  .then((message) => {
    console.log("Hahaha! " + message);
    console.log(
      users.map(
        (user) =>
          user.name +
          " --> " +
          user.description +
          " | brithday: " +
          user.birthday
      )
    );
  })
  .catch((message) => {
    console.log(message + "Only sesame can open this door!!");
  });
