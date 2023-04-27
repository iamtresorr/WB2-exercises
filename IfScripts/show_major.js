"use strict";


let studentName = "Tre";
let majorCode = "CSCI";
let studentMajor;
let departmentLocation;

if(majorCode == "BIOL"){
    studentMajor = "Biology";
    departmentLocation = "Science Bldg, Room 310"
}

else if(majorCode == "CSCI"){
    studentMajor = "Computer Science";
    departmentLocation = "Sheppard Hall, Room 314"   
}

else if(majorCode == "ENG"){
    studentMajor = "English";
    departmentLocation = "Kerr Hall, Room 201"   
}

else if(majorCode == "HIST"){
    studentMajor = "History";
    departmentLocation = "Kerr Hall, Room 114"   
}

else if(majorCode == "MKT"){
    studentMajor = "Marketing";
    departmentLocation = "Westly Hall, Room 310"   
}

else{
    // console.log("Student major and department location is unknown.")
    studentMajor = "<unkown>"
}

console.log(`Student: ${studentName}`)
console.log(`Major: ${studentMajor}`)
console.log(`Advising Location: ${departmentLocation}`)

