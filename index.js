// This will open a window and print a hello world message
// alert("hello world");

// ------------------------------------------------
// Several types of methods for variable definition
// var c = 13;
// let a = 13;
// const b = 13;

// ------------------------------------------------
// typeof will return the type of my variable
// let c = 13;
// let a = "13";
// let b = true;
// let g = 13n;

// alert(typeof c); //type number
// alert(typeof a); //type string
// alert(typeof b); //type boolean
// alert(typeof g); //type bigint

// ------------------------------------------------
// With this method, we can get input from the user
// const your_Name = prompt("enter your Name : ");
// alert(your_Name);

// const your_Age = prompt("enter your Age : ");
// const result = Number(your_Age);
// alert(result);

// const your_Age = prompt("enter your Age : ");
// const result = +your_Age;
// alert(result);

// const your_Age2 = Number(prompt("enter your Age : "));
// alert(your_Age2);

// const your_Name2 = prompt("enter your Name : ", "Armin Abdi");
// alert(your_Name);

// alert(Number(prompt("enter your Age : ")));

// ------------------------------------------------
// type NaN => Not a Number
// alert(Number("Armin Abdi"));

// alert(typeof NaN); //typeof NaN => Number

// const name = "Armin";
// alert(isNaN(name)); //output true

// ------------------------------------------------
// Data type conversion
// let boolean = true;
// let string = String(boolean);
// alert(typeof string);

// ------------------------------------------------
// Mathematical operations of addition, subtraction, multiplication and ...
// let num1 = 2;
// let num2 = 2;

// alert(num1 + num2);
// alert(num1 - num2);
// alert(num1 * num2);
// alert(num1 ** num2);
// alert(num1 % num2);

// ------------------------------------------------
// workout
// let num1 = Number(prompt("enter your Number"));
// let num2 = Number(prompt("enter your Number"));

// alert(num1 + num2);
// alert(num1 - num2);
// alert(num1 * num2);
// alert(num1 ** num2);
// alert(num1 % num2);

// ------------------------------------------------
// connect
// We connect two texts with a +
// let firstName = "Armin";
// let lastName = "Abdi";
// let fullName = firstName + " " + lastName;
// alert(fullName);

// let firstName2 = "Armin";
// let lastName2 = "Abdi";
// let fullName2 = firstName2 + "\n " + lastName2;
// alert(fullName2);

// ------------------------------------------------
// Creating double quotation or single quotation in the output text
// alert("armin 'abdi'");

// alert('armin "abdi"');

// ------------------------------------------------
// Comparative operators
// let num1 = 12;
// let num2 = 4;
// let num3 = 4;
// let num4 = "12";

// alert(num1 == num3); //false

// alert(num1 > num3); //true

// alert(num2 >= num3); //true

// alert(num1 == num4); //true
// alert(num1 === num4); //false

// ------------------------------------------------
// Conditions [if,else if , else]
// let num1 = 12;
// let num2 = 4;
// let num3 = 3;

// if (num2 * num3 === num1) { //scope
//   alert(num2 * num3);
// } else if (num2 > num3) {
//   alert("num2>num3");
// } else {
//   alert("Oops");
// }

// This is also a type of condition that stores the answer in a variable. It compares two values. If it is true, it stores the first item after the knowledge of the question in the variable, and if it is false, it stores the false in the variable.
// let age = 12;
// let accessAllowed = age > 18 ? true : false;
// alert(accessAllowed); // false

// ------------------------------------------------
// workout
// let inputNumber = Number(prompt("enter Your Number : "));

// if (inputNumber % 2 === 0) {
//   alert("Entered is even");
// } else if (inputNumber % 2 === 1) {
//   alert("Entered is a person");
// } else {
//   alert("Please enter a number");
// }

// ------------------------------------------------
// workout
// let inputNumber = Number(prompt("enter Your Number : "));
// let inputNumber2 = Number(prompt("enter Your Number : "));
// let inputNumber3 = Number(prompt("enter Your Number : "));

// const result = (inputNumber + inputNumber2 + inputNumber3) / 3;
// alert(`The average of these three numbers is : ${result}`);

// ------------------------------------------------
// workout
// let userAge = Number(prompt("enter Your Number : "));

// if (userAge < 18) {
//   alert("You are not allowed to enter");
// } else if (userAge >= 18) {
//   alert("Login to the panel");
// } else {
//   alert("Please enter a number");
// }

