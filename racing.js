const playerImg = new Image();
playerImg.src = "images/player-car.png";

const enemyRed = new Image();
enemyRed.src = "images/enemy-red.png";

const enemyBlue = new Image();
enemyBlue.src = "images/enemy-blue.png";

const enemyYellow = new Image();
enemyYellow.src = "images/enemy-yellow.png";

const roadImg = new Image();
roadImg.src = "images/road.png";
const canvas = document.getElementById("race");
const ctx = canvas.getContext("2d");

let gameRunning = false;

const road = {
    x: 80,
    width: 240,
    lineY: 0
};

const player = {
    x: 170,
    y: 520,
    width: 60,
    height: 100,
    speed: 8
};

let score = 0;

document.getElementById("start").onclick = () => {
    if (!gameRunning) {
        gameRunning = true;
        gameLoop();
    }
};

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && player.x > road.x + 10) {
        player.x -= 20;
    }

    if (e.key === "ArrowRight" && player.x < road.x + road.width - player.width - 10) {
        player.x += 20;
    }
});

function drawRoad() {

    ctx.fillStyle = "#2f2f2f";
    ctx.fillRect(road.x, 0, road.width, canvas.height);

    ctx.fillStyle = "white";

    for (let i = road.lineY; i < canvas.height; i += 50) {
        ctx.fillRect(195, i, 10, 30);
    }

    road.lineY += player.speed;

    if (road.lineY >= 50) {
        road.lineY = 0;
    }
}

function drawPlayer() {

    ctx.fillStyle = "#ff0000";

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}
const enemies = [
{
x:120,
y:-150,
width:60,
height:100,
color:"yellow"
},
{
x:220,
y:-400,
width:60,
height:100,
color:"lime"
}
];

function drawEnemies(){

for(let i=0;i<enemies.length;i++){

let e=enemies[i];

ctx.fillStyle=e.color;

ctx.fillRect(e.x,e.y,e.width,e.height);

e.y+=player.speed+2;

if(e.y>canvas.height){

e.y=-150;

e.x=(Math.random()>0.5)?120:220;

score++;

}

}

}

function checkCollision(){

for(let i=0;i<enemies.length;i++){

let e=enemies[i];

if(

player.x<e.x+e.width &&
player.x+player.width>e.x &&
player.y<e.y+e.height &&
player.y+player.height>e.y

){

gameRunning=false;

alert("💥 Game Over!\nScore : "+score);

location.reload();

}

}

}
function drawScore(){

ctx.fillStyle="white";
ctx.font="24px Arial";
ctx.fillText("Score : "+score,20,35);

}

function gameLoop(){

if(!gameRunning) return;

ctx.clearRect(0,0,canvas.width,canvas.height);

drawRoad();

drawPlayer();

drawEnemies();

checkCollision();

drawScore();

requestAnimationFrame(gameLoop);

}