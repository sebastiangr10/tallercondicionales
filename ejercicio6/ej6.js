let tipo;
let nombre;
let salario;
let horas;
let deducciones;
let bonificaciones;
let salario_neto
tipo=prompt("ingrese tipo de trabajador")
nombre=prompt("ingrese el nombre de trabajador")

switch(tipo){
    case"fijo":
    alert(nombre);
    horas=Number (prompt("ingrese horas trabajadas"));
    salario=Number (prompt("ingrese el salario basico"));
    deducciones=Number (prompt("ingrese el valor de las deduciones"));
    bonificaciones=Number(prompt("ingrese el valor de las bonificaciones"));
    salario_neto=(salario*horas)-(deducciones)+ bonificaciones;
    alert("el salario neto es " + salario_neto + " pesos")
    break;

    case "temporal":
    alert(nombre)
    horas=Number (prompt("ingrese horas trabajadas"));
    salario=6000;
    salario_neto=salario*horas;
    alert("el salario neto es " + salario_neto + " pesos")
    break;
}