// ------------------------------------------------
// workout
// let inputNumber = Number(prompt("enter Your Number : "));
// let inputNumber2 = Number(prompt("enter Your Number : "));

// let result = inputNumber ** inputNumber2;

// alert(result);

// ------------------------------------------------
// workout
// let userBirthDate = Number(prompt("enter your Birth Date : ", 2002));
// let dateOfTheDay = Number(prompt("enter date of the day : ", 2024));

// let userAge = dateOfTheDay - userBirthDate;

// if (isNaN(userBirthDate)) {
//   alert("Please enter the date of birth as a number");
// } else if (isNaN(dateOfTheDay)) {
//   alert("Please enter the date and number");
// } else if (userAge <= 0) {
//   alert("The date entered is not correct");
// } else {
//   alert("your Age is : " + userAge);
// }

// ------------------------------------------------
// workout
// let minutes = Number(prompt("enter your time (minutes) : ", 0));

// let minuteToHours = minutes / 60;

// if (isNaN(minutes)) {
//   alert("Please enter a number");
// } else {
//   alert(minuteToHours + " Hours");
// }

// ------------------------------------------------
// Bitwise Operator
// OR => ||
// let num1 = 12;
// let num2 = 4;
// let num3 = 3;

// if (num2 * num3 === 10 || num2 * num3 === 11) {
//   alert("The multiplier is 10 or 11");
// } else if (num2 * num3 === 13 || num2 * num3 === 15) {
//   alert("The multiplier is 13 or 15");
// } else if (num2 * num3 === 14 || num2 * num3 === 12) {
//   alert("The multiplier is 14 or 12");
// }

// AND => &&
// let num1 = 4;
// let num2 = 3;

// if (num2 === 3 && num1 * num2 === 12) {
//   alert(
//     "The first number is equal to 3 and the product of the first and second number is equal to 12"
//   );
// } else if (num2 === 4 && num1 * num2 === 12) {
//   alert(
//     "The first number is equal to 4 and the product of the first and second number is equal to 12"
//   );
// } else {
//   alert("None of the conditions are correct");
// }

// NOT => !
// let myBool = true;
// alert("my Bool = " + myBool);
// alert("Not my Bool = " + !myBool);

// ------------------------------------------------
// workout
// let userAge = Number(prompt("enter yor Age : "));
// let userGender = String(prompt("enter yor Gender (male , female) : "));

// if (userGender === "female" || userAge < 18) {
//   alert("Sorry, you are not allowed to use this site");
// } else if (userGender === "male" || userAge >= 18) {
//   alert("We welcome you to the panel");
// } else {
//   alert("The input items are not entered correctly");
// }

// userGender === "female" || userAge < 18
//   ? alert("Sorry, you are not allowed to use this site")
//   : userGender === "male" || userAge >= 18
//   ? alert("We welcome you to the panel")
//   : alert("The input items are not entered correctly");

// ------------------------------------------------
// switch
// Switch can be used instead of if
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert("Exactly!");
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// ------------------------------------------------
// workout
// let userRating = Number(prompt("enter yor Rating : "));

// switch (userRating) {
//   case 18:
//   case 19:
//   case 20:
//     alert("Level A");
//     break;
//   case 15:
//   case 16:
//   case 17:
//     alert("Level B");
//     break;
//   case 12:
//   case 13:
//   case 14:
//     alert("Level C");
//     break;
//   default:
//     alert("Level F");
// }

// ------------------------------------------------
// Function Declaration
// This function will print a greeting
// function sayHi() {
//     alert("Hello");
// }

// sayHi();

// ------------------------------------------------
// workout
// The following function adds two numbers and returns the result
// function showValue() {
//   let num1 = 2;
//   let num2 = 8;
//   let resultNumber = num1 + num2;
//   alert(`Result : ${resultNumber}`);
// }

// showValue()
// showValue()

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
//   alert("You agreed");
// }
// function showCancel(params) {
//   alert("You have canceled the run");
// }

// ask("do you agree ? ", showOk, showCancel);

// function showCount(count) {
//   alert(count ?? "unknown");
// }

// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown

// ------------------------------------------------
// workout
// function isEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     alert("number is even");
//   } else if (number % 2 === 1) {
//     alert("number is odd");
//   } else {
//     alert("The input items are not entered correctly");
//   }
// }

// isEvenOrOdd(Number(prompt("enter your Number")));
// ------------------------------------------------
// workout
// function averageCalculator(number1, number2, number3) {
//   let average = (number1 + number2 + number3) / 3;
//   alert("Average of your number is " + average);
// }

