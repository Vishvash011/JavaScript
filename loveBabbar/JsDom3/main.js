// adding 100 paragraphs
// const t1 = performance.now();
// for(let i=1; i<=100; i++)
// {
//     let newElement  = document.createElement("p");
//     newElement.textContent = "this is para " + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took " + (t2 - t1) + " ms");

// // optimizing a bit 
// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++)
// {
//     let element = document.createElement('p');
//     element.textContent = "this is para " + i;
    
//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took " + (t4 - t3) + " ms");


// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++)
// {
//     let newElement  = document.createElement("p");
//     newElement.textContent = "this is para " + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); // 1 reflow, 1 repaint













// function addPara()
// {
//     let para = document.createElement('p');
//     para.textContent("js is a single ");
//     document.body.appendChild(para);
// }

// function appendNewMessage()
// {
//     let para = document.createElement('p');
//     para.textContent("kya haal chaal ");
//     document.body.appendChild(para);
// }
// addPara();
// appendNewMessage(); 

// console.log("hi");
// document.addEventListener('click', function()
// {
//     console.log("hello bhaiya");
// });
// console.log("welcome to go");





// setTimeout(function() {
//     console.log("hello everyone");
// }, 5000);


var countDownDate = new Date("April 23, 2024 00:00:00").getTime();
// var x = setInterval(function () {
//     var now = new Date().getTime();
//     var distance = countDownDate - now;
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor(distance % (1000 * 60) / 1000);
  
//     // Output the result in an element with id="demo"
// } , 1000);

var now = new Date().getTime();
var distance = countDownDate - now;
console.log(distance);
