const $lomitos = document.querySelector('#lomitos');
const $div = document.querySelector('#dogs');

$lomitos.addEventListener('click', () => {

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data =>{
        console.log(data);   
    
        const perritos = document.createElement('img');
        perritos.src = data.message;
         $div.appendChild(perritos);
         
    });
})