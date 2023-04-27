"use strict";

const nameField = document.getElementById("nameField");
const greetBtn = document.getElementById("greetBtn");

function init(){
    greetBtn.onclick = greetUser;
};

window.onload = init;

function greetUser(){
    let userName = nameField.value;
    alert(`Hello ${userName}`);
};