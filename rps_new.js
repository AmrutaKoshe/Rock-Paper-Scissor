//by deafult, both scores are 0
let playerScore=0, computerScore=0;
let playerPlay,computerPlay;


//player chooses their move
document.getElementById("playRock").addEventListener("click", playerMove);
document.getElementById("playPaper").addEventListener("click", playerMove);
document.getElementById("playScissor").addEventListener("click", playerMove);

//display player's move
function playerMove(){

    document.getElementById(this.id).style.color = "blue";

    //computer chooses its move
    function computerMove(){
    let choices = ["compRock","compPaper","compScissor"];

    //storing computer's choice in a variable
    computerPlay = choices[Math.floor(Math.random()*choices.length)];
    return computerPlay;
    }

    //display computer's move
    document.getElementById(computerMove()).style.color = "blue";

    //storing player's choice in a variable
    playerPlay = this.id;

    //slicing the variables so that they can be compared
    computerPlay = computerPlay.slice(4);
    playerPlay = playerPlay.slice(4);


    console.log(computerPlay);
    console.log(playerPlay);


    if(computerPlay == playerPlay)
        document.getElementById('display').innerHTML = "TIE !"
    else if(playerPlay == "Rock"){
        if(computerPlay == "Scissor"){
            playerScore ++
            document.getElementById('display').innerHTML = "Rock beats Scissor!"
        }
        else{
            computerScore ++
            document.getElementById('display').innerHTML = "Paper beats Rock!"
        }
    }
    else if(playerPlay == "Paper"){
        if(computerPlay == "Scissor"){
            computerScore ++
            document.getElementById('display').innerHTML = "Scissor beats Paper!"
        }
        else{
            playerScore ++
            document.getElementById('display').innerHTML = "Paper beats Rock!"
        }
    }       
    else if(playerPlay == "Scissor"){
        if(computerPlay == "Paper"){
            playerScore ++
            document.getElementById('display').innerHTML = "Scissor beats Paper!"
        }
        else{
            computerScore ++
            document.getElementById('display').innerHTML = "Rock beats Scissor!"
        }
    } 

    //display scores 
    document.getElementById("compScore").innerHTML = computerScore;
    document.getElementById("playScore").innerHTML = playerScore;

}


// playerPlay = playerMove();


    
// //computer chooses its move
// function computerMove(){
//     let choices = ["compRock","compPaper","compScissor"];
//     return choices[Math.floor(Math.random()*choices.length)];
// }

// //display computer's move
// document.getElementById(computerMove()).style.color = "blue";