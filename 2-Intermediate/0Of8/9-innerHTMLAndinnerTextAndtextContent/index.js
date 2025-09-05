//The innerHTML property returns the content inside that tag and can even change it
let h1Elem = document.getElementById("title").innerHTML;
console.log(h1Elem);

let liItem = document.querySelectorAll(".list-item"); //Because querySelectorAll returns an array, we must first enter the index of the desired tag and then use the innerHTML feature.
console.log(liItem[1].innerHTML);
console.log(liItem[1].innerText);//With the innerText feature, we can access the feature inside a tag
console.log(liItem[1].textContent);//With the textContent feature, we can access the feature inside a tag

liItem[0].innerHTML = "درباره ما";
