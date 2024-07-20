// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the number:-"));
// let i=1;
// let sum=0;
// while (i<=number){
//     if (i%2!=0){
//         sum=sum+i;
//     }
//     i+=1;
// }
// console.log("Sum of odd Number =",sum);


const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
let i=1;
let sum=0;
while (i<=number){
    if (i%2==0){
        sum=sum+i;
    }
    i+=1;
}
console.log("Sum of even Number =",sum);