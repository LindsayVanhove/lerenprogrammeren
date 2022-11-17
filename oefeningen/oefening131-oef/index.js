/*
Schrijf  een  programma  waarmee  je  aan  de  gebruiker  vraagt  om  getallen  in  te  geven
tot hij een negatief getal intikt.  Lees de getallen in een array in.
Geef GETAL x in:
Vervolgens  vraag  je  aan  de  gebruiker  het  hoeveelste  getal  hij  wenst  te  zien  op  het
scherm.*/

let emptyRow = [];
let getal = 1;

while (getal>=0){
    getal = Number(prompt("Geef getal"));
    emptyRow.push(getal)

}
emptyRow.pop()

let positie = Number(prompt("Hoeveelste getal wil je zien?"))-1;

document.write(`${emptyRow}<br>`);

document.write(emptyRow[positie]);