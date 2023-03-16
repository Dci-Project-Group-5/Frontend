import { useState } from "react";
import UserContext from "./UserContext";

const UserStates = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuth: false,
    error: null,
  });

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStates;
