// String methods

// Display by index
let userName = "ArminAbdi";
console.log(userName[0]);

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
// console.log(text.length)

// This comes into the text, starting from the index to the length of the letters we want to return
// let text = "I love JavaScript";
// console.log(text.substr(7, 10));

// It comes into the text from the start index to the end index that we want to return
// let text = "I love JavaScript";
// console.log(text.substring(7, 17));

// console.log(eval("2**6")); //It takes a string from us, and if it is inside the code, it executes the code, and if it is a mathematical operation, it performs that operation. It can be said that it extracts the values ​​of the string.
// eval("console.log(12)");
