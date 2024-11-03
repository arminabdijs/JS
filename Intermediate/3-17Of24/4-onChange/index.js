// The onChange method occurs for some tags (input - select)
// In fact, this means that something has changed

let countriesSelectBox = document.getElementById("countries");

countriesSelectBox.addEventListener("change",changeHandler)

function changeHandler() {
  console.log(countriesSelectBox.value);
}
