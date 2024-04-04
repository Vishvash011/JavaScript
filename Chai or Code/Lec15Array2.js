const mv_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

// mv_heroes.push(dc_heroes);
// console.log(mv_heroes);
// console.log(mv_heroes[3][1]);

// const all_heroes = mv_heroes.concat(dc_heroes);
// console.log(all_heroes);

const all_heroes = [...dc_heroes,...mv_heroes,"vishvash"];
console.log(all_heroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(anotherArray);

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("vishvash"));
console.log(Array.from("vishvash"));
console.log(Array.from({name:"vishvash"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


