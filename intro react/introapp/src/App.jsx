//Codigo JS
import React from 'react'
import { ComponenteClase, ComponenteFuncional, ComponenteFlecha } from './componentes'

let saludar = saludo()
let empleado = {
  nombre: "Arnovio Cabezas",
  salario: 4500000,
  funciones: ["Diseñar", "Programar", "Testing"]
}

function App() {
  //Codigo JS
  return (
    //Codigo HTML
    <>
      <ComponenteClase />
      <ComponenteFuncional datos = {empleado} />
      <ComponenteFlecha saludo = {saludar} />
    </>
  )
}

function saludo(){
  return "Hola desde funcion normal"
}

export default App
