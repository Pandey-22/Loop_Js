//  while loop 
// let i=0;
// while (i<=5){
//     let j=0;
//     while (j<=6){
        // if ((i==0 && j%3!=0) || (i==1 && j%3==0) || (i-j==2) || (i+j==8)){
        //     process.stdout.write("*"+" ");
        // }
        // else{
        //     process.stdout.write(" "+" ");
        // }
//         j+=1;
//     }
//     console.log();
//     i+=1;
// }



// in for loop
for (let i=0; i<=5; i++){
    for (let j=0; j<=6; j++){
        if ((i==0 && j%3!=0) || (i==1 && j%3==0) || (i-j==2) || (i+j==8)){
            process.stdout.write("*"+" ");
        }
        else{
            process.stdout.write(" "+" ");
        }
    }
    console.log();
}