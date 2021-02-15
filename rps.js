let playerScore = 0, computerScore = 0
let playerPlay,computerPlay

//computer will choose randomly between rock,paper or scissor.
function compPlay(){

    let choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function Play(player , comp){
    //User should enter their move
    let playerPlay = (prompt("Rock, Paper or Scissor ?")).toLowerCase();

    //calculate points according to player and computer's moves.
    if(computerPlay == playerPlay)
        return ("Tie !")
    else if(playerPlay == "rock"){
        if(computerPlay == "scissor"){
            playerScore ++
            return ("You win! Rock beats scissors!")
        }
        else{
            computerScore ++
            return ("You lose! Paper beats rock!")
        }
    }
    else if(playerPlay == "paper"){
        if(computerPlay == "scissor"){
            computerScore ++
            return ("You lose! scissor beats paper!")
        }
        else{
            playerScore ++
            return ("You win! Paper beats rock!")
        }
    }       
    else if(playerPlay == "scissor"){
        if(computerPlay == "paper"){
            playerScore ++
            return ("You win! scissor beats paper!")
        }
        else{
            computerScore ++
            return ("You lose! rock beats scissor!")
        }
    } 
}

//to have 5 rounds of the game.
function game(){
    for(let i=0; i<5; i++){
        computerPlay = compPlay()
        // console.log(computerPlay)
        console.log(Play(playerPlay, computerPlay));
        console.log("You: ",playerScore," Computer: ",computerScore)
    }
    if(playerScore > computerScore)
        console.log("YOU WIN! ")
    else if(playerScore < computerScore)
        console.log("YOU LOSE! ")
    else 
        console.log("TIE!")

}

console.log(game())