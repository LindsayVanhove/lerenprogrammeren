let eindGetal = Number(prompt("Geef eindgetal in:"));

for(let i =1;i <= eindGetal ; i++){
    var count = 0;
    for (let x=1;x<=i;x++){
        if(i%x ==0){
            count++
        }
    }
    if (count == 2){
        console.log(i)

    }
}

// i het getal waarmee het cijfer wordt gedeeld. Mag niet groter zijn dan het eindgetal dus i <= eindgetal.
//
