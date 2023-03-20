import React, { useState, useContext, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext.jsx";
import { ProductCard } from "./ProductCard.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const { state, setState } = useContext(UserContext);
  const { username, email, password, _id } = state.user;
  const [products, setProducts] = useState([])

  const singleUser_URL = "https://finger-board.onrender.com/api/v1/user/" + _id;
  //const singleUser_URL = "http://localhost:8080/api/v1/user/" + _id;

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async (e) => {

    try {
      const { data } = await axios.get(singleUser_URL);

      setProducts(data.user.orders)

    } catch (error) {
      console.log(error);
      setState({ ...state, error: error.response.data.message });
      console.log(error.response.data.message);
    };
  };



  const productCards = products.map((product, index) => {
    return <ProductCard key={index} product={product} shopMode={false}/>;
  });


  if (!state.isAuth) {
    return <Navigate to="/" />;
  };

  return (

    <div className="dashboard-container">
      <div className="link-db">
        <NavLink to="/">
          <h1>Dashboard</h1>{" "}
        </NavLink>
      </div>

      <div className="dh-cards">

        <div className="relative bg-white">
          <Link to='/editform'><button className="absolute right-0">Daten bearbeiten</button></Link>

          <h3 className="user-db font-bold text-purple-800">USER DATEN</h3>
          <div className="card-db ">
            <p className="font-bold mb-2 text-2xl text-purple-800">Username : {username} </p>
            <p className="font-bold mb-2 text-2xl text-purple-800">Email : {email} </p>
            <p className="font-bold mb-2 text-2xl text-purple-800">Password : ****** </p>
            <NavLink to="/produkt" className="shop-more text-purple-600 hover:text-purple-500 underline text-sm">Shoping More 👉 </NavLink>
          </div>


        </div>

        <h3 className="user-db bg-white h-auto p-3 text-lg font-bold text-purple-800">Deine Bestellungen:</h3>

        
        {products.length > 0 ? 
          (<div id="productDisplay" className="flex mt-0 justify-evenly p-5">
          {productCards} 
          </div>)
        : 
          <div className="user-db bg-white h-auto p-3 text-lg font-bold text-purple-800">Du hast noch keine Bestellungen</div>
          }

          
        



      </div>


    </div>

  );
}

export default Dashboard;
