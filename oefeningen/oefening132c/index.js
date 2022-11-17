function getInputForm(){
    maxGetal = document.getElementById("maxgetal").value;
    hoeveelGetallen = document.getElementById("maxoef").value;
    myPrint()
}
let maxGetal;
let hoeveelGetallen;
let array1 = [];
let array2 = [];
let array3 = [];

function myPrint() {
    let x = 0;
    let result=""
    while (x < hoeveelGetallen) {
        array1.push(Math.floor(Math.random() * maxGetal));
        array2.push(Math.floor(Math.random() * maxGetal));
        array3.push(array1[x] + array2[x]);
        result += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Oefening ${x + 1}</h5>
    <p id="oefening${x}" class="card-text">${array1[x]} + ${array2[x]} = ?</p>
    <a id="button${x}" onclick="showSol(${x})" href="#" class="btn btn-primary">Toon oplossing</a>
  </div>
</div>`
        x++;
    }
    resultaat = document.getElementById("cards")
    resultaat.innerHTML = result
}

function showSol(x) {
    let kaart = document.getElementById(`oefening${x}`)
    kaart.innerHTML= `<p id="oefening${x}" class="card-text">${array1[x]} + ${array2[x]} = ${array3[x]}</p>`

}

