import Article from "./article";

let recetas = [
    {
        titulo: "sancocho",
        descripcion: "asicnf saeirewar cñapneirpewa ñocpsairmp{cewai0",
        imagen: "https://mojo.generalmills.com/api/public/content/geavWbc7i0eptb2tGb-CyA_gmi_hi_res_jpeg.jpeg?v=5f30c0a4&t=16e3ce250f244648bef28c5949fb99ff",
        fecha: "12-10-2024"
    },
    {
        titulo: "Arroz con pollo",
        descripcion: "asicnf saeirewar cñapneirpewa ñocpsairmp{cewai0",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/LDRLW34JWNAPHDQ6I7KOOUJVKI.jpg",
        fecha: "08-9-2024"
    },
    {
        titulo: "Arroz con leche",
        descripcion: "asicnf saeirewar cñapneirpewa ñocpsairmp{cewai0",
        imagen: "https://peopleenespanol.com/thmb/O4bAeAl5OXtRrGPmtCsHh4UpzDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/recetas-1092-arroz-con-leche-2000-ac1485846508488e8da95f5f9c8de793.jpg",
        fecha: "20-08-2024"
    },
];

export default function Content() {
    return(
        <div className="col-sm-8">
            {  recetas.map((receta, i)=>(<Article key={i} id={i} receta={receta}  />)  ) }
        </div>
    )
}