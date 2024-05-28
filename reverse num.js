const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter the number"));
let rev=0;
while (num>0){
    rev=(rev*10)+(num%10);
    num=Math.floor(num/10);
}
console.log("Reverse Number =",rev)