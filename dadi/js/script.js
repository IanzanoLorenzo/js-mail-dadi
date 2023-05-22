"use strict";

const playButton = document.getElementById("estrai");
const risultato = document.getElementById("risultato");
const risUser = document.getElementById("numero-user")
const risComputer = document.getElementById("numero-pc")

 risUser.innerHTML = 'Premi il pulsante per estrarre un numero'
 risComputer.innerHTML = 'Il computer estrarrà un numero insieme a te'


playButton.addEventListener("click", function(){

    let numberUser = Math.floor(Math.random() * 6) + 1
    let numberComputer = Math.floor(Math.random() * 6) + 1
    risUser.innerHTML = numberUser
    risComputer.innerHTML = numberComputer

    if (numberUser < numberComputer){
        risultato.innerHTML = `<h1>AHAHAHAHAHAH HAI PERSO</h1>`
    } else if(numberUser > numberComputer){
        risultato.innerHTML = `<h1>CONGRATULAZIONI, HAI VINTO</h1>`
    } else {
        risultato.innerHTML = `<h1>HAI PAREGGIATO</h1>`
    }
}
)