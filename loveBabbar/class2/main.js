// console.log("Chaliye suru karte hai");

// // object creation

// const rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log("drawing rectangle");
//     }
// };

// console.log(rectangle.draw());

// object creation by factory function
// function createRectangle(length, breadth) {
//     return rectangle = {
//         length: length,
//         breadth: breadth,
    
//         draw(){
//             console.log("drawing rectangle");
//         }
//     };
// }

// let objRectangle1 = createRectangle(5,4);
// console.log(objRectangle1);


// object creation by constructor function
// constructor function -> Oacal Notation-> first letter of every word is capital like NumberOfClasses

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function() {
//         console.log("drawing");
//     }
// }

// object creation using constructor function
// let rectangleObj = new Rectangle(4,5);
// rectangleObj.size = 10;
// console.log(rectangleObj);

// delete rectangleObj.size; // delete property from the object
// console.log(rectangleObj);


// let Rectangle1 = new Function( 'length','breadth','this.length=length;this.breadth=breadth;this.draw = function(){ console.log("drawing");}');

// object creating using Rectangle1
// let rect = new Rectangle1(2,5);

// console.log(rect)

// let a = 10;
// a++;
// let b = a;
// console.log(a);
// console.log(b);



// let a = { value : 10};
// let b = a;

// a.value++;
// console.log(a.value);
// console.log(b.value);



let rectangle = {
    length : 3,
    breadth : 5
};

// for in loop
// for(let key in rectangle){
//     console.log(key, ":", rectangle[key]);
// }

// for of only used on iterables 
// iterables like array maps etc data structures


// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }




// object cloning
// 1st method assigning

// let obj1 = {
//     value : 10,
//     name : "vishvash"
// };

// let obj2 = {};

// for(let attr in obj1){
//     obj2[attr] = obj1[attr];
// }

// console.log(obj1);
// console.log(obj2);


// 2nd method assigning

// let obj1 = {
//     value : 10,
//     name : "vishvash"
// };

// let obj2 = Object.assign({}, obj1);
// console.log(obj1);
// console.log(obj2);


// 3rd method spread copying

let obj1 = {
    value : 10,
    name : "vishvash"
};

let obj2 = {...obj1};
console.log(obj1);
console.log(obj2);
