let nummer = Number(prompt("Hoeveel namen wil je ingeven"));
let array = []

for (let i =0; i<nummer ;i++){
    array.push((prompt("Geef een naam in")))
    if (i%2===0){
        document.write(`${array[i]} <br>`) ;
    }else{
        document.write(`&nbsp${array[i]} <br>`);
    }

}

