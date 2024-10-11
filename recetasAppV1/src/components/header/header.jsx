import logo from "./../../assets/logo.png";
export default function Header() {
    return(
        <div className="p-5 bg-primary text-white text-center">
            <h1> <img src={logo} className="logo-header" /> La cocina de Juan Andres</h1>
            <p>De la cocina a tu paladar</p> 
        </div>
    )
}