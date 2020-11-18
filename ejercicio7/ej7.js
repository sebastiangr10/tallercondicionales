
let num1;
let num2;
let num3;
let nummayor

function calcular(){
num1=Number(document.getElementById("num1").value)
num2=Number(document.getElementById("num2").value)
num3=Number(document.getElementById("num3").value)
numM(num1,num2,num3)
alert("el número mayor es " + numM(num1,num2,num3))
}
function numM(num1,num2,num3){
    if(num1>num2 && num1>num3){
        nummayor=num1
    }
    else if(num2>num1 && num2>num3)
    {nummayor=num2}
    else if(num3>num1 && num3>num2)
    {nummayor=num3}
   return nummayor
}
