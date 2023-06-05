import React, { useState } from "react";
import "./youHaveLost.css";

export default function YouHaveLost(props) {
  // const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log("I am being fucking clicked");
    // setModal(!modal);
    // console.log("AM I FUCKING TRUE", modal);
  };

  return (
    <>
      {/* <div className={modal ? "modal show" : "modal"}> */}
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="you-have-lost">
          <h2>You Have Lost!</h2>
          <p className="my-4">
            Oops! You ran out of hearts. Try again and get a new high score!
          </p>
          <button
            className="restart-button my-3 mx-5"
            onClick={props.restartGame}
          >
            Restart Game
          </button>
          <button
            className="restart-button my-3 mx-5"
            onClick={props.restartGame}
          >
            Want to study more?
          </button>
        </div>
        {/* <button className="close-modal">CLOSE</button> */}
      </div>
      {/* </div> */}
    </>
  );
}
