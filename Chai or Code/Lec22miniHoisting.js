function one()
{
    const username = "vishvash";
    function two()
    {
        const website = "youtube";
       // console.log(username)
    };
    // console.log(website);
    two();
}
one();


if(true){
    const myName = "vishvash ame";
    if(myName == "vishvash ame")
    {
        const website = " youtube"
       // console.log(myName + website);
    }
    // console.log(website);
}
// console.log(myName);


// +++++++++++++++  interesting example  +++++++++++++++

console.log(addOne(6));
function addOne(num)
{
    return num + 1;
}


addTwo(5); // hoisting excetuion content
const addTwo = function(num)
{
    return num + 2;
}
