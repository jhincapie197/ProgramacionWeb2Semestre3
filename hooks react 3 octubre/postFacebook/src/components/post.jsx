import imagen from "./../assets/cr7.jpg"
export default function Post(){
    return(
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <img src={imagen} className="card-img-top" alt="..."/>
            <div className="d-flex justify-content-around">
                <span>12😁❤</span>
                <span>234✉</span>
            </div>
            <div className="d-flex justify-content-around">
                <button className="btn btn-outline-secondary">👍Like</button>
                <button className="btn btn-outline-secondary">✍Comment</button>
            </div>
        </div>
    );
}