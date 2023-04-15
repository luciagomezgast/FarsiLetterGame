import './App.css'
import data from "./data"
import "bootstrap/dist/css/bootstrap.css";

function SymbolComp({ symbol, id, onClick }) {
  return (
    <div className="card" style={{ width: "10rem" }} onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">Symbol </h5>
        <p className="card-title">{symbol}</p>
        <p className="card-title">{id}</p>
      </div>
    </div>
  );
}

export default SymbolComp
