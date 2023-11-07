const userLeft = false;
const userGetDistract = true;

function learningCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "Someone is not interested in this subject",
      message: ":(",
    });
  } else if (userGetDistract) {
    errorCallback({
      name: "User watching Cat Meme...",
      message: "Easily get distracted!!!",
    });
  } else {
    callback("Yay, we are learning together!");
  }
}

learningCallback(
  (message) => {
    console.log("Success: " + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
