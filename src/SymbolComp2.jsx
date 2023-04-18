import './App.css'
import data from "./data"
import "bootstrap/dist/css/bootstrap.css";

function SymbolComp2({ symbol, id, onClick, style }) {
  return (
    <div className="card" style={{ width: "10rem", ...style }} onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">Symbol </h5>
        <p className="card-title">{symbol}</p>
        <p className="card-title">{id}</p>
      </div>
    </div>
  );
}

export default SymbolComp2
