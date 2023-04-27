"use strict";

//Values known

let hour = 10;

//hours are from 0 - 23
//values unkown

let greeting;


//output

if(hour < 10){
    greeting = "Good morning!";
}

else if(hour >= 9 && hour < 13.9){
    greeting = "Good day!";
}

else if(hour > 13.9 && hour < 24){
    greeting = "Good evening!";
}

else{
    greeting = "What planet are you on right now??!!";
}

console.log(greeting);