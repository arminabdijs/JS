//The setAttribute method sets a class or id value for our tag
let h1Elem =document.getElementById("title"); 
h1Elem.setAttribute("class", "text");
console.log(h1Elem.getAttribute("class"));

let liElems=document.getElementsByClassName("list-item")
liElems[1].setAttribute("id","itme")
console.log(liElems[1]);