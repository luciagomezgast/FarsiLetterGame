import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function SymbolComp2({ symbol, id, onClick, style }) {
  const styles = {
    backgroundColor: style ? '#FF0000' : 'white'
  };

  return (
    <div className="card" style={{ width: '10rem', ...styles }} onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">Symbol </h5>
        <p className="card-title">{symbol}</p>
        <p className="card-title">{id}</p>
      </div>
    </div>
  );
}

export default SymbolComp2;
