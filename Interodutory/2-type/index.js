// Several types of methods for variable definition
var a = 13;
let b = 13;
const c = 13;

// ------------------------------------------------
// typeof will return the type of my variable
let d = 13;
let e = "13";
let f = true;
let g = 13n;

console.log(typeof d); //type number
console.log(typeof e); //type string
console.log(typeof f); //type boolean
console.log(typeof g); //type bigint

// ------------------------------------------------
// type NaN => Not a Number
console.log(Number("Armin Abdi"));

console.log(typeof NaN); //typeof NaN => Number

const name = "Armin";
console.log(isNaN(name)); //output true

// ------------------------------------------------
// Data type conversion
let boolean = true;
let string = String(boolean);
console.log(typeof string);
