//Variables globales
let boton = document.querySelector(".btn-consultar");
let resultado = document.querySelector(".resultado");

//Evento al boton
boton.addEventListener("click", () => {
    //alert("Estamos melos");
    peticion();
});

//Funcion para realizar la peticion a la API
function peticion(){
    let url = "http://localhost/apiPeliculas/datos.txt"
    //Metodo fetch para realizar la peticion
    fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then((d) => d.json())
    .then((apiPeliculas) => {
        apiPeliculas.forEach((peli, pos) => {
            resultado.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${peli.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${peli.titulo}</h5>
                        <p class="card-text">${peli.lanzamiento} - ${peli.genero}</p>
                        <a href="#" class="btn btn-primary">Alquilar</a>
                    </div>
                </div>
            `;
        });
    }).catch((error) => console.log(error))
}