// workout
// The following function adds two numbers and returns the result
function showValue() {
  let num1 = 2;
  let num2 = 8;
  let resultNumber = num1 + num2;
  console.log(`Result : ${resultNumber}`);
}

showValue()
showValue()

// ------------------------------------------------
// workout
// function min(a, b) {
//   if (a < b) {
//     return confirm(a);
//   } else {
//     return confirm(b);
//   }
// }

// min(2, 5);
// min(3, -1);
// min(1, 1);

// ------------------------------------------------
// workout
// function ask(question, ok, no) {
//   if (confirm(question)) ok();
//   else no();
// }
// function showOk() {
//   console.log("You agreed");
// }
// function showCancel(params) {
//   console.log("You have canceled the run");
// }

// ask("do you agree ? ", showOk, showCancel);

// ------------------------------------------------
// workout
// function showCount(count) {
//   console.log(count ?? "unknown");
// }

// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown
// showCount("Hello")

// ------------------------------------------------
// workout
// function isEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log("number is even");
//   } else if (number % 2 === 1) {
//     console.log("number is odd");
//   } else {
//     console.log("The input items are not entered correctly");
//   }
// }

// isEvenOrOdd(Number(prompt("enter your Number")));
// ------------------------------------------------
// workout
// function averageCalculator(number1, number2, number3) {
//   let average = (number1 + number2 + number3) / 3;
//   console.log("Average of your number is " + average);
// }

// averageCalculator(
//   Number(prompt("enter your Number")),
//   Number(prompt("enter your Number")),
//   Number(prompt("enter your Number"))
// );