/*
Je schrijft 3 arrays
De eerste 2 arrays vul je met 10 getallen op met waarden van 0 tot 10.
De derde array vul je vervolgens up met de som van de waarden in arrays 1 en 2.
Weergave op het scherm:
1+1=2
2+2=4
3+3=6
4+4=8
*/

let array1 = [];
let array2 = [];
let array3 = [];

for(let i=0;i<=10;i++){
    array1.push(i);
    array2.push(i);
    array3.push(i+i);
    document.write(`${i} + ${i} = ${i+i} <br>`);
}
console.table(array1);
console.table(array2);
console.table(array3);
