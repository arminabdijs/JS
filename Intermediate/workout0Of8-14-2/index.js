let userNameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let modal = document.querySelector(".modal");

function dataValidation() {
  let usernameValue = userNameInput.value;
  let passwordValue = passwordInput.value;
  
  setTimeout(() => {
    modal.style.display = "none";
  }, 2000);

  if (usernameValue.length < 12 || passwordValue.length < 8) {
    let cahengeModal = (modal.innerHTML =
      "لطفا اطلاعات لازم را به درستی وارد کنید ");
    modal.style.background = "red";
    modal.style.display = "inline";
    modal.appendChild(cahengeModal);
  } else {
    let cahengeModal = (modal.innerHTML = "خوش آمدید");
    modal.style.background = "green";
    modal.style.display = "inline";
    modal.appendChild(cahengeModal);
  }
}
