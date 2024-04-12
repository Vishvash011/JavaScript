const user = {
    username : "vishvash",
    price : 999,

    welcomeMessage : function()
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage();
// user.username = "pratham"
// user.welcomeMessage();

// console.log(this);


// function one()
// {
//     let name = "vishvash";
//     console.log(this);
// }
// one();

// const chai = function()
// {
//     let name = "vishvash";
//     console.log(this.name);
// };
// const chai = () =>
// {
//     let name = "vishvash";
//     console.log(this);
// };

// chai();




// method 1 to write arrow func...
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5,6));


// method 2 to write arrow func...
// const addOne = (num1, num2) => (num1 + num2);
// console.log(addOne(5,6));


// if we want to return any object
const addOne = (num1, num2) => ({
    username : "vishvash",
});

console.log(addOne(5,6));

// const arr = [2,5,7,9,11];
// arr.forEach(element => element * 2);