//Variable simular los datos de una BD

let peliculas = [
    {
        "id":1,
        "titulo": "Spiderman",
        "lanzamiento": 2008,
        "genero": "Ciencia Ficcion",
        "duracion": 120,
        "imagen": "https://i.blogs.es/7bb0f0/captura-de-pantalla-2022-06-03-a-las-10.57.17/840_560.jpeg"
    },
    {
        "id":2,
        "titulo": "Rapidos y Furiosos",
        "lanzamiento": 2002,
        "genero": "Accion",
        "duracion": 130,
        "imagen": "https://cloudfront-us-east-1.images.arcpublishing.com/semana/OPVPGNZRNBFD3OPQWRVR34QQXM.jpg"
    },
    {
        "id":3,
        "titulo": "Piratas del Caribe",
        "lanzamiento": 2000,
        "genero": "Infantil",
        "duracion": 110,
        "imagen": "https://i.blogs.es/d74b02/piratas-del-caribe/1366_2000.jpeg"
    },
    {
        "id": 4,
        "titulo": "Los Pitufos",
        "lanzamiento": 2000,
        "genero": "Infantil",
        "duracion": 110,
        "imagen":"https://i.blogs.es/d74b02/piratas-del-caribe/1366_2000.jpeg"
    },
    {
        
        "id": 5,
        "titulo": "Ciudad de Dios",
        "lanzamiento": 2013,
        "genero": "Documental",
        "duracion": 110,
        "imagen":"https://i.blogs.es/d74b02/piratas-del-caribe/1366_2000.jpeg"
    },
    {
        
        "id": 6,
        "titulo": "Cruzadas",
        "lanzamiento": 2000,
        "genero": "Documental",
        "duracion": 110,
        "imagen":"https://i.blogs.es/d74b02/piratas-del-caribe/1366_2000.jpeg"
    },
    {
        
        "id": 7,
        "titulo": "Caperusita",
        "lanzamiento": 2000,
        "genero": "Infantil",
        "duracion": 110,
        "imagen":"https://i.blogs.es/d74b02/piratas-del-caribe/1366_2000.jpeg"
    },
    {
        
        "id": 8,
        "titulo": "Blancanieves",
        "lanzamiento": 2000,
        "genero": "Infantil",
        "duracion": 110,
        "imagen":"https://i.blogs.es/d74b02/piratas-del-caribe/1366_2000.jpeg"
    },
    {
        
        "id": 9,
        "titulo": "Los hermanos green",
        "lanzamiento": 2000,
        "genero": "Infantil",
        "duracion": 110,
        "imagen":"https://i.blogs.es/d74b02/piratas-del-caribe/1366_2000.jpeg"
    },
    {
        
        "id": 10,
        "titulo": "Spirit",
        "lanzamiento": 2000,
        "genero": "Infantil",
        "duracion": 110,
        "imagen":"https://i.blogs.es/d74b02/piratas-del-caribe/1366_2000.jpeg"
    }
    
];

//Funcion para obtener las peliculas
function obtenerPeliculas(pelis){
    
    return new Promise((resolve, reject) => {
        //Simular un retrazo para al obtener la informacion
        setTimeout(()=>{
        
            //Validar si hay datos en la BD
            if(pelis.length > 0){
                resolve(pelis);
            }else{
                reject("Error, no hay datos en la BD");
            }
        
    
        },2000)
    })
    
}

//Mostrar peliculas en el navegador
//metodo 1
// obtenerPeliculas(peliculas)
// .then((d)=>console.log(d))
// .catch((e)=>console.log(e))

//metodo 2
async function mostrarDatos(movies){
    try {
        let datos = await obtenerPeliculas( movies );
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
    
}
// Mostrar los datos en consola
mostrarDatos(peliculas);