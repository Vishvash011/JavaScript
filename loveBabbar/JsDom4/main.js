// console.log("vishvash here");

// example of synchronous code

// function sync()
// {
//     console.log("first");
// };
// sync();
// console.log("second");

// example of asynchronous code

// setTimeout(function() {
//     console.log("third");
// },3000);
// function sync()
// {
//     console.log("first");
// };
// sync();

// console.log("second");

// Promise

// let meraPromise1 = new Promise(function(resolve, reject) {
//     // console.log("i am inside  promise");
//     // resolve(1998);

//     setTimeout(function() {
//         console.log("i am inside promise1");
//     },5000);
//     // resolve(1998);
//     reject(new Error("bhai sahab error aaye hai"))
// });

// meraPromise1.then( (value) => {
//     console.log(value);
// })

// // meraPromise1.then( (value) => { console.log(value);} , (error) => {console.log("received an error");});

// meraPromise1.catch( (error) => {
//     console.log("received an error");
// })

// let meraPromise2 = new Promise(function(resolve, reject) {
//     // console.log("i am inside  promise");
//     // resolve(1998);

//     setTimeout(function() {
//         console.log("i am inside promise2");
//     },3000);
//     // resolve(1998);
//     // reject(new Error("bhai sahab error aaye hai"))
// });

// console.log("pahla");

// let waadaa1 = new Promise(function(resolve, reject){
//     setTimeout( () => {
//         console.log("setTimeout1 started");
//     },2000);
//     resolve(true)
// });

// let output = waadaa1.then( () => {
//     let waadaa2 = new Promise(function(resolve, reject)
//     {
//         setTimeout( () => {
//             console.log("setTimeout2 started");
//         },3000);
//         resolve("waadaa 2 resolveed");
//     })
//     return waadaa2;
// })

// output.then( (value) => console.log(value));

// async function abcd()
// {
//     return 7;
// }
// console.log(abcd());




// async function utility() {
//   let indoreWheather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("indore is cool");
//     }, 5000);
//   });
//   let tikamgarhWheather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Tikamgarh is very hot");
//     }, 10000);
//   });

//   let im = indoreWheather;
//   let tm = tikamgarhWheather;

//   return [im, tm];
// }

// console.log(utility());







// fetch API : the global fetch() method starts the process of fetching a resource from the network . It returns a Promise which is fulfilled once the response is available
// json = javascript object notation

// // get call in fetch API
// async function utility()
// {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }

// utility();



// post call in fetch API

// async function helper()
// {
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'vishvash',
//           body: 'smart',
//           userId: 11,
//           weight: 57,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility()
// {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();







// Closures

function init()
{
    let name = "Mozilla"; // name is local variable created by init
    function displayName()
    {
        // displayName() is the inner function, that forms the closures
        console.log(name); // use variable declared in the parent function
    };

    return displayName;
}
let a = init();
a();