import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./languagesHomePage.css";

function UrduHomePage() {
  return (
    <div className="homePage--languageHomePage py-5">
      <div className="card" id="languageHomePage--cardbox">
        <div className="card-header" id="languageHomePage--cardtitle--urdu">
          <span> اردو</span>
        </div>
        <div className="card-body">
          <h5 className="card-title" id="languageHomePage--h5title">
            Learning Urdu?
          </h5>
          <p className="card-text w-100 my-2" id="IntroLongText">
            Immerse yourself in the beauty of the Urdu language and enhance your
            language skills through interactive games, engaging exercises, and
            immersive language experiences! Explore the elegance of Urdu script
            and delve into its rich vocabulary and grammar. Uncover the
            fascinating culture and heritage associated with Urdu, from
            literature and poetry to art and music.
          </p>

          <p className="card-text w-100 my-2" id="IntroShortText">
            Start your journey of learning Urdu with interactive games and
            engaging exercises!
          </p>
        </div>
      </div>

      <div className="homePage--box--languageHomePage ">
        <div
          className="card card-circle--languageHomePage"
          id="circleUrduColor"
        >
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Games</h5>
            <p className="card-text--languageHomePage">
              Want to learn letters?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/urdu_game" className="btn--link">
                Play
              </Link>
            </a>
          </div>
        </div>

        <div
          className="card card-circle--languageHomePage"
          id="circleUrduColor"
        >
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Letters</h5>
            <p className="card-text--languageHomePage">
              Need to learn the letters first?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/urdu_letters" className="btn--link">
                Learn
              </Link>
            </a>
          </div>
        </div>

        <div
          className="card  card-circle--languageHomePage"
          id="circleUrduColor"
        >
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Resources</h5>
            <p className="card-text--languageHomePage">
              Want free resources for learning Urdu?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/urdu_resources" className="btn--link">
                See
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrduHomePage;
