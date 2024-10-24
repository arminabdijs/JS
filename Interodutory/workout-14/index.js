// workout
function loginForm(userName, userPassword) {
  if (userName.length >= 3 && userPassword.length >= 8) {
    console.log("You are very welcome");
  } else {
    console.log("Username or password is not correct");
  }
}

loginForm(
  String(prompt("Enter user name : ", "ArminAbdi")),
  String(prompt("Enter Password : ", "ArminAbdi2017"))
);

// ------------------------------------------------
// workout
// function loginForm(userName, userPassword) {
//   if (
//     userName.length >= 3 &&
//     userPassword.length >= 8 &&
//     userName.toLowerCase() === "ali"
//   ) {
//     console.log("You are very welcome");
//   } else {
//     console.log("Username or password is not correct or user name not ali");
//   }
// }

// loginForm(
//   String(prompt("Enter user name : ", "ArminAbdi")),
//   String(prompt("Enter Password : ", "ArminAbdi2017"))
// );