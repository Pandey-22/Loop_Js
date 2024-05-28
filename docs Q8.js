const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let i=1;
let s=0;
let p=3;
let q=5;
while (i<=number){
    if (i%p==0 && i%q!=0){
        s=s+i;
    }
    i+=1;
}
console.log(s);