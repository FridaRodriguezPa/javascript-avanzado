const $michis = document.querySelector('#michis');
const $div = document.querySelector('#cats');
$michis.addEventListener('click', () => {
    //peticion
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then(data =>{
        console.log(data);
        
                //Desestructuración - saca el primer elemento y lo guarda en una variable
                // const [cat] = data;
                // console.log(cat);

                //obtener directamente la url
                // const {url} = cat;

        //crear elemento (etiqueta img)
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        //Agrega el elemento al body 
        // document.body.append(imgCat);
        //Agregando dentro de un div
         $div.appendChild(imgCat);

    });
})