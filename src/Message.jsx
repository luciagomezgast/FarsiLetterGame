
import './App.css'
import data from "./data"
import "bootstrap/dist/css/bootstrap.css";

function Message({ message }) {
  return (
    <div className="card" style={{ width: "10rem" }}>
      <div className="card-body">
        {{message} && <h5 className="card-title"> Yassss </h5>}
      
      </div>
    </div>
  );
}

export default Message