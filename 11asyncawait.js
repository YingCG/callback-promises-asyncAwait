// The keyword async before a function makes the function return a promise:
async function sayHello(user) {
  const greeting = " Hello";
  console.log(greeting + user);
  return greeting + user;
}

// is same as:
function greeting() {
  const greeting = " Good Morning";
  Promise.resolve(greeting);
  return greeting;
}
// calling the function
// greeting();
// sayHello("Tracy");

// // how we use the promise:
async function myDisplay(name) {
  const response = await sayHello(name);
  console.log("Responese Received");
  const info = await greeting(response);
  console.log(info + ", " + name);
}

myDisplay("My friend");
