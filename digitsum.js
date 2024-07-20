// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the number:-"));
// let sum=0;
// while (number>0){
//     sum=sum+(number%10);
//     number=Math.floor(number/10);
// }
// console.log(sum);



const prompt=require('prompt-sync')();
let N=parseInt(prompt("Enter a number:-"));
while (N>=10){
  let sum=0;
  while (N>0){
    sum+=N%10;
    N=Math.floor(N/10);
  }
  N=sum;
}
console.log(N);