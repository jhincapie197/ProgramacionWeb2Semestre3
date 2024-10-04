import { useState, useEffect } from "react";
export default function Hooks(){
    //console.log(useState());
    let [contador, setContador] = useState(0);
    let [mostrar, setMostrar] = useState(false);
    //let contador = 0;

    useEffect(()=>{
        console.log("Estado contador: " + contador);
        console.log("Estado mostrar: " + mostrar);
        // return ()=>{
        //     console.log("Mostrar: " + mostrar);
        // }
    }, [contador, mostrar]);

    return(
        <>
            <span> {contador} <button onClick={
                () => setContador(contador + 1)
            }> 👍Likes </button></span>

            {/*Ejemplo 2 */}
            <button onClick={()=>setMostrar(!mostrar)}>Mostrar/Ocultar</button>
            { mostrar && <div>Hola 😀</div>}
        </>
    )
}

// export function OtroComponente(){
//     return(
//         <h1>Otro Componente</h1>
//     )
// }