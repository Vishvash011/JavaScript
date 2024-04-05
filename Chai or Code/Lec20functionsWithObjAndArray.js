function calculateCartPrice(...args) // rest operator
{
    return args
}
console.log(calculateCartPrice(200,400,500));

const user = {
    username : "vishvash",
    price : 111,
};

function handleObject(anyObject)
{
    console.log(`User Name is ${anyObject.username} and price is ${anyObject.price}`);
};

// handleObject(user)
handleObject({
    username : "pratham",
    price : 201,
});

const myArray = [200,300,400,500];

function returnSecondValue(getArray)
{
    return getArray[1];
};

console.log(returnSecondValue(myArray));