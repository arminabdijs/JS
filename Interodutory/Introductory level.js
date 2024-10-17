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

// console.log(typeof c); //type number
// console.log(typeof a); //type string
// console.log(typeof b); //type boolean
// console.log(typeof g); //type bigint

// ------------------------------------------------
// With this method, we can get input from the user
// const your_Name = prompt("enter your Name : ");
// console.log(your_Name);

// const your_Age = prompt("enter your Age : ");
// const result = Number(your_Age);
// console.log(result);

// const your_Age = prompt("enter your Age : ");
// const result = +your_Age;
// console.log(result);

// const your_Age2 = Number(prompt("enter your Age : "));
// console.log(your_Age2);

// const your_Name2 = prompt("enter your Name : ", "Armin Abdi");
// console.log(your_Name);

// console.log(Number(prompt("enter your Age : ")));

// ------------------------------------------------
// type NaN => Not a Number
// console.log(Number("Armin Abdi"));

// console.log(typeof NaN); //typeof NaN => Number

// const name = "Armin";
// console.log(isNaN(name)); //output true

// ------------------------------------------------
// Data type conversion
// let boolean = true;
// let string = String(boolean);
// console.log(typeof string);

// ------------------------------------------------
// Mathematical operations of addition, subtraction, multiplication and ...
// let num1 = 2;
// let num2 = 2;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);

// ------------------------------------------------
// workout
// let num1 = Number(prompt("enter your Number"));
// let num2 = Number(prompt("enter your Number"));

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);

// ------------------------------------------------
// connect
// We connect two texts with a +
// let firstName = "Armin";
// let lastName = "Abdi";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let firstName2 = "Armin";
// let lastName2 = "Abdi";
// let fullName2 = firstName2 + "\n " + lastName2;
// console.log(fullName2);

// ------------------------------------------------
// Creating double quotation or single quotation in the output text
// console.log("armin 'abdi'");

// console.log('armin "abdi"');

// console.log("armin\"abdi\"")

// ------------------------------------------------
// Comparative operators
// let num1 = 12;
// let num2 = 4;
// let num3 = 4;
// let num4 = "12";

// console.log(num1 == num3); //false

// console.log(num1 > num3); //true

// console.log(num2 >= num3); //true

// console.log(num1 == num4); //true
// console.log(num1 === num4); //false

// ------------------------------------------------
// Conditions [if,else if , else]
// let num1 = 12;
// let num2 = 4;
// let num3 = 3;

// if (num2 * num3 === num1) { //scope
//   console.log(num2 * num3);
// } else if (num2 > num3) {
//   console.log("num2>num3");
// } else {
//   console.log("Oops");
// }

// This is also a type of "condition operator" that stores the answer in a variable. It compares two values. If it is true, it stores the first item after the knowledge of the question in the variable, and if it is false, it stores the false in the variable.
// let age = 12;
// let accessAllowed = age > 18 ? true : false;
// console.log(accessAllowed); // false

// ------------------------------------------------
// workout
// let inputNumber = Number(prompt("enter Your Number : "));

// if (inputNumber % 2 === 0) {
//   console.log("Entered is even");
// } else if (inputNumber % 2 === 1) {
//   console.log("Entered is a odd");
// } else {
//   console.log("Please enter a number");
// }

// ------------------------------------------------
// workout
// let inputNumber = Number(prompt("enter Your Number : "));
// let inputNumber2 = Number(prompt("enter Your Number : "));
// let inputNumber3 = Number(prompt("enter Your Number : "));

// const result = (inputNumber + inputNumber2 + inputNumber3) / 3;
// console.log(`The average of these three numbers is : ${result}`);

// ------------------------------------------------
// workout
// let userAge = Number(prompt("enter Your Number : "));

// if (userAge < 18) {
//   console.log("You are not allowed to enter");
// } else if (userAge >= 18) {
//   console.log("Login to the panel");
// } else {
//   console.log("Please enter a number");
// }

// ------------------------------------------------
// workout
// let inputNumber = Number(prompt("enter Your Number : "));
// let inputNumber2 = Number(prompt("enter Your Number : "));

// let result = inputNumber ** inputNumber2;

// console.log(result);

// ------------------------------------------------
// workout
// let userBirthDate = Number(prompt("enter your Birth Date : ", 2002));
// let dateOfTheDay = Number(prompt("enter date of the day : ", 2024));

// let userAge = dateOfTheDay - userBirthDate;

// if (isNaN(userBirthDate)) {
//   console.log("Please enter the date of birth as a number");
// } else if (isNaN(dateOfTheDay)) {
//   console.log("Please enter the date and number");
// } else if (userAge <= 0) {
//   console.log("The date entered is not correct");
// } else {
//   console.log("your Age is : " + userAge);
// }

// ------------------------------------------------
// workout
// let minutes = Number(prompt("enter your time (minutes) : ", 0));

// let minuteToHours = minutes / 60;

// if (isNaN(minutes)) {
//   console.log("Please enter a number");
// } else {
//   console.log(minuteToHours + " Hours");
// }

