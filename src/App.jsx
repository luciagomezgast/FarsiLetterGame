import "./App.css";
import data from "./data";
import "bootstrap/dist/css/bootstrap.css";
import LetterComp from "./LetterComp";
import SymbolComp from "./SymbolComp";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [randomCards, setRandomCards] = useState(getRandomCards());

  const shuffleCards = () => {
  const shuffledCards = [...data]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card}))
setCards(shuffledCards)


}

  function getRandomCards() {
    const newCards = [];
    while (newCards.length < 3) {
      const randomNum = Math.floor(Math.random() * cards.length);
      if (!newCards.includes(randomNum)) {
        newCards.push(randomNum);
      }
    }
    return newCards.map(index => cards[index]);
  }
  



  function LetterRandom() {
    const index = Math.floor(Math.random() * randomCards.length);
    return { 
      letter: randomCards[index].Letter, 
      id: randomCards[index].id, 
      // onClick: () => clickHandler(randomCards[index].id)
    };
  };

  function clickHandler(id) {
    setCards(oldCard => oldCard.map(card => {
      return card.id === id ? 
        {...card, isClicked: card.isClicked} :
        card;
    }));
    setRandomCards(getRandomCards());
  }

  return (
    <div className="App">
      <div className="segments">
        <LetterComp {...LetterRandom()} />
      </div>
      <div className="segments">
        {randomCards.map(card => (
          <SymbolComp
            key={card.id}
            id={card.id}
            symbol={card.Symbol}
            isClicked={card.isClicked}
            onClick={() => clickHandler(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
