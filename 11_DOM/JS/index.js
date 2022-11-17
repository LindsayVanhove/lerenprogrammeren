/*1*/
/* alert(document.body.innerHTML); */
/* alert(document.documentElement.innerHTML);*/

/*2*/
/* document.getElementById("p02").innerHTML= document.getElementById("h101").firstChild.nodeValue; */

/*3 BELANGRIJK*/
/*document.body.onload = addElement;

function addElement (){
    //een nieuwe div creëren met de property createElement
    var newDiv = document.createElement("div");
    //toevoegen van tekst aan de nieuwe div
    var newContent = document.createTextNode("Hallo, Full Stack!");
    // voeg de tekst toe aan de nieuwe div
    newDiv.appendChild(newContent);
    // voeg de div VOOR de reeds bestaande div toe in de DOM (document object model)
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}*/


/* 4 */
// document.write("Hallo iedereen");
// document.write("Klaar");
//
// document.writeln("Hallo iedereen");
// document.writeln("Klaar");
//
// document.write("\t\thallo\nworld\n");
// document.writeln("\"Hallo iedereen welkom. \"\n");
// document.writeln('Smiley face: \&#128515;\n');

// //Oefening//
// let cursisten = ['Tom', 'Tim', 'Bart', 'Els'];
// var newUL = document.createElement('ul');
// document.body.appendChild(newUL)
// for (index in cursisten){
//     var newLI = document.createElement('li');
//     newUL.appendChild(newLI)
//     newLI.innerHTML = cursisten[index]
// }
//
// let nummer = Number(prompt("Geef een getal in"));

// let alleBMW = document.getElementsByClassName("bmw");
let alleBMW = document.querySelectorAll(".bmw");

// let result = document.getElementById("resultArea");
let result = document.querySelector("#resultArea");

document.getElementById("resultArea").style.color = "blue";
document.getElementById("resultArea").style.fontsize = "larger";

for (let auto of alleBMW){
    result.innerHTML += `${auto.textContent} \n`;
}