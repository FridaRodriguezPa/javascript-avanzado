const $tarjeta = document.querySelector("#tarjeta");
 const $contenedor = document.getElementsByTagName("#contenedor");
let content = "";

var mostar = () =>{
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
.then((resp) => resp.json())
.then((data) => {
    console.log(data);
    var count = Object.keys(data).length;
    for (let n = 0; n < count; n++){
        content += `<div  id="tarjeta" class="card" style="width: 18rem;">
            <img src="${data[n].url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">${data[n].title}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
    }
    $contenedor.innerHTML = content;
});


};

mostar();