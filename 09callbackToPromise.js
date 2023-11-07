const userLeft = false;
const userGetDistract = true;

function learningPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "Someone is not interested in this subject",
        message: ":(",
      });
    } else if (userGetDistract) {
      reject({
        name: "User watching Cat Meme...",
        message: "Easily get distracted!!!",
      });
    } else {
      resolve("Yay, we are learning together!");
    }
  });
}

learningPromise()
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
