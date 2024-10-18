import Header from "../components/header"
import Menu from "../components/menu"
import Footer from "../components/footer"
import Aside from "../components/aside"
import { useParams } from "react-router-dom"
import datos from "./../../public/datos.json"

export default function Category(){
    let {category} = useParams();
    console.log(datos[category]);

    return(
        <>
            <Header />
            <Menu />
                <div className="container">
                    <div className="row">
                        <Aside />
                        <div className="col-sm-8">
                            <h1>Categoria : {category}</h1>
                            <div className="container">
                                <div className="row">
                                    {
                                        datos[category].map((receta, i)=>(
                                            <div key={i} className="col-sm-6">
                                                <div className="card">
                                                    <img src={receta.imagenes[0]} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{receta.titulo}</h5>
                                                        <p className="card-text">{receta.texto}</p>
                                                        <a href="#" className="btn btn-primary">Leer Receta</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            <Footer />
        </>
        
    )
}