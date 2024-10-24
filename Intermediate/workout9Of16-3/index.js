let $ = document;

let usernameMessage = $.querySelector(".username-validation");
let passwordMessage = $.querySelector(".password-validation");

let usernameInput = $.querySelector(".username");
let passwordInput = $.querySelector(".password");

function usernameBlur() {
  if (usernameInput.value.length < 12) {
    usernameMessage.style.color = "red";
    usernameMessage.innerHTML = "Must Contain 12 Character (Min)";
    usernameMessage.style.display = "block";
  } else {
    usernameMessage.style.color = "green";
    usernameMessage.innerHTML = "Correct Username Value";
  }
}

function passwordBlur() {
  if (passwordInput.value.length < 8) {
    passwordMessage.style.color = "red";
    passwordMessage.innerHTML = "Must Contain 8 Character (Min)";
    passwordMessage.style.display = "block";
  } else {
    passwordMessage.style.color = "green";
    passwordMessage.innerHTML = "Correct Username Value";
  }
}
