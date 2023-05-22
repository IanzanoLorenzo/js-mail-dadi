"use strict";

let emails = ['primamail@gmail.com', 'secondamail@gamil.com', 'terzamail@gmail.com', 'quartamail@gmail.com', 'quintamail@gmail.com', 'sestamail@gmail.com', 'settimamail@gmail.com', 'ottavamail@gmail.com', 'nonamail@gmail.com', 'decimamail@gmail.com'];
const searchButton = document.getElementById("search");
const risposta = document.getElementById("risposta")

searchButton.addEventListener('click', function(){
    
    let flag = false
    let emailUser = document.getElementById("user-email")

    for ( let i = 0; i < emails.length; i++) {
        if (emails[i].toLowerCase() === emailUser.value.toLowerCase()){            
            flag = true
        }
    }

    if  ( flag === true){
        risposta.innerHTML = `${emailUser.value.toUpperCase()} HA ACCESSO AL SITO`
    } else{
        risposta.innerHTML = `${emailUser.value.toUpperCase()} NON HA ACCESSO AL SITO`
    }

    emailUser.value = ''
}
)