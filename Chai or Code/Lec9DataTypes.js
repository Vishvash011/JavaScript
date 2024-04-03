// Primitive  Data Types
// 7 types : Strings, Number, Bollean, Null, Undefined, Symbol, and BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false because they are different symbols
const bigNumber = 16545132146n;


// Reference type (non primitive)
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"vishvash ame",
    age: 22,
};

let muFunction = function() {
    console.log("hello vishvash");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp );