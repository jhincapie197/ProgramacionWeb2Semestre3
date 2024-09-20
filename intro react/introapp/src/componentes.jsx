import React from "react";

//Componente de clase
export class ComponenteClase extends React.Component {
    render() {
        return (
            <h1>Componente de Clase</h1>
        )
    }
}

//Componente funcional
export function ComponenteFuncional({datos}){
    //console.log(props)
    let {nombre, salario, funciones} = datos
    return (
        <>
            <h1>Datos del empleado</h1>
            <p>Nombre: {nombre}</p>
            <p>Salario: {salario}</p>
            <p>Funciones: {funciones.map((f)=>(f + " - "))}</p>
        </>
    )
}

//Componente de flecha
export let ComponenteFlecha = (props)=> {
    console.log(props);
    return(
    <h1>{props.saludo}</h1>
    )
}