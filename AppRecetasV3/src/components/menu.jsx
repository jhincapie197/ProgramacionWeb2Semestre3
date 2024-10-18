import { Link } from "react-router-dom";

function Menu() {
    return(
        <nav className="sticky-top navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">INICIO</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Recipes">RECETAS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Ours">NOSOTROS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">CONTACTO</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;