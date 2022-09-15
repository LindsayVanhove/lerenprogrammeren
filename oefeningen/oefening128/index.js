let getal = Number(prompt("Geef getal in."));
let i = 1;
let x = 1;
let resultaat = "";
for(i;i<=getal;i++){
    if(x <= getal){
        // console.log (x);
        resultaat = resultaat + x + ",";
    }
    x=x*2;
}
console.log(resultaat.substring(0, resultaat.length-1));

// length-1 is de komma die wordt verwijderd van het eindresultaat.