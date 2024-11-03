let h1Elem = document.querySelector("div");

// let colorArray = ["red", "yellow", "blue", "green", "pink", "gray"];

// let randomColorIndex;
// setInterval(() => {
//   randomColorIndex = Math.floor(Math.random() * 6);
//   h1Elem.style.background = colorArray[randomColorIndex];
// }, 5000);

// let randomColorIndex;
// setInterval(() => {
//   randomColorIndex = Math.floor(Math.random() * 16777216).toString()
//   randomColorIndex="#"+("000000"+randomColorIndex).slice(-6)
//   h1Elem.style.background = randomColorIndex;
// }, 5000);

let redValue, greenValue, blueValue;

setInterval(() => {
  redValue = Math.floor(Math.random() * 255);
  greenValue = Math.floor(Math.random() * 255);
  blueValue = Math.floor(Math.random() * 255);
  h1Elem.style.background = `rgb(${redValue},${greenValue},${blueValue})`;
}, 2000);
