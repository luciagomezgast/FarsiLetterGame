import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./farsiHomePage.css";

function ArabicHomePage() {
  console.log("helllo?");
  return (
    <>
      <h1>Welcome to the Arabic Section </h1>
      <div className="farsiPage">
        <div className="card farsi-card">
          <img
            className="card-img-top farsiCard--images"
            src="https://picsum.photos/500/500"
            alt="Letter Pieces"
          />
          <div className="card-body farsiCard--innerSection">
            <h5 className="card-title card-title-responsive">Farsi</h5>
            <Link to="/arabic_game" className="link-responsive">
              Arabic Letter Game
            </Link>
          </div>
        </div>

        <div className="card farsi-card ">
          <img
            className="card-img-top farsiCard--images"
            src="https://picsum.photos/500/500"
            alt="Letter Pieces"
          />
          <div className="card-body farsiCard--innerSection">
            <h5 className="card-title card-title-responsive">
              Further Information?
            </h5>
            <Link to="/farsi_game" className="link-responsive">
              Resources
            </Link>
          </div>
        </div>

        <div className="card farsi-card">
          <img
            className="card-img-top farsiCard--images"
            src="https://picsum.photos/500/500"
            alt="Letter Pieces"
          />
          <div className="card-body farsiCard--innerSection">
            <h5 className="card-title card-title-responsive">How to play?</h5>
            <Link to="/farsi_game" className="link-responsive">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArabicHomePage;
