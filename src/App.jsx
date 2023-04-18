import "./App.css";
import data from "./data";
import "bootstrap/dist/css/bootstrap.css";
import LetterComp from "./LetterComp";
import SymbolComp from "./SymbolComp";
import { useState, useEffect } from "react";
import SymbolComp2 from "./SymbolComp2";
import SymbolComp3 from "./SymbolComp3";



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
  const [incorrect1, setIncorrect1] = useState(false);
  const [incorrect2, setIncorrect2] = useState(false);

  console.log("randomNumber", randomNumber);

  function clickHandler(id) {
    if (id === randomItem.id) {
      console.log("I work");
      setCorrect(true);
      setTimeout(() => {
        setReset(true);
      }, 300);
    } else if (id === randomItem2.id) {
      setIncorrect1(true);
      setTimeout(() => {
        setReset(true);
      }, 300);
    } else if (id === randomItem3.id) {
      setIncorrect2(true);
      setTimeout(() => {
        setReset(true);
      }, 300);
    }
  }

  useEffect(() => {
    setCorrect(false);
    setReset(false);
    setIncorrect1(false);
    setIncorrect2(false);
    setCard(data);
     
  
  }, [ reset]);



  const components = [
    <SymbolComp
      id={randomItem.id}
      symbol={randomItem.Symbol}
      onClick={() => clickHandler(randomItem.id)}
      style={correct && {backgroundColor: 'green'}}
  
    />,
    <SymbolComp2
      id={randomItem2.id}
      symbol={randomItem2.Symbol} 
      onClick={() => clickHandler(randomItem2.id)}
      style={incorrect1 && {backgroundColor: 'red'}}
     
    />,
    <SymbolComp3
      id={randomItem3.id}
      symbol={randomItem3.Symbol}
      onClick={() => clickHandler(randomItem3.id)}
      style={incorrect2 && {backgroundColor: 'red'}}

    />,
  ];

  shuffleArray(components);

  return (
    <div className="App">
      <div className="segments">
        <LetterComp
          id={randomItem.id}
          letter={randomItem.Letter}
         
        />
      </div>
      <div className="segments">{components}</div>
    </div>
  );
}

export default App;
