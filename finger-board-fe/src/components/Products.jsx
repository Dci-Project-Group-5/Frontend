import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard.jsx";
import UserContext from "../context/UserContext";

function Products() {

  const { state, setState } = useContext(UserContext);

  const [products, setProducts] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (hasMounted) {
      async function getProducts() {
        try {
          const resp = await axios.get(
            "https://finger-board.onrender.com/api/v1/product/getProducts"
            //"http://localhost:8080/api/v1/product/getProducts"
          );
          setProducts(resp.data.products);
        } catch (error) {
          console.log(error);
        }
      }

      getProducts();
    } else {
      setHasMounted(true);
    }
  }, [hasMounted, products]);

  const logout = async () => {
    const logout_uri = "https://finger-board.onrender.com/api/v1/user/logout";
    //const logout_uri = "http://localhost:8080/api/v1/user/logout";

    try {
      await axios.get(logout_uri);
      setState({ ...state, isAuth: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
    return <Navigate to="/" />;
  };

  const productCards = products.map((product,index) => {
    return <ProductCard key={index} product={product} shopMode={true}/>;
  });

  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <h1>Finger Board Shop</h1>
          </Link>
        </div>
        <div>
          {state.isAuth ? (
            <Link to="/dashboard">
              <button className="btn-register">
                <i className="fa-solid fa-user"></i>
                <span> {state.user.username}</span>
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

      <div id="productDisplay" className="flex justify-evenly p-5 mt-20">
        {products.length > 0 ? productCards : null}
      </div>
    </div>
  );
}

export default Products;