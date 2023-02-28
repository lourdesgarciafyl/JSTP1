let numero = parseInt(prompt("Escribí un número"));
if (numero % 2 == 0){
    if (numero % 3 == 0){
        if(numero % 5 == 0){
            if(numero % 7 == 0){
                document.write("Es divisible por 2, 3, 5 y 7")
            } 
            else{
                document.write("Es disivible por 2, 3 y 5")
            }
        } 
        else {
            document.write("Es divisible por 2 y 3")
        }
    } 
    else if (numero % 5 == 0){
        if(numero % 7 == 0){
            document.write("Es divisible en 2, 5 y 7")
        } 
        else{
            document.write("Es divisible en 2 y 5")
        }
    }    
    else if (numero % 7 == 0){
        document.write ("Es divisible en 2 y 7")
    }
    else{
        document.write("Es divisible por 2")
    }
} 
else if (numero % 3 == 0){
    if (numero % 5 == 0){
        if(numero % 7 == 0){
            document.write("Es divisible por 3, 5 y 7")
        } 
        else {
            document-write("Es divisible por 3 y 5")
        }
    } 
    else if (numero % 7 == 0){
        document.write("Es divisible por 3 y 7")
    }    
    else{
        document.write("Es divisible por 3")
    }
}
else if (numero % 5 == 0){
    if (numero % 7 == 0){
        document.write("Es divisible por 5 y 7")
    }    
    else{
        document.write("Es divisible por 5")
    }
}
else if (numero % 7 == 0){
    document.write("Es divisible por 7")
}
else{
    document.write("No es divisible por ninguno de estos números")
}