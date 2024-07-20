// in while loop
// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the number"));
// let product=1;
// while (number>0){
//     product=product*(number%10);
//     number=Math.floor(number/10);
// }
// console.log("Product of digits=",product);



// in for loop
const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
let product=1;
for (;number>0; number=Math.floor(number/10)) {
    product*=number%10;
}
console.log("Product of digits=",product);