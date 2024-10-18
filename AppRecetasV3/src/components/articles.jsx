import { Link } from "react-router-dom";
function Articles({recipes, id}) {
    console.log(id);
    return(
        <>
            <h2>{ recipes.titulo }</h2>
            <h5>{ recipes.subtitulo }</h5>
            <Link to={"/Recipe/"+id} className="fakeimg img-fluid">
                <img src={ recipes.imagenes[0]} className="img-fluid" />
            </Link>
            <p>{recipes.texto}</p>

        </>
    );
}
export default Articles;

