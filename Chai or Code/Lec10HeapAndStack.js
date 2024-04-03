// There are two types of memory
// 1. Static Memory (RAM) - where variables and data is stored in the computer's RAM, which has a limited amount of in a computer: 
// 2. Heap Memory  - It is a shared, dynamic memory that is used to store the variables and data structures which are in a computer:

let myName = "Vishvash";
let nickName = myName;
nickName = "Pratham";
console.log(myName);  
// Output: Vishvash
console.log(nickName);
// Output: Pratham

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
};

let userTwo = userOne;

userTwo.email = "vishu@email.com";
console.log(userOne);
console.log(userTwo);