let num1;
let nun2;
let num3;
let primernum;
let segnum;
let ternum;

function calcular(){
    num1=Number (document.getElementById("num1").value)
    num2=Number (document.getElementById("num2").value)
    num3=Number (document.getElementById("num3").value)
    ordennum(num1,num2,num3)
    alert(" el primer número es " + primernum)
    alert("el segundo número es " + segnum)
    alert("el tercer número es " + ternum)
}
function ordennum(num1,num2,num3){
    
   
     if(num1<num2 && num1>num3){
        primernum=num3
        segnum=num1
        ternum=num2
    }
   
    else if (num2>num3 && num2<num1)
    {primernum= num3
    segnum=num2
ternum=num1}

else if(num2>num1 && num2<num3)
   { primernum=num1
    segnum=num2
    ternum=num3
   }
   else if(num1<num3 && num2>num3 ){
       primernum=num1
       segnum=num3
       ternum=num2}

       else if (num1>num2 && num3>num1){
           primernum=num2
           segnum=num1
           ternum=num3
       }
   }
