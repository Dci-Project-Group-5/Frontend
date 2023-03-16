import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useNavigate, Navigate, redirect } from "react-router-dom";

function Register() {
  const { state, setState } = useContext(UserContext);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
    address: { street: "", housenumber: "", zip: "", city: "" },
  });

  const register_URL = "http://localhost:2000/api/v1/user/register";

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(register_URL, user);
      setState({ ...state, user: data.user, isAuth: true });

      console.log(data.message);
    } catch (error) {
      console.log(error);
      setState({ ...state, error: error.response.data.message, isAuth: false });
      console.log(error.response.data.message);
    }
  };
  const navigate = useNavigate();
  if (state.isAuth) {
    console.log("setTime");
    setTimeout(() => {
      navigate("/");
      console.log("setTime log");
    }, 3000);
  }
  // return <Navigate to="/" />;
  return (
    <div>
      <div id="register">
        <div className="btn-back">
              <Link to="/">
                  <button>
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
              </Link>
        </div>
        <div className=" register-container flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Ich bin neu hier
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <input
                    type="text"
                    required
                    className="info elative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                    value={user.username}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    className="info relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Vollname"
                    name="fullname"
                    onChange={handleChange}
                    value={user.fullname}
                  />
                </div>

                {/* <div>
                  <input
                    type="text"
                    required
                    className=" info relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Straße"
                    name="address.street"
                    onChange={handleChange}
                    value={user.address.street}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className=" info relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Hausnummer"
                    name="housenumber"
                    onChange={handleChange}
                    value={user.address.housenumber}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className=" info relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="PLZ"
                    name="address.zip"
                    onChange={handleChange}
                    value={user.address.zip}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    className=" info relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Stadt"
                    name="address.city"
                    onChange={handleChange}
                    value={user.address.city}
                  />
                </div> */}

                <div>
                  <input
                    type="text"
                    required
                    className="info relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                  />
                </div>

                <div>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="info relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                    onChange={handleChange}
                    value={user.password}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Weiter
                </button>
              </div>
              <div>
                {state.isAuth && (
                  <div>
                    <span>{state.user.username} , </span>{" "}
                    <span> user saved !</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
