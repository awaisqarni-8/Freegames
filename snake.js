let gameRunning = false;

let highScore = localStorage.getItem("highScore") || 0;

document.getElementById("highScore").innerText =
"High Score : " + highScore;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;

let snake = [
  { x: 10 * box, y: 10 * box }
];

let food = {
  x: Math.floor(Math.random() * 20) * box,
  y: Math.floor(Math.random() * 20) * box
};

let direction = "RIGHT";
let score = 0;

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function draw() {
if (!gameRunning) return;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // Snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "#00ff66" : "#66ff99";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  let headX = snake[0].x;
  let headY = snake[0].y;

  if (direction === "LEFT") headX -= box;
  if (direction === "UP") headY -= box;
  if (direction === "RIGHT") headX += box;
  if (direction === "DOWN") headY += box;

  // Eat Food
  if (headX === food.x && headY === food.y) {
    score++;
    document.getElementById("score").innerText = "Score : " + score;

    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box
    };

  } else {
    snake.pop();
  }

  let newHead = {
    x: headX,
    y: headY
  };

  // Game Over
  if (
    headX < 0 ||
    headY < 0 ||
    headX >= canvas.width ||
    headY >= canvas.height
  ) {
    if(score > highScore){
    highScore = score;
    localStorage.setItem("highScore", highScore);
}

alert("Game Over!\nScore: " + score);
location.reload();
  }

  snake.unshift(newHead);
}

const game = setInterval(draw, 120);
document.getElementById("startGame").addEventListener("click", () => {
    gameRunning = true;
});

document.getElementById("pauseGame").addEventListener("click", () => {
    gameRunning = false;
});

document.getElementById("restartGame").addEventListener("click", () => {
    location.reload();
});