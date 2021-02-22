//by deafult, both scores are 0
let playerScore=0, computerScore=0;
let playerPlay,computerPlay;


//player chooses their move
document.getElementById("playRock").addEventListener("click", playerMove);
document.getElementById("playPaper").addEventListener("click", playerMove);
document.getElementById("playScissor").addEventListener("click", playerMove);

//display player's move
function playerMove(){

    //make the buttons default after each move
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.boxShadow = "";
    buttons[i].style.border = "";
    }

    //display player's move
    document.getElementById(this.id).style.boxShadow = "0px 0px 10px #ffcc99, 0px 0px 10px #ffe6cc";
    document.getElementById(this.id).style.border = "#ffbf80 0.8px solid";
    
    //play button sound
    var sound = document.getElementById('clickAudio')
    sound.currentTime = 0;
    sound.play();

    //computer chooses its move
    function computerMove(){
    let choices = ["compRock","compPaper","compScissor"];

    //storing computer's choice in a variable
    computerPlay = choices[Math.floor(Math.random()*choices.length)];
    return computerPlay;
    }

    //storing computer's choice in a variable
    computerPlay = computerMove();


    //display computer's move
    document.getElementById(computerPlay).style.boxShadow = "0px 0px 10px #ffcc99, 0px 0px 10px #ffe6cc";
    document.getElementById(computerPlay).style.border = "#ffbf80 0.8px solid";

    //storing player's choice in a variable
    playerPlay = this.id;

    //slicing the variables so that they can be compared
    computerPlay = computerPlay.slice(4);
    playerPlay = playerPlay.slice(4);


    //logic to calculate scores of player and computer
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

    //if computer wins
    if(computerScore == 5){
        document.getElementById("display").innerHTML = 'YOU LOSE! <button id="playAgain">PLAY AGAIN</button>';

        //disable other buttons
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        //play again should be enabled
        document.getElementById("playAgain").disabled = false;

        //reset the scores
        computerScore=0;
        playerScore=0;

        //play again event listener
        document.getElementById('playAgain').addEventListener("click",enableButtons);

    }

    //if player wins
    if(playerScore == 5){
        document.getElementById('display').innerHTML = "YOU WIN! <button id='playAgain'>PLAY AGAIN</button>";

        //disable other buttons
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        //play again button should be enabled
        document.getElementById("playAgain").disabled = false;

        //reset the scores
        computerScore=0;
        playerScore=0;

        //play again event listener
        document.getElementById('playAgain').addEventListener("click",enableButtons);
    }


    //enable all buttons
    function enableButtons(){

        document.getElementById('display').innerHTML = "START";

        //enable all buttons
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].style.boxShadow = "";
            buttons[i].style.border = "";
        }

        //display scores 
        document.getElementById("compScore").innerHTML = computerScore;
        document.getElementById("playScore").innerHTML = playerScore;

        //play button sound
        var sound1 = document.getElementById('playAudio')
        sound1.currentTime = 0;
        sound1.play();
        
    }

}
