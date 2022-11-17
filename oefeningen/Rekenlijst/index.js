let resultaat=""; //Lege string om de myprint te vullen
let bewerking; // x, + * /
let hoeveelOef; // Hoeveel oefeningen
let minimum; // Van
let maximum; // tot
let array1 = []; // Eerste cijfer
let array2 = []; // 2de cijfer
let array3 = []; // Oplossing
let x = 0; // Teller
var mix = ['+','-','*','/'];

// Input ingeven in de functie
function getInputForm(){
    bewerking = document.getElementById("oefeningen").value; // / * - +
    console.log(bewerking)
    hoeveelOef = document.getElementById("hoeveelheden").value; // Hoeveel oefeningen
    minimum = document.getElementById("Van").value; // Van
    maximum = document.getElementById("Tot").value; // Tot

    myPrint()
}

// Al de gegevens van hierboven worden meegegeven hieronder, voor de berekening:
function myPrint() {
    document.getElementById('start').style.visibility='hidden'; //Start knop onzichtbaar maken
    titel = document.getElementById("titel") //Titel
    titel.innerHTML += `<h2>De Oefeningen</h2>` // Header oefeningen toevoegen
    while (x < hoeveelOef) { // Zolang x kleiner is dan het maximum ingegeven (VAN) getal, is er een loop:
        array1.push(Math.floor(Math.random() * maximum)); // Eerste getal, random, afgerond zonder komma.
        array2.push(Math.floor(Math.random() * maximum)); // 2de getal, random, afgerond zonder komma.
        if (bewerking ==="1") { //+-/* toevoegen als de bewerking wordt gekozen.
            bewerking = "+"
        }
        else if (bewerking === "2") {
            bewerking = "-"
        }
        else if (bewerking === "3") {
            bewerking = "*"
        }
        else if (bewerking === "4") {
            bewerking = "/"
        }
       //  array3.push(array1[x] + array2[x]); // 3de getal is de oplossing van array 1 en array 2
        resultaat = document.getElementById("resultaat") // Het resultaat
        resultaat.innerHTML += `<p class="list-group-item px-2 border-0 rounded-3 list-group-item-primary mt-2 mx-2"> ${array1[x]} ${bewerking} ${array2[x]} = </p>`// Resultaten zonder oplossing in een mooi jasje
        // resultaat.innerHTML += `<p class="text-primary list-group-item m-0"> ${array1[x]} + ${array2[x]} = ${array3[x]} </p>`// Resultaat met oplossing
        x++; // + 1 in de loop.
    }
}

