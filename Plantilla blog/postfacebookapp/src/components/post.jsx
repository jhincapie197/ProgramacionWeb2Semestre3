import imgMtb from "./../assets/mtb.jpg";
import { useState, useEffect } from "react";
import CommentForm from "./commentform";
import ListComments from "./listcomment";

let Post = ()=>{
    //Manejo de estados de los likes
    let [likes, setLike] = useState(0);

    //Manejo del boton comentario
    let [btnComment, setBtnComment] = useState(false);
    let isShowComment = ()=> setBtnComment(!btnComment);
    //console.log(btnComment);

    //Funcion para obtener comentarios del formulario
    let [textComment, setTextComment] = useState("");
    let getCommentData = (comment) => {
        setTextComment(comment);
    }

    //Listado de comentarios:
    let listCom = [
        {id:1, text: "Me gustan mucho las bicicletas"},
        {id:2, text: "Estoy conociendo nuevas rutas"}
        ];
        let nextID = 3;
        let [listData, setListData] = useState(listCom);

        //Comprobar si hay un nuevo cometario:
        useEffect(()=>{
            if(textComment){
                setListData([
                    ...listData,
                    {id: nextID++, text: textComment}
                ]);
            }
        }, [textComment]);
        
        // console.log(listCom);
        // console.log(listData);
    return(
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Mountain Bike</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <img src={imgMtb} className="card-img-top" alt="..." />
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-around">
                    <span> 👍😁😍 {likes} </span>
                    <span> {listData.length} 💭 </span>
                </li>
                <li className="list-group-item d-flex justify-content-around">
                    <button className="btn btn-secondary"
                        onClick={()=>setLike(likes+1)}
                    > 👍 likes </button>
                    <button className="btn btn-secondary"
                    onClick={isShowComment}
                    > 💭 comment </button>
                </li>
            </ul>
            <div className="card-footer">
                {btnComment && <CommentForm getCommentData = {getCommentData} />}
            </div>
            <ListComments listComData = {listData} />
        </div>
    );
};

export default Post;