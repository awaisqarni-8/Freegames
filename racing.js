const canvas = document.getElementById("race");
const ctx = canvas.getContext("2d");

let gameRunning = false;

const car = {
x:170,
y:540,
width:60,
height:100,
speed:25
};

document.getElementById("start").onclick = () => {
gameRunning = true;
};

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowLeft" && car.x>20)
car.x-=car.speed;

if(e.key==="ArrowRight" && car.x<320)
car.x+=car.speed;

});

function drawCar(){

ctx.fillStyle="red";

ctx.fillRect(car.x,car.y,car.width,car.height);

}
let enemy={
x:Math.floor(Math.random()*6)*60+20,
y:-120,
width:60,
height:100
};

let score=0;

function draw(){

if(!gameRunning) return;

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#555";
ctx.fillRect(80,0,240,650);

ctx.strokeStyle="white";

for(let i=0;i<650;i+=40){
ctx.beginPath();
ctx.moveTo(200,i);
ctx.lineTo(200,i+20);
ctx.stroke();
}

drawCar();

ctx.fillStyle="yellow";
ctx.fillRect(enemy.x,enemy.y,enemy.width,enemy.height);

enemy.y+=8;

if(enemy.y>650){

enemy.y=-120;

enemy.x=Math.floor(Math.random()*4)*60+100;

score++;

}

if(
car.x<enemy.x+enemy.width &&
car.x+car.width>enemy.x &&
car.y<enemy.y+enemy.height &&
car.y+car.height>enemy.y
){

alert("💥 Game Over\nScore : "+score);

location.reload();

}

ctx.fillStyle="white";
ctx.font="25px Arial";
ctx.fillText("Score : "+score,20,40);

requestAnimationFrame(draw);

}

draw();