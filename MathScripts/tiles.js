"use strict";

//Tiles

"use strict";
// var length = Math.floor(Math.random() * 50) + 20;
// var width = Math.floor(Math.random() * 50) + 20;
var length = 100;
var width = 120;
var boxes = 12;
var sqaureFoot = length * width;
var tilesNeeded = sqaureFoot/1;
var boxes = tilesNeeded / boxes;
var justInCase = boxes * 0.10;
var total = justInCase + boxes;

console.log(length);
console.log(width);
console.log(Math.ceil(total));