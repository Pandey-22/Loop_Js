// # n=int(input("enter the number"))
// # sum=0
// # i=1
// # while i<n:
// #     if n%i==0:
// #         sum=sum+i
// #     i=i+1
// # if sum==n:
// #     print(i," is perfect number")
// # else:
// #     print(i,"is not perfect number")
const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let sum=0;
let i=1;
while (i<number){
    if (number%i==0){
        sum=sum+i;
    }
    i+=1;
}
if (sum==number){
    console.log(i,"is Perfect Number");
}
else{
    console.log(i,"is not Perfect Number");
}