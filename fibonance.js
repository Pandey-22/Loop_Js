const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter the number"));
let x=0;
let y=1;
let z=0;
while (z<=n){
    console.log(z);
    x=y;
    y=z;
    z=x+y;
}