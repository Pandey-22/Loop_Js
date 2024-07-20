const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter the natural number:-"));
let i=1;
let sum=0;
while (i<=num){
    sum=sum+i;
    i=i+1
}
console.log("Sum of Natural Number =",sum);