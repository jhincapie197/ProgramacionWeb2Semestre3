import { color } from "../App"
import { useContext } from "react"

export default function CambiarColor(){
    let valorColor = useContext(color);
    console.log("Tipo color: " + valorColor)
    return(
        <button style={{
            "background-color": valorColor == "Claro" ? "Beige" : "Black",
            "color": valorColor == "Claro" ? "Black" : "White"
        }}>Cambiar color</button>
    )
}