let bom="";
let screenwidth = screen.width;
let screenheight= screen.height;
let screenavailw = screen.availWidth;
let screenavailh = screen.availHeight;
let screencolordept = screen.colorDepth;
let screenpixeldept = screen.pixelDepth;
let wl = window.location.href;
let wh= window.location.hostname;
let wp = window.location.pathname;
let wpr = window.location.protocol;
let wpo = window.location.port;

bom = `screenwidth=${screenwidth},screenheigth=${screenheight}, screenavailw=${screenavailw}, screenavailh=${screenavailh}, screencolordepth=${screencolordept}, screenpixeldept=${screenpixeldept},href=${wl},hostname=${wh},pathname=${wp}, protocol=${wpr}, port=${wpo}`;


document.getElementById("demo").innerHTML= bom;

function goback(){
    window.history.back();
}

function myFunction(){
    alert('hoi, na 3 sec');
}

let myfunc =setInterval(function(){
    alert("hoi, interval");
},5000);