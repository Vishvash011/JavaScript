const countValue = document.querySelector("#counter");

const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value - 1;
    // set the value on UI
    countValue.innerText = value;
};

const increment = () => {
     // get the value from UI
     let value = parseInt(countValue.innerText);
     // update the value
     value = value + 1;
     // set the value on UI
     countValue.innerText = value;
};









// using add event listener

// document.addEventListener('DOMContentLoaded', function () {
//     const countValue = document.getElementById('counter');
//     const decrementBtn = document.getElementById('decrementBtn');
//     const incrementBtn = document.getElementById('incrementBtn');

//     const decrement = () => {
//         let value = parseInt(countValue.innerText);
//         value -= 1;
//         countValue.innerText = value;
//     };

//     const increment = () => {
//         let value = parseInt(countValue.innerText);
//         value += 1;
//         countValue.innerText = value;
//     };

//     decrementBtn.addEventListener('click', decrement);
//     incrementBtn.addEventListener('click', increment);
// });
