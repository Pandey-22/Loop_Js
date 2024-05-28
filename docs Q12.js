const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
let i=2;
let sum=0;
while (i<=number){
    sum=sum+i;
    i+=1;
}
console.log(sum);