// const coding = ["js", "python", "c++", "java", "c"]
// const values =  coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// });

// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10];

// // const newNums = myNums.filter( (num) => num > 5);
// const newNums = myNums.filter( (num) => {
//     return num > 5;
// });

// const arr = [];
// myNums.forEach( (nums) => {
//     if(nums > 5)
//     {
//         arr.push(nums);
//     } 
// });


// console.log(arr);


 

const books = [
    {
        title: "To Kill a Mockingbird",
        genre: "Historical Fiction",
        author: "Harper Lee",
        publishDate: "1960",
        edition: "1st"
    },
    {
        title: "1984",
        genre: "Dystopian Fiction",
        author: "George Orwell",
        publishDate: "1949",
        edition: "1st"
    },
    {
        title: "The Great Gatsby",
        genre: "Novel",
        author: "F. Scott Fitzgerald",
        publishDate: "1925",
        edition: "1st"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance Novel",
        author: "Jane Austen",
        publishDate: "1813",
        edition: "1st"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        author: "J.R.R. Tolkien",
        publishDate: "1937",
        edition: "1st"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        author: "J.K. Rowling",
        publishDate: "1997",
        edition: "1st"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        author: "J.D. Salinger",
        publishDate: "1951",
        edition: "1st"
    },
    {
        title: "The Chronicles of Narnia",
        genre: "Fantasy",
        author: "C.S. Lewis",
        publishDate: "1950-1956",
        edition: "1st"
    },
    {
        title: "Brave New World",
        genre: "Dystopian Fiction",
        author: "Aldous Huxley",
        publishDate: "1932",
        edition: "1st"
    },
    {
        title: "Moby-Dick",
        genre: "Adventure Fiction",
        author: "Herman Melville",
        publishDate: "1851",
        edition: "1st"
    },
    {
        title: 'War and Peace',  
        genre: 'History',  
        author: 'Leo Tolstoy',  
        publishDate: '1865-1869',  
        edition: '1st'  
    }
];

// Display the array of books
// console.log(books);


// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter( (bkYear) => (bkYear.publishDate >= 1900 && bkYear.genre == 'Fantasy')
// );
// console.log(userBooks);


// add 10 in each element of array
const myNumbers = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];
// myNumbers.forEach((num)=>newArray.push(num+10));
const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);
// console.log("New Array after adding  10 to each number : ",newArray);




// const nums = myNumbers 
//         .map( (num) => num * 10)
//         .map( (num) => num + 1 )
//         .filter( (num) => num >= 50)
// console.log(nums);





// reduce method

let arr = [1,2,3,4,5,6,7,8,9,10];
let initialValue = 0;
let sum = arr.reduce((accumelator, currentValue) =>  accumelator + currentValue ,initialValue);
console.log(`The sum is ${sum}`);



const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "c+ Course",
        price: 3499
    },
    {
        itemName: "Java Course",
        price: 3999
    },
    {
        itemName: "Python Course",
        price: 2499
    },
    {
        itemName: "MERN Course",
        price: 4999 
    },
]

let total = shoppingCart.reduce((totalPrice, item) => (totalPrice + item.price), 0);
console.log(total);