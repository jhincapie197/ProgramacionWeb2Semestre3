import { useParams } from "react-router-dom";
import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Aside from "../components/aside";
import { infoContext } from "../components/recipeProvider";
import { useContext } from "react";
import "./../assets/estilos.css";

let Recipe = () => {
    let {id} = useParams();
    let {infoRecipes} = useContext(infoContext);
    console.log(infoRecipes[id]);
    let {titulo, subtitulo, texto, imagenes, ingredientes, elaboracion, titulo2, titulo3 } = infoRecipes[id];
    return (
        <>
            <Header />
            <Menu />
            <div className="row">
                <Aside />
                <div className="col-sm-8">
                    <h1>{titulo}</h1>
                    <div className="img-receta">
                        <img src={imagenes[0]} />
                        <img src={imagenes[1]} />
                    </div>
                    <h2>{subtitulo}</h2>
                    <p>{texto}</p>
                    <h3>{titulo2}</h3>
                    <ul>
                        {
                            ingredientes.map((ingre)=>(
                                <li>{ingre}</li>
                            ))
                        }
                    </ul>
                    <div className="img-receta">
                        <img src={imagenes[0]} />
                    </div>
                    <h3>{titulo3}</h3>
                    <ul>
                        {
                            elaboracion.map((ela)=>(
                                <li>{ela}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Footer />
            
        </>
        
    )
};
export default Recipe;