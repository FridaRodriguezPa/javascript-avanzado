/*FETCH nos permite hacer peticiones http desde JavaScript*/ 

const peticion = fetch('https://jsonplaceholder.typicode.com/posts')
//Promesas      // json = Javascript Object Notation
.then(resp => resp.json()).then(data => {
    console.log(data);
    //atrapa la peticion 
}).catch( e =>{
    console.log(e);
});

console.log(peticion);


