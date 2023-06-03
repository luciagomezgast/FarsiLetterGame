import "./gameStructure.css";
// import farsiCards from "./dataLists/farsiList";
import farsiCards from "./dataLists/arabicList";
import "bootstrap/dist/css/bootstrap.css";
import LetterComp from "./LetterComp";
import SymbolComp from "./SymbolComp";
import { useState, useEffect } from "react";
import NavBarGame from "./NavBarGame";
// import Home from "./Home";
// import FarsiGame from "./FarsiGame";
import { useLocation } from "react-router-dom";

const AMOUNT_OF_CARDS = 3;

function GameStructure() {
  const [randomCards, setRandomCards] = useState([]);
  const [score, setScore] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;
  console.log("cirremtrepmpodg", currentPath);

  function setRandomSymbolCards() {
    const newArrayOfSymbolCards = [];

    while (newArrayOfSymbolCards.length < AMOUNT_OF_CARDS) {
      const randomIndexNumberOfDataArr = Math.floor(
        Math.random() * farsiCards.length
      );

      if (!newArrayOfSymbolCards.includes(randomIndexNumberOfDataArr)) {
        newArrayOfSymbolCards.push(randomIndexNumberOfDataArr);
      }
    }

    setRandomCards(newArrayOfSymbolCards.map((index) => farsiCards[index]));
    setRandomIndex(Math.floor(Math.random() * AMOUNT_OF_CARDS));
  }

  //clickhandler
  function ChecksIfMatchOnClick(id) {
    let savedLetterCompId = randomCards[randomIndex].id;

    if (id === savedLetterCompId) {
      setScore((prevScore) => prevScore + 1); // Increase the score by 1
      setRandomSymbolCards();
      console.log("we have a match");
    } else {
      setScore((prevScore) => prevScore - 1); // Decrease the score by 1
      console.log("we DO NOT have a match TRY AGAIN");
    }
  }

  useEffect(() => {
    setRandomSymbolCards();
  }, []);

  return randomCards.length ? (
    <div className="outside--gameStructure">
      <NavBarGame currentScore={score} />

      <div className="cards-container">
        <div className="letterBox">
          <LetterComp
            id={randomCards[randomIndex].id}
            letter={randomCards[randomIndex].Letter}
          />
        </div>

        <div className="segments">
          {randomCards.map((card) => (
            <SymbolComp
              key={card.id}
              id={card.id}
              symbol={card.Symbol}
              ChecksIfMatchOnClick={() => ChecksIfMatchOnClick(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  ) : null;
}

export default GameStructure;
