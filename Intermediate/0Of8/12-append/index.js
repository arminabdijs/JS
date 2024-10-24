//This method will add an element we just created to the html page
let ulElem = document.querySelector("ul");
let newLiItem = document.createElement("li");
let otherLiItem = document.createElement("li");

newLiItem.innerHTML = "products";
otherLiItem.innerHTML = "Users";

newLiItem.setAttribute("class", "title");

ulElem.append(newLiItem);
ulElem.append(otherLiItem);

console.log(newLiItem);
console.log(ulElem);