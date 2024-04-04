// ++++++++++++++++ Getter Setter ++++++++++++++++++
// getter -> access properties
// setter -> change or mutate properties

// let person = {
//     fname : "Vishvash",
//     lname : "Ame",

//     get fullName()
//     {
//         return `${person.fname} ${person.lname}`;
//     },

//     set fullName(value)
//     {
//         if(typeof value !== 'string')
//         {
//             throw new Error("you have not sent a string");
//         }
//         let splitValue = value.split(' ');
//         this.fname = splitValue[0];
//         this.lname = splitValue[1];
//     }
// };
// person.fullName = "Pratham Gurjar";
// console.log(person.fullName);

// console.log(person);

// function fullName()
// {
//     return `${person.fname} ${person.lname}`;
// };
// issue -> read only

// try{
//     person.fullName = 1;
// }
// catch(e){
//     alert(e);
// };

// console.log(person.fullName);



//  +++++++++++++ scope +++++++++++++

// {
//     var a = 5;    
// }
// console.log(a);





// function walk()
// {
//     var a = 5;  // var keywrod variable scope only within the function block if it is not defined in function then it's scope in entire program
// }
// console.log(a);
//and let keyword variable scope within the block





// for(var i=0; i<=10; i++)
// {

// }
// console.log(i);





// if(true)
// {
//     var a = 5;
// }
// console.log(a);



function a()
{
    const ab = 5;
}

const ab = 5;
function b()
{
   const ab = 5;
}