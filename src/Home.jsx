import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <h1>Welcome to the homepage </h1>
      <div className="homePage">
        <div className="card home-card">
          <img
            className="card-img-top homeCard--images"
            src="https://picsum.photos/500/500"
            alt="Letter Pieces"
          />
          <div className="card-body homeCard--innerSection">
            <h5 className="card-title home--card-title-responsive">Arabic </h5>
            <Link to="/arabic_home"> See more </Link>
          </div>
        </div>

        <div className="card home-card">
          <img
            className="card-img-top homeCard--images"
            src="https://picsum.photos/500/500"
            alt="Letter Pieces"
          />
          <div className="card-body homeCard--innerSection">
            <h5 className="card-title home--card-title-responsive">Farsi </h5>
            <Link to="/farsi_home"> See more </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
