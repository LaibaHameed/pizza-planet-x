import React, { useState, useContext } from 'react';
import { CartContext } from '@/utils/contextReducer';
import Image from 'next/image';
import Link from 'next/link';
import Alert from "@/components/Alert"; // Adjust the path as necessary

const Card = ({ fooddata }) => {
    const { state, dispatch } = useContext(CartContext);
    const [alert, setAlert] = useState(null); // State for alert messages

    const { _id, img, name, description, price } = fooddata;
    let id = _id;
    const priceOptions = Object.keys(price); // Get price options based on the keys of price object

    const [size, setSize] = useState(priceOptions[1]); // Initialize size to the first option
    const [quantity, setQuantity] = useState(1); // Initialize quantity to 1

    let quantityArray = [1, 2, 3, 4, 5];

    // Calculate price based on the selected size
    const selectedPrice = price[size];
    let finalPrice = parseFloat(selectedPrice * quantity).toFixed(2);

    const handleAddToCart = async () => {
        console.log("Current Cart State:", state); // Debugging line
        const updateItem = await state.find((item) => item.tempId === id + size)
        if (updateItem) {
            dispatch({
                type: "UPDATE",
                id: id,
                tempId: id + size,
                price: finalPrice,
                qty: quantity
            });

            setAlert({ type: 'success', message: `${updateItem.name} quantity has been updated to your cart!` }); // Set alert message
            setTimeout(() => {
                setAlert(null);
            }, 2000);

        }
        if (!updateItem) {
            dispatch({
                type: "ADD",
                id: id,
                tempId: id + size,
                name: name,
                price: finalPrice,
                qty: quantity,
                priceOptions: size,
                img: img
            });

            setAlert({ type: 'success', message: `${name} has been added to your cart!` }); // Set alert message
            // Remove alert after 2 seconds
            setTimeout(() => {
                setAlert(null);
            }, 2000);
        }

    };

    const handleCloseAlert = () => {
        setAlert(null);
    };

    return (
        <>
            <div className="shadow-sm border-2  p-4 max-w-xs mx-auto my-4">
                <Link href={{ pathname: "/item/[item" }} as={`item/${fooddata["_id"]}`} >

                    <div className="relative bg-red-500 rounded-full overflow-hidden">
                        <Image src={img} alt="pizza image" className="w-full object-cover transition-transform duration-700 hover:scale-105 hover:rotate-12" width={300} height={200} />
                    </div>

                    <h2 className="text-lg font-bold mt-2 text-slate-950">{name}</h2>
                    <p className="text-gray-700 mt-1 text-sm">{description}</p>
                </Link>
                <div className="flex justify-between content-evenly my-3">
                    <div>
                        <label className="block text-sm font-semibold text-slate-950">Size</label>
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="block border border-gray-300 w-28 px-3 py-2 mt-1 text-slate-950 bg-inherit">
                            {priceOptions.map((option) => (
                                <option key={option} value={option}>{option}</option> // Fix here: corrected the option tag
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-950">Quantity</label>
                        <select
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))} // Update quantity
                            className="block border border-gray-300 w-28 px-3 py-2 mt-1 text-slate-950 bg-inherit">
                            {quantityArray.map((q) => (
                                <option key={q} value={q}>{q}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-slate-950">
                        ${finalPrice} {/* Display total price */}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        className="bg-slate-950 font-semibold text-white px-4 py-3 hover:bg-yellow-500 hover:text-zinc-950 transition duration-200">
                        Add to Cart
                    </button>
                </div>

            </div>
            {/* Alert Message */}
            {/* {alert && (
                <div
                    className={`fixed z-50 bottom-16 right-4 mb-4 mr-4 px-6 py-4 shadow-lg transition-opacity duration-300 ${alert.type === 'success' ? 'bg-zinc-50 border border-green-400 text-green-700' : 'bg-zinc-50 border border-red-400 text-red-700'}`}
                >
                    <span>{alert.message}</span>
                </div>
            )} */}

            <Alert alert={alert} onClose={handleCloseAlert} /> {/* Use the Alert component */}

        </>
    );
};

export default Card;
