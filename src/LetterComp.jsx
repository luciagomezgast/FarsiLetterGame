
import './App.css'
import data from "./data"
import "bootstrap/dist/css/bootstrap.css";

function LetterComp({ letter, id, style }) {
  return (
    <div className="card" style={{ width: "10rem", ...style }}>
      <div className="card-body">
        <h5 className="card-title">Letter </h5>
        <p className="card-title">{letter}</p>
        <p className="card-title">{id}</p>
      </div>
    </div>
  );
}

export default LetterComp