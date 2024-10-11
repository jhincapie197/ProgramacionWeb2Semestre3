import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <div className="col-sm-8">
            <h1 className="text-center mt-5">Lo sentimos, la página no existe</h1>
            <div className="text-center my-3">
                <Link className="btn btn-success" to="/">Ir a Home</Link>
            </div>
        </div>
    )
}