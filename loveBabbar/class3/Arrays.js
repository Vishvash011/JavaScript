// let numbers = [1,4,5,7];

// console.log(numbers);
// console.log(numbers[3]);
// console.log(numbers[2]);
// console.log(numbers.length);
// numbers.push(9);
// numbers.unshift(8);
// numbers.splice(3,0,11);
// console.log(numbers);
// numbers.splice(5,0,'a','b','c','d');
// console.log(numbers);





//searching
// console.log(numbers.indexOf(7));

//we want to check if a number is exist in an array
// if(numbers.indexOf(4) != -1)
// {
//     console.log("present");
// }

// console.log(numbers.includes(7));
// console.log(numbers.indexOf(4,1));





//on reference 

// let course = [
//     {no:1,naam:'vishvash'},
//     {no:2, naam:'pratham'}
// ];

// console.log(course);
//console.log(course.indexOf({no:1,naam:'vishvash'}));

// let courses = course.find(function(course)
// {
//     return course.no == 1;
// });


// let courses = course.find(courses => courses.no === 1);
// console.log(courses);






// removing element

// let numbers = [1,2,3,4,5,6,7,8,9];
// let numbers2 = numbers;

// numbers.pop();
// console.log(numbers);
// console.log(numbers.shift());
// console.log(numbers);

// numbers.splice(3,1);
// console.log(numbers);




// emptying an array
// numbers = [];
// numbers.length = 0;
// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(numbers2);




// combining and slicing array

// let first = [1,3,5,7,9,11];
// let second = [2,4,6,8,10];
// let combinedArrays = first.concat(second);
// console.log(combinedArrays);
// console.log(combinedArrays.slice(2,6)); 





// spread oprator
// let first = [1,3,5,7,9,11];
// let second = [2,4,6,8,10];
// let combineArrays = [...first,'a',...second,'b',true]; // using the spread operator to add all elements of first into a new array called combineArrays
// console.log(combineArrays);

//copy kaise create kru
// let another = [...combineArrays];
// console.log(another);





//iterating an array
// let arr = [1,3,5,7,9,11];
// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(value) {
//     console.log(value);
// });

// arr.forEach(value => console.log(value));





// joining array
// let arr = [1,3,5,7,9,11];
// const joined = arr.join(',');
// console.log(joined);





// split 
// let message = "this is my last message to you";
// let parts = message.split(" ");
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);





// sorting
// let arr = [5, 6, 3, 7, 9, 12, 2, 65, 45, 78];
// arr.sort((a, b) => a - b);
// console.log(arr);
// arr.reverse();
// console.log(arr);




// filtering arrays
// let arr = [1,2,-1,-4,5];
// let filtered = arr.filter(function(value)
// {
//     return value <= 0;
// });

// let filtered = arr.filter(value => value <= 0);

// console.log(filtered);





// mapping arrays
// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(function(value){
//     return 'student_no' + value;
// });

// let items = numbers.map(value => 'student_no' + value);

// console.log(items);





// mapping with objects
let numbers = [1,2,-6,-9];
// let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(function(num)
// {
//     return {value:num};
// });


let items = numbers.filter(value => value >= 0).map(num => ({value: num}));
console.log(items);