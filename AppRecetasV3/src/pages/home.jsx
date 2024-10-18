import Header from "../components/header";
import Menu from "../components/menu";
import Aside from "../components/aside";
import Content from "../components/content";
import Footer from "../components/footer";

let Home = ()=>{
    return(
        <>
            <Header />
            <Menu />
            <div className="row">
                <Aside />
                <Content />
            </div>
            <Footer /> 
        </>
         
    );
}
export default Home;