import { createContext, useState } from "react";
//crear contexto global
let infoContext = createContext();

//crear componente proveedro del contexto
let RecipesProvider = ({children}) => {
    let [infoRecipes, setInfoRecipes] = useState("hola");
    return(
        <infoContext.Provider value={{ infoRecipes, setInfoRecipes }}>
            {/*componente hijo que utilizara el contexto*/}
            {children}
        </infoContext.Provider>
    );
}

export {infoContext, RecipesProvider}
