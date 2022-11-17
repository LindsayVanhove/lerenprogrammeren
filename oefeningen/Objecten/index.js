/*
/!* 1. Instantie van een object*!/

let persoonA = new Object();
persoonA.naam = "Lindsay";
persoonA.geboortedatum = 1989;
persoonA.geslacht = "F";


console.log(persoonA);


/!*Instantie van een object*!/

let persoonB = new Object();
persoonB.naam = "Lindsay";
persoonB.geboortedatum = 1989;
persoonB.geslacht = "F";


console.log(persoonB);*/

/*// 2. Constructor met properties en methodes.
let Persoon = function(naam, geboortedatum, geslacht){
    this.naam = naam;
    this.geboortedatum = geboortedatum;
    this.geslacht = geslacht;
}

Persoon.prototype.berekenLeeftijd = function (){
    return year-this.geboortedatum;
    const d = new Date ();
    let year = d.getFullYear();
}




let persoonA = new Persoon("Lindsay", 1989, "F");
let persoonB = new Persoon("Tim", 1980, "M");

console.log(persoonA);
console.log(persoonA.naam);
console.log(persoonB.geslacht);
console.log(persoonB.berekenLeeftijd());*/


//3 Classes - Object orient programmeren
class Persoon{
    constructor(naam, geboortedatum, geslacht){
        this.naam = naam;
        this.geboortedatum = geboortedatum;
        this.geslacht = geslacht;
    }

   berekenLeeftijd(){
       const d = new Date ();
        let year = d.getFullYear();
       return year-this.geboortedatum;
    }
    present(){
        return `Ik ben een ${this.geslacht} en mijn naam is ${this.naam}`
    }
}
persoonA = new Persoon("Lindsay", 1989, "vrouw");
console.log(persoonA.present());

class Werknemer extends Persoon{
    constructor(naam,geboortedatum,geslacht,soort){
        super(naam,geboortedatum,geslacht) //properties door overerving
        this.soort = soort;
    }
    show(){
        return this.present() + ` en ik ben een ${this.soort}`;
    }
}
persoonB = new Werknemer("Tim",1980,"man","bediende");
console.log(persoonB);
console.log(persoonB.present());
console.log(persoonB.show());

persoonB.naam = "Thijs";
console.log(persoonB.show());