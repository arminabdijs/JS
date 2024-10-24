// Conditions [if,else if , else]
let num1 = 12;
let num2 = 4;
let num3 = 3;

if (num2 * num3 === num1) { //scope
  console.log(num2 * num3);
} else if (num2 > num3) {
  console.log("num2>num3");
} else {
  console.log("Oops");
}

// This is also a type of "condition operator" that stores the answer in a variable. It compares two values. If it is true, it stores the first item after the knowledge of the question in the variable, and if it is false, it stores the false in the variable.
let age = 12;
let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed); // false
