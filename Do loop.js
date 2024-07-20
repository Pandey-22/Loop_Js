// meraki examples...
// var i=1
// do{
//   if(i%2==1){
//   console.log(i)
//   }
//   i+=1;
// }
// while (i <=10);




// const prompt=require('prompt-sync')();
// let num=parseInt(prompt("please enter the number:-"));
// let i=1;
// do {
//     if (i%2==1){
//         console.log(i);
//     }
//     i+=1;
// }
// while (i<=num);





const prompt=require('prompt-sync')();
let m=parseInt(prompt("please enter a number:-"));
let n=1
do{
   console.log(n,"*",m,"=",m*n);
   n+=1;
}        
while(n<=10)
