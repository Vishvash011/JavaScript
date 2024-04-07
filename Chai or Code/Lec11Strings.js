const name = "vishvash ";
const repoCount = 8;
console.log(name + repoCount + " value");
console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);

const playerName = new String("Rohit Sharma");
console.log(playerName.length); // length of the string 12
console.log(playerName[0]);
console.log(playerName.charAt(1)); // get character at index 1
// console.log(playerName.__proto__);
console.log(playerName.concat(' is a good batsman'));
console.log(playerName);
console.log(playerName.toLowerCase());
console.log(playerName.toUpperCase());
console.log(playerName.toLocaleLowerCase());
console.log(playerName.toLocaleUpperCase());
console.log(playerName.indexOf('a',2)); // 8

const newString = playerName.slice(3);
console.log(newString);

const anotherString = playerName.slice(-10,-5);
console.log(anotherString);


const oneString = "vishvash ame";
console.log(oneString.trim());
console.log(oneString.trimStart());
console.log(oneString.trimEnd());

console.log(oneString.replace("vishvash","pratham").trim());

console.log(oneString.includes( 's' ));
console.log(oneString.startsWith('i'));
console.log(oneString.endsWith('h'));

console.log(oneString.split('-'));