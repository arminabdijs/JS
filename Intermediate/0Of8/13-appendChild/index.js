//This method will add an element we just created to the html page
let ulElem = document.querySelector("ul");
let newLiItem = document.createElement("li");
let otherLiItem = document.createElement("li");

newLiItem.innerHTML = "products";
otherLiItem.innerHTML = "Users";

newLiItem.setAttribute("class", "title");

ulElem.appendChild(newLiItem);
ulElem.appendChild(otherLiItem);

console.log(newLiItem);
console.log(ulElem);