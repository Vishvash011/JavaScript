// // const tinderUser = new Object();
// // const tinderUser = {}; // it is object literal initialization . It will create an empty object.

// const tinderUser = {};
// tinderUser.name = "Vishu";
// tinderUser.id = "12345Abc";
// tinderUser.age = 22;
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//     email : "vishu@gmail.com",
//     fname : {
//         myFullName : {
//             firstName: "Vishu" ,
//             lastName:"gurjar",
//             age : 22,
//         },
//     },
// };

// // console.log(regularUser.fname.myFullName);


// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "a", 4 : "b"}
// const obj3 = {5 : "a", 6 : "b"}

// // const obj3 = {obj1, obj2};
// // console.log(obj3);
// // const obj4 = Object.assign({},obj1, obj2, obj3);
// // console.log(obj4);

// const obj5 = {...obj1, ...obj2, ...obj3};
// // console.log(obj5);


// const user = [
//     {
//         id : 1,
//         email : "h@gmail.com",
//     },
//     {
//         name : "vishu",
//         age : 22,
//     }
// ];

// console.log("user[0].email : ", user[0].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // returns an array of the object's own enumerable property names
// console.log(Object.values(tinderUser)); //  returns an array of the values of all properties of an object.

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "javaScript",
    price : "999",
    courseInstructor : "hitesh",
}
const {courseInstructor : instructor} = course;
// console.log(courseInstructor);
console.log(instructor);