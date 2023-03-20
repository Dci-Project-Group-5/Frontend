import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";


export function ProductCard(props) {

    const product = props.product;
    const productId = product._id;
    const { state, setState } = useContext(UserContext);
    const [user, setUser] = useState({
        ...state.user
    });
    const shopMode = props.shopMode;
    const sold = product.sold;


    const order_URL = "https://finger-board.onrender.com/api/v1/user/order";
    //const order_URL = "http://localhost:8080/api/v1/user/order";

    const sold_URL = "https://finger-board.onrender.com/api/v1/product/sold";
    //const sold_URL = "http://localhost:8080/api/v1/product/sold";

    const handleOrder = async (e) => {
        e.preventDefault();

        setUser(user.orders.push(productId));


        try {
            const { data } = await axios.put(order_URL, user);
            setState({ ...state, user: data.user });
            console.log(data);

        } catch (error) {
            console.log(error);
            setState({ ...state, error: error.response.data.message });
            console.log(error.response.data.message);
        };

        try {
            const body = {id: productId}
            const result = await axios.put(sold_URL, body);
            console.log(result );

        } catch (error) {
            console.log(error);
            setState({ ...state, error: error.response.data.message });
            console.log(error.response.data.message);
        };
    };

    return (
        <div id="productCard" className="border w-100 h-100% flex-col">

            <div className="flex justify-center my-8">
                <img className="w-1/2 -mr-4" src={product.image.front} alt={product.productname + ' - front'} />
                <img className="w-1/2 -ml-4" src={product.image.back} alt={product.productname + ' - back'} />
            </div>

            <div>
                <h3 className="mb-5">{product.productname}</h3>
                <p className="font-normal font-sans text-white mb-5">{product.description}</p>

                <div className="flex flex-wrap justify-evenly mb-5">
                    <span className="bg-gray-100 my-1 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{product.color}</span>
                    <span className="bg-gray-100 my-1 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{product.size + 'mm'}</span>
                    <span className="bg-gray-100 my-1 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{product.wood}</span>
                </div>

                <div className="text-right pr-5 font-bold font-sans text-4xl text-white">{product.price + '€'}</div>

                {shopMode ? (

                    !sold ? 
                    (<button
                        className="space-end group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleOrder}
                        >Bestellen
                    </button>)
                        :
                    <div className="sold-sign">Verkauft</div>)
                    
                    : null
                }

            </div>
        </div>
    )
}