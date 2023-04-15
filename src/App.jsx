import "./App.css";
import data from "./data";
import "bootstrap/dist/css/bootstrap.css";
import LetterComp from "./LetterComp";
import SymbolComp from "./SymbolComp";
import { useState, useEffect } from "react";

function App() {
  const [card, setCard] = useState(data);
  const [reset, setReset] = useState(false);

  let randomNumber = Math.floor(Math.random() * card.length);
  let randomNumber2 = Math.floor(Math.random() * card.length);
  let randomNumber3 = Math.floor(Math.random() * card.length);

  // Make sure randomNumber2 and randomNumber3 are not the same as randomNumber
  while (randomNumber2 === randomNumber || randomNumber3 === randomNumber || randomNumber2 === randomNumber3) {
    randomNumber2 = Math.floor(Math.random() * card.length);
    randomNumber3 = Math.floor(Math.random() * card.length);
  }

  const randomItem = data[randomNumber];
  const randomItem2 = data[randomNumber2];
  const randomItem3 = data[randomNumber3];

  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  console.log("randomNumber", randomNumber);

  function clickHandler(id) {
    if (id === randomItem.id) {
      console.log("I work");
      setCorrect(true);
      setTimeout(() => {
        setCorrect(false);
        setReset(true);
      }, 300);
    } else {
      console.log("I do not work");
    }
  }

  useEffect(() => {
    if (reset) {
      setCard(data);
      setCorrect(false);
      setReset(false);
    }
  }, [reset]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const components = [
    <SymbolComp
      id={randomItem.id}
      symbol={randomItem.Symbol}
      onClick={() => clickHandler(randomItem.id)}
    />,
    <SymbolComp
      id={randomItem2.id}
      symbol={randomItem2.Symbol}
      onClick={() => clickHandler(randomItem2.id)}
    />,
    <SymbolComp
      id={randomItem3.id}
      symbol={randomItem3.Symbol}
      onClick={() => clickHandler(randomItem3.id)}
    />,
  ];

  shuffleArray(components);

  return (
    <div className="App">
      <div className="segments">
        <LetterComp
          id={randomItem.id}
          letter={randomItem.Letter}
          style={correct && { backgroundColor: "#00ff00 " }}
        />
      </div>
      <div className="segments">{components}</div>
    </div>
  );
}

export default App;
