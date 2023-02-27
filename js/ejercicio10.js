let numero = parseInt(prompt("Escribí un número"));
if(numero % 2 == 0){
    document.write("Es divisible por 2");
} else if (numero % 3 == 0) {
    document.write("Es divisible por 3");
} else if (numero % 5 == 0) {
    document.write("Es divisible por 5");
} else if (numero % 7 == 0){
    document.write("Es divisible por 70")
} else {
    document.write("No es divisible por estos números")
}