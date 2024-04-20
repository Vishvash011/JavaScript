const parent = document.querySelector(".parent");
console.log(parent);
// console.log(parent.children[0].innerHTML);

// for(let i=0; i<parent.children.length; i++)
// {
//     console.log(parent.children[i].innerHTML);
// }

parent.children[0].style.color = "red";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling); // next element in the DOM tree, not just siblings
// console.log(dayOne.previousElementSibling); 



console.log("NODES: ",parent.childNodes);