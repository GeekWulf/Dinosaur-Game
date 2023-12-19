const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var scoreBoard = document.getElementById("score");
var bestScore = document.getElementById("hi-score")
var score = 0;
var hiScore = 0;

function jump() {
    if (dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        }, 300); 
    }    
}

function renderScore() {
    scoreBoard.innerText = score;
}
function gameOver() {
    if (score > hiScore) {
        hiScore = score;
        bestScore.innerText = hiScore;
        score = 0;
    }
}

let isAlive = setInterval(function (){
    renderScore();
    score += 1;
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 300){
        console.log("collusion");
        alert("GAME OVER!")
        gameOver();
    }
}, 10);

document.addEventListener("keydown", function(event) {
    jump();
});