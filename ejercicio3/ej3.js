let trabajor1;

let salariob1;
let deducciones1;
let bonificaciones1;
let sneto1;


let trabajor2;
let salariob2;
let deducciones2;
let bonificaciones2;
let sneto2;



function calcular(){
    trabajor1=(document.getElementById("tuno").value);
    trabajor2=(document.getElementById("tdos").value);

    salariob1=Number(document.getElementById("salbuno").value);
    deducciones1=Number(document.getElementById("deduno").value);
    bonificaciones1=Number(document.getElementById("bonuno").value);
    sneto1=salariob1-deducciones1 + bonificaciones1;
    sneto2=salariob2-deducciones2 + bonificaciones2;


(document.getElementById("snetouno").value=(sneto1=salariob1-deducciones1+bonificaciones1))
    
salariob2=Number(document.getElementById("salbdos").value);
deducciones2=Number(document.getElementById("deddos").value);
bonificaciones2=Number(document.getElementById("bondos").value);
(document.getElementById("snetodos").value=sneto2=(salariob2-deducciones2)+(bonificaciones2))

if(sneto1>sneto2){
    alert(trabajor1+ " gana mas ")}
    else{
        alert(trabajor2 + " gana mas ")}
    }

