import React, { useState,useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext.jsx";
import UserEditForm from "./UserEditForm.jsx";
import { Link } from "react-router-dom";

function Dashboard() {
  const { state } = useContext(UserContext);


  if (!state.isAuth) {
    return <Navigate to="/" />;
  }
  const { username, email, password, _id } = state.user;
  

// HOA: diese Funktion soll path auf UserEditForm öffnen
  function handleEditBtn() {
    
  }


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
          <div className="member">
              <h4>BESTELLUNGEN</h4>
              <div>Du hast noch keine Bestellung!</div>

            </div>


        </div>


    </div>
    
  );
}

export default Dashboard;
