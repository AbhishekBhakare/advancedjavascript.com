//Lecture Date-19-11-2022
//Call Back Function  
//When We Pass Function As parameter then we will say call back function.

//*Benifites :- We have Control On Function.
function mult(c,d)
{
    console.log(c*d)
}
function div(c,d)
{
    console.log(c/d)
}
function sub(c,d)
{
    console.log(c-d)
}
function mod(c,d)
{
    console.log(c%d)
}
function add(m,n)
{
    console.log(m+n)
}

function master(c,d,Main)
{
    Main(c,d)
}
master(100,2,add);
master(10,10,mult);
master(100,10,div);
master(20,20,sub);
master(10,2,mod);
//Function Define By Expression.

let a= function rest()
{
    console.log('This Is Expression Function Example:')
}
a();

//anonymous Function (we called Wihout Name)
let b= function()
{
    console.log('Hey I am Without Name')
}
b();
//Arrow Function ('=>')

let u= ()=>
{
    console.log('Hey All i am All In One Just Use Me Short Cut =>')
}
u();


