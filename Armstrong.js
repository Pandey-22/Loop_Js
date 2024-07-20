// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the number:-"));
// let digit=parseInt(prompt("please enter the number of digits:-"));
// let sum=0;
// let original=number;
// while (number>0) {
//     let remainder=number%10;
//     sum+=remainder**digit;
//     number=Math.floor(number/10);
// }
// if (original==sum) {
//     console.log("This number is an Armstrong Number.");
// } 
// else {
//     console.log("This number is not an Armstrong Number.");
// }






// const prompt=require('prompt-sync')();
// let n=parseInt(prompt("enter the value of n: "))
// let originalNumber = n;
// let numDigits = 0;
// let temp = n;
// let sum = 0;
// while (temp > 0) {
//     temp = Math.floor(temp / 10);
//     numDigits++;
// }
// temp = n;
// while (temp > 0) {
//     let remainder = temp % 10;
//     sum += Math.pow(remainder, numDigits);
//     temp = Math.floor(temp / 10);
// }
// if (sum === originalNumber) {
//     console.log(originalNumber + " is an Armstrong number.");
// } else {
//     console.log(originalNumber + " is not an Armstrong number.");
// }