let codigo;
let valorarticulo;
let cantidad;
let valorinicial;
let descuento;
let total;
codigo= (prompt("ingrese código del producto"))
valorarticulo=Number(prompt("ingrese valor del artículo"));
cantidad= Number (prompt("ingrese cantidad de artículos"))
descuento=descontar(cantidad)
total=valorinicial- descuento
    valorinicial=valorarticulo*cantidad
    alert("el valor inicial de su compra es " + valorinicial)


function descontar(cantidad){
    if(cantidad>=50){
        descuento=valorinicial*0.10
    }
    else if(cantidad<50){
        descuento=0
    }
    return descuento
}
alert("su descuento es " + descontar(cantidad))
alert("el valor total de su compra es " + total + " pesos")