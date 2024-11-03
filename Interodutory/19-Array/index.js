// Array
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]); //This returns the index 0 of that array
console.log(fruits[1]);

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
