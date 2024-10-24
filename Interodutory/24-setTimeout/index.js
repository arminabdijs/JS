setTimeout
setTimeout(() => {
  console.log("Hello (:");
}, 2000);

setTimeout((num1,num2) => {
  console.log(num1+num2);
}, 2000,12,13);
