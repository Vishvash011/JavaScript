// singleton
// object.create
// object literal


const mySym = Symbol("key1");
const JsUser = {
    fname : "vishvash",
    lname : "ame",
    "full name" : "vishvash ame",
    age : 22,
    [mySym] : "myKey1",
    location : "indore",
    email : "vishu@gmail.com",
    isLoggedIn : false,
    lstLoginDay : ["monday" , "saturday"],
};

// console.log(JsUser["fname"]); 
// console.log(JsUser["full name"]);
// console.log(JsUser.lname); 
// console.log(typeof JsUser[mySym]);

// JsUser.email = "vishu@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "vishu@yahoo.com";
// console.log(JsUser);


JsUser.greeting = function()
{
    console.log("Hello vishvash friends");
};

JsUser.greetingTwo = function()
{
    console.log(`Hello vishvash friends, ${this.fname}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());