"use strict";

let a = 54;
let b = 66;
let c = 72

if(a > b && a > c){
    console.log(`${a} is the largest of the three numbers.`)
}

else if(b > a && b > c){
    console.log(`${b} is the largest of the three numbers.`)
}

else if(c > a && c > b){
    console.log(`${c} is the largest of the three numbers.`)
}

else{
    console.log("The numbers are equal.")
}

if(a < b && a < c){
    console.log(`${a} is the smallest of the three numbers.`)
}

else if(b < a && b < c){
    console.log(`${b} is the smallest of the three numbers.`)
}

else if(c < a && c < b){
    console.log(`${c} is the smallest of the three numbers.`)
}

else{
    console.log("The three numbers are equal.")
}

