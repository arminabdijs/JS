//Object
// let newObject = new Object();
// let Object = {};

let user = {
  //In Objects, we can immediately put properties as pairs of "key: value" (key: value) inside {...}
  name: "Armin",
  Age: 22,
};

console.log(user.name); //Attribute values ​​are accessed using the dot

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