// ------------------------------------------------
// Bitwise Operator
// OR => ||
// let num1 = 12;
// let num2 = 4;
// let num3 = 3;

// if (num2 * num3 === 10 || num2 * num3 === 11) {
//   console.log("The multiplier is 10 or 11");
// } else if (num2 * num3 === 13 || num2 * num3 === 15) {
//   console.log("The multiplier is 13 or 15");
// } else if (num2 * num3 === 14 || num2 * num3 === 12) {
//   console.log("The multiplier is 14 or 12");
// }

// AND => &&
// let num1 = 4;
// let num2 = 3;

// if (num2 === 3 && num1 * num2 === 12) {
//   console.log(
//     "The first number is equal to 3 and the product of the first and second number is equal to 12"
//   );
// } else if (num2 === 4 && num1 * num2 === 12) {
//   console.log(
//     "The first number is equal to 4 and the product of the first and second number is equal to 12"
//   );
// } else {
//   console.log("None of the conditions are correct");
// }

// NOT => !
// let myBool = true;
// console.log("my Bool = " + myBool);
// console.log("Not my Bool = " + !myBool);

// ------------------------------------------------
// workout
// let userAge = Number(prompt("enter yor Age : "));
// let userGender = String(prompt("enter yor Gender (male , female) : "));

// if (userGender === "female" || userAge < 18) {
//   console.log("Sorry, you are not allowed to use this site");
// } else if (userGender === "male" || userAge >= 18) {
//   console.log("We welcome you to the panel");
// } else {
//   console.log("The input items are not entered correctly");
// }

// userGender === "female" || userAge < 18
//   ? console.log("Sorry, you are not allowed to use this site")
//   : userGender === "male" || userAge >= 18
//   ? console.log("We welcome you to the panel")
//   : console.log("The input items are not entered correctly");

// ------------------------------------------------
// switch
// Switch can be used instead of if
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//     break;
//   case 4:
//     console.log("Exactly!");
//     break;
//   case 5:
//     console.log( 'Too big' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }

// ------------------------------------------------
// workout
// let userRating = Number(prompt("enter yor Rating : "));

// switch (userRating) {
//   case 18:
//   case 19:
//   case 20:
//     console.log("Level A");
//     break;
//   case 15:
//   case 16:
//   case 17:
//     console.log("Level B");
//     break;
//   case 12:
//   case 13:
//   case 14:
//     console.log("Level C");
//     break;
//   default:
//     console.log("Level F");
// }

// ------------------------------------------------
// Function Declaration
// This function will print a greeting
// function sayHi() {
//     console.log("Hello");
// }

// sayHi();

// ------------------------------------------------
// workout
// The following function adds two numbers and returns the result
// function showValue() {
//   let num1 = 2;
//   let num2 = 8;
//   let resultNumber = num1 + num2;
//   console.log(`Result : ${resultNumber}`);
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

// ------------------------------------------------
// Function Expression
// let sayHi = function () {
//     console.log("Hello");
// };

// sayHi();

// ------------------------------------------------
// workout
// let userAge = Number(prompt("enter your Age : "));

// let welcome;

// if (userAge < 18) {
//   welcome = function () {
//     console.log("Hello");
//   };
// } else {
//   welcome = function () {
//     console.log("Praise");
//   };
// }

// welcome();

// ------------------------------------------------
// Arrow functions
// let double = (n) => n * 2;
// console.log(double(3));

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// console.log(sum(1, 2));

// ------------------------------------------------
// workout
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => console.log("You agreed."),
//   () => console.log("You canceled the execution.")
// );

// ------------------------------------------------
// String methods

// Display by index
// let userName = "ArminAbdi";
// console.log(userName[0]);

// More efficient length counting
// let userName = "ArminAbdi";
// console.log(userName.length);

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

// let text = "I love JavaScript";
// console.log(text.includes("Java",8));

//It goes into the text, separates it from the start index to the end index and returns it to us
// let text = "I love JavaScript";
// console.log(text.slice(-10, 17));

// This comes into the text, starting from the index to the length of the letters we want to return
// let text = "I love JavaScript";
// console.log(text.substr(7, 10));

// It comes into the text from the start index to the end index that we want to return
// let text = "I love JavaScript";
// console.log(text.substring(7, 17));

// console.log(eval("2**6")); //It takes a string from us, and if it is inside the code, it executes the code, and if it is a mathematical operation, it performs that operation. It can be said that it extracts the values ​​of the string.
// console.log(eval("console.log(12)"));

// ------------------------------------------------
// workout
// function loginForm(userName, userPassword) {
//   if (userName.length >= 3 && userPassword.length >= 8) {
//     console.log("You are very welcome");
//   } else {
//     console.log("Username or password is not correct");
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

// console.log(Math.ceil(2.1)); //This rends any number that is out of the integer, for example, it rends the number 2.1 to 3.

// console.log(Math.exp(3)); //It will multiply e=2.71 by any number we give it

// console.log(Math.log(9)); //Returns the natural logarithm (base e=2.71) of a number

