import { baseUrl } from '@/utils/baseUrl';
import { MoveLeftIcon } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { CartContext } from '@/utils/contextReducer'; // Import CartContext

const Item = ({ data }) => {
    const { state, dispatch } = useContext(CartContext);
    
    const { _id, img, name, description, price } = data;
    let id = _id;
    const priceOptions = Object.keys(price); // Get price options based on the keys of price object

    const [size, setSize] = useState(priceOptions[1]); // Initialize size to the first option
    const [quantity, setQuantity] = useState(1); // Initialize quantity to 1

    let quantityArray = [1, 2, 3, 4, 5];

    // Calculate price based on the selected size
    const selectedPrice = price[size];
    let finalPrice = parseFloat(selectedPrice * quantity).toFixed(2);

    const handleAddToCart = async() => {
        console.log("Current Cart State:", state); // Debugging line
        const updateItem = await state.find((item)=>item.tempId === id+size)
        if(updateItem){
            dispatch({
                type: "UPDATE",
                id: id,
                tempId : id+size,
                price: finalPrice,
                qty: quantity
            });
        }
        if(!updateItem){
            dispatch({
                type: "ADD",
                id: id,
                tempId : id+size,
                name: name,
                price: finalPrice,
                qty: quantity,
                priceOptions: size,
                img: img
            });
        }
        
    };
    
    const title = `${String(name)} - Menu Item`;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            {/* Centered Back Button */}
            <div className="flex justify-center my-4">
                <span className='border-2 rounded-full border-b-zinc-950 p-2'>
                    <Link href="/menu">
                        <MoveLeftIcon className="w-6 h-6 text-zinc-950" />
                    </Link>
                </span>
            </div>

            {/* Product Page Layout */}
            <div className="flex max-w-6xl mx-auto my-4 p-4">

                {/* Details Section */}
                <div className="flex-1  mr-12">
                    <h2 className="text-7xl font-bold text-slate-950">{name}</h2>
                    <p className="text-gray-700 mt-5 text-lg">{description}</p>

                    {/* Size and Quantity Selectors */}
                    <div className="flex justify-between my-4">
                        <div className="w-1/2">
                            <label className="block text-xl font-semibold text-slate-950">Size</label>
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className="block border border-gray-300 w-full px-3 py-2 mt-1 text-slate-950 bg-inherit"
                            >
                                {priceOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-1/2 ml-4">
                            <label className="block text-xl font-semibold text-slate-950">Quantity</label>
                            <select
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="block border border-gray-300 w-full px-3 py-2 mt-1 text-slate-950 bg-inherit"
                            >
                                {quantityArray.map((q) => (
                                    <option key={q} value={q}>
                                        {q}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Price and Add to Cart Button */}
                    {/* <div className="flex justify-between items-center mt-4"> */}
                        <span className="text-6xl font-bold text-slate-950 block mt-6">$ {finalPrice}</span>
                        <button
                            onClick={handleAddToCart}
                            className="bg-yellow-500 text-zinc-950 font-bold tracking-wide uppercase p-2 sm:py-6 sm:px-6 md:text-sm transition-colors duration-300 hover:bg-slate-950 hover:text-white text-2xl  mt-6"
                        >
                            Add to Cart
                        </button>
                    {/* </div> */}
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <div className="relative bg-red-500 overflow-hidden">
                        <Image
                            src={img}
                            alt="pizza image"
                            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105 hover:rotate-12"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Item;

// export async function getServerSideProps(context) {
//     const { item } = context.query;
//     const res = await fetch(baseUrl + "api/getDataById", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ item: item }),
//     });
//     const data = await res.json();

//     return { props: { data: data } };
// }

export async function getServerSideProps(context) {
    const { item } = context.query;

    // Fetch all food data
    const res = await fetch(baseUrl + "api/foodData", { method: "GET" });
    const pizzaData = await res.json();
    const data = pizzaData.data || [];

    // Find the specific item by ID
    const itemData = data.find((pizza) => pizza._id === item);

    // Return the specific item data
    return { props: { data: itemData } };
}
