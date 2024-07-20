const prompt=require('prompt-sync')();
let num1=parseInt(prompt("please enter the number:-"));
let i=0;
let num2=0;
while (i<num1){
    let num3=parseInt(prompt("please enter the next number:-"));
    if (num2<=num3){
        num2=num3;
    }
    i+=1;
}
console.log("Max Number =",num2)