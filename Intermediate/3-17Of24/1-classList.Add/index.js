let h1Elem = document.getElementById("title");

h1Elem.addEventListener("click", () => {
  //   h1Elem.setAttribute("class", "red");
  // It sets a class like the setAttribute method, but it can also set and delete
  // This sets a class with the add method
  h1Elem.classList.add("red");
});

