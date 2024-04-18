// for loop

for(let i = 0; i <= 10; i++)
{
    // console.log(i , " ");
}


for(let i = 0; i <= 5; i++)
{
    let stars = ' ';
    for(let j=1; j <= i; j++)
    {
        stars += '* ';
    }
    // console.log(stars.trim());
}

for(let i = 1; i <= 20; i++)
{
    if(i == 5)
    {
        // console.log(`detected 5`);
        break;
    }
    // console.log(`value of i is ${i}`);
}


for(let i = 1; i <= 20; i++)
{
    if(i == 5)
    {
        // console.log(`detected 5`);
        continue;
    }
    // console.log(`value of i is ${i}`);
}

//while loop
// let i = 1;
// while(i <= 10)
// {
//     // console.log(`value of i is ${i}`);
//     i++;
// }


//do while loop

let i = 1;
do{
    console.log(`value of i is ${i}`);
    i++;
}while(i <= 10);

