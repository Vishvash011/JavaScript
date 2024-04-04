let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2002,4,10);
// let myCreatedDate = new Date(2002,4,10,5,3);
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

let dates = newDate.toLocaleString('default', {
    weekday : "long",
    timeZone:  'America/New_York',
});


console.log(dates.toString());