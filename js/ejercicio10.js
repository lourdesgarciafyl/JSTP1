let numero = parseInt(prompt("Escribí un número"));
if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 == 0){
    document.write("Es divisible por uno de estos numeros");
}else{
    document.write("No es divisible por ninguno de estos numeros");
}