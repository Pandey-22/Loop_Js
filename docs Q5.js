const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter the number"));
let i=2;
while (i<=num){
    process.stdout.write(i+" ");
    i+=2;
}