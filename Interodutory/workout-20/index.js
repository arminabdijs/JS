// workout
let Users = [
  { id: 1, name: "armin", family: "abdi", age: 21, email: "email@gmail.com" },
  { id: 2, name: "mohammd", family: "abdi", age: 21, email: "email@gmail.com" },
  { id: 3, name: "ali", family: "abdi", age: 21, email: "email@gmail.com" },
];

let userName = prompt("enter your Name");
let userFamily = prompt("enter your Family");
let userAge = Number(prompt("enter your Age"));
let userEmail = prompt("enter your Email");

if (userName.length < 3 || userName.length > 10) {
  console.log(
    "The name must have at least 3 characters and a maximum of 10 characters"
  );
} else if (userFamily.length < 3 || userFamily.length > 15) {
  console.log(
    "family must have at least 3 characters and maximum 15 characters"
  );
} else if (userAge.length > 3 || isNaN(userAge)) {
  console.log("Age must be a number and maximum 3 digits");
} else {
  let newUser = Object.assign({}, Users[2]);

  newUser.name = userName;
  newUser.family = userFamily;
  newUser.age = userAge;
  newUser.email = userEmail;
  newUser.id = newUser.id + 1;

  Users.push(newUser);

  console.log(Users);
}

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
