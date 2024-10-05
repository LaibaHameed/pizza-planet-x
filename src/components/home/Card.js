import Image from 'next/image';
import React, { useState } from 'react';

const Card = ({ fooddata }) => {
    const { img, name, description, price } = fooddata;
    const priceOptions = Object.keys(price); // Get price options based on the keys of price object

    const [size, setSize] = useState(priceOptions[1]); // Initialize size to the first option
    const [quantity, setQuantity] = useState(1); // Initialize quantity to 1

    let quantityArray = [1, 2, 3, 4, 5];

    // Calculate price based on the selected size
    const selectedPrice = price[size];

    const handleAddToCart = () => {
        // Logic to add the selected pizza to the cart
        console.log(`Added ${quantity} x ${size} ${name} to the cart for $${(selectedPrice * quantity).toFixed(2)}.`);
    };

    return (
        <div className="shadow-lg border-2 border-red-500 p-4 max-w-xs mx-auto my-4">
            <div className="relative bg-red-500 rounded-full overflow-hidden">
                <Image src={img} alt={name} className="w-full object-cover transition-transform duration-700 hover:scale-105 hover:rotate-12" width={300} height={200} />
            </div>
            <h2 className="text-lg font-bold mt-2 text-slate-950">{name}</h2>
            <p className="text-gray-700 mt-1 text-sm">{description}</p>

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
                    ${parseFloat(selectedPrice * quantity).toFixed(2)} {/* Display total price */}
                </span>
                <button
                    onClick={handleAddToCart}
                    className="bg-red-600 font-semibold text-white px-4 py-3 hover:bg-red-700 transition duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
