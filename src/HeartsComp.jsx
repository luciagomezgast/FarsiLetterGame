import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/Ai";
import { AiOutlineHeart } from "react-icons/Ai";

function HeartsComp({ heartsLeft }) {
  const FIVE_HEARTS = (
    <div>
      <AiFillHeart />
      <AiFillHeart />
      <AiFillHeart />
      <AiFillHeart />
      <AiFillHeart />
    </div>
  );

  const FOUR_HEARTS = (
    <div>
      <AiFillHeart />
      <AiFillHeart />
      <AiFillHeart />
      <AiFillHeart />
      <AiOutlineHeart />
    </div>
  );

  const THREE_HEARTS = (
    <div>
      <AiFillHeart />
      <AiFillHeart />
      <AiFillHeart />
      <AiOutlineHeart />
      <AiOutlineHeart />
    </div>
  );

  const TWO_HEARTS = (
    <div>
      <AiFillHeart />
      <AiFillHeart />
      <AiOutlineHeart />
      <AiOutlineHeart />
      <AiOutlineHeart />
    </div>
  );

  const ONE_HEART = (
    <div>
      <AiFillHeart />
      <AiOutlineHeart />
      <AiOutlineHeart />
      <AiOutlineHeart />
      <AiOutlineHeart />
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
