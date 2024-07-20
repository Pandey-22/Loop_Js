const prompt=require('prompt-sync')();
var song="abc";
song=song.length;
let count=0;
let T=prompt("please enter the number:-");
let C=parseInt(prompt("please enter the number:-"))
let i=0;
while (i<T){
    if (song<=T && C<T){
        count+=1;
        song+=song
    }
    i+=1;
}
console.log(count);