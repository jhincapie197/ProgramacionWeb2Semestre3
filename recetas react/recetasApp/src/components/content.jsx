import Article from "./article";
import DatosRecetas from "./../assets/infoRecetas.json";

export default function Content(){
    //console.log(DatosRecetas);
    return(
        <div className="col-sm-8">
            {
                DatosRecetas.map((receta, pos) => (<Article receta={receta} key={pos}/>))
            }
            
        </div>
    )
}