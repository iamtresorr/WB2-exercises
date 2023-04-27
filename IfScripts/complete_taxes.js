"use strict";

//Values known

let payRate = 10;
let hoursWorked = 45;
let overtimePay = payRate * 1.5;
let hoursOverworked = hoursWorked - 40;
let regularHours = hoursWorked - hoursOverworked;
let filingStatus = "Single"; //case senstitive
let grossPay;

if(hoursWorked <= 40){
    grossPay = hoursWorked * payRate;
}

else{
    grossPay = (regularHours * payRate) + (hoursOverworked * overtimePay);
}

let annualGrossIncome = grossPay * 52;

//values unknown

let taxRate;


//output
if(annualGrossIncome > 12000 && filingStatus == "Single"){
    taxRate = 0.05;
}

else if(annualGrossIncome == 12000 && annualGrossIncome < 24999.99 && filingStatus == "Single"){
    taxRate = 0.10;
}

else if(annualGrossIncome == 25000 && annualGrossIncome < 74999.99 && filingStatus == "Single"){
    taxRate = 0.15;
}

else if(annualGrossIncome >=75000 && filingStatus == "Single"){
    taxRate = 0.20;
}

//joint filers

else if (annualGrossIncome > 12000 && filingStatus == "Joint"){
    taxRate = 0.0;
}

else if(annualGrossIncome == 12000 && annualGrossIncome < 24999.99 && filingStatus == "Joint"){
    taxRate = 0.06;
}

else if(annualGrossIncome == 25000 && annualGrossIncome < 74999.99 && filingStatus == "Joint"){
    taxRate = 0.11;
}

else if(annualGrossIncome >=75000 && filingStatus == "Joint"){
    taxRate = 0.20;
}

else{
    console.log("You need a job!");
}

//calculate weekly taxes withheld

let taxWitheld = grossPay * taxRate;
let weeklyNetPay = grossPay - taxWitheld;

console.log("You worked " + hoursWorked + " hours this period. Because you earn $" + payRate + " per hour, your gross pay is $" + grossPay.toFixed(2)
+ ". Your filing status is " + filingStatus + ". Your tax withholdings this period is $" + taxWitheld + ". Your net pay is $" + weeklyNetPay
);