// averageCalculator(
//   Number(prompt("enter your Number")),
//   Number(prompt("enter your Number")),
//   Number(prompt("enter your Number"))
// );

// ------------------------------------------------
// Function Expression
// let sayHi = function () {
//     alert("Hello");
// };

// sayHi();

// ------------------------------------------------
// workout
// let userAge = Number(prompt("enter your Age : "));

// let welcome;

// if (userAge < 18) {
//   welcome = function () {
//     alert("Hello");
//   };
// } else {
//   welcome = function () {
//     alert("Praise");
//   };
// }

// welcome();

// ------------------------------------------------
// Arrow functions
// let double = (n) => n * 2;
// alert(double(3));

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// alert(sum(1, 2));

// ------------------------------------------------
// workout
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

// ------------------------------------------------
// String methods

// Display by index
// let userName = "ArminAbdi";
// alert(userName[0]);

// More efficient length counting
// let userName = "ArminAbdi";
// alert(userName.length);

// This method enters the index we gave it and returns it
// let text = "I love JavaScript";
// console.log(text.charAt(4));

// This method enters the index we gave it and returns its unique code
// let text = "I love JavaScript";
// console.log(text.charCodeAt(4)); //Ascii code

// This will connect the text we gave to the method to the variable text
// let text = "I love JavaScript";
// console.log(text.concat(" and nodeJS"));

// This method deletes the last and first spaces of our text
// let text = "                                       I love JavaScript";
// console.log(text.trim());

// This method lowers all letters
// let text = "I love JavaScript";
// console.log(text.toLowerCase());

// This method capitalizes all letters
// let text = "I love JavaScript";
// console.log(text.toUpperCase());

// This method looks for the word we gave it, and if it exists, it returns the beginning index of this word to me.
// let text = "I love JavaScript";
// console.log(text.search("Java"));
// console.log(text.search(/java/i)); //i==Not case sensitive

// This method looks for the word we gave it, and if it exists, it returns the beginning index of this word to me.
// let text = "I love JavaScript";
// console.log(text.indexOf("Java"));

// This method looks for the word we gave it, and if it exists, it returns a true boolean and vice versa.
// let text = "I love JavaScript";
// console.log(text.includes("Java"));

//It goes into the text, separates it from the start index to the end index and returns it to us
// let text = "I love JavaScript";
// console.log(text.slice(7, 17));

// This comes into the text, starting from the index to the length of the letters we want to return
// let text = "I love JavaScript";
// console.log(text.substr(7, 10));

// It comes into the text from the start index to the end index that we want to return
// let text = "I love JavaScript";
// console.log(text.substring(7, 17));

// ------------------------------------------------
// workout
// function loginForm(userName, userPassword) {
//   if (userName.length >= 3 && userPassword.length >= 8) {
//     alert("You are very welcome");
//   } else {
//     alert("Username or password is not correct");
//   }
// }

// loginForm(
//   String(prompt("Enter user name : ", "ArminAbdi")),
//   String(prompt("Enter Password : ", "ArminAbdi2017"))
// );

// ------------------------------------------------
// workout
// function loginForm(userName, userPassword) {
//   if (
//     (userName.length >= 3 && userPassword.length >= 8,
//     userName.toLowerCase() === "ali")
//   ) {
//     alert("You are very welcome");
//   } else {
//     alert("Username or password is not correct or user name not ali");
//   }
// }

// loginForm(
//   String(prompt("Enter user name : ", "ArminAbdi")),
//   String(prompt("Enter Password : ", "ArminAbdi2017"))
// );
// ------------------------------------------------
// Math methods
// console.log(Math.PI); //return number pi (3.141592653589793)

// console.log(Math.pow(2, 4)); // return 2**4

// console.log(Math.sqrt(16));// return It takes the square root of 16

// console.log(Math.abs(-1)); //It takes the absolute value of -1

// console.log(Math.min(1, 2, 3, 4, 56, 6, 7, 889, 9, 2, -1)); //Returns the smallest number

// console.log(Math.max(1, 2, 3, 4, 56, 6, 7, 889, 9, 2, -1)); //Returns the largest number

// console.log(Math.floor(1.9)); //This will remove the decimal part and return the correct part

// console.log(Math.trunc(2.6)); //This will remove the decimal part and return the correct part

// console.log(Math.round(12.7)); //This is going to change our number

