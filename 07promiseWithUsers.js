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

function getData(users) {
  return new Promise((resolve, reject) => {
    const admin = "Cool Banana"; // Define the admin's name
    const user = "Blood Orange"; // Define a regular user's name

    if (admin === user) {
      // If the user is an admin
      resolve("Top secret here!");
    } else {
      const oneUser = users.find((one) => one.name === user);
      if (oneUser) {
        // If the user is in the users array
        resolve(oneUser);
      } else {
        // If the user is not found
        reject("Have you signed up yet?");
      }
    }
  });
}

getData(users)
  .then((data) => {
    if (typeof data === "string") {
      // Admin case
      console.log(data);
    } else {
      // Regular user case
      console.log("Hello, " + data.name + ". Last blog: " + data.description);
    }
  })
  .catch((message) => {
    console.log(message + " Only authorized users allowed.");
  });
