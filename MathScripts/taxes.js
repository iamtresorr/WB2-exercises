"use strict";

//tax calculator

var payAmount;
var taxPercentage;
var taxWithheld;

payAmount = 2173; //subject to change
taxPercentage = 0.23;
taxWithheld = payAmount * taxPercentage;


console.log("The amount of taxes that are withheld are " + taxWithheld.toFixed(2) + " dollars based on a monthly pay of " + payAmount);