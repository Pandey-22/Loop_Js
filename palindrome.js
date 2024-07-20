const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
duplicate=number;
let rev=0;
while (number>0){
    rev=(rev*10)+number%10;
    number=Math.floor(number/10);
}
if (duplicate==rev){
    console.log("This is Palindrome Number");
}
else{
    console.log("This not Palindrome Number");
}