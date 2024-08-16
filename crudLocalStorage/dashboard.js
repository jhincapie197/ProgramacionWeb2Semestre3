// Variables globales

let nombreInput = document.querySelector("#nombre-input");
let tipoIdInput = document.querySelector("#tipo-id-input");
let numeroIdInput = document.querySelector("#numero-input");
let areaInput = document.querySelector("#area-input");
let salarioInput = document.querySelector("#salario-input");
let btnGuardar = document.querySelector(".boton-guardar");

// Evento click al boton guardar
btnGuardar.addEventListener('click', ()=>{
    //console.log(validarForm());
    let datosForm = validarForm();
    guardarDatos(datosForm);    
});

// Funcion para validar los campos del formulario

function validarForm(){
    let datosForm;
    if(nombreInput.value && tipoIdInput.value && numeroIdInput && areaInput.value && 
        salarioInput.value){
            datosForm = {
                nombre: nombreInput.value,
                tipoId: tipoIdInput.value,
                numeroId: numeroIdInput.value,
                area: areaInput.value,
                salario: salarioInput.value
            };
    }else{
        alert("Todos los campos son obligatorios");
    }
    return datosForm;
}

// Funcion para guardar los datos en localStorage

function guardarDatos(datos){
    let empleados = [];
    let empleadosPrevios = JSON.parse(localStorage.getItem("empleados"));
    if(empleadosPrevios != null){
        empleados = empleadosPrevios;
    }
    empleados.push(datos);
    localStorage.setItem("empleados", JSON.stringify(empleados));
    alert("Datos guardados con éxito");
}