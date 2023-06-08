import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./languagesHomePage.css";

function FarsiHomePage() {
  return (
    <div className="homePage--languageHomePage py-5">
      <div className="card" id="languageHomePage--cardbox">
        <div className="card-header" id="languageHomePage--cardtitle--farsi">
          <span> فارسی</span>
        </div>
        <div className="card-body">
          <h5 className="card-title" id="languageHomePage--h5title">
            Learning Farsi?
          </h5>
          <p className="card-text w-100 my-2" id="IntroLongText">
            Immerse yourself in the beauty of the Farsi language and enhance
            your language skills through interactive games, engaging exercises,
            and immersive language experiences! Explore the elegance of Farsi
            script and delve into its rich vocabulary and grammar. Uncover the
            fascinating culture and heritage associated with Farsi, from
            literature and poetry to art and music.
          </p>

          <p className="card-text w-100 my-2" id="IntroShortText">
            Start your journey of learning Farsi with interactive games and
            engaging exercises!
          </p>
        </div>
      </div>

      <div className="homePage--box--languageHomePage ">
        <div
          className="card card-circle--languageHomePage"
          id="circleFarsiColor"
        >
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Games</h5>
            <p className="card-text--languageHomePage">
              Want to learn letters?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/farsi_game" className="btn--link">
                Play
              </Link>
            </a>
          </div>
        </div>

        <div
          className="card card-circle--languageHomePage"
          id="circleFarsiColor"
        >
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Letters</h5>
            <p className="card-text--languageHomePage">
              Need to learn the letters first?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/farsi_game" className="btn--link">
                Learn
              </Link>
            </a>
          </div>
        </div>

        <div
          className="card  card-circle--languageHomePage"
          id="circleFarsiColor"
        >
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Resources</h5>
            <p className="card-text--languageHomePage">
              Want free resources for learning Farsi?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/farsi_game" className="btn--link">
                See
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarsiHomePage;
