const nombre = prompt('¿Cúal es tu nombre?');
const edad = prompt('¿Cúal es tu edad?');

console.log('Hola ' + nombre + ' Saludos :). Tu edad es '+edad+ ' años');

const saludos = `<h1>Hola ${nombre} saludos. Tu edad es ${edad} años</h1>`;
document.write(saludos);