// const prompt=require('prompt-sync')();
// let n1=parseInt(prompt("please enter the 1st number:-"));
// let n2=parseInt(prompt("please enter the 2nd number:-"));
// let n3=parseInt(prompt("please enter the 3rd number:-"));
// let n4=parseInt(prompt("please enter the 4th number:-"));
// let i=1;
// let avarage;
// while (i<=4){
//     if (n1>=0 && n2>=0 && n3>=0 && n4>=0){
//         avarage=(Math.floor((n1+n2+n3+n4)/4));
//     }
//     else if (n1>=0 && n2>=0 && n3>=0 && n4<0){
//         avarage=(Math.floor((n1+n2+n3)/3));
//     }
//     else if (n1>=0 && n2>=0 && n4>=0 && n3<0){
//         avarage=(Math.floor(n1+n2)/2);
//     }
//     else if (n1>=0 && n3>=0 && n4>=0 && n2<0){
//     avarage=(Math.floor(n1)/1);
//     }
//     else{
//         break
//     }
//     i+=1;
// }
// console.log("Avarage = ",avarage);

  

const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
let NS=number.toString();
let sum=0;
for (let i=0; i<NS.length; i++){
    let digit=parseInt(NS[i]);
    if (i%2==0){
        sum+=digit;
    }
    else{
        sum-=digit
    }
}
console.log(sum);