// Bitwise Operator
// OR => ||
let num1OR = 12;
let num2OR = 4;
let num3OR = 3;

if (num2OR * num3OR === 10 || num2OR * num3OR === 11) {
  console.log("The multiplier is 10 or 11");
} else if (num2OR * num3OR === 13 || num2OR * num3OR === 15) {
  console.log("The multiplier is 13 or 15");
} else if (num2OR * num3OR === 14 || num2OR * num3OR === 12) {
  console.log("The multiplier is 14 or 12");
}

// AND => &&
let num1AND = 4;
let num2AND = 3;

if (num2AND === 3 && num1AND * num2AND === 12) {
  console.log(
    "The first number is equal to 3 and the product of the first and second number is equal to 12"
  );
} else if (num2AND === 4 && num1AND * num2AND === 12) {
  console.log(
    "The first number is equal to 4 and the product of the first and second number is equal to 12"
  );
} else {
  console.log("None of the conditions are correct");
}

// NOT => !
let myBool = true;
console.log("my Bool = " + myBool);
console.log("Not my Bool = " + !myBool);
