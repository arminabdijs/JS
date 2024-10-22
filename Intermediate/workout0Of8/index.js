let findIdBulb = document.getElementById("bulbo");
let findIdButton = document.getElementById("btn");
let isBulodFlag = false;

function trunOnOrOff() {
  if (isBulodFlag) {
    findIdBulb.setAttribute("src", "./image/bulboff.gif");
    findIdButton.innerHTML = "trun on";
    isBulodFlag = false;
  } else {
    findIdBulb.setAttribute("src", "./image/bulbon.gif");
    findIdButton.innerHTML = "trun off";
    isBulodFlag = true;
  }
  console.log(isBulodFlag);
}
