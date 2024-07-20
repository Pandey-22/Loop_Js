const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter the number of term:-"));
let sum=0;
let sum1=0;
console.log("Series are"+" ");
let i=0;
while (i<num){
    sum=sum*10+2;
    process.stdout.write(sum+" ");
    sum1=sum1+sum;
    i+=1;
}
console.log();
console.log("Sum of Series =",sum1)