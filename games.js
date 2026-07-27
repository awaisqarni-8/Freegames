const buttons = document.querySelectorAll(".playBtn");

buttons.forEach((button, index) => {

button.addEventListener("click", () => {

switch(index){

case 0:
window.location.href="snake.html";
break;

case 1:
window.location.href = "racing.html";
break;

case 2:
window.location.href =        ("flappybird.html");break;

case 3:
window.location.href = ("tictactoe.html");break;

case 4:
window.location.href = ("chess.html"); break;

case 5:
window.location.href = ("memory.html");
break;

}

});

});