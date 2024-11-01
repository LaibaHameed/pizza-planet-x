import React from 'react';
import Image from 'next/image';

const NewSection = () => {
    const values = [
        ["/about-us/Love & passion.svg", "Love & passion"],
        ["/about-us/Flavour.svg", "Flavour"],
        ["/about-us/Care & craft.svg", "Care & craft"],
        ["/about-us/Customer-first.svg", "Customer-first"],
        ["/about-us/Teamwork.svg", "Teamwork"],
        ["/about-us/Quality.svg", "Quality"]
    ];

    return (
        <div className="px-4 md:px-8 lg:px-16 mt-10">
            <section className="w-full text-center my-20">
                <h2 className="2xl:text-7xl xl:text-6xl sm:text-4xl text-3xl font-extrabold text-zinc-950 mb-4 capitalize tracking-wider">                    
                    The values that drive <br /> everything we do
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 my-16">
                    {values.map((value, index) => (
                        <div
                            className="w-40 sm:w-48 md:w-56 lg:w-64 mx-auto my-2 flex flex-col justify-center items-center text-center"
                            key={index}
                        >
                            <div className="relative bg-red-500 rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 lg:max-w-fit lg:h-fit">
                                <Image
                                    src={value[0]}
                                    alt={`${value[1]} image`}
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <h1 className="text-zinc-950 text-lg md:text-xl lg:text-2xl capitalize mt-4 font-bold">
                                {value[1]}
                            </h1>
                            <p className="text-zinc-600 text-sm md:text-base  capitalize mb-6 mt-2 font-semibold">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                            </p>
                        </div>
                    ))}
                </div>

                
            </section>
        </div>
    );
}

export default NewSection;