// console.log(Math.sin(9999999999999999));//Sine returns a number between 1 and -1

// console.log(Math.tan(9999999999999999));//tangent returns a number between 1 and -1

// console.log(Math.cos(9999999999999999));//cosine returns a number between 1 and -1

// console.log(Math.E); //This is Euler's number =2.718281828459045

// console.log(Math.LN10); //LN10===log2.718281828459045(10)

// console.log(Math.acos(1)); //This field returns the Arkcosine of 1

// console.log(Math.asin(1)); //This will return the Arksine of 1

// console.log(Math.atan(1)); //This field returns the Arktangent of 1

// console.log(Math.atan2(2, 6)); //This field returns the Arktangents2 of two points x and y

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

// console.log("All price of your basket: " + allPrices);

// ------------------------------------------------
// workout
// let userNumbser = 0;
// let sumNumberOfNumbers = 0;
// for (let i = 1; i <= 5; i++) {
//   userNumbser += +prompt(`enter ${i} number`);
//   sumNumberOfNumbers++;
// }

// console.log(userNumbser / sumNumberOfNumbers);

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

// console.log("Sum Of length : ", sum);

// ------------------------------------------------
// workout
// let userNumberStart = Number(prompt("Enter your min number : "));
// let userNumberEnd = Number(prompt("Enter your max number : "));

// if (userNumberStart <= userNumberEnd) {
//   while (userNumberStart <= userNumberEnd) {
//     if (userNumberStart % 2 === 0) {
//       console.log(userNumberStart);
//     }
//     userNumberStart++;
//   }
// } else {
//   while (userNumberEnd <= userNumberStart) {
//     if (userNumberStart % 2 === 0) {
//       console.log(userNumberStart);
//     }
//     userNumberStart--;
//   }
// }

// ------------------------------------------------
// workout
// let enterTheNumberYouWant = 80
// let userNumbser = 0;
// let sumNumberOfNumbers = 0;
// let i = 1;

// while (i <= enterTheNumberYouWant) {
//   userNumbser += 10000
//   sumNumberOfNumbers++;
//   i++;
// }
// console.log(sumNumberOfNumbers);
// console.log(userNumbser);

// console.log(userNumbser / sumNumberOfNumbers);

// ------------------------------------------------
// workout
// let enterNumber1 = Number(prompt("Enter 1 number : "));
// let enterNumber2 = Number(prompt("Enter 2 number : "));

// if (enterNumber1 <= 0 || enterNumber2 <= 0) {
//   console.log("numbers not 0 and -1,-2,-3,....");
// }

// while (enterNumber1 > 0 && enterNumber2 > 0) {
//   let sum = enterNumber1 ** enterNumber1;
//   console.log(sum);
//   break;
// }

// ------------------------------------------------
// Array
// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[0]); //This returns the index 0 of that array
// console.log(fruits[1]);

// fruits[1] = "black"; //This will change the index 1 of that array
// console.log(fruits[1]);

// console.log(fruits[fruits.length - 1]); //It returns the last item of the array with the help of length minus 1

// console.log(fruits.at(-1)); //It returns the last item using the at method

// console.log(fruits.pop()); //This removes the last item of the array with the help of the pop method
// console.log(fruits);

// fruits.push("armin"); //This adds an item to the end of the array using the push method
// console.log(fruits);

// console.log(fruits.shift()); //This removes an item from the beginning of the array with the help of the shift method
// console.log(fruits);

// fruits.unshift("javaScript"); //This adds an item to the beginning of the array using the unshift method
// console.log(fruits);

// let arr = new Array("Apple", "Pear", "etc");
// let arr2 = new Array(2); //This type of array has a problem with numbers
// console.log(arr2[0]);
// console.log(arr2.length);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]; //Multiple arrays
// console.log(matrix[1][1]);

// let arrNumber = [1, 2, 3];
// console.log(String(arrNumber) === "1,2,3");

// let arr = ["I", "go", "home"];
// delete arr[1]; //The delete method is for objects and it deletes that item in the array, but the desired place is still occupied.
// console.log(arr[1]);

// let arr = ["I", "study", "JavaScript"];
// arr.splice(0, 2); //The splice method removes or separates your items from the desired index to the number you give it
// console.log(arr);

// let arr = ["I", "study", "JavaScript"];
// arr.splice(0, 2, "armin"); //Here, it removes items from index 0 to 2 and replaces them with armin
// console.log(arr);

// let arr = ["I", "study", "JavaScript"];
// arr.splice(0, 0, "armin"); //Here it adds an item from index 0
// console.log(arr);

// let arr=[1,2,5]
// arr.splice(-1,0,3,4)
// console.log(arr);

// let arr = [1, 2, 5];
// let copyArr = arr.slice(0, 1); //This method copies from the start index to the end index into another variable
// let copyArr2 = arr.slice(-2);
// console.log(copyArr);
// console.log(copyArr2);
// console.log(arr);

// let arr=[1,2]
// console.log(arr.concat(3,4));
// console.log(arr.concat([5,6],[7,8]));

