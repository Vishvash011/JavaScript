// arrays

const myArr = [0,1,2,3,4,5];
const myHeros = ["ironMan","thor","captainAmerica"];

const myArr2 = new Array(1,3,5,7,9,11);
// console.log(myArr[3]);
// console.log(myArr2[3]);
// console.log(myArr2.length);


//Array methods
 
// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(10);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(5));

// const newArray = myArr.join();
// console.log(myArr);
// console.log(newArray);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);



