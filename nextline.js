const prompt=require('prompt-sync')();
let number=parseInt(prompt("Please enter a number"));
let i=1;
while (i<=number){
    let j=1;
    while (j<=i){
        process.stdout.write(j+" ");
        j+=1;
    }
    console.log();
    i += 1;
}