// ["Armin", "Ali", "mohammad"].forEach(console.log); //The arr.forEach method allows us to run a function on all elements of an array.

// ["Armin", "Ali", "mohammad"]
//   .forEach((itme, index, array) => {
//     console.log(`${itme} is index ${index} in array ${array}`);
//   })

// let arr = [1, 2, 3, "Armin", true];
// console.log(arr.indexOf("Armin")); //This will return the index of that item and if the item does not exist, it will return -1
// console.log(arr.includes(3)); //This returns true if the item exists and false if not
// console.log(arr.find((i) => i === 3));

// let arr = [1, 2, 3, "Armin", true];
// let arr2 = [ "Armin", "true","ali","mohammad"];
// console.log(arr.sort((a, b) => (a > b ? 1 : -1)));
// console.log(arr2.sort( (a, b) => a.localeCompare(b) ));//this is sorted by string

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse()); //This will reverse the array

// let test = "armin";
// console.log(test.split("")); //output => [ 'a', 'r', 'm', 'i', 'n' ]
// console.log(test.split("").reverse().join(""));

// let arr = ["armin", "ali", "mohammad", "sara"];
// console.log(arr.splice(",", 2)); //output => [ 'armin', 'ali' ]

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
// console.log(arr.join(" ; "));//output => Bilbo ; Gandalf ; Nazgul

// let a = ["1", "2"];
// a.push(function () {
//   console.log(this);
// });
// a[2]();

// let ages = [12, 15, 19, 17];
// let result = ages.every((age) => {
//   //It checks all the items to see if the desired condition is correct or not
//   return age < 18;
// });
// console.log(result);

// let users = ["amir", "ali", "armin"];
// let isUserIndex = users.findIndex((user) => {
//   //It searches for an item and returns its index
//   return user === "armin";
// });
// console.log(isUserIndex);

// let scores = [2, 9, 6, 4, 8, 10];
// let scorePower = scores.map((score) => {
//   return score ** 2;
// });
// console.log(scorePower);

// let ages = [12, 15, 19, 17];
// let result = ages.filter((age) => {
//   //This will separate those items that are equal to that condition
//   return age < 18;
// });
// console.log(result);

// let usernames = ["Ali", "Amin", "Roz", "Babak"];
// let filterUserName = usernames.filter((userName) => {
//   return userName.length>3;
// });
// console.log(filterUserName);

// let ages = [12, 19, 15, 19, 17,19];
// // console.log(Array.isArray(ages)); //This specifies whether this is an array or not
// console.log(ages.indexOf(19));
// console.log(ages.lastIndexOf(19)); //This table is searched and the last item according to this is found and its index is retrieved
// console.log(ages.lastIndexOf(19,3)); //This table is searched and the last item according to this is found and its index is retrieved

// ------------------------------------------------
// workout
// let enterWord=prompt("enter the word : ")

// let reverseWord=enterWord.split("").reverse().join("")

// if(enterWord===reverseWord){
//     console.log("ok");
// }else{
//     console.log("not ok");

// }

// ------------------------------------------------
// workout
// let i = 0;
// let enterTimeNumber = Number(prompt("how enter time your number "));
// let arrNumbers = [];
// let sum = 0;

// while (i < enterTimeNumber) {
//   let enterNumber = Number(prompt("how enter your number "));
//   arrNumbers.push(enterNumber);
//   i++;
// }

// for (const arrNmber of arrNumbers) {
//   sum += arrNmber;
// }

// console.log(sum / arrNumbers.length);

// ------------------------------------------------
// workout
// var userNumbers = []  // [12, 89, 13, 65, 21, 90]

// var userNumber = 0
// var sum = 0

// while (userNumber != -1) {
// 	userNumber = Number(prompt('Enter the number: \n enter -1 if you dont enter any number'))
// 	if (userNumber != -1) {
// 		userNumbers.push(userNumber)
// 	}
// }

// for (let arrNmber1 of userNumbers) {
//   sum += arrNmber1;
// }

// console.log(userNumbers)
// console.log("Average: ", sum / userNumbers.length)

// ------------------------------------------------
//Object
// let newObject = new Object();
// let Object = {};

// let user = {
//   //In Objects, we can immediately put properties as pairs of "key: value" (key: value) inside {...}
//   name: "Armin",
//   Age: 22,
// };

// console.log(user.name); //Attribute values ​​are accessed using the dot

// user.isAdmin = true; //We can add an item by using the name of the item and a dot and key that we want to add and equal to the value of that key.
// console.log(user);

// delete user.isAdmin; //To delete an attribute, we use the delete operator
// console.log(user);

// let newUser = {
//   name: "Armin",
//   age: 30,
//   "likes birds": true, // Multi-word attribute names must be enclosed in quotation marks
// };

// newUser.likes birds = true //For multi-word attributes, dot access is not possible

// newUser["likes birds"] = false; //There is an alternative method called "brackets" that works with any string
// console.log(newUser);
// delete newUser["likes birds"];
// console.log(newUser);

// let key=prompt("What do you want to know about the user?","name")
// console.log(newUser[key])

