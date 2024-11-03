let h1Elem = document.querySelector(".title");

// The correct way to set a function for a tag is to use the addEventListener method
// Here we can use two methods to set the function, one is using the arrow function and the other is the Function Declaration method.

//In the Arrowfanash method, we use the following method
// h1Elem.addEventListener("click", () => {
//   console.log("clicked");
// });

//But in the Function Declaration method, we use the following method, with this difference, in this method, we do not put two parentheses in calling the function, because if we do, the function will be executed as soon as the web page is opened.
h1Elem.addEventListener("click", clickEvent);

function clickEvent() {
  console.log("clicked");
}
