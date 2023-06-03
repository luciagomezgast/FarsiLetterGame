import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";
import NavBarGame from "./NavBarGame";
import Home from "./Home";
import FarsiHomePage from "./FarsiHomePage";
import FarsiGameStructure from "./FarsiGameStructure";
import ArabicHomePage from "./arabicHomePage";
import ArabicGameStructure from "./ArabicGameStructure";

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

    return currentPath !== "/farsi_game" && <NavBar />;
  }

  return (
    <Router>
      <div className="outsideApp">
        <NavBarOrNavBarGame />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farsi_home" element={<FarsiHomePage />} />
          <Route path="/farsi_game" element={<FarsiGameStructure />} />
          <Route path="/arabic_home" element={<ArabicHomePage />} />
          <Route path="/arabic_game" element={<ArabicGameStructure />} />
          <Route path="/about_page" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
