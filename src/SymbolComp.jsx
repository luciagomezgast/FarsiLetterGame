import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function SymbolComp({ symbol, id, ChecksIfMatchOnClick }) {
  return (
    <div
      className="card game--card--div"
      style={{ width: "10rem" }}
      onClick={ChecksIfMatchOnClick}
    >
      <div className="card-body game--card--body">
        <p className="card-title  game--card--p">{symbol}</p>
        {/* <p className="card-title">{id}</p> */}
      </div>
    </div>
  );
}

export default SymbolComp;
