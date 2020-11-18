let edad;

function calcular(){
    edad= (document.getElementById("edad").value)

    if(edad<10){
        alert(" eres un niño")

    }
    else if(edad>9 && edad<16){
        alert("eres un preadolescente")
    }
    else if(edad>15 && edad<18){
        alert("eres un adolescente")
    }
    else if(edad>17 && edad<51){
        alert("eres un adulto")
    }
    else{ 
        alert("eres un adulto mayor")
    }
}