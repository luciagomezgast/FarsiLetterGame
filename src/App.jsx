import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./navbar&footer/NavBar";
import Footer from "./navbar&footer/Footer";
import Home from "./Home";
import GameStructure from "./GameStructure/GameStructure";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import AboutPage from "../AboutPage";
import LanguageHomePage from "./LanguagesHomePages/LanguageHomePage";
import Languages from "./dataLists/LanguagesHomePageList/Languages";
import LanguagesLists from "./dataLists/LettersLists/LettersLists";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="outsideApp">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home Languages={Languages} />} />

          {Languages.map((language, index) => (
            <Route
              key={index}
              path={`/${language.homePath}`}
              element={
                <LanguageHomePage
                  language={language.language}
                  mainTitle={language.mainTitle}
                  color={language.color}
                  cardTitle={language.cardTitle}
                  longDescription={language.longDescription}
                  smallDescription={language.smallDescription}
                  gameLink={language.gameLink}
                  gameHelp={language.gameHelp}
                  urduResources={language.urduResources}
                />
              }
            />
          ))}

          {LanguagesLists.map((language, index) => (
            <Route
              key={index}
              path={`/${language.gameLink}`}
              element={<GameStructure cards={language.LettersObject} />}
            />
          ))}
          <Route path="/about_page" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