// let fruit = prompt("Which fruit are you going to buy?", "apple");

// let bag = {
//   [fruit]: 5,
// };

// console.log( bag[fruit] );
// console.log( bag.apple );

// function makeUser(name, age) {
//   return {
//    // name: name,
//     name,
//    // age: age,
//    age,
//   };
// }
// let user = makeUser(
//   prompt("Please enter your name?", "Armin"),
//   Number(prompt("Please enter your age?", 22))
// );
// console.log(user.name);

// console.log(newUser.name === undefined);//output => false
// console.log("name" in newUser);//name in keys output => true

// for (let key in newUser) {
//   console.log(key,":",newUser[key]);
//   console.log("------------");
// }

// let codes2 = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
//   for (let code in codes2) {
//     console.log(code); // 1, 41, 44, 49
//   }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA",
// };
// for (const key in codes) {
//     console.log(+key);
// }

// let Admin = { name: "mohammad", age: 22, isAdmin: true };
// let newObject = {};
// Object.assign(newObject, newUser, Admin); //This method copies several items inside the first item
// let clone = Object.assign({}, newUser, Admin);
// console.log(newObject);
// console.log(
//   "-----------------------------------------------------------------"
// );
// console.log(clone);

// let user = {
//   name: "Armin",
//   sizes: {
//     width: 50,
//     height: 180,
//   },
// };
// console.log(user.sizes.height);

// let clone = structuredClone(user); //copy
// let clone2 = Object.assign({}, user);
// clone.sizes.height = 178;
// console.log(clone);
// clone2.sizes.height = 40;
// console.log(clone2);
// console.log(user);

// console.log(clone === clone2);

// let Users = [
//   { id: 1, name: "armin", family: "abdi", age: 21, email: "email@gmail.com" },
//   { id: 2, name: "mohammd", family: "abdi", age: 21, email: "email@gmail.com" },
//   { id: 3, name: "ali", family: "abdi", age: 21, email: "email@gmail.com" },
// ];
// let isInUsers = Users.some((user) => {
//   //This is like includes, it returns a Boolean, with the difference that it accepts these arrays and the rest, and its written syntax is like forEach.
//   return user.name === "ali";
// });
// console.log(isInUsers);

// let users = [
//   { id: 1, name: "Ali", age: 21 },
//   { id: 1, name: "Amin", age: 19 },
//   { id: 1, name: "Amir", age: 26 },
//   { id: 1, name: "Babak", age: 28 },
// ];

// users.find((age) => {
//   //It returns according to the condition we gave it, and it returns the condition that is equal to it, or in other words, it finds it.
//   if (age.name === "Amir") {
//     console.log(age);
//   }
// });

// ------------------------------------------------
// workout
// let allUsers = [
//   { id: 1, userName: "ArminAbdi", password: "abdi2017" },
//   { id: 1, userName: "AmirAhmadi", password: "ahmadi2017" },
//   { id: 1, userName: "MohammadMohamdi", password: "mohamdi2017" },
// ];

// let enterUsername = prompt("enter Your username : ", "arminabdi");

// let mainUserData = allUsers.find((username) => {
//   return username.userName === enterUsername;
// });

// if (mainUserData === undefined) {
//   console.log("There is no such username");
// } else {
//   console.log(`your passwrd : ${mainUserData.password}`);
// }
// ------------------------------------------------
// workout
// let Users = [
//   { id: 1, name: "armin", family: "abdi", age: 21, email: "email@gmail.com" },
//   { id: 2, name: "mohammd", family: "abdi", age: 21, email: "email@gmail.com" },
//   { id: 3, name: "ali", family: "abdi", age: 21, email: "email@gmail.com" },
// ];

// let userName = prompt("enter your Name");
// let userFamily = prompt("enter your Family");
// let userAge = Number(prompt("enter your Age"));
// let userEmail = prompt("enter your Email");

// if (userName.length < 3 || userName.length > 10) {
//   console.log(
//     "The name must have at least 3 characters and a maximum of 10 characters"
//   );
// } else if (userFamily.length < 3 || userFamily.length > 15) {
//   console.log(
//     "family must have at least 3 characters and maximum 15 characters"
//   );
// } else if (userAge.length > 3 || isNaN(userAge)) {
//   console.log("Age must be a number and maximum 3 digits");
// } else {
//   let newUser = Object.assign({}, Users[2]);

//   newUser.name = userName;
//   newUser.family = userFamily;
//   newUser.age = userAge;
//   newUser.email = userEmail;
//   newUser.id = newUser.id + 1;

//   Users.push(newUser);

//   console.log(Users);
// }

// ------------------------------------------------
// workout
// let Users = [
//   { id: 1, name: "armin", family: "abdi", age: 21, email: "email@gmail.com" },
//   { id: 2, name: "mohammd", family: "abdi", age: 21, email: "email@gmail.com" },
//   { id: 3, name: "ali", family: "abdi", age: 21, email: "email@gmail.com" },
// ];

