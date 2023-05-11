import "./App.css";
import data from "./data";
import "bootstrap/dist/css/bootstrap.css";
import LetterComp from "./LetterComp";
import SymbolComp from "./SymbolComp";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function App() {
  const [cards, setCards] = useState(data);
  const [randomCards, setRandomCards] = useState(getThreeRandomSymbolCards());
  const [isMatch, setIsMatch] = useState(false);
  const [score, setScore] = useState(0);


  function getThreeRandomSymbolCards() {
    let newArrayOfSymbolCards = [];
    let amountOfCardsWanted = 3

    while (newArrayOfSymbolCards.length < amountOfCardsWanted) {
      let randomIndexNumber = Math.floor(Math.random() * cards.length);

      if (!newArrayOfSymbolCards.includes(randomIndexNumber)) {
        newArrayOfSymbolCards.push(randomIndexNumber);
      }
    }

    return newArrayOfSymbolCards.map((index) => cards[index]);
  }


  const randomIndexOutOfThree = Math.floor(Math.random() * 3)


  function ChecksIfMatchOnClick(id) {
    let savedLetterCompId = randomCards[randomIndexOutOfThree].id

    if (id == savedLetterCompId) {
 
      setScore((prevScore) => prevScore + 1); // Increase the score by 1
      setIsMatch(true)
      console.log("we have a match")

     
    } else {
      // setScore((prevScore) => prevScore - 1); // Decrease the score by 1
      console.log("we DO NOT have a match TRY AGAIN");
    
    }
  }



  useEffect(() => {
    setRandomCards(getThreeRandomSymbolCards());
    setIsMatch(false)
    
  
  }, [isMatch]);



  return (
    <div className="outsideApp">
      <NavBar 
      currentScore ={score}
      />

      <div className="App">
        <div className="letterBox">
          <LetterComp
            id={randomCards[randomIndexOutOfThree].id}
            letter={randomCards[randomIndexOutOfThree].Letter}
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
  );
}

export default App;
