const prompt = require('prompt-sync')();
let num=parseInt(prompt("please enter the number:-"));
sum=0;
a=1;
while (a<=num){
    let j=1;
    let f=1;
    while (j<=a){
        f=f*j;
        j+=1;
    }
    sum=sum+f;
    a+=1;
}
console.log(sum)