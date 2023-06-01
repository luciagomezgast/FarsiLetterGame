import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to the homepage </h1>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Arabic </h5>
          <Link to="/arabic"> See more </Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Farsi </h5>
          <Link to="/farsi"> See more </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
