const prompt=require('prompt-sync')();
let frequency={};
for (let i=0; i<5; i++){
    let number=parseInt(prompt("please enter a number:-"));
    if (frequency[number] != undefined){
        frequency[number]+=1;
    } 
    else{
        frequency[number]=1;
    }
}
for (let number in frequency){
    console.log(`${number} = ${frequency[number]}`);
}