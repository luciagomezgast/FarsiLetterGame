import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function HeartsComp({ heartsLeft }) {
  const FIVE_HEARTS = (
    <div>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );

  const FOUR_HEARTS = (
    <div>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <span></span>
    </div>
  );

  const THREE_HEARTS = (
    <div>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <span></span>
      <span></span>
    </div>
  );

  const TWO_HEARTS = (
    <div>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
      <span></span>
      <span></span>
      <span></span>
    </div>
  );

  const ONE_HEART = (
    <div>
      <FontAwesomeIcon icon={faHeart} />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );

  function ShowRemainingHearts() {
    if (heartsLeft === 5) {
      return FIVE_HEARTS;
    } else if (heartsLeft === 4) {
      return FOUR_HEARTS;
    } else if (heartsLeft === 3) {
      return THREE_HEARTS;
    } else if (heartsLeft === 2) {
      return TWO_HEARTS;
    } else if (heartsLeft === 1) {
      return ONE_HEART;
    }
  }

  return (
    <div className="">
      <ShowRemainingHearts />
    </div>
  );
}

export default HeartsComp;
