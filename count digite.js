const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let digitCount=0;
let tempNumber=Math.abs(number);
while (tempNumber>0){
    tempNumber=Math.floor(tempNumber/10);
    digitCount++;
}
console.log("Count Number of Digite =",digitCount)