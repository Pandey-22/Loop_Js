const prompt=require('prompt-sync')();
let D=prompt("please enter the first letter of the direction:-");
if (D=="N" || D=="n"){
    console.log("You move North...");
}
else if (D=="S" || D=="s"){
    console.log("You move South...");
} 
else if (D=="E" || D=="e"){
    console.log("You move East...");
}
else if (D=="W" || D=="w"){
    console.log("You move West...");
}
else{
    console.log("Invalid direction. Try again.");
}