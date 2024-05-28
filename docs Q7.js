// let i=1;
// while (i<100){
//     if (i%7==0){
//         console.log(i);
//     }
//     i+=1;
// }




const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter the number"));
let i=1;
let s=0;
while (i<=num){
    if (i%3==0){
        s=s+i**2;
    }
    i+=1;
}
console.log(s);