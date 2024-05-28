const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let i=1;
while (i<=number){
    console.log("Square of",i,"=",i*i);
    i+=1
}