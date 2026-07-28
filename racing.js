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

function drawRoad(){

// Grass
ctx.fillStyle="#1faa00";
ctx.fillRect(0,0,70,canvas.height);
ctx.fillRect(330,0,70,canvas.height);

// Road
ctx.fillStyle="#3a3a3a";
ctx.fillRect(70,0,260,canvas.height);

// Road Borders
ctx.fillStyle="white";
ctx.fillRect(70,0,4,canvas.height);
ctx.fillRect(326,0,4,canvas.height);

// 4 Lane Divider Lines
ctx.fillStyle="white";

for(let y=-40;y<canvas.height;y+=60){

ctx.fillRect(135,y+road.lineY,4,30);

ctx.fillRect(200,y+road.lineY,4,30);

ctx.fillRect(265,y+road.lineY,4,30);

}

road.lineY += player.speed;

if(road.lineY>=60){
road.lineY=0;
}

// Trees
ctx.fillStyle="#0b7a00";

for(let i=0;i<8;i++){

ctx.beginPath();
ctx.arc(35,i*90+40,18,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.arc(365,i*90+40,18,0,Math.PI*2);
ctx.fill();

}

}

function drawPlayer() {

    ctx.fillStyle = "#ff0000";

    ctx.drawImage(
playerImg,
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

const enemyImages = [enemyRed, enemyBlue, enemyYellow];

ctx.drawImage(
    enemyImages[i % enemyImages.length],
    e.x,
    e.y,
    e.width,
    e.height
);

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