const buttons = document.querySelectorAll(".playBtn");

buttons.forEach((button, index) => {

button.addEventListener("click", () => {

switch(index){

case 0:
window.location.href="snake.html";
break;

case 1:
alert("racing.html");
break;

case 2:
alert("flappybird.html");
break;

case 3:
alert("tictactoe.html");
break;

case 4:
alert("chess.html");
break;

case 5:
alert("memory.html");
break;

}

});

});