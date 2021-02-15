document.getElementById("playRock").addEventListener("click", playerMove);
document.getElementById("playPaper").addEventListener("click", playerMove);
document.getElementById("playScissor").addEventListener("click", playerMove);

function playerMove(){
    alert(this.id);
}