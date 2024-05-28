const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let i=1;
while (i<=10){
    console.log(i,"*",number,"=",number*i);
    i+=1;
}