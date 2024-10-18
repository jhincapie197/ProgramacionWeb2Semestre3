import { Link } from "react-router-dom";

function Aside() {
    return(
    <div className="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3 className="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link className="nav-link active" to="/Category/Arroces">Arroces</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category/Ensaladas">Ensaladas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category/Pastas">Pastas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category/Postres">Postres</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category/Sopas">Sopas</Link>
        </li>
      </ul>
      <hr className="d-sm-none" />
    </div>
    );
}

export default Aside;