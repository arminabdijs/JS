// BOM , DOM
//The HTML DOM (Document Object Model)

// let h1Elem =document.getElementById("title"); //The getElementById method found the desired ID
// console.log(h1Elem);

// let liElems=document.getElementsByClassName("list-item")//The getElementsByClassName method finds the ID or IDs defined by the class
// console.log(liElems[1]);

// let listItems=document.getElementsByTagName("li")//The getElementsByTagName method of this field finds the desired tag
// console.log(listItems[1]);

// let firstListItem=document.querySelector(".list-item") //The querySelector method comes in css form, finds the class, id and tag name and returns to the first class or id or tag that it reaches and does not continue.
// console.log(firstListItem);
// let firstListItem=document.querySelector("#title")
// console.log(firstListItem);

// let ulItem=document.querySelectorAll(".list-item")//The querySelectorAll method comes in css form, receives the class name, id and tag name and finds and returns all classes or id with tags.
// console.log(ulItem[1]);
// let ulItem=document.querySelectorAll("li")
// console.log(ulItem[1]);

// let h1Elem = document.getElementById("title");
// console.log(h1Elem.getAttribute("align"));//The getAttribute method accesses the attribute of that class or access ID and returns it

// h1Elem.setAttribute("class", "text");//The setAttribute method sets a class or id value for our tag
// console.log(h1Elem.getAttribute("class"));

// let liElems=document.getElementsByClassName("list-item")
// liElems[1].setAttribute("id","itme")
// console.log(liElems[1]);

//The style method can be used to set all css styles in JavaScript for tags, but there is a point here, if the name of a style has a dash in the middle, you should delete that dash and capitalize the next word.
//font-size==>fontSize
// let h1Elem=document.getElementById("title")
// h1Elem.style.color="red"
// h1Elem.style.fontSize="80px"

// ------------------------------------------------
// workout
// let liElems=document.getElementsByClassName("list-item")
// liElems[3].style.color="blue"
// liElems[3].style.fontWeight="bold"
// console.log(liElems[1]);

// ------------------------------------------------
// let h1Elem = document.getElementById("title").innerHTML; //The innerHTML property returns the content inside that tag and can even change it
// console.log(h1Elem);

// let liItem = document.querySelectorAll(".list-item"); //Because querySelectorAll returns an array, we must first enter the index of the desired tag and then use the innerHTML feature.
// console.log(liItem[1].innerHTML);
// console.log(liItem[1].innerText);//With the innerText feature, we can access the feature inside a tag
// console.log(liItem[1].textContent);//With the textContent feature, we can access the feature inside a tag

// liItem[0].innerHTML = "درباره ما";

// let input = document.getElementById("input");
// input.value="NodeJs"
// console.log(input.value);

// let selectBox = document.getElementById("select");
// console.log(selectBox[1].value); //InnerHTML cannot be used in forms, that's why we use value

// selectBox.value="usa"

// let enterName = prompt("enter your name : ");
// let newH1Elem = document.createElement("h1");//This method creates a new element that can be any tag in html
// newH1Elem.innerHTML = enterName;
// newH1Elem.setAttribute("class", "newName");
// newH1Elem.setAttribute("id", "title");
// console.log(newH1Elem);

// let ulElem = document.querySelector("ul");
// let newLiItem = document.createElement("li");
// let otherLiItem = document.createElement("li");
// newLiItem.innerHTML = "products";
// otherLiItem.innerHTML = "Users";
// newLiItem.setAttribute("class", "title");
// ulElem.append(newLiItem);//This method will add an element we just created to the html page
// ulElem.append(otherLiItem);
// console.log(newLiItem);
// console.log(ulElem);

// let ulElem = document.querySelector("ul");
// let newLiItem = document.createElement("li");
// let otherLiItem = document.createElement("li");
// newLiItem.innerHTML = "products";
// otherLiItem.innerHTML = "Users";
// newLiItem.setAttribute("class", "title");
// ulElem.appendChild(newLiItem);//This method will add an element we just created to the html page
// ulElem.appendChild(otherLiItem);
// console.log(newLiItem);
// console.log(ulElem);

// This method uses a button to perform an operation on the page, which can be anything, and on the html page, this function is called by the onclick attribute, which is called Events for short.
// let h1Elem=document.getElementById("title")
// function changeH1Color() {
//     h1Elem.style.color="rgb(0,255,255)"
// }
// function backChangeH1Color() {
//     h1Elem.style.color="rgb(236, 5, 132)"
// }
