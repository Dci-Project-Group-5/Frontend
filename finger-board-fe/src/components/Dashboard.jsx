import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";

function Dashboard() {
  const { state } = useContext(UserContext);

  if (!state.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div> Hello , {state.user.username} welcome to Dashboard!</div>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default Dashboard;
