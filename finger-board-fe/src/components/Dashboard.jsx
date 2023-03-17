import React, { useState,useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext.jsx";
import UserEditForm from "./UserEditForm.jsx";

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
   

      <div className="dh-cards  ">

        <div className="relative bg-white">

          <button onClick={handleEditBtn} className="absolute right-0">Daten bearbeiten</button>

          <p className="user-db"> Hi , {username} welcome to the Dashboard!</p>
          <h3 className="user-db font-bold text-purple-800">USER DATEN</h3>
          <div className="card-db ">
            <p className="font-bold mb-2 text-2xl text-purple-800">Username : {username} </p>
            <p className="font-bold mb-2 text-2xl text-purple-800">Email : {email} </p>
            <p className="font-bold mb-2 text-2xl text-purple-800">Password : ****** </p>


 
            <a href="#" className="shop-more text-purple-600 hover:text-purple-500 underline text-sm">

        <div className=" bg-white">
          <p className="user-db"> Hi , {username} welcome to the Dashboard!</p>
          <h3 className="user-db font-bold text-purple-800">USER DATEN</h3>
          <div className="card-db ">
            <p className="font-bold mb-2 text-2xl text-purple-800">Username : {username} <button>edit</button></p>
            <p className="font-bold mb-2 text-2xl text-purple-800">Email : {email} <button>edit</button></p>
            <p className="font-bold mb-2 text-2xl text-purple-800">Password : ****** <button>edit</button></p>
              <NavLink to="/produkt" className="shop-more text-purple-600 hover:text-purple-500 underline text-sm">Shoping More 👉 </NavLink>
            {/* <a href="#" className="shop-more text-purple-600 hover:text-purple-500 underline text-sm">

            <NavLink to="/produkt">
            Shoping More 👉
            </NavLink></a> */}
          </div>

        </div>
      </div>
      

      <div className="member">
        <h4>BESTELLUNGEN</h4>
        <div>Du hast noch keine Bestellung!</div>
      

      </div>
    </div>
    
  );
}

export default Dashboard;
