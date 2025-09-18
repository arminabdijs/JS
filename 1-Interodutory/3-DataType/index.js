// typeof → An operator in JavaScript that returns the data type of a value or variable.

console.log(typeof 13); //type number
console.log(typeof "Armin"); //type string
console.log(typeof true); //type boolean
console.log(typeof 13n); //type bigint

// ------------------------------------------------
// type NaN → Not a Number
console.log(Number("Armin Abdi"));

console.log(typeof NaN); //typeof NaN →   Number

const name = "Armin";
console.log(isNaN(name)); //output true

// ------------------------------------------------
// Data type conversion
let boolean = true;
let string = String(boolean);
console.log(typeof string);
     