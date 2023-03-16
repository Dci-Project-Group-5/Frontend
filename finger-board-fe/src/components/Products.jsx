import React, { useContext } from "react";
import { Link } from "react-router-dom"
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
                    const resp = await axios.get('https://finger-board.onrender.com/api/v1/product/getProducts')
                    setProducts(resp.data.products);
    
                } catch (error) {
                    console.log(error)
                }
            };

            getProducts()

        } else {
          setHasMounted(true);
        }
      }, [hasMounted, products]);


    // useEffect(() => {
    //     async function getProducts() {

    //         try {
    //             const resp = await axios.get('http://localhost:8080/api/v1/product/getProducts')
    //             setProducts(resp.data.products);

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };

    //     getProducts()
    // }, []);



    const productCards = products.map(product => {
        return <ProductCard product={product}/>
    })


    return (
        <div>
            <header>
                <div>
                <Link to='/'><h1>Finger Board Shop</h1></Link>
                </div>
                <div>
                {state.isAuth ? (
                    <Link to="/dashboard">
                    <button className="btn-register">
                    <i className="fa-solid fa-user"></i><span> {state.user.username}</span>
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

           

           

            

            <div id="productDisplay" className="flex justify-evenly p-5">

                {products.length > 0 ? productCards : null }
                
            </div>

 
        </div>
    )
}

export default Products;
