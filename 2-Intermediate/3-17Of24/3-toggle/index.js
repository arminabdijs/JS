let h1Elem = document.getElementById("title");

h1Elem.addEventListener("click", () => {
  //The toggle method checks a condition, if it has the desired class tag, it removes it, and if it doesn't, it adds it.
  h1Elem.classList.toggle("red");
});

