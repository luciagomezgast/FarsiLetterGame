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
          <p class="card-text w-100 my-2">
            Immerse yourself in the beauty of Arabic script and enhance your
            language skills through interactive games, engaging exercises, and
            immersive language experiences! Explore the elegance of calligraphy
            and uncover the fascinating fact that Arabic is written from right
            to left, setting it apart from most other languages. Delve into the
            rich history and cultural significance of Arabic, gaining a deeper
            appreciation for its influence in literature, poetry, and art.
          </p>
        </div>
      </div>

      <div className="homePage--box--languageHomePage ">
        <div className="card card-circle--languageHomePage">
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Arabic</h5>
            <a href="#" className="btn--languageHomePage btn-primary">
              <Link to="/arabic_game" className="btn--link">
                Play Arabic Letter Game
              </Link>
            </a>
          </div>
        </div>

        <div className="card card-circle--languageHomePage">
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Arabic</h5>
            <a href="#" className="btn--languageHomePage btn-primary">
              <Link to="/arabic_game" className="btn--link">
                Play Arabic Letter Game
              </Link>
            </a>
          </div>
        </div>

        <div className="card  card-circle--languageHomePage">
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Arabic</h5>
            <a href="#" className="btn--languageHomePage btn-primary">
              <Link to="/arabic_game" className="btn--link">
                Play Arabic Letter Game
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicHomePage;
