//forma de estructurar información en pares claves - valor
const persona ={
    nombre: 'Julian',
    apellidos: 'Sanchez Perez',
    correo:"julian@sanchez"
}

// const persona2 = ['Julian','Sanchez','julian@sanchez']
// //imprimir como arreglo
// console.log(persona2[0])

const articulos=[
    {
        id: 1,
        nombre: 'Alimento para perros',
        precio: 30.50
    },
    {
        id:2 ,
        nombre: 'Alimento para gatos',
        precio: 60.50
    },
    {
        id: 3,
        nombre: 'Alimento para aves',
        precio: 70.50
    }
]

//imprimir un objeto
document.write(persona.nombre);