const buttons = document.querySelectorAll(".playBtn");

buttons.forEach((button, index) => {

button.addEventListener("click", () => {

switch(index){

case 0:
window.location.href="snake.html";
break;

case 1:
alert("Car Racing Coming Soon");
break;

case 2:
alert("Flappy Bird Coming Soon");
break;

case 3:
alert("Tic Tac Toe Coming Soon");
break;

case 4:
alert("Chess Coming Soon");
break;

case 5:
alert("Memory Game Coming Soon");
break;

}

});

});