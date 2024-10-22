let userNameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let btn = document.querySelector("btn");
let modal = document.querySelector(".modal");
// console.log(modal.innerHTML);

function dataValidation() {
  let usernameValue = userNameInput.value;
  let passwordValue = passwordInput.value;

  if (usernameValue.length < 12 || passwordValue.length < 8) {
    let cahengeModal = (modal.innerHTML =
      "لطفا اطلاعات لازم را به درستی وارد کنید ");
    modal.style.background = "red";
    modal.style.display = "inline";
    modal.appendChild(cahengeModal).replaceWith();
  } else {
    let cahengeModal = (modal.innerHTML = "خوش آمدید");
    modal.style.background = "green";
    modal.style.display = "inline";
    modal.appendChild(cahengeModal);
  }
  setTimeout(() => {
    modal.style.display = "none";
  }, 1500);
}
