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
    scoreboard.innerText = 0;
}

let isAlive = setInterval(function (){
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        console.log("collusion");
        alert("GAME OVER!")
        gameOver();
    }else if ( cactusLeft <= 0 && cactusLeft > -25 ){
        console.log("passed")
        renderScore();
        score += 5;
    }
}, 10);

document.addEventListener("keydown", function(event) {
    jump();
});