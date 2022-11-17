function getInputForm(){
    maxGetal = document.getElementById("maxgetal").value;
    hoeveelGetallen = document.getElementById("maxoef").value;
    myPrint()
}

let resultaat="";
let maxGetal;
let hoeveelGetallen;
let array1 = [];
let array2 = [];
let array3 = [];
let x = 0;

function myPrint() {
    while (x < hoeveelGetallen) {
        array1.push(Math.floor(Math.random() * maxGetal));
        array2.push(Math.floor(Math.random() * maxGetal));
        array3.push(array1[x] + array2[x]);
        resultaat = document.getElementById("resultaat")
        resultaat.innerHTML += `<p class="text-primary list-group-item m-0">${array1[x]} + ${array2[x]} = ${array3[x]} </p>`
        x++;
    }
}