//Simular los datos de una BD

let peliculas = [
    {
        "id": 1,
        "titulo": "Spiderman",
        "lanzamiento": 2008,
        "genero": "Ciencia Ficción",
        "duracion": 120,
        "imagen": "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png"
    },
    {
        "id": 2,
        "titulo": "Rapidos y Furiosos",
        "lanzamiento": 2002,
        "genero": "Acción",
        "duracion": 130,
        "imagen": "https://cloudfront-us-east-1.images.arcpublishing.com/semana/OPVPGNZRNBFD3OPQWRVR34QQXM.jpg"
    },
    {
        "id": 3,
        "titulo": "La Llorona",
        "lanzamiento": 2015,
        "genero": "Terror",
        "duracion": 110,
        "imagen": "https://resizing.flixster.com/PseuZTmNWXWOPIrFYUiybQLMAy4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JjOWQwNGVlLTBhZjctNGZkMS1iYmExLTRjMzM2YWE5ZGU3My5qcGc="
    }
];

//Funcion para obtener las peliculas
function obtenerPeliculas(pelis){
    return new Promise((resolve, reject) => {
        //Simular un retraso al obtener la información
        setTimeout(() => {
            //Validar si hay datos en la BD
            if(pelis.length > 0){
                resolve(pelis);
            }else{
                reject("Error; no hay datos en la BD");
            }
        }, 2000);
    });
}

//Mostrar las peliculas en el navegador

//Metodo 1
// obtenerPeliculas(peliculas)
//     .then((d) => console.log(d))
//     .catch((e) => console.log(e));

//Metodo 2
async function mostrarDatos(movies){
    try {
        let datos = await obtenerPeliculas(movies);
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
}

//Mostrar las peliculas en la consola
mostrarDatos(peliculas);