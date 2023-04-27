"use strict";

//Values known

let payRate = 17.30;
let hoursWorked = 45;
let overtimePay = payRate * 1.5;

//Values unknown

let hoursOverworked = hoursWorked - 40;
let regularHours = hoursWorked - hoursOverworked;
let grossPay;

//Output

if(hoursWorked <= 40){
    grossPay = hoursWorked * payRate;
}

else{
    grossPay = (regularHours * payRate) + (hoursOverworked * overtimePay);
}

console.log(grossPay.toFixed(2));