// console.log(Math.random() * 10); //It returns a random number between 0 and 1. If we want to get a specific number, we multiply it.

// console.log(Math.acos(1)); //This field returns the Arkcosine of 1

// console.log(Math.asin(1)); //This will return the Arksine of 1

// console.log(Math.atan(1)); //This field returns the Arktangent of 1

// console.log(Math.atan2(2, 6)); //This field returns the Arktangents2 of two points x and y

// console.log(Math.ceil(2.1)); //This rends any number that is out of the integer, for example, it rends the number 2.1 to 3.

// console.log(Math.exp(3)); //It will multiply e=2.71 by any number we give it

// console.log(Math.log(9)); //Returns the natural logarithm (base e=2.71) of a number

// console.log(Math.sin(9999999999999999));//Sine returns a number between 1 and -1

// console.log(Math.tan(9999999999999999));//tangent returns a number between 1 and -1

// console.log(Math.cos(9999999999999999));//cosine returns a number between 1 and -1

// console.log(Math.E); //This is Euler's number

// console.log(Math.LN10); //LN10===log(10)

// ------------------------------------------------
// workout
// let firstRandumNumber = Math.random() * 100000;
// let finalCaptchaCode = Math.floor(firstRandumNumber);

// console.log(`your Captcha Code : ` + finalCaptchaCode);

// ------------------------------------------------
// Assignment Operators
// let number = 10;

// number += 5;

// number++

// ++number

// number -= 10;

// number--

// --number

// number *= 7;

// number **= 2;

// number /= 9;

// console.log(number);

// ------------------------------------------------
// x++ VS ++x
// let num1 = 0;

// let num2 = num1++;

// let num2 = ++num1;

// console.log("num2 : " + num2);
// console.log("num1 : " + num1);

// ------------------------------------------------
// Loops: while
// let firstNumber = 0;
// while (firstNumber < 5) {
//   console.log("Hello world!");
//   firstNumber++;
// }

// let firstNumber = 0;
// while (firstNumber < 3) console.log(firstNumber++);

// let firstNumber = 0;
// do {
//   console.log("Hi world!");
//   firstNumber++;
// } while (firstNumber < 5);

// ------------------------------------------------
// Loops: for
// for (let i = 0; i < 5; i++) {
//   console.log("Hello World!");
// }

// let i = 0;
// for (; i < 3; ) {
//   console.log(i++);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// label: for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     for (i; i > 5; ) {
//       break label;
//       console.log("hello");
//     }
//   }
// }

// ------------------------------------------------
// Loops: for in
// let user = {
//   name: "armin",
//   family: "abdi",
//   age: 22,
// };
// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
//   console.log("--------------------------");
// }

// ------------------------------------------------
// Loops: for of
// let arr = [
//   "html",
//   "css",
//   "js",
//   "angular",
//   "react",
//   "nodejs",
//   "mongoDB",
//   "MYSQL",
// ];

// for (const element of arr) {
//   console.log(element,"GOOD");
// }

// ------------------------------------------------
// workout
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`number is ${i} even`);
//   }
// }

// ------------------------------------------------
// workout
// let allPrices = 0;

// for (let i = 0; i < 5; i++) {
//   allPrices += Number(prompt("Enter the product price: "));
// }

// alert("All price of your basket: " + allPrices);

// ------------------------------------------------
// workout
// let userNumbser = 0;
// let sumNumberOfNumbers = 0;
// for (let i = 1; i <= 5; i++) {
//   userNumbser += +prompt(`enter ${i} number`);
//   sumNumberOfNumbers++;
// }

// alert(userNumbser / sumNumberOfNumbers);

// ------------------------------------------------
// workout
// let userNumber = Number(prompt("Enter the Number : ", 0));
// let sum = 0;

// for (let i = 0; userNumber / 10 != 0; i++) {
//   sum += userNumber % 10;
//   userNumber = Math.floor(userNumber / 10);
// }

// console.log("Sum Of Digits : ", sum);

// ------------------------------------------------
// workout
// let userNumber = Number(prompt("Enter the Number : ", 0));
// let sum = 0;
// if (userNumber === 0) {
//   sum = 1;
// } else {
//   for (let i = 0; userNumber / 10 != 0; i++) {
//     sum++;
//     userNumber = Math.floor(userNumber / 10);
//   }
// }

// console.log("Sum Of Digits : ", sum);

// ------------------------------------------------
// workout
