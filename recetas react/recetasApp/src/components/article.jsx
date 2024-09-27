export default function Article({receta}){
    return(
        <div>
            <h2>{receta.titulo}</h2>
            <h5>{receta.fecha}</h5>
            <div className="fakeimg">
                <img src={receta.imagen} className="img-fluid" />    
            </div>
            <p>{receta.descripcion}</p>
            <button className="btn btn-prmary">Leer Receta</button>
        </div>
    )
}