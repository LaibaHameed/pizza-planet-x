import Card from "@/components/home/Card";
import { useState } from "react";
import { baseUrl } from "@/utils/baseUrl";

export default function Menu({ data }) {
    const categories = new Set();
    const fooddata = [];

    const handleData = () => {
        data?.forEach((data) => {
            fooddata.push(data);
            categories.add(data.category);
        });
    };

    handleData();

    const categoryArray = [...categories]; // Convert Set to Array

    const [typeFilter, setTypeFilter] = useState(false);

    return (
        <>
            <div className="flex flex-col justify-center content-center gap-4 p-4">
                <h1 className="text-center uppercase text-zinc-950 md:text-6xl text-4xl font-bold mt-10">
                    Pizzaplanet&#39;s Menu
                </h1>
                <p className="text-center text-gray-700 w-full lg:w-2/3 mx-auto md:text-lg leading-snug md:leading-normal md:tracking-wide md:font-semibold">
                    Amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet
                    risus tempor semper odio egestas id pulvinar consectetur elit tortor
                    non hac pellentesque lacus donec accumsan quisque ultricies adipiscing
                    mauris tortor cras est eu accumsan mauris.
                </p>
            </div>
            <div className="flex justify-center md:justify-start md:gap-6 gap-2 my-10 ml-10">
                <button
                    onClick={() => setTypeFilter(false)}
                    className={`font-bold tracking-wider uppercase p-2 sm:py-4 sm:px-6 md:text-sm transition-colors duration-300 ${!typeFilter ? "bg-slate-950 text-white" : "text-slate-950 bg-inherit border-2"
                        }`}
                >
                    ALL
                </button>
                <button
                    onClick={() => setTypeFilter("Veg")}
                    className={`font-bold tracking-wider uppercase p-2 sm:py-4 sm:px-6 md:text-sm transition-colors duration-300 ${typeFilter === "Veg" ? "bg-slate-950 text-white" : "bg-yellow-500 text-zinc-950"
                        }`}
                >
                    Veg
                </button>
                <button
                    onClick={() => setTypeFilter("Non-Veg")}
                    className={`font-bold tracking-wider uppercase p-2 sm:py-4 sm:px-6 md:text-sm transition-colors duration-300 ${typeFilter === "Non-Veg" ? "bg-slate-950 text-white" : "bg-red-600 text-white"
                        }`}
                >
                    Non-Veg
                </button>
            </div>

            <div className="flex flex-col justify-center gap-4 p-4">
                {categoryArray.map((category) => (
                    <div key={category}>
                        <div className="text-4xl ml-8 mb-3 uppercase font-bold text-zinc-950">
                            {category}
                        </div>
                        <hr className="mb-4" />
                        <div className="flex flex-wrap gap-4 justify-center">
                            {fooddata
                                ?.filter((item) => item.category === category)
                                ?.filter((item) => typeFilter ? typeFilter === item.foodType : item)
                                ?.map((data) => (
                                    <Card key={data.name} fooddata={data} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 export async function getStaticProps() { 
    let data = null;
    try {
        const response = await fetch(baseUrl + "api/foodData", { method: "GET" });
        const pizzaData = await response.json();
        data = pizzaData.data || [];
    } catch (error) {
        console.log('Error fetching food data:', error);
    }

    return {
        props: {
            data,
        },
    };
} 