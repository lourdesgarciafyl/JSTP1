let num1 = parseInt(prompt("Escribe un número"));
let num2 = parseInt(prompt("Escribí otro número"));
let num3 = parseInt(prompt("Ya casi! Escribi otro número"));
if(num1 > num2){
    if(num1 > num3){
        document.write(num1 + " es el mayor");
    }
} else if(num2 > num3){
    document.write(num2 + " es el mayor");
} else{
    document.write(num3 + " es el mayor")
}