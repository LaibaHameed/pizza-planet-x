// components/menu/Menu.js
import Card from "@/components/home/Card";
import cardData from "../../store/CardData.json";

export default function Menu() {
    const categories = new Set();
    const fooddata = [];

    const handleData = () => {
        cardData.forEach((data) => {
            fooddata.push(data);
            categories.add(data.category);
        });
    };

    handleData();

    const categoryArray = [...categories]; // Convert Set to Array

    return (
        <>
            <div className="flex flex-col justify-center content-center gap-4 p-4">
                <h1 className="text-center uppercase text-zinc-950 md:text-6xl text-4xl font-bold mt-10">
                    Pizzaplannet&#39;s Menu
                </h1>
                <p className="text-center text-gray-700 w-full lg:w-2/3 mx-auto md:text-lg leading-snug md:leading-normal md:tracking-wide md:font-semibold">
                    Amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet
                    risus tempor semper odio egestas id pulvinar consectetur elit tortor
                    non hac pellentesque lacus donec accumsan quisque ultricies adipiscing
                    mauris tortor cras est eu accumsan mauris.
                </p>
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
                                .filter((item) => item.category === category)
                                .map((data) => (
                                    <Card key={data.name} fooddata={data} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
