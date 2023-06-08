import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./languagesHomePage.css";

function ArabicHomePage() {
  return (
    <div className="homePage--languageHomePage py-5">
      <div class="card" id="languageHomePage--cardbox">
        <div class="card-header" id="languageHomePage--cardtitle">
          <span> العربية</span>
        </div>
        <div class="card-body">
          <h5 class="card-title" id="languageHomePage--h5title">
            Learning Arabic?
          </h5>
          <p class="card-text w-100 my-2" id="IntroLongText">
            Immerse yourself in the beauty of Arabic script and enhance your
            language skills through interactive games, engaging exercises, and
            immersive language experiences! Explore the elegance of calligraphy
            and uncover the fascinating fact that Arabic is written from right
            to left, setting it apart from most other languages. Delve into the
            rich history and cultural significance of Arabic, gaining a deeper
            appreciation for its influence in literature, poetry, and art.
          </p>

          <p class="card-text w-100 my-2" id="IntroShortText">
            Immerse yourself in the beauty of Arabic script and enhance your
            language skills through interactive games, engaging exercises, and
            immersive language experiences!
          </p>
        </div>
      </div>

      <div className="homePage--box--languageHomePage ">
        <div className="card card-circle--languageHomePage">
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage"> Games</h5>
            <p className="card-text--languageHomePage">
              Want to learn Letters?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/arabic_game" className="btn--link">
                Play
              </Link>
            </a>
          </div>
        </div>

        <div className="card card-circle--languageHomePage">
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage"> Letters</h5>
            <p className="card-text--languageHomePage">
              Need to learn the letters first?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/arabic_game" className="btn--link">
                learn
              </Link>
            </a>
          </div>
        </div>

        <div className="card  card-circle--languageHomePage">
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Resources</h5>
            <p className="card-text--languageHomePage">
              Want free resources on the arabic langauge?
            </p>
            <a href="#" className="btn btn-primary">
              <Link to="/arabic_game" className="btn--link">
                See
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicHomePage;
