// ciclo while repite codigo mienestras una condicion sea verdadera

// let num1 = parseInt(prompt("Ingresa un número"));

// //NaN - Not a Number
// while(isNaN(num1)){
//      num1 = parseInt(prompt("Ingresa un numero"));
// }

// let num1 = parseInt (prompt("Ingresa un numero"));
// const num_secreto = 23;
// let intentos = 1;
// while(num1 !== num_secreto){
//     console.log("No adiviniste el numero, intenta otro");
//     console.log(`Intento ${intentos}`);
//     intentos++;
//     num1 = parseInt(prompt("Ingresa un numero"));
// }
//  console.log("Felicidades, encontraste el numero secreto");

            //Do while
const num1 = parseInt(prompt("Ingresa un numero"));
do{
    document.write(`<p>El numero introducido es: ${num1}</p>`);
    num1 = parseInt (prompt("Ingresa un numero"));
}
while(num1 > 5);

