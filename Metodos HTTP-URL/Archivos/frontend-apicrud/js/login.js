//Variables globales

let usuarioInput = document.querySelector('#usuario-input');
let contraInput = document.querySelector('#contra-input');
let btnLogin = document.querySelector('.btn-user');

//Evento al boton login
btnLogin.addEventListener('click', () => {
    //alert("Usuario: " + usuarioInput.value + " y contraseña: " + contraInput.value);
    let userData = validData();
    sendData(userData);
    console.log("datos del formulario");
    console.log(userData);
});

//Funcion para validar los datos del usuario
let validData = () =>{
    let user;
    if(usuarioInput.value && contraInput.value){
        user = {
            usuario: usuarioInput.value,
            contrasena: contraInput.value
        }
    }else{
        alert("El usuario y la contraseña son obligatorios");
    }
    return user;    
};

//Funcion para realizar la peticion a la BD
let sendData = async(user)=>{
    let url = "http://localhost/backend-apiCrud/login";
    try {
        let respuesta = await fetch(url, {
            method: "POST",
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        //Validar codigo de respuesta del servidor
        if(respuesta.status === 401){
            alert("El usuario y/o contraseña son incorrectos");
        }else{
            let data = await respuesta.json();
            console.log("Datos del usuario logueado");
            console.log(data);
            alert("Bienvenido " + data.nombre);
            //Guardar los datos en localStorage
            localStorage.setItem('userLogin', JSON.stringify(data));
            //Redirigir a la pagina principal del dashboard
            location.href = "index.html";
        }

    } catch (error) {
        console.log(error)
    }
};