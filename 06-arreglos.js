//Arreglos

        //Declaración de arreglos

const arreglo = [];
const arreglo2 = new Array();

document.write('<ul>');
let lenguajes = ['Javascript','Java','Python','C#','C++','Scala','Rust','Cobol'];

//forEach - Recorre los elementos de un arreglo
lenguajes.forEach(function(lenguajes, index){

document.write(`<li>${index}-${lenguajes}</li>`);
});
document.write('</ul>');

//Map - Crea un nuevo arreglo con los resultados
let numeros = Array(2, 3, 27, 19, 12);
let numerosdos = numeros.map(function(numero){
    return numero * 2;
});
console.log(numeros);
console.log (numerosdos);

//Includes - Determina si un arreglo contiene valor
console.log(lenguajes.includes('Java'));
console.log(lenguajes.includes('PHP'));

//Filter - Crea un nuevo arreglo con todos los elementos que cumplan con la condición
let filtrados= numeros.filter(function(numero){
    if(numero > 10){
        return numero
    }
});
console.log(filtrados);