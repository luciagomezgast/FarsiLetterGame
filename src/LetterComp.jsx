import "./App.css";

function LetterComp({ letter, id, style }) {
  return (
    <div className="card game--card--div" style={{ width: "10rem", ...style }}>
      <div className="card-body game--card--body">
        <p className="card-title  game--card--p" id="LetterGameWord">
          {letter}
        </p>
        {/* <p className="card-title">{id}</p> */}
      </div>
    </div>
  );
}

export default LetterComp;
