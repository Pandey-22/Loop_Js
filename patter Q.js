let i=1;
while (i<=5){
    let j=1;
    while (j<=i){
        process.stdout.write("*"+" ");
        j+=1;
    }
    console.log();
    i+=1;
}
let p=5;
let r=0;
while (r<=p){
    let m=0;
    while (m<=p-r){
        process.stdout.write("*"+" ");
        m+=1;
    }
    console.log();
    r+=1;
}