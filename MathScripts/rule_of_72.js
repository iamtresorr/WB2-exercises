"use strict";

//Rule of 72 calculator

var startingBalance = 3000; //value can be changed as needed
var constant = 72;
var interestRate = 8;
var yearsToDouble = constant / interestRate;
var endingBalance = startingBalance * 2;

console.log("At a " + interestRate + " percent interest rate, your savings account will be worth " + endingBalance + " in " + yearsToDouble + " years")


