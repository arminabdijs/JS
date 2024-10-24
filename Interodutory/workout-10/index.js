// workout
let userRating = Number(prompt("enter yor Rating : "));

switch (userRating) {
  case 18:
  case 19:
  case 20:
    console.log("Level A");
    break;
  case 15:
  case 16:
  case 17:
    console.log("Level B");
    break;
  case 12:
  case 13:
  case 14:
    console.log("Level C");
    break;
  default:
    console.log("Level F");
}