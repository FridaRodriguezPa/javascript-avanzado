// Funciones de flecha
 // No se puede llamar antes de su creación.
console.log (suma (37,23));
function suma ( num1, num2){
    return num1 + num2;
}

const suma1 = (num1, num2) => {
    return num1 + num2;
}
document.write(`<p> ${suma1(5,3)}</p>`)