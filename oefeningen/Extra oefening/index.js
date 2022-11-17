/**
 * Geef een te raden getal in: 67
 * Raad het getal: 5
 *
 * de pc zegt dan hoger of lager tot het getal geraden is
 * geef ook weer hoeveel pogingen de gebruiker nodig heeft.
 *
 * for loop!
 * **/
let teRadenGetal = Number(prompt("Te raden getal?"));
var raadGetal = Number(prompt("Kies een getal:"));
let counter = 0;
for(let teller=1;teller>0;teller++){
    if (raadGetal<teRadenGetal){
        console.log("Getal is Groter");
        counter++;
        raadGetal = Number(prompt("Geef getal in?"))
    }else if (raadGetal>teRadenGetal){
        console.log("Getal is kleiner");
        counter++
        raadGetal = Number(prompt("Geef getal in?"))
    }else{
        counter++
        console.log ("Gevonden, het getal is",raadGetal,"en je hebt", counter,"keer geraden.")
        teller = -1;
    }
}


let teRadenGetal = Number(prompt("Te raden getal?"));
var raadGetal = Number(prompt("Kies getal"));
let counter = 0
for (let teller =1, teller>0,teller++)