// Users.forEach((user) =>
//   console.log(`Name : ${user.name} || Family : ${user.family}`)
// );

// ------------------------------------------------
// workout
// let allProducts = [
//   { id: 1, name: "Laptop", price: 17000000 },
//   { id: 2, name: "Phone", price: 7000000 },
//   { id: 3, name: "Pen", price: 12000 },
//   { id: 4, name: "Pencil", price: 9000 },
//   { id: 5, name: "Eraser", price: 6000 },
//   { id: 6, name: "Milk", price: 35000 },
// ];

// let userBasket = [
//   { id: 1, name: "pen", price: 12000 },
//   { id: 2, name: "pencil", price: 9000 },
// ];

// let userProduct = prompt("Enter The Name Of Product: "); // 'Phone'

// let newProduct;

// let isInShop = allProducts.some(function (product) {
//   if (product.name === userProduct) {
//     newProduct = product;
//     return true;
//   }
// });

// if (isInShop === true) {
//   userBasket.push(newProduct);

//   let sum = 0;

//   userBasket.forEach(function (product) {
//     sum += product.price;
//   });
//   console.log(userBasket);
//   console.log("Total Price: " + sum);
// } else {
//   console.log("not available");
// }

// ------------------------------------------------
// workout
// let allProducts = [
//   { id: 1, name: "Laptop", price: 17000000 },
//   { id: 2, name: "Phone", price: 7000000 },
//   { id: 3, name: "Pen", price: 12000 },
//   { id: 4, name: "Pencil", price: 9000 },
//   { id: 5, name: "Eraser", price: 6000 },
//   { id: 6, name: "Milk", price: 35000 },
// ];

// let userBasket = [
//   { id: 1, name: "pen", price: 12000 },
//   { id: 2, name: "pencil", price: 9000 },
// ];

// let userRequest = Number(
//   prompt("1. Add Products \n2. Remove Products", "1 OR 2")
// );

// let userProductName = prompt("enter your Name : ");
// switch (userRequest) {
//   case 1:
//     // console.log("Add");
//     let userRequestShop;
//     let isInShop = allProducts.some((user) => {
//       if (user.name === userProductName) {
//         userRequestShop = user;
//         return true;
//       }
//     });

//     if (isInShop === true) {
//       userBasket.push(userRequestShop);
//       console.log(userBasket);
//     } else {
//       console.log("This product is not available in our store");
//     }
//     break;
//   case 2:
//     let findIndexUserRequest = userBasket.findIndex((userName) => {
//       return userName.name === userProductName;
//     });
//     if (findIndexUserRequest === -1) {
//       console.log("not item in shop");
//     } else {
//       userBasket.splice(findIndexUserRequest, 1);
//       console.log("Removed");
//       console.log(userBasket);
//     }
//     break;
//   default:
//     console.log("Please enter the correct option");
//     break;
// }

// ------------------------------------------------
// workout
// let userBasket = [
//   { id: 1, name: "pen", price: 12000 },
//   { id: 2, name: "pencil", price: 9000 },
//   { id: 3, name: "Eraser", price: 6000 },
//   { id: 4, name: "Milk", price: 35000 },
//   { id: 4, name: "Car", price: 100000 },
// ];

// let userProductUp100 = [];
// let userProductDn100 = [];

// let sumPriceProductDn100 = 0;
// let sumPriceProductUp100 = 0;

// userBasket.filter((priceProduct) => {
//   if (priceProduct.price > 100000) {
//     return userProductUp100.push(priceProduct);
//   } else {
//     return userProductDn100.push(priceProduct);
//   }
// });

// userProductDn100.forEach((price) => {
//   sumPriceProductDn100 += price.price;
// });

// userProductUp100.forEach((price) => {
//   sumPriceProductUp100 += price.price;
// });

// sumPriceDn100 = sumPriceProductDn100 + userProductDn100.length * 1000;

// sumPriceAllProducts = sumPriceDn100 + sumPriceProductUp100;

// console.log(userBasket);

// console.log("Shippingcost : " + userProductDn100.length * 1000);

// console.log("total basket : " + sumPriceAllProducts);

// ------------------------------------------------
// workout
// let userBasket = [
// 	{id: 1, name: 'laptop', price: 5000000},
// 	{id: 2, name: 'phone', price: 3000000},
// 	{id: 3, name: 'milk', price: 35000},
// 	{id: 4, name: 'water', price: 6000},
// 	{id: 5, name: 'coolpad', price: 400000},
// 	{id: 6, name: 'pencil', price: 9000},
// ]

// let filteredProducts = userBasket.filter(function (product) {
// 	return product.price < 100000
// })

// let postCost = filteredProducts.length * 1000

// let sum = 0

// userBasket.forEach(function(product) {
// 	sum = sum + product.price
// })

// let totalPrice = sum + postCost

// console.log("Total Price: ", totalPrice)

// ------------------------------------------------
// workout
// let groupUsers = [
//   { id: 1, name: "Ali", age: 19 },
//   { id: 2, name: "Amin", age: 22 },
//   { id: 3, name: "Amir", age: 21 },
//   { id: 4, name: "Akbar", age: 29 },
// ];

