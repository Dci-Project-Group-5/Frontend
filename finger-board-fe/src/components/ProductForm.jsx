import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import axios from "axios";
import defaultFrontImage from "../../img/stars_of_oilspill-back.png";
import defaultBackImage from "../../img/stars_of_oilspill-front.png";
import { useNavigate, Link } from 'react-router-dom';


function ProductForm() {

    const [productName, setProductName] = useState('');
    const [frontImage, setFrontImage] = useState(defaultFrontImage);
    const [backImage, setBackImage] = useState(defaultBackImage);
    const [wood, setWood] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState(0);
    const [updated, setUpdated] = useState(false);

    async function handleSubmit(evt) {

        evt.preventDefault();

        let body = {
            productname: productName,
            image: {
                front: frontImage,
                back: backImage
            },
            wood: wood,
            color: color,
            description: description,
            size: size,
            price: price,
            sold: false
        };

        console.log(body);

        try {
            let resp = await axios.post('https://finger-board.onrender.com/api/v1/product/saveProduct', body, {
                //let resp = await axios.post('http://localhost:8080/api/v1/product/saveProduct', body, {    
                headers: { "Content-Type": "application/json" }
            });

            console.log(resp);

            if (resp.status === 200) {
                setUpdated(true)
                console.log("setTime");
                setTimeout(() => {
                    setUpdated(false);
                    console.log("setTime log");
                }, 3000);
            }


        } catch (error) {
            console.error(error);
            // if (error.response.status === 403) setNotVerified(true);
            // setErrors([error.response.data.message]);
        }

    }

    function setImage(evt) {

        const inputId = evt.target.id

        console.log(inputId);

        const file = evt.target.files[0];

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file)

        fileReader.onloadend = (evt) => {
            const fileData = fileReader.result;

            //Je nach Input (evt.target) wird Front- oder Backimage gesetet
            inputId === "formFile1" ? setFrontImage(fileData) : setBackImage(fileData);
        }
    };


    return (
        <div id='addProduct' className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="btn-back"><Link to='/'><button><i className="fa-solid fa-arrow-left"></i></button></Link></div>
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        BOARD HINZUFÜGEN
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

                    <div className="-space-y-px rounded-md shadow-sm">

                        <div>
                            <input
                                id="product-name"
                                name="product-name"
                                type="text"
                                required
                                className="relative block mb-3 w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Produktname"
                                onChange={(evt) => setProductName(evt.target.value)}
                            />
                        </div>

                        <div className="flex justify-center">
                            <div className="mb-3 w-96">
                                <label
                                    htmlFor="formFile1"
                                    className="mb-1 inline-block text-neutral-700 dark:text-neutral-200">
                                    Bild der Oberseite
                                </label>
                                <input
                                    className="relative block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                                    type="file"
                                    accept="image/*"
                                    id="formFile1"
                                    onChange={setImage}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="mb-3 w-96">
                                <label
                                    htmlFor="formFile2"
                                    className="mb-1 inline-block text-neutral-700 dark:text-neutral-200">
                                    Bild der Unterseite
                                </label>
                                <input
                                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                                    type="file"
                                    accept="image/*"
                                    id="formFile2"
                                    onChange={setImage}
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                id="description"
                                name="description"
                                type="text"
                                required
                                className="relative mb-3 block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Produktbeschreibung"
                                onChange={(evt) => setDescription(evt.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                id="wood"
                                name="wood"
                                type="text"
                                required
                                className="relative mb-3 block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Holzart"
                                onChange={(evt) => setWood(evt.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                id="color"
                                name="color"
                                type="text"
                                required
                                className="relative mb-3 block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Farbe"
                                onChange={(evt) => setColor(evt.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                id="size"
                                name="size"
                                type="text"
                                required
                                className="relative mb-3 block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Maße in mm"
                                onChange={(evt) => setSize(evt.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                required
                                className="relative mb-3 block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Preis in €"
                                onChange={(evt) => setPrice(evt.target.value)}
                            />
                        </div>

                    </div>

                    <div>
                        <button
                            type="submit"
                            className="relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {/* <Link to= '/produkt'> <h3 className="h3"> */}
                            Hinzufügen
                            {/* </h3></Link> */}
                        </button>
                    </div>

                    <div>
                        {updated && (
                            <div>
                                <span>Neues Produkt gespeichert!</span>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )

}


export default ProductForm