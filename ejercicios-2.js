// num1 = parseInt (prompt("Ingresa un numero"));

// do{
//     num2 = parseInt (prompt("Ingresa otro numero"));
//     document.write(`<p>El numero introducido es: ${num1} y su suma es ${num1 + num2} y su promedio es: ${(num1+num2)/2}</p>`);
    
// }
// while(num1>=0 && num2>=0 );
// document.write("Escribe un numero positivo")

let num = prompt('ingresa un numero');
let numeros = [];
for(i = 0; i < num; ){
if(num % i === 0){
  numeros.push(parseInt(i));
  console.log(`Los numeros son: ${numeros}`);
}
else{
console.log("Vuelve a intentarlo");
}
}
