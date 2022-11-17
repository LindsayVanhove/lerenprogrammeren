/**Numerieke Arrays**/
let cursist = [] /*Lege array*/
let cursisten = ['Tom', 'Tim', 'Bart', 'Els']; /*Array van strings*/
let cursusJaar = [2018,2019,2020,2023]; /*Array van Numbers*/
/* let cursusjaar = new Array(2018,2019,2020,2023); - andere manier van schrijven*/

/*console.log(cursusJaar[1]);
console.log(cursisten);
console.log(cursisten.length);*/

let divResultaat = document.getElementById("resultaat");
divResultaat.innerHTML = cursisten[0];


/** associatieve arrays **/
let leerling={
    "Voornaam":'Tom',
    "Familienaam": 'Vanhoutte',
    "Plaats":'Roeselare',
    "Telefoon": "050112233",
}
console.log(leerling["Voornaam"]);
let familienaam = document.getElementById("familienaam");
familienaam.innerHTML = leerling["Familienaam"];

familienaam.innerHTML += " " + leerling["Voornaam"];
familienaam.innerHTML += " " + leerling["Telefoon"];

/**Meerdimensionale arrays (= geneste array)**/
let courseTeacher = [
    ['HTML5', 'Tom Vanhoutte'],
    ['CSS3', 'Tom Vanhoutte'],
    ['PHP', 'Tim Vanpimperzele'],
    ['JAVASCRIPT', 'Nie moeilijk'],
]
console.log(courseTeacher[2][1]) /*Telling begint altijd van 0. 2 is de php rij. 1 is de naam, (php is 0 in de rij)*/

/** Elementen toevoegen/verwijderen aan een Array  - functies**/
cursisten.push('Marieke'); /*Wordt toegevoegd aan einde van de array*/
console.log(cursisten);
cursisten.unshift('Thomas'); /*Toevoegen aan het begin van een array*/
console.log(cursisten);
cursisten.pop(); /*Laatste cursist verwijderen*/
console.log(cursisten);
cursisten.shift(); /*Verwijdert de eerste*/
console.log(cursisten);
cursisten.sort(); /* Sorteren van een array*/
console.log(cursisten);
cursisten.reverse();
console.log(cursisten);

let zin = "Full Stack developers"
zin.split(""); /* uit een array wordt een string gemaakt*/
console.log(zin [0]);
let test = zin.split(" ");
console.log(test);

zin.toLowerCase();
zin.toString();


/**ARRAYS en Loops**/
for (let i=0; i<cursisten.length; i++){
    console.log(cursisten[i]);
}

let i=0;
while (i <cursisten.length){
    console.log(cursisten[i]);
    i++;
}

for(let item in cursisten){
    console.log(item, ":",cursisten[item]);
}

cursisten.forEach(mijnFunctie)

function mijnFunctie(value, index){
    console.log(index, ":", value);
}

let getal1 = 5;
let getal2 = 6;
function som(a, b){
    return a+b;
}
function product(a, b){
    return a*b;
}

let resultaat = som(getal1, getal2);
console.log(resultaat);


let numbers = [1, 2, 3, 4, 5];

let multiply = numbers.map(x => x*2);
console.log(multiply);