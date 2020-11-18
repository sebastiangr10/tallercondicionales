let placa;
let pasajeros;
let ruta;
let pasaje;
let dinero;

placa=(document.getElementById("placa").value)

function calcular(){
    pasajeros=Number(document.getElementById("pasajeros").value)
    ruta=(document.getElementById("ruta").value)
dinero=pasajeros*valorpasaje(ruta)
alert(dinero)
(document.getElementById("dinero").value=dinero)
}
function valorpasaje(ruta){
switch(ruta){
    case "a":
    case "A":
        pasaje=1200;
        break;
        case "b":
        case "B":  
            pasaje=1000;
break;
}
return pasaje
}