const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startScreen = document.getElementById("startScreen");
const screen = document.getElementById("screen");
var startButton = document.getElementById("startScreen");
var scoreBoard = document.getElementById("score");
var bestScore = document.getElementById("hi-score");
var score = 0;
var hiScore = 0;

function jump() {
    if (dino.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        }, 250); 
    }    
}

function gameOver() {
    if (score > hiScore) {
        hiScore = score;
        console.log("high score: " + hiScore);
        bestScore.innerText = hiScore;
        score = 0;
    }

    cactus.classList.remove("cactusMove");
    var subText = document.createElement("h4");
    console.log("collusion");
    startButton.childNodes[0].innerHTML = "Play Again?";
    startButton.childNodes[0].appendChild(subText);
    subText.innerHTML = "(click to play again)";
}

function renderScore() {
    score += 1;
    scoreBoard.innerText = score;
}

startButton.addEventListener("click", () => {

    console.log("high score: " + hiScore);
    startButton.childNodes[0].innerHTML = "";
    
    let isAlive = setInterval(function (){
        console.log(score);
        document.addEventListener("keydown", function(event) {
            jump();
        });
        
        cactus.classList.add("cactusMove");

        renderScore();   

        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 300){
            gameOver();
            clearInterval(isAlive);
        }

    }, 100);
})