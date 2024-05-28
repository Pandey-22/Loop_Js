const prompt=require('prompt-sync')();
let number=parseInt(prompt("Please enter the number: "));
let digit=parseInt(prompt("Please enter the number of digits: "));
let sum=0;
let original=number;

while (number>0) {
    let remainder=number%10;
    sum+=remainder**digit;
    number=Math.floor(number/10);
}

if (original==sum) {
    console.log("This number is an Armstrong Number.");
} else {
    console.log("This number is not an Armstrong Number.");
}