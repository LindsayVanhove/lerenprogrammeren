document.querySelector("#id-checkbox").addEventListener("click",function(event){
    document.querySelector("#resultaat").innerHTML += "Sorry! <code>preventDefault()</code> verbied u dit aan te vinken.";
    event.preventDefault()
})