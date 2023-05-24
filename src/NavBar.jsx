import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar(props) {
  return (
    <nav id="navid" className="navbar navbar-expand  ">
      <a id="Navbar" className="navbar-brand" href="#">
        Farsi Game{" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a id="home" className="nav-link " href="#">
              Home
            </a>
          </li>
        </ul>
      </div>
      <div className="score">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a id="score" className="nav-link ">
              Current Score : {props.currentScore}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
