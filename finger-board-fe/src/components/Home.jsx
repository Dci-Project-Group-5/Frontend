import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Products from "./Products";
import Search from "./Search";

function Home() {
  const { state } = useContext(UserContext);
  return (
    <div id="home-container">
      <header>
        <div>
          <h1>Finger Board Shop</h1>
        </div>
        <div>
          <Link to="/login">
            <button className="btn-anmelden"> Anmelden</button>{" "}
          </Link>
          <Link to="/register">
            <button className="btn-register">Registrierung</button>
          </Link>
        </div>
      </header>

      <div id="body">
        <Link to="/produkt">
          <button className="btn-register body-item item item1"></button>
        </Link>
        <div className="body-item item item2"> </div>
        <Link to="/produkt">
          <button className="btn-register body-item item item3"></button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
