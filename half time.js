const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter the number"));
let i=1;
while (i<=Math.floor(num/2)){
    i=i+1;
    console.log(num)
}