// Function : it is a block of code  that contains the function definition
// Purpose  : to define the function and provide an example usage.
// it is used to execute a particular task when we required to perform that task in our program.

function sayMyName()
{
    console.log("Vishvash Ame!!!");
};

// sayMyName : it is a reference  to the function defined above.
// sayMyName() : it is a execution  of the function sayMyName().
// sayMyName(); // it is function call when we required to print my name, we'll call the function 
// Output: Vishvash Ame!!!


//  1st type
// function addTwoNumbers(num1, num2)
// {
//     console.log(num1 + num2);
// };

// 2nd type
function addTwoNumbers(num1, num2)
{
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
};

console.log(addTwoNumbers(5, 7)); // Output: 12

// when we take any input in function definition, it is called parameters and when we call the function with values and variables, it is called arguments....

const result = addTwoNumbers(7,8);

// console.log("result : ", result);

function loginUserMessage(username)
{
    if(!username)// username === undefined
    {
        console.log("Please enter your username.");
        return;
    }
    return `${username} just logged in!`;
}

// console.log(loginUserMessage("vishvash ame"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());