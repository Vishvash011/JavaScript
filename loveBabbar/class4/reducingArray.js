let arr = [1,2,3,4,5,6,7];
let total = 0;

// for(let value of arr)
// {
//     total += value;
// }

// console.log(total);





let totalSum = arr.reduce((total, value) => total + value , 0);

console.log(totalSum);