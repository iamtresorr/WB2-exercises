"use strict";

//tip amount calculator

var foodBill;
var sampleAmount;
var tipPercentage;

foodBill = 70;
sampleAmount = 10;
tipPercentage = sampleAmount / 100; //Here sample amount can be an value and I divide it by 100 to get the percentage

var tipAmount = foodBill * tipPercentage;

console.log("The tip amount of a " + foodBill + " dollar food bill is " + tipAmount);