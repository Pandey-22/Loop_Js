const prompt=require('prompt-sync')();
let num1=parseInt(prompt("please enter the 1st number"));
let num2=parseInt(prompt("please enter the 2nd number"));
let p=num1*num2;
while (num2>0) {
    let r=num1%num2;
    num1=num2;
    num2=r;
}
let hcf=num1;
let lcm=Math.floor(p/hcf);
console.log("HCF =",hcf,"LCM =",lcm);