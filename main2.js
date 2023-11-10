/**
 * Déclarations des spans
 * d'affichage du chrono
 */
var milisecondes = document.querySelector('#mili');
var secondes = document.querySelector('#sec');
var minuites = document.querySelector('#min');
var heures = document.querySelector('#hr');

/**
 * Déclaration des boutons
 */

var btn_demarrer= document.querySelector("#demarrer_btn");
var btn_stop= document.querySelector("#arreter_btn");
var btn_reset= document.querySelector("#reset_btn");

/**
 * Déclarations des variables globales
 */

var H = 0;
var min = 0;
var s = 0;
var ms = 0;
var intervalMiliseconde;
var intervalSeconde;
var intervalMinuites;
var intervalHeures;


/**
 * Interval milisecondes
 */
function setMilisecondes(){
    ms++;
    if (ms==99) {
        ms=0;
    }
    if (ms<10) {
        milisecondes.innerHTML = "0" + ms;
        
    }
    if (ms>=10) {
        milisecondes.innerHTML = ms;
        
    }
}

/**
 * Interval Secondes
 */
 function setSecondes(){
    s++;
    if (s==60) {
        s=0;
    }
    if (s<10) {
        secondes.innerHTML = "0" + s;
        
    }
    if (s>=10) {
     secondes.innerHTML = s;
        
    }
}

/**
 * Interval Secondes
 */
 function setMinuites(){
    min++;
    if (min==60) {
        min=0;
    }
    if (min<10) {
        minuites.innerHTML = "0" + min;
        
    }
    if (min>=10) {
        minuites.innerHTML = min;

    }
}

/**
 * Interval Heures
 */
 function setHeures(){
    H++;
    if (H==23) {
        H=0;
    }
    if (H<10) {
        heures.innerHTML = "0" + H;
        
    }
    if (H>=10) {
        heures.innerHTML = H;

    }
}

/**
 * Action sur le bouton demarrer
 */
btn_demarrer.addEventListener('click',()=>{
    intervalMiliseconde = setInterval(setMilisecondes,1);
    intervalSeconde = setInterval(setSecondes,1000);
    intervalMinuites = setInterval(setMinuites,60000);
    intervalHeures = setInterval(setHeures,360000);
});

/**
 * Action sur le bouton stop
 */
 btn_stop.addEventListener('click',()=>{
    clearInterval(intervalMiliseconde);
    clearInterval(intervalSeconde);
    clearInterval(intervalMinuites);
    clearInterval(intervalHeures);
});

/**
 * Action sur le bouton reset
 */
 btn_reset.addEventListener('click',()=>{
    clearInterval(intervalMiliseconde);
    clearInterval(intervalSeconde);
    clearInterval(intervalMinuites);
    clearInterval(intervalHeures);

    H = 0;
    min = 0;
    s = 0;
    ms = 0;
    milisecondes.innerHTML = "00";
    secondes.innerHTML = "00";
    minuites.innerHTML = "00";
    heures.innerHTML = "00";

});