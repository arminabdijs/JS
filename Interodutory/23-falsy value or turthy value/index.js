// falsy value or turthy value
let isFalsyOrTurthy1 = Boolean("armin");
console.log(isFalsyOrTurthy1); //true

let isFalsyOrTurthy2 = Boolean("");
console.log(isFalsyOrTurthy2); //false

let isFalsyOrTurthy3 = Boolean(12);
console.log(isFalsyOrTurthy3); //true

let isFalsyOrTurthy4 = Boolean(-12);
console.log(isFalsyOrTurthy4); //true

let isFalsyOrTurthy5 = Boolean(0);
console.log(isFalsyOrTurthy5); //false

let isFalsyOrTurthy6 = Boolean(" ");
console.log(isFalsyOrTurthy6); //true

let isFalsyOrTurthy7 = Boolean(undefined);
console.log(isFalsyOrTurthy7); //false

let isFalsyOrTurthy8 = Boolean(NaN);
console.log(isFalsyOrTurthy8); //false

let isFalsyOrTurthy9 = Boolean([]);
console.log(isFalsyOrTurthy9); //true

let isFalsyOrTurthy10 = Boolean({});
console.log(isFalsyOrTurthy9); //true
