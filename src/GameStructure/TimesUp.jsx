import React, { useState } from "react";
import "./youHaveLost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

export default function TimesUp(props) {
  const toggleModal = () => {
    console.log("I am being fucking clicked");
  };

  return (
    <>
      {/* <div className={modal ? "modal show" : "modal"}> */}
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="you-have-lost">
          <h2>
            Time's up <FontAwesomeIcon icon={faStopwatch} />
          </h2>
          <p className="my-4">
            Oops! You ran out of time. Try again and get a new high score!
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
      </div>
    </>
  );
}
