import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";

function Dashboard() {
  const { state } = useContext(UserContext);

  if (!state.isAuth) {
    return <Navigate to="/" />;
  }
  const { username, email, password, _id } = state.user;

  return (
    <div className="dashboard-container">
      <NavLink to="/">
        <h1>Dashboard</h1>{" "}
      </NavLink>
      <h4> Hi , {username} welcome to the Dashboard!</h4>
      <div className="dh-cards ">
        <h4>USER DATEN</h4>
        <div>user_id : {_id}</div>
        <div>
          username :{username}
          <button>edit</button>
        </div>
        <div>
          email : {email}
          <button>edit</button>
        </div>
        <div>
          password : ***************<button>edit</button>
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
