// workout
let userAge = Number(prompt("enter yor Age : "));
let userGender = String(prompt("enter yor Gender (male , female) : "));

if (userGender === "female" || userAge < 18) {
  console.log("Sorry, you are not allowed to use this site");
} else if (userGender === "male" || userAge >= 18) {
  console.log("We welcome you to the panel");
} else {
  console.log("The input items are not entered correctly");
}

userGender === "female" || userAge < 18
  ? console.log("Sorry, you are not allowed to use this site")
  : userGender === "male" || userAge >= 18
  ? console.log("We welcome you to the panel")
  : console.log("The input items are not entered correctly");
