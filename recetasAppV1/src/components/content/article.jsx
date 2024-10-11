import { Link } from "react-router-dom";

export default function Article({receta, id}){
    let {titulo, fecha, imagen, descripcion} = receta;
    return(
        <>
            <h2>{titulo}</h2>
            <h5>{fecha}</h5>
            <div className="fakeimg">
                <img src={imagen} className="img-fluid" />
            </div>
            <p>{descripcion}</p>
            <Link to={`/Recipe/${id}`} className="btn btn-primary">Leer receta</Link>
        </>
    );
}