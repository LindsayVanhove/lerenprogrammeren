let age = Number(prompt("Geef leeftijd"));
if (age>=18){
    console.log("U mag meedoen")
 let aantalVakjes = Number(prompt("Aantal vakjes? Keuze uit 12,10,8, 6, 4 of 2"))
    if (aantalVakjes===12){
        console.log ("20 euro")
    }else if (aantalVakjes===10){
        console.log ("18 euro")
    }else if (aantalVakjes===8){
        console.log ("14 euro")
    }else if (aantalVakjes===6){
        console.log ("12 euro")
    }else if (aantalVakjes===4){
        console.log ("8 euro")
    }else if (aantalVakjes===2){
        console.log ("6 euro")
    }
}else{
    console.log("U mag niet meedoen")
}