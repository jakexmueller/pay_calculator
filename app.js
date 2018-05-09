"use strict";

// Code goes here

let hourlyPay=prompt("Please enter your hourly wage information", "10")
let hours=prompt("Please enter the number of hours you work in a week", "40")

let weeklyWage= hourlyPay*hours;
let weeklyWageRounded= weeklyWage.toFixed(2);



console.log(weeklyWage);
document.getElementById("test").innerHTML = weeklyWage;
document.write("Your total pay is " + weeklyWageRounded);



