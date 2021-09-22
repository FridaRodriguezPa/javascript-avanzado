// Switch es una estructura de control de flujo

// const edad = parseInt(prompt("Ingresa tu edad"));
// let mensaje = "";

// switch(edad){
//     case 18:
//         mensaje = "Acaba de cumplir la mayoria de edad";
//         break;
//     case 25:
//         mensaje = "Ya eres un adulto";
//         break;
//     case 70:
//         mensaje = "Ya eres de la tercera edad";
//         break;

//     default:
//         mensaje = "Fuera del rango de edad";
//         break;
// }

// document.write(`<p>${mensaje}</p>`);

const nombre = prompt("Ingresa tu nombre");
let mensaje = "";
// Convierte todo a minusculas 
switch (nombre.toLowerCase()){
    case 'Carlos':
        mensaje = "Eres administrador";
        break;
    case 'Juan':
        mensaje = "Eres usuario";
        break;
    default:
        mensaje = "No tienes permiso";
        break;
}
document.write(`<p>${mensaje}</p>`);
