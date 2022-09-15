let tekenReeks = prompt("Geef een zin in.");
let karakter = prompt("Geef een letter (karakter) in.");

let  aantalKaraktersTellen = 0;

for(let plaats=0;plaats <= tekenReeks.length;plaats++){
    if(tekenReeks.charAt(plaats)=== karakter){
        aantalKaraktersTellen++
        // aantalKaraktersTellen +=1
        // aantalKaraktersTellen  = aantalKaraktersTellen +1;

    }
}
console.log (aantalKaraktersTellen)