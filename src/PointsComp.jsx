import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/Ai";
import { AiOutlineHeart } from "react-icons/Ai";
import HeartsComp from "./HeartsComp";

function PointsComp(props) {
  return (
    <div className="pointsComp">
      <div id="score" className="">
        <h5>Current Score : {props.currentScore} </h5>
      </div>

      <div className="heartsComp">
        <HeartsComp heartsLeft={props.heartsLeft} />
      </div>
    </div>
  );
}

export default PointsComp;
