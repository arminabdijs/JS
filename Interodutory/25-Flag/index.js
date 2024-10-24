//Flag
let userName = prompt("Enter the Username: ");

let users = ["ali", "armin", "amir", "babak"];

let loginFlag = false;

for (let i = 0; i < users.length; i++) {
  if (users[i] === userName) {
    loginFlag = true;
  }
}

if (loginFlag) {
  console.log("you are login");
} else {
  console.log("you are not login plese signin");
}
