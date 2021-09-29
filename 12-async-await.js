const $michis = document.querySelector('#michis');
const $div = document.querySelector('#cats');

        // Convierte la funcion a asincrona
$michis.addEventListener('click', async() => {

        //async y await siempre van de la mano 
    //peticion con await que espera a la respuesta 
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await resp.json();
    const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
         $div.appendChild(imgCat);
});

// fetch('https://api.thecatapi.com/v1/images/search')
//     .then(resp => resp.json()).then(data =>{
//         console.log(data);

//         //crear elemento (etiqueta img)
//         const imgCat = document.createElement('img');
//         imgCat.src = data[0].url;
//         //Agrega el elemento al body 
//         // document.body.append(imgCat);
//         //Agregando dentro de un div
//          $div.appendChild(imgCat);

//     });