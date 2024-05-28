const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let i=1;
while (i<=number){
    if (number%i==0){
        console.log(i);
    }
    i+=1;
}