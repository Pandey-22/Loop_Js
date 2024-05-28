console.log("Let's play a game that is EPIC BATTLE🥳");
console.log("Select your move (R,P,S");
let player1_score=0;
let player2_score=0;
while (true){
    let player1=prompt("take move for player1 ")
    let player2=prompt("take move for player2 ")
    if (player1=="R"){
        if (player2=="R"){
            console.log("You both picked Rock, draw!🥳");
        }
        else if (player2=="P"){
            console.log("Player1's Rock is smothered by Player2's Paper!🤣");
            player2_score+=1;
        }
        else if (player2=="S"){
            console.log("Player1 smashed Player2's Scissors into dust with their Rock!🤣");
            player1_score+=1;
        }
        else{
            console.log("Invalid move player2!🥺");
        }
    }
    else if (player1=="P"){
        if (player2=="R"){
            print("Player2's Rock is smothered by Player1's Paper!😂");
            player1_score+=1;
        }
        else if (player2=="P"){
            console.log("You both picked Paper!🥳");
        }
        else if (player2=="S"){
            console.log("Player1's Paper is cut into tiny pieces by Player2's Scissors!😂");
            player2_score+=1;
        }
        else{
            console.log("Invalid move player2!🥺");
        }
    }
    else if  (player1=="S"){
        if (player2=="R"){
            console.log("Player 2's Rock makes metal-dust out of Player1's Scissors!😅");
            player2_score+=1;
        }
        else if (player2=="P"){
            console.log("Player1's Scissors make confetti out of Player2's paper!😅");
            player1_score+=1;
        }
        else if (player2=="S"){
            console.log("You both picked Scissors!🥳");
        }
    }
    console.log("Player1's score=",player1_score);
    console.log("player2's score=",player2_score);
    if (player1_score==3 || player2_score==3){
        console.log("Yah! Player1 is winner🥳.");
        break
    }
    else if (player2_score==3){
        console.log("Yah! Player2 is winner🥳.");
        break
    }
    else {
        continue
    }
}