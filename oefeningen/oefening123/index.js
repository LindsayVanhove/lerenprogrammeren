const aantalLijnen = Number(prompt("Geef het aantal lijnen in."))
const helft = aantalLijnen/2;
let ster = "*";
for(let i=1;i<=helft;i++){
    console.log(ster);
    ster = ster + "*";
}
ster = ster.substring(0,ster.length-1);
for(let i=1; i<=helft;i++){
    console.log(ster);
    ster = ster.substring(0,ster.length-1);

}

// bij lijn 6 zijn er 6 sterren over maar de laatste ster staat ACHTER de log en 'zweeft'
// waardoor deze niet zichtbaar is. Bij lijn 8 wordt deze dan afgetrokken naar 5 sterren
// bij lijn 9 beginnen we weer bij 5 sterren (door (lijn 2 - helft aantal sterren)
// en bij lijn 11 worden ze weer afgetrokken.
// dus van 1 naar 5 en van 5 naar 1