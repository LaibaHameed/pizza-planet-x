import Card from "@/components/home/Card";
import { useState } from "react";
import { baseUrl } from "@/utils/baseUrl";

export default function Menu({ data }) {
    const [typeFilter, setTypeFilter] = useState(false);
    const categories = new Set();
    const fooddata = [];

    const handleData = () => {
        data?.map((data) => {
            return fooddata.push(data), categories.add(data.category);
        });
    };

    handleData();

    const categoryArray = [...categories]; // Convert Set to Array


    return (
        <>
            <div className="flex flex-col justify-center items-center content-center gap-4 p-4">
                <h1 className="text-center uppercase text-zinc-950 md:text-6xl text-4xl font-bold mt-10">
                    Our Menu
                </h1>
                <p className="text-center mt-6 text-gray-700 max-w-lg mx-auto md:text-lg leading-snug md:leading-normal md:tracking-wide md:font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit egestas eros eu egestas amet nisi lobortis.
                </p>
            </div>

            <div className="flex justify-center md:justify-start md:gap-6 gap-2 my-10 ml-10">
                <button
                    onClick={() => setTypeFilter(false)}
                    className={`font-bold tracking-wider uppercase p-2 sm:py-4 sm:px-6 md:text-sm transition-colors duration-300 ${!typeFilter ? "bg-slate-950 text-white" : "text-slate-950 bg-inherit border-2"}`}
                >
                    ALL
                </button>
                <button
                    onClick={() => setTypeFilter("Veg")}
                    className={`font-bold tracking-wider uppercase p-2 sm:py-4 sm:px-6 md:text-sm transition-colors duration-300 ${typeFilter === "Veg" ? "bg-slate-950 text-white" : "bg-yellow-500 text-zinc-950"}`}
                >
                    Veg
                </button>
                <button
                    onClick={() => setTypeFilter("Non-Veg")}
                    className={`font-bold tracking-wider uppercase p-2 sm:py-4 sm:px-6 md:text-sm transition-colors duration-300 ${typeFilter === "Non-Veg" ? "bg-slate-950 text-white" : "bg-red-600 text-white"}`}
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
                        {/* Grid layout for food items with 3 cards in a row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
    let data;
    try {
        const pizzaData = await fetch(baseUrl + "api/foodData", { method: "GET" })
            .then((response) => response.json())
            .catch((error) => error.message);

        data = await JSON.parse(JSON.stringify(pizzaData)); // step required during deployment in staticProps
    } catch (error) {
        console.log(error.message);
    }
    return {
        props: {
            data: data.data || null,
        },
        revalidate: 5,
    };
}





