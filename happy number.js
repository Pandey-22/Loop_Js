// 19 is happy number
// 1**2 + 9**2 = 82
// 8**2 + 2**2 = 68
// 6**2 + 8**2 = 100
// 1**2 + 0**2 + 0**2 = 1


const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter the number:-"));
x=num;
while (x>10){
    sum=0;
    while (x>0){
        let r=x%10;
        sum=sum+(r**2);
        x=Math.floor(x/10);
    }
    x=sum;
}
if (sum==1){
    console.log(num,"is Happy Number");
}
else{
    console.log(n,"is not Happy Number")
}