// let isAll = groupUsers.every(function (user) {
//   return user.age > 18;
// });

// if (isAll === true) {
//   console.log("You can start your conference call");
// } else {
//   console.log("You are not allowed to make a conference call");
// }

// ------------------------------------------------
// workout
// let todoList = [
//   { id: 1, name: "Math", Description: "From 1 to 2:30", status: false },
//   {
//     id: 2,
//     name: "Belles Lettres",
//     Description: "From 3 to 4:30",
//     status: false,
//   },
//   { id: 3, name: "ُSport", Description: "From 6 to 9:30", status: false },
// ];

// let todoUser = Number(
//   prompt(
//     "1. Add todo \n2. Todo removal\n3. To do (change status)",
//     "1 or 2 or 3"
//   )
// );

// let newTodo = Object.assign({}, todoList[3]);

// if (todoUser === 1) {
//   newTodo.id = todoList.length + 1;
//   newTodo.name = prompt("enter name ToDo : ");
//   newTodo.Description = prompt("enter your Description : ");
//   newTodo.status = false;

//   todoList.push(newTodo);
//   console.log(todoList);
// } else if (todoUser === 2) {
//   let removeTodo = prompt(
//     "enter name todo for remover in liset ToDo : ",
//     "Math"
//   );
//   let filterName = todoList.filter((todo) => {
//     if (todo.name === removeTodo) {
//       return todoList.lastIndexOf(todo);
//     }
//   });

//   todoList.splice(filterName, 1);

//   console.log(todoList);
// } else if (todoUser === 3) {
//   let changeStatus = prompt(
//     "enter name todo for remover in liset ToDo : ",
//     "Math"
//   );
//   todoList.forEach((todo) => {
//     if (todo.name === changeStatus) {
//       todo.status = true;
//     }
//   });

//   console.log(todoList);
// }

// ------------------------------------------------
// workout
// let taskList = [
//   { id: 1, name: "armin", task: ["ui/ux"] },
//   { id: 2, name: "amir", task: ["frunEnd"] },
//   { id: 3, name: "ُmohammad", task: ["Backend"] },
// ];

// let nameKarmand=prompt("Enter the employee's name : ")
// let newTaskKarmand;

// let findName=taskList.filter((Karmand)=>{
//     if (Karmand.name===nameKarmand) {
//         newTaskKarmand=prompt("Enter the employee's task : ")
//         Karmand.task.push(newTaskKarmand)
//         console.log(taskList);
//     }else{
//         console.log("You do not have such an employee");

//     }
// })

// ------------------------------------------------
// workout
// let citiesToTravel = {
//   Tehran: [
//     " Nasirshahr ",
//     " Andisheh ",
//     " Shamshak ",
//     " Pakdasht ",
//     " Baghershahr ",
//   ],
//   Kermanshah: [
//     " Javanrud ",
//     " Ravansar ",
//     " Paveh ",
//     " Kangavar ",
//     " Sarpel Zehab ",
//   ],
//   Kardastan: [
//     " Kamyaran ",
//     " Kani Sur ",
//     " Kani Dinar ",
//     " Saqez ",
//     " Dehglan ",
//   ],
// };

// let enterProvince = prompt("Enter your desired province : ", "Kermanshah");

// let desiredProvince = citiesToTravel[enterProvince];

// desiredProvince.forEach((Citie) => {
//   console.log(Citie);
// });

// ------------------------------------------------
// workout
// let allQuestions = [
//   { id: 1, title: "2 + 2", answer: "4" },
//   { id: 2, title: "2 * 4", answer: "8" },
//   { id: 3, title: "7 ** 2", answer: "49" },
//   { id: 4, title: "12 / 4", answer: "3" },
//   { id: 5, title: "100 / 25", answer: "4" },
//   { id: 6, title: "100 * 2", answer: "200" },
//   { id: 7, title: "Cpaital Of Iran", answer: "tehran" },
// ];

// let score = 0;

// let mainAnswer = "";
// allQuestions.forEach((question) => {
//   mainAnswer = prompt(question.title + " ? ");
//   if (question.answer === mainAnswer) {
//     score++;
//   }
// });

// console.log("Your Final Score : " + score);

// ------------------------------------------------
// workout
// var num1 = +prompt('Enter The First Number: ')
// var num2 = +prompt('Enter The Second Number: ')

// var userOperator = prompt('Enter The Operator: \n 1. + \n 2. - \n 3. * \n 4. / \n 5. **')

// if (userOperator === '1') {
//     sum(num1, num2)
// } else if (userOperator === '2') {
//     tafrig(num1, num2)
// }
// else if (userOperator === '3') {
//     zarb(num1, num2)
// }
// else if (userOperator === '4') {
//     devide(num1, num2)
// }
// else if (userOperator === '5') {
//     power(num1, num2)
// } else {
//     console.log('عملیات وارد شده معتبر نمی باشد')
// }

