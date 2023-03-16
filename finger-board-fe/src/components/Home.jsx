import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Products from "./Products";
import Search from "./Search";
import axios from "axios";

function Home() {
  const { state, setState } = useContext(UserContext);

  const logout = async () => {

    const uri = "https://finger-board.onrender.com/api/v1/user/logout";

    try {
      await axios.get(uri);
      setState({ ...state, isAuth: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
    return <Navigate to="/" />;
  };

  console.log(state.user);

  return (
    <div id="home-container">
      <header>
        <div>
          <h1>Finger Board Shop</h1>
        </div>
        <div>
          {state.isAuth ? (
            <Link to="/dashboard">
              <button className="btn-register">
              <i className="fa-solid fa-user"></i><span> {state.user.username}</span>
              </button>
              <button onClick={handleLogout} className="btn-register">
                Logout
              </button>
            </Link>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn-anmelden"> Anmelden</button>{" "}
              </Link>{" "}
              <Link to="/register">
                <button className="btn-register">Registrierung</button>
              </Link>
            </div>
          )}
        </div>
      </header>
      <div id="body">
        <Link to="/produkt">
          <button className="btn-register body-item item item1"></button>
        </Link>
        <Link to="/team">
          <button className="btn-register  body-item item item2"> </button>
        </Link>
        <Link to="/addproducts">
          <button 
          // disabled={state.user === null || state.user.role !== 'admin' ? true : false} 
          className="btn-register body-item item item3 disabled:opacity-40"></button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
