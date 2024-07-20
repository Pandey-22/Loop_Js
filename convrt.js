const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
let sum=0;
while (number>0){
    a=number%2;
    sum=sum*10+a;
    number=Math.floor(number/2);
}
console.log(sum);