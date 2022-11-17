let geboorteJaar = Number(prompt("Geef je geboortejaar in."));
let jaartal = Number(prompt("Geef dit jaartal in."));
if (jaartal-geboorteJaar>=18){
    console.log ("U mag alles")
}else if(jaartal-geboorteJaar<=0){
    console.log ("dit kan niet")
}else{
    console.log ("U bent minder dan 18 jaar.")
}

