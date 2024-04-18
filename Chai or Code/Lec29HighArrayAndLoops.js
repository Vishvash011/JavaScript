// for of
// ["", "", ""]
//[{}, {}, {}];

// const arr = [1,2,3,4,5];
// for(const val of arr)
// {
//     console.log(val);
// };

// const greetings = "hello world!";
// for(const greet of greetings)
// {
//     console.log(`each char is ${greet}`);
// }


//map

// const map = new Map();
// map.set('IN',"India");
// map.set('Fr',"France");
// map.set('USA','United State of America');
// console.log(map.get('IN'));

// for(const [key,value] of map)
// {
//     console.log(key, ':-' , value);
// }
 

// const myObj = {
//     'Game1' : "NFS",
//     'Game2' : "CSGO",
//     'Game3' : "LOL"
// };

// for(let key in myObj){
//     console.log(myObj[key]);
// }




//object

// const myObjet = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby',
//     swift : 'swift by apple'
// };

// for(const key in myObjet)
// {
//     console.log(myObjet[k ey]);
// }


// const programming = ["js", "rb", "py", "java", "cpp"]
// for(const key in programming)
// {
//     console.log(programming[key]);
// }



//for each loop
const programming = ["js", "rb", "py", "java", "cpp"];
// programming.forEach(function(val) {
//     console.log(val);
// })


//with arrow function
// programming.forEach((val) => {
//     console.log(val);
// });


// function printMe(item)
// {
//     console.log(item);
// }

// programming.forEach(printMe)
 


// programming.forEach((val, index, arr) => {
//     console.log(val, index, arr);
// })



const mycoding = [
    {
    languageName : "javascript",
    languageFileName : "js"
    },
    {
    languageName : "java",
    languageFileName : "java"
    },
    {
    languageName : "python",
    languageFileName : "py"
    },
]


mycoding.forEach((item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
})