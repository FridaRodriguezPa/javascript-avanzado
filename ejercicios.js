
                         //AÑO DE NACIMIENTO
// const fecha = parseInt(prompt("¿Cual es tu año de nacimiento?"));
// const edad = `<h1> Hola :) , tu edad debe ser: ${2021 - fecha} años </h1>`;
// document.write(edad);

                        //SABER SI UN NUMERO ES PAR O IMPAR
// const numero = parseInt(prompt("Ingrese un numero:"));
//     if(numero %2 == 0){
//     document.write('Es par')
// }else{
//     document.write('Es impar')
//     }

//                         //Mostrar los numeros impares
//     const numero = parseInt(prompt("Ingrese un numero:"));
//     const numerodos = parseInt(prompt("Ingrese otro numero:"));
//     document.write("Los numeros impares que existen entre " + numero + " y " + numerodos + " son: ");

// for (var i = numero; i < numerodos; i++) {
//     if (i % 2 != 0) {
//         document.write("<br>" + i + "<br>");
//     }
// }

                    //Numero mayor o menor
            const numero = parseInt(prompt("Ingrese un numero:"));
            const numerodos = parseInt(prompt("Ingrese otro numero:"));
                       if (numero > numerodos) {
                           suma = numero + numerodos;
                           resta = numero - numerodos;
                            document.write( "La suma es: " + suma + " La resta es: " + resta);

                         } else{
                            div = numero / numerodos;
                            mul = numero * numerodos;
                           document.write( "La división es: " + div + " La multiplicación es: " + mul);
                         }
                  