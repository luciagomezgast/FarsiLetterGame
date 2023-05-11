import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function SymbolComp({ symbol, id, ChecksIfMatchOnClick }) {





  // const styles = {
  //   backgroundColor: isClicked ? '#59E391' : 'white'
  // };

  return (
    // <div className="card" style={{ width: '10rem', ...styles }} onClick={onClick}>
    <div className="card" style={{ width: '10rem' }} onClick={ChecksIfMatchOnClick} >
    

      <div className="card-body">
        <h5 className="card-title">Symbol </h5>
        <p className="card-title">{symbol}</p>
        <p className="card-title">{id}</p>
      </div>
    </div>
  );
}

export default SymbolComp;
