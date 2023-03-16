
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
function Products() {
    const { state, setState } = useContext(UserContext);

  const logout = async () => {
    const uri = "http://localhost:2000/api/v1/user/logout";
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

    return (
        <div>
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

            <main>
              


  


            </main>
            
        
        
        
        </div>
    )
}

export default Products;
