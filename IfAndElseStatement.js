//minimum and maximum value 

var firstValue =  Math.floor(Math.random() * 5 + 200);
var secondValue = Math.floor(Math.random() * 5 + 200);
var thirdValue =  Math.floor(Math.random() * 5 + 200);
var fourthValue = Math.floor(Math.random() * 5 + 200);
var fifthValue =  Math.floor(Math.random() * 5 + 200);

if(firstValue == 201 ){
console.log("this is min random number : first value : " + firstValue );
}else if(secondValue == 201){
    console.log("this is min random number : second value :" + secondValue);
}else if(thirdValue == 201){
    console.log("this is min random number : third value : " + thirdValue);
}else if(fourthValue == 201){
    console.log("this is min random number : fourth value :  " + fourthValue);
}else if(fifthValue == 201){
    console.log("this is min random number : fifth value : " + fifthValue);
}

if(firstValue == 204){
    console.log("this is max random number : first value : " + firstValue );
    }else if(secondValue == 204){
        console.log("this is max random number : second value : "+ secondValue);
    }else if(thirdValue == 204){
        console.log("this is max random number : third value : " + thirdValue);
    }else if(fourthValue == 204){
        console.log("this is max random number : fourth value : " + fourthValue);
    }else if(fifthValue == 204){
        console.log("this is max random number : fifth value : " + fifthValue);
    }
console.log("****************************************************");

//take input from user as a year...

const prompt = require("prompt-sync")();
var year = prompt("type a year which you wanna check it is leap year or not =  ");

if( year == year/4){
    console.log(year + "this is a leap year ");
}else{
    println(year + "this is not a leap year");
}

//coin flip 
var coinFlip = Math.floor(Math.random() * 3);
if(coinFlip == 1){
    console.log("it is a head ");
}else{
    console.log("it is a tail ");
}