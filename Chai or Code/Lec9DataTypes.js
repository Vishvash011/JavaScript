// Primitive  Data Types
// 7 types : Strings, Number, Bollean, Null, Undefined, Symbol, and BigInt

const score = 100;
console.log(typeof score);
const scoreValue = 100.3;
console.log(typeof scoreValue);

const isLoggedIn = false;
console.log(typeof isLoggedIn);
const outsideTemp = null;
console.log(typeof outsideTemp);
let userEmail = undefined;
console.log(typeof userEmail);

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false because they are different symbols
const bigNumber = 16545132146n;
console.log(typeof bigNumber);


// Reference type (non primitive)
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(heros);
console.log(typeof heros);
let myObj = {
    name:"vishvash ame",
    age: 22,
};
console.log(myObj);
console.log(typeof myObj);

let muFunction = function() {
    console.log("hello vishvash");
};
console.log(muFunction);
console.log(typeof muFunction);