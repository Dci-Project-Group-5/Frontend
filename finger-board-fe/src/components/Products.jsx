import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard.jsx";

function Products() {


    const [products, setProducts] = useState([]);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        if (hasMounted) {

            async function getProducts() {

                try {
                    const resp = await axios.get('http://localhost:8080/api/v1/product/getProducts')
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
            <Link to='/'><h1>Finger Board Shop</h1></Link>

            Products

            <div id="productDisplay" className="flex justify-evenly p-5">

                {products.length > 0 ? productCards : null }
                
            </div>

        </div>
    )
}

export default Products;
