let busuno;
let busdos;
let pasajeros1;
let pasajeros2;
let precio1;
let precio2;

function calcular(){
    busuno=(document.getElementById("pluno").value)
 busdos=(document.getElementById("pldos").value)

 pasajeros1=Number(document.getElementById("pasajeros1").value)
 pasajeros2=Number(document.getElementById("pasajeros2").value)

precio1=Number(document.getElementById("precio1").value)
precio1=Number(document.getElementById("precio1").value)

if(pasajeros1*precio1>pasajeros2*precio2){
    alert("el bus " + busuno + " recogio mas dinero")}
    else{
        alert("el bus  " + busdos + " recogio mas dinero")
    }
}