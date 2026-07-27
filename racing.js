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