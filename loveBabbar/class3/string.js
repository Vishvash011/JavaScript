// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(1.8));
// console.log(Math.round(1.1));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.abs(-2 ));


console.log("hello vishvash");

let lastName = "Ame";
console.log(typeof lastName);
console.log(lastName.length);
console.log(lastName[0]);
console.log(lastName.includes( 'A'));
console.log(lastName.startsWith("Am"));
console.log(lastName.startsWith("e"));
console.log(lastName.endsWith("e"));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());

let firstName = new String("  Vishvash  ");
console.log(typeof firstName);
console.log(firstName.trim());
console.log(firstName.trimEnd());
console.log(firstName.trimStart());
console.log(firstName.replace("Vish","bish"));

let message = "This is my first message";
let words = message.split(' ');
console.log(words);
console.log(message.replace("first","second"));