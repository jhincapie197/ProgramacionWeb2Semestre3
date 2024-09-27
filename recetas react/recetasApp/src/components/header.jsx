import logo from "./../assets/logo.png"

export default function Header(){
    let infoHeader = {
        titulo: "La cocina de Juan",
        descripcion: "De la cocina a tu paladar"
    }
    return(
        <div className="p-5 bg-primary text-white text-center">
            <h1> <img src={logo} className="logo-header"/> {infoHeader.titulo}</h1>
            <p>{infoHeader.descripcion}</p> 
        </div>
    )
}