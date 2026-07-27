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