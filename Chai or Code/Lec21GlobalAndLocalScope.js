let a = 300;
if(true)
{
    let a = 10; // block scode: this variables  is not accessible outside of the it's blocks 
    const b = 20;
    var c = 30; // global variable score : this variables  can be accessed from any place in code.
}
console.log(a);
// console.log(b);
console.log(c);