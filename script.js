// ===== FreeGames =====

document.addEventListener("DOMContentLoaded", () => {

const search = document.getElementById("search");

const playBtn = document.getElementById("playNow");

const cards = document.querySelectorAll(".gameCard");


// Search Games

if(search){

search.addEventListener("keyup", () => {

const value = search.value.toLowerCase();

cards.forEach(card => {

const title = card.innerText.toLowerCase();

if(title.includes(value)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

}


// Play Button

if(playBtn){

playBtn.addEventListener("click", () => {

window.location.href = "games.html";

});

}


// Card Click

cards.forEach(card => {

card.addEventListener("click", () => {

alert("Game page is coming soon!");

});

});

});


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".categoryCard,.gameCard").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".6s";

observer.observe(el);

});