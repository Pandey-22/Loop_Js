const prompt=require('prompt-sync')();
let str=prompt("Enter a letter");
let count1=0;
let count2=0;
for (let i=0; i<str.length;i++){
    if ("aeiouAEIOU".includes(str[i])){
        count1+=1;
    } else if ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(str[i])){
        count2+=1;
    }
}
console.log("Vowels in str=",count1);
console.log("Consonants in str=",count2);
