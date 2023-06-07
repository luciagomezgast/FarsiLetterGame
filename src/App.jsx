import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./navbar&footer/NavBar";
import Home from "./Home";
import FarsiHomePage from "./LanguageSections/FarsiHomePage";
import GameStructure from "./GameStructure/GameStructure";
import ArabicHomePage from "./LanguageSections/ArabicHomePage";
import farsiCards from "./dataLists/farsiList";
import arabicCards from "./dataLists/arabicList";
import urduCards from "./dataLists/UrduList";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./navbar&footer/Footer";
import AboutPage from "../AboutPage";
import UrduHomePage from "./LanguageSections/UrduHomePage";

function App() {
  return (
    <div className="outsideApp">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farsi_home" element={<FarsiHomePage />} />
          <Route
            path="/farsi_game"
            element={<GameStructure cards={farsiCards} />}
          />
          <Route path="/arabic_home" element={<ArabicHomePage />} />
          <Route
            path="/arabic_game"
            element={<GameStructure cards={arabicCards} />}
          />

          <Route path="/urdu_home" element={<UrduHomePage />} />
          <Route
            path="/urdu_game"
            element={<GameStructure cards={urduCards} />}
          />

          <Route path="/urdu_home" element={<UrduHomePage />} />
          <Route path="/about_page" element={<AboutPage />} />

          {/* <Route path="/profile/:idProfile" element={<ProfilePage />} />

          <Route
            path="/signup"
            element={
              <IsAnon>
                <SignupPage />
              </IsAnon>
            }
          />

          <Route
            path="/login"
            element={
              <IsAnon>
                <LoginPage />
              </IsAnon>
            }
          /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
