//InnerHTML cannot be used in forms, that's why we use value

let input = document.getElementById("input");
input.value="NodeJs"
console.log(input.value);

let selectBox = document.getElementById("select");
console.log(selectBox[1].value); 

selectBox.value="usa"
