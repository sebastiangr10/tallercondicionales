let nombre;
let nota1;
let nota2;
let nota3;
let nota4;
let notaFinal

function calcular() {
    nombre=document.getElementById("nombre").value
   nota1=parseFloat(document.getElementById("nota1").value) 
   nota2=parseFloat(document.getElementById("nota2").value) 
   nota3=parseFloat(document.getElementById("nota3").value) 
   nota4=parseFloat(document.getElementById("nota4").value) 
   notaf(nota1,nota2,nota3,nota4)
   document.getElementById("notaf").value=notafinal

   if(notafinal>=3){
    alert("felicidades " + nombre + " ganaste")
}
else if(notafinal<3){
    alert("lo sentimos " + nombre + " perdiste")
}

}

function notaf(nota1,nota2,nota3,nota4,){
    notafinal=(nota1+nota2+nota3+nota4)/4
    return notafinal
}
