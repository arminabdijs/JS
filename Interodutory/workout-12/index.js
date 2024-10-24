// workout
let userAge = Number(prompt("enter your Age : "));

let welcome;

if (userAge < 18) {
  welcome = function () {
    console.log("Hello");
  };
} else {
  welcome = function () {
    console.log("Praise");
  };
}

welcome();