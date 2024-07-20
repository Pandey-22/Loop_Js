// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the numbe:-"));
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





// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the number:-"));
// let i=1;
// let c=0;
// while (i<=number){
//     let j=2;
//     while (j<=i+1){
//         if (i%j==0){
//             if (i==j){
//                 c+=1
//             }
//             break
//         }
//         j+=1;
//     }
//     i+=1;
// }
// console.log("Prime Number =",c);




const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
let i=1;
let c=0;
while (i<=number){
    let j=2;
    while (j<=i+1){
        if (i%j==0){
            if (i==j){
                if (number%i==0){
                    console.log(i);
                }
            }
            break
        }
        j+=1;
    }
    i+=1;
}