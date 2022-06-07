//Write a program that takes User Inputs and does Unit Conversion of different Length units..

console.log("Please select the options from below.....")
const prompt = require("prompt-sync")();
var select = prompt("1.feet to inch \n 2.inch to feet \n 3.feet to meter \n 4.meter to feet");
console.log("Selected option is: " + select);


switch(select) {
    case '1' :
        var feet = parseInt(prompt("Enter value in feet -> "))
        console.log("The converted value in inch = "+ feet*12);
        break;

    case '2' :
        var inch = parseInt(prompt("Enter length in inch -> "))
        console.log("The converted value in feet is = "+ inch/12);
    case '3' :

        var feet = parseInt(prompt("Enter lenght in feet -> "));
        console.log("The converted value in meter is = "+ feet/3.25);
    case '4' :

        var meter = parseInt(prompt("Enter value in meter -> "));
        console.log("The converted value in feet is =" + meter*3.28);
    default :
        console.log("Please select the correct operation");
}