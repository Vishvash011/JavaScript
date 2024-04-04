// +++++++++++++++     ++++++++++++++++++++

// function run()
// {
//     console.log("running");
// }
//function cal or invoke
// run();
// Hoisting : The process of moving all the variable and function declarations to the top of their containing scope before executing and this is automaticall by JS engine.....

// +++++++++++++++     ++++++++++++++++++++
// Named function assignment
// let stand = function walk()
// {
//     console.log("walking");
// };




// +++++++++++++++     ++++++++++++++++++++
// Anonymous function assignment
// let stand2 = function()
// {
//     console.log("walking");
// };


// stand(); //invoking the function
// stand2();

// let jump = stand;

// jump();




// +++++++++++++++     ++++++++++++++++++++
// let x = 1;
// x = 'a';
// console.log(x);





// +++++++++++++++     ++++++++++++++++++++
// function sum(a,b)
// {
//     let total = 0;
//     for(let value of  arguments) 
//     {
//         total = total + value;
//     }
//     return total;
//     //arguments is a special type of object that holds all the parameters passed to a function in an array-like structure with properties.
// };

// console.log(sum(45,55));
// console.log(sum(55));
// console.log(sum());
// console.log(sum(1,2,3,4,5));

// let ans = sum(1,2);
// let ans = sum(1,2,3,4);
// console.log(ans);



// +++++++++++++++     ++++++++++++++++++++
//Rest operator
// function sum2(num,value,...args){
//     console.log(args);
// };

// sum2(1,2,3,4,5,6,7);





// +++++++++++++++     ++++++++++++++++++++
// default parameters in function
function interest(p,r = 6,y = 10)
{
    return (p * r * y) / 100;
};

// console.log(interest(1000,undefined,8));



// ++++++++++++++++ Getter Setter ++++++++++++++++++
// getter -> access properties
// setter -> change or mutate properties

let Person = {
    fname : "Vishvash",
    lname : "Ame",

    get fullName()
    {
        return `${Person.fname} ${Person.lname}`;
    },

    set fullName(value)
    {
        let splitValue = value.split(" ");
        this.fname = splitValue[0];
        this.lname = splitValue[1];
    }
};
Person.fullName = "Pratham Gurjar";
console.log(Person.fullName);

// console.log(Person);

// function fullName()
// {
//     return `${Person.fname} ${Person.lname}`;
// };
// issue -> read only

