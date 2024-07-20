const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
let digitCount=1;
while (number>0){
    number=Math.floor(number/10);
    digitCount+=1;
}
console.log("Count Number of Digite =",digitCount)




// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the number:-"));
// let revnum=0;
// while (number>0){
//     let digit=number%10;
//     revnum=revnum*10+digit;
//     number=Math.floor(number/10);
// }
// console.log(revnum);