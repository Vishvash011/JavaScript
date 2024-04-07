const score = 400;
console.log(score); // 400
const balance = new Number(100);
console.log(balance); // [number : 100]
console.log(typeof balance); // object

console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966; 
console.log(otherNumber.toPrecision(5)); // 123.90

const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,00,000


// +++++++++++++++++++++++ Maths ++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-17));
console.log(Math.ceil(12.3));
console.log(Math.floor(12.3));
console.log(Math.round(12.3));

const randomNum = Math.random();
console.log(randomNum);
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

console.log(Math.pow(4,2));
console.log(Math.sqrt(25));