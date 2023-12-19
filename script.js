const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var score = 0;
var scoreboard = document.getElementById("score");

function jump() {
    if (dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        }, 300); 
    }    
}

function renderScore() {
    scoreboard.innerText = score;
}
function gameOver() {
    score = 0;
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