// function sum(num1, num2) {
//     // return num1 + num2\
//     console.log(num1 + num2)
// }
// function tafrig(num1, num2) {
//     // return num1 - num2\
//     console.log(num1 - num2)
// }
// function devide(num1, num2) {
//     // return num1 / num2\
//     console.log(num1 / num2)
// }
// function zarb(num1, num2) {
//     // return num1 * num2\
//     console.log(num1 * num2)
// }
// function power(num1, num2) {
//     // return num1 ** num2\
//     console.log(num1 ** num2)
// }

// ------------------------------------------------
// IIFE function ==> Immediately Invoked Function Expression
// (function () {
//   console.log("hello");
// })()

// ((function () {
//     console.log("hello");
//   })());

// ------------------------------------------------
// let number = 0;
// setInterval(() => {
//   console.log(number);
//   number++;
// }, 1000); //1000ms=1s

// let number = 20;
// let timer = setInterval(() => {
//   console.log(number);
//   if (number === 0) {
//     clearInterval(timer);
//     console.log("time Out");
//   }
//   number--;
// }, 1000); //1000ms=1s

// ------------------------------------------------
// workout
// let enterTheMinutes = Number(prompt("enter the minutes : "));
// let enterTheseconds = Number(prompt("enter the seconds : "));

// let convertMinutesToSeconds = enterTheMinutes * 60;

// let SumOfSecondsAndMinutesConvertedToSeconds =
//   convertMinutesToSeconds + enterTheseconds;

// let timer = setInterval(() => {
//   console.log(SumOfSecondsAndMinutesConvertedToSeconds);
//   if (SumOfSecondsAndMinutesConvertedToSeconds === 0) {
//     clearInterval(timer);
//     console.log("time Out");
//   }
//   SumOfSecondsAndMinutesConvertedToSeconds--;
// }, 1000);
// ------------------------------------------------
// workout
// let enterTheMinutes = Number(prompt("enter the minutes : "));
// let enterTheseconds = Number(prompt("enter the seconds : "));

// let timer = setInterval(() => {
//   console.log("timer : " + enterTheMinutes + " of " + enterTheseconds);
//   if (enterTheMinutes === 0 && enterTheseconds === 0) {
//     clearInterval(timer);
//     console.log("time Out");
//   }
//   if (enterTheseconds === 0) {
//     enterTheMinutes--;
//     enterTheseconds += 60;
//   }
//   enterTheseconds--;
// }, 1000);

// ------------------------------------------------
// falsy value or turthy value
// let isFalsyOrTurthy1 = Boolean("armin");
// console.log(isFalsyOrTurthy1); //true

// let isFalsyOrTurthy2 = Boolean("");
// console.log(isFalsyOrTurthy2); //false

// let isFalsyOrTurthy3 = Boolean(12);
// console.log(isFalsyOrTurthy3); //true

// let isFalsyOrTurthy4 = Boolean(-12);
// console.log(isFalsyOrTurthy4); //true

// let isFalsyOrTurthy5 = Boolean(0);
// console.log(isFalsyOrTurthy5); //false

// let isFalsyOrTurthy6 = Boolean(" ");
// console.log(isFalsyOrTurthy6); //true

// let isFalsyOrTurthy7 = Boolean(undefined);
// console.log(isFalsyOrTurthy7); //false

// let isFalsyOrTurthy8 = Boolean(NaN);
// console.log(isFalsyOrTurthy8); //false

// let isFalsyOrTurthy9 = Boolean([]);
// console.log(isFalsyOrTurthy9); //true

// let isFalsyOrTurthy9 = Boolean({});
// console.log(isFalsyOrTurthy9); //true

// ------------------------------------------------
// setTimeout(() => {
//   console.log("Hello (:");
// }, 2000);

// setTimeout((num1,num2) => {
//   console.log(num1+num2);
// }, 2000,12,13);

// ------------------------------------------------
// workout
// let isHasProfile = true;

// setTimeout(() => {
//   if (!isHasProfile) {
//     console.log("Please enter profile picture ");
//   } else {
//     console.log("Thank you very much");
//   }
// }, 5000);

// ------------------------------------------------
//Flag
// let userName = prompt("Enter the Username: ");

// let users = ["ali", "armin", "amir", "babak"];

// let loginFlag = false;

// for (let i = 0; i < users.length; i++) {
//   if (users[i] === userName) {
//     loginFlag = true;
//   }
// }

// if (loginFlag) {
//   console.log("you are login");
// } else {
//   console.log("you are not login plese signin");
// }

// ------------------------------------------------
//Hoisting - Hoist=>Uper
// num = 12;

// console.log(num);

// var num;

// // ------------------
// num = 12;

// console.log(num);

// let num; //ReferenceError:

// let num1;//SyntaxError:
// let num1;//SyntaxError:

// let num1, num2, num3;
// num1 = 2;
// num2 = 3;
// num3 = 4;
// console.log(num1 + num2 + num3);

// showValue()
// function showValue() {
//     console.log(12+12)
// }

// showValue(); //ReferenceError:
// let showValue = function () {
//   console.log(12 + 12);
// };
