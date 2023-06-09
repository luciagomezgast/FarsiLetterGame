import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import LetterComp from "./LetterComp";
import SymbolComp from "./SymbolComp";
import { useState, useEffect } from "react";
import PointsComp from "./PointsComp";
import YouHaveLost from "./YouHaveLost";
import TimesUp from "./TimesUp";
// import { useLocation } from "react-router-dom";

const AMOUNT_OF_CARDS = 3;

function GameStructure({ cards, lettersTable }) {
  const [randomCards, setRandomCards] = useState([]);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [randomIndex, setRandomIndex] = useState(0);
  const [countdown, setCountdown] = useState(30);

  console.log("letterstable", lettersTable);

  function setRandomSymbolCards() {
    const newArrayOfSymbolCards = [];

    while (newArrayOfSymbolCards.length < AMOUNT_OF_CARDS) {
      const randomIndexNumberOfDataArr = Math.floor(
        Math.random() * cards.length
      );

      if (!newArrayOfSymbolCards.includes(randomIndexNumberOfDataArr)) {
        newArrayOfSymbolCards.push(randomIndexNumberOfDataArr);
      }
    }

    setRandomCards(newArrayOfSymbolCards.map((index) => cards[index]));
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
      setHearts((prevScore) => prevScore - 1); // Decrease the score by 1
    }
  }

  function restartGame() {
    setHearts(5);
    setScore(0);
    setCountdown(30);
  }

  useEffect(() => {
    setRandomSymbolCards();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  return randomCards.length ? (
    <div className="outside--gameStructure">
      <div className="outer--pointidv">
        <PointsComp
          currentScore={score}
          heartsLeft={hearts}
          countdown={countdown}
          lettersTable={lettersTable}
        />
        <div>
          {!hearts && (
            <YouHaveLost
              restartGame={() => restartGame()}
              currentScore={score}
              lettersTable={lettersTable}
            />
          )}

          {!countdown && (
            <TimesUp restartGame={() => restartGame()} currentScore={score} />
          )}
        </div>
      </div>
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
