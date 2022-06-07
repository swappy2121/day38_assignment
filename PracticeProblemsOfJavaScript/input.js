
var ps = require("prompt-sync")
var prompt = ps();
var year = prompt("type a year which you wanna check it is leap year or not =  ");

if( year%4 == 0 ){
    console.log(year + " this is a leap year ");
}else{
    console.log(year + " this is not a leap year");
}
