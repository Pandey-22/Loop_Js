// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the number"));
// let count=0;
// let i=1;
// while (i<=number){
//     if (number%i==0){
//         count+=1;
//     }
//     i+=1;
// }
// if (count==2){
//     console.log("Prime Number");
// }
// else{
//     console.log("Composite Number");
// }





const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let i=1;
while (i<=number){
    let j=2;
    while (j<=i+1){
        if (i%j==0){
            if (i==j){
                console.log("Prime Number =",i);
            }
            break
        }
        j+=1;
    }
    i+=1;
}