const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
let i=1;
let count=0;
while (i<=number){
    if (i%2==0){
        console.log("Even Number =",i);
        count+=1
    }
    else{
        console.log("Odd Number =",i);
        c=count+1
    }
    i+=1
}
console.log("Your count of Even Numer =",count);
console.log("Your count of Odd Numer =",c);