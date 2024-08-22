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

// Función buscar pedidos
function buscarPedidos() {
    let filtro = buscadorInput.value.toLowerCase();
    let filas = d.querySelectorAll(".table tbody tr");
    let primerResultado = true;  // Bandera para seleccionar automáticamente el primer resultado coincidente
    filas.forEach((fila) => {
        let columnas = fila.querySelectorAll("td");
        let cliente = columnas[1].innerText.toLowerCase(); // Asumiendo que la columna del cliente es la segunda columna
        if (cliente.startsWith(filtro)) {
            fila.style.display = "";
            if (primerResultado) {
                fila.classList.add("seleccionado");
                primerResultado = false;
            } else {
                fila.classList.remove("seleccionado");
            }
        } else {
            fila.style.display = "none";
            fila.classList.remove("seleccionado");
        }
    });
}