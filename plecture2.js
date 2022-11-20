//higher Order Function
//When a function return another function is called higher order.
function pune()
{
    return function(){console.log("this is higher order function")};
    
}
let p=pune();
 p();

 //OR
 function mumbai()
 {
    console.log("i am without veriable function")
    return function(){console.log("i am second function")}
    
 }
 mumbai()();

//IIFE (Immidate Invocked Function Expression)

// (function hinjewadi()
// {
//     console.log('i am IIFE Function Expression')
// }
// ())
//OR
(function()
{
    console.log('this is another example of IIFE')
}
())

//rest parameter
//using rest parametr we can collect multiple values in a single variable.
//Lecture Date-20-11-2022
//* we use (...three dotes only)
function pune1(...num1)
{
    console.log(num1)
}
//answer will be print in arry.
pune1(23,43,23,67,64)

//spread operator (...)
//* we can use split value array.

function kp(m,n,o,p)
{
    console.log(m,n,o,p)
}
let arry=[32,54,77,121,]
//kp(arry[0],arry[1],arry[2],arry[3]);  //we have print multiple valuse then we use following method;
kp(...arry);


