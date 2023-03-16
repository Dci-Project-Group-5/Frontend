
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
                        Dashboard<div>{state.user.username}</div>
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
                <div id="products">
                    <div className="wrapper">
                        <div className="card">
                            <div className="front">
                            <h4>Signature</h4>
                            <p>7.7 deck<span>2018</span></p>
                            <p className="price">$ 89.00</p>
                            </div>
                            <div className="right">
                            <h2>Signature</h2>
                            <ul>
                                <li>Width	7.7"</li>
                                <li>Length	31.75"</li>
                                <li>Wheelbase	14"</li>
                                <li>Nose	6.875"</li>
                                <li>Tail	6.25"</li>
                            </ul>
                            <button>Add to cart, yo</button>
                            </div>
                        </div>
                        <div className="img-wrapper">
                           {/*  <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt=''>     */}
                        </div>
                    </div>


  



                    

                </div>


            </main>
            
        
        
        
        </div>
    )
}

export default Products;
