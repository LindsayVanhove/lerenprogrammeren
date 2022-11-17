/** loops **/
/** optellen en onder elkaar weer geven**/

for(let i=1;i<=10;i++){
    console.log(i);
}

/** optellen en naast elkaar weer geven**/
let resultaat = "";
for(let i=1;i<=10;i++){
    resultaat = resultaat + i +",";
} console.log(resultaat);
console.log(resultaat.substring(0,resultaat.length-1));


/** aftrekken en onder elkaar weer geven**/
for(let i=1;i>0;i--){
    console.log(i);
}


/** aftrekken met 2 en onder elkaar weer geven**/
for(let i=1;i>0;i-=2){
    console.log(i);
}

/*geneste for loop
 */
for(let i=1;i<=20;i++){
    for (let x=1;x<=i; x++){
        console.log(i+":"+x)
    } //links cijfer is buitenste loop, rechts is binnenloop.
}