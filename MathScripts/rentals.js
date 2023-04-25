"use strict";

//Tour Van

// total = 15x + 250y

var numOfPersons = 38;
var busSeatLimit = 15;
var costOfVan = 250;
var daysOnTour = Math.floor(Math.random() * 10) + 1;
var numOfVans = Math.ceil((numOfPersons / busSeatLimit));

console.log(numOfVans);
console.log(daysOnTour);

var totalCost = (numOfVans * costOfVan) * daysOnTour;
console.log(totalCost);

var costPerPerson = totalCost / 38;
console.log(costPerPerson.toFixed(2));