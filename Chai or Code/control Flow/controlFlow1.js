// if statement
// if('2' === 2)
// {
//     console.log("hello");
// }
// else{
//     console.log("by");
// }


// ladder if

// let a = 10
// let b = 20
// let c = 30
// if(a >= b && a >= c)
// {
//     console.log("a is greater than b and c!!");
// }
// else  if (b >= a && b >= c)
// {
//     console.log("b is greater than a and c!!")
// }
// else  
// {
//     console.log("c is greater than a and b!!")  
// }



/*switch case*/
// let x = 5;
// switch(x){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("number not in the list");
// }


//loops
// for(i=0 ; i<5 ; i++) {
//     console.log(i); //print number from 0 to 4 
// }



//iterate over loop
let arr = [1,2,3,"a","b",false];
// console.log("\n\nArray elements are : ");
// for (let value of arr) {
//     console.log(value);
// }




// falsy values
// false, 0, -0, BigInt, 0n, NaN, null, undefined, ""


//truthy values
// "0" , true , [] , {}, " ", function(){}


// for each loop
// arr.forEach((item , index)=>{
//     if(typeof item == "string"){
//         console.log(`Element at ${index} is a string`);
//     }else{
//         console.log(`Element at ${index} is not a string`);
//     }
// });




//finding element using loops
// function findElement(arr , x){
//     for(let i=0 ; i < arr.length ; i++){
//         if(arr[i] === x){
//             return `Element found at position ${i}`;
//         }
//     }
//     return "Element not found";
// }
// console.log(findElement(arr,2));



//using while loop
// let num = 5;
// while(num > 0){
//     console.log(num--); //this will print numbers from 5 to 1
// }



// //do while loop
// num = 5;
// do{
//    console.log(num--); //this will also print numbers from 5 to  1
// }while(num>0);

// const emptyObj = {};



// check object empty
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("it is empty");
// }



// nullish coalescing operator  ??: null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 =  10 ?? null ?? 15
console.log(val1);


let a = 20;
let b = 20;
a < b ? console.log('a is smaller') : console.log('b is smaller');