import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";
import NavBarGame from "./NavBarGame";
import Home from "./Home";
import FarsiHomePage from "./FarsiHomePage";
import GameStructure from "./GameStructure";
import ArabicHomePage from "./ArabicHomePage";
import farsiCards from "./dataLists/farsiList";
import arabicCards from "./dataLists/arabicList";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "../Footer";
import AboutPage from "../AboutPage";

function App() {
  function NavBarOrNavBarGame() {
    const location = useLocation();
    const currentPath = location.pathname;
    console.log("current test", currentPath);

    if (currentPath === "/farsi_game" || currentPath === "/arabic_game") {
      return <NavBarGame />;
    } else {
      return <NavBar />;
    }

    //   if (currentPath === "/farsi_game") {
    //     return <NavBarGame />;
    //   } else if (currentPath === "/arabic_game") {
    //     return <NavBarGame />;
    //   } else {
    //     return <NavBar />;
    //   }
  }

  return (
    <Router>
      <div className="outsideApp">
        <NavBarOrNavBarGame />
        {/* currentScore={score} */}
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
          <Route path="/about_page" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
