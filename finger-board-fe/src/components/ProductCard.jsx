import { useState, useEffect } from "react";


export function ProductCard(props) {

    const product = props.product

    return (
        <div id="productCard" className="border w-100 h-100% flex-col">

            <div className="flex justify-center my-8">
                <img className="w-1/2 -mr-4" src={product.image.front} alt={product.productname + ' - front'} />
                <img className="w-1/2 -ml-4" src={product.image.back} alt={product.productname + ' - back'} />
            </div>

            <div>
                <h3 className="mb-5">{product.productname}</h3>
                <p className="font-normal font-sans text-white mb-5">{product.description}</p>

                <div className="flex justify-evenly mb-5">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{product.color}</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{product.size + 'mm'}</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{product.wood}</span>
                </div>

                <div className="text-right pr-5 font-bold font-sans text-4xl text-white">{product.price + '€'}</div>

                <button className="space-end group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Bestellen</button>
            </div>
        </div>
    )
}