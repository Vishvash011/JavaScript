// function print()
// {
//     console.log("remove");
// }
// document.addEventListener('click', print);
// document.removeEventListener('click', print);

// const content = document.querySelector("#wrapper");

// content.addEventListener('click',function(event) {
//     console.log(event);
// })




// let links = document.querySelectorAll('a');
// let third = links[2];

// third.addEventListener('click', function(event) {
//     event.preventDefault(); //prevents the default action of an element (link, form submission etc)
//     console.log("maja aaya achha laga");
// });





// let myDiv = document.createElement('div');
// function paraStatus(event){
//     // console.log("i have clicked on para");
//     console.log('para' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus);
// for(let i=1; i<=100; i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is paragraph ` + i;

    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



let element = document.querySelector('#wrapper');
element.addEventListener('click' , function(event) {
    if(event.target.tagName === 'SPAN') 
    {
        console.log('span pr click kiya hai ' + event.target.textContent);
    }
});