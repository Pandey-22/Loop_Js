// # a=int(input("enter the number"))
// # i=1
// # sum=0
// # while i<=a:
// #     if i%2==0:
// #         sum=sum+i
// #     i=i+1
// #     print("even=",sum)
// # print("sum of even numbers =",sum)

const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let i=1;
let sum=0;
while (i<=number){
    if (i%2!=0){
        sum=sum+i;
    }
    i+=1;
}
console.log("Sum of odd Number =",sum);