"use strict";

let emails = ['primamail@gmail.com', 'secondamail@gamil.com', 'terzamail@gmail.com', 'quartamail@gmail.com', 'quintamail@gmail.com', 'sestamail@gmail.com', 'settimamail@gmail.com', 'ottavamail@gmail.com', 'nonamail@gmail.com', 'decimamail@gmail.com'];
const searchButton = document.getElementById("search");
const risposta = document.getElementById("risposta")

searchButton.addEventListener('click', function(){
    
    let flag = false
    let emailUser = document.getElementById("user-email").value

    for ( let i = 0; i < emails.length; i++) {
        if (emails[i].toLowerCase() === emailUser.toLowerCase()){            
            flag = true
        }
    }

    if  ( flag === true){
        risposta.innerHTML = `${emailUser.toUpperCase()} HA ACCESSO AL SITO`
    } else{
        risposta.innerHTML = `${emailUser.toUpperCase()} NON HA ACCESSO AL SITO`
    }
}
)