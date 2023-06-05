import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="homePage">
      <h1 className="home--h1">What would you like to learn about today? </h1>

      <div className="homePage--box">
        <div className="card card-circle " id="blueHomePageCard">
          <div className="card-body">
            <h5 className="card-title">Arabic</h5>
            <a href="#" className="btn btn-primary">
              <Link to="/arabic_home" className="btn--link">
                See more
              </Link>
            </a>
          </div>
        </div>

        <div className="card card-circle">
          <div className="card-body">
            <h5 className="card-title">Farsi</h5>
            <a href="#" className="btn btn-primary">
              <Link to="/farsi_home" className="btn--link">
                See more
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
