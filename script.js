let xp= 0;
let health = 100;
let gold = 50;
let currentWeapon= 0;
let fighting;
let button1 = document.querySelector("#button1")
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore(){
button1.innerText= "buy 10 health (10 Gold)" 
button2.innerText= "buy weapon (30 Gold)" 
button3.innerText= "Go to Town Square"
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
Text.innerText = "Yoooo, Entered the store"; 

}

function goCave () {
console.log("Going to Cave");
}
function fightDragon () {
console.log("Going to Fight Dragon");
}