import Articles from "./articles";
import recetas from "./../../public/datos.json";
import { infoContext } from "./recipeProvider";
import { useContext, useEffect, useState} from "react";

let {Arroces, Pastas, Postres, Sopas, Ensaladas} = recetas;
let recipesData = [...Arroces, ...Pastas, ...Postres, ...Ensaladas, ...Sopas];
let recipesRandom = recipesData.sort(()=>Math.random() - 0.5);

function Content() {
    //console.log(recipesData);
    
    let {setInfoRecipes} = useContext(infoContext);
    //console.log(dato);
    useEffect(()=>{
        setInfoRecipes(recipesData);
    }, [])

    //estado inicial de las recetas
    let [dataVisible, setDataVisible] = useState(5);
    //funcion para cargar mas recetas
    let loadRecipes = () =>{
        setDataVisible( (prev)=> prev + 5 )
    }

    return(
        <div className="col-sm-8">
            {
                recipesRandom.slice(0, dataVisible).map((receta, i)=>(
                    <Articles key={i} id={i} recipes={receta} />
                ))
            }
            {
                dataVisible < recipesData.length && <button onClick={loadRecipes}>Cargar Mas</button>
            }
        </div>
    );
}
export default Content;