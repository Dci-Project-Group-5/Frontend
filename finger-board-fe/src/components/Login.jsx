import React from "react";
import { useState } from "react";
import { LockClosedIcon } from '@heroicons/react/20/solid'

import { Link } from "react-router-dom";

function Login () {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password); 

    }

    const handleChange = (e) => {
        console.log(e.target.value);

        setUser(e.target.value)

        setPassword(e.target.value)
    }
    return (
        <div>
               {/* ________________form login__________________________________ */}
          
          <div id="login">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                  <div className="btn-back"><Link to= '/'><button><i className="fa-solid fa-arrow-left"></i></button></Link></div>
                  <div>
                    <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                      WILLKOMMEN
                    </h1>
                  </div>
                  <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                   
                      <div>
                        <input
                          id="username"
                          type="text"
                          required
                          className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Username"
                          value={user}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                      
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Password"
                          value={password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        <Link to= '/produkt'> <h3 className="h3">Weiter</h3></Link>
                      </button>
                    </div>
                  </form>
                  
                </div>
              </div>

          </div>

          
        </div>
      
    )
}

export default Login