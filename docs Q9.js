const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
l=number;
s=number;
for (let i=0; i<number; i++){
    let number=parseInt(prompt("please enter the next number"));
    if (number>l){
        l=number;
    }
    else{
        s=number
    }
}
console.log("Largest Number =",l);
console.log("Smallest Number =",s)