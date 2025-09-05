//This method creates a new element that can be any tag in html
let enterName = prompt("enter your name : ");
let newH1Elem = document.createElement("h1");

newH1Elem.innerHTML = enterName;

newH1Elem.setAttribute("class", "newName");
newH1Elem.setAttribute("id", "title");

console.log(newH1Elem);