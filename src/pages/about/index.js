// src/pages/about.js
import Image from 'next/image';
import React from 'react';

const About = () => {
    let array = [["/team1.png", "john carter", "co-founder & Manager"], ["/team2.png", "andy smith", "co-founder & Lead chef"], ["/team3.png", "sophie Moore", "Head of staff"]]
    return (
        <div className="min-h-screen bg-bg-white flex flex-col items-center ">
            {/* Hero Section */}
            <section className="w-full bg-red-500 py-16 shadow-lg rounded-lg mb-12 text-center flex flex-col items-center">
                <h1 className="max-w-4xl 2xl:text-9xl xl:text-8xl sm:text-5xl text-4xl font-extrabold text-white mb-4 uppercase tracking-wider pb-12 pt-8">Our story started back in 1984</h1>
                <p className="text-slate-100 font-semibold text-lg tracking-wide leading-tight max-w-3xl pb-8">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.
                </p>
            </section>

            {/* Founders' Story Section */}
            <section className="w-full flex flex-col items-center justify-center md:flex-row bg-slate-950 pt-28 px-12 shadow-lg rounded-lg mt-12">
                <div className="md:w-3/6 pr-4 mb-6 md:mb-0">
                    <Image
                        src="/founders.jpg" // Replace with your image path
                        alt="Founders"
                        width={700}
                        height={500}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-3/6 pl-8">
                    <h2 className="text-7xl font-bold mb-10">How our <br /> founders met</h2>
                    <p className="text-slate-100 tracking-wide leading-relaxed mt-6">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat cupidatat non ut enim ad minim veniam, quis nostrud.
                    </p>
                    <p className="text-slate-100 tracking-wide leading-relaxed mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation.
                    </p>
                </div>
            </section>

            {/* First Restaurant Story Section */}
            <section className="w-full flex flex-col items-center justify-center md:flex-row bg-slate-950 py-28 px-12 shadow-lg rounded-lg mb-12">
                <div className="md:w-3/6 md:order-2 pl-4 mb-6 md:mb-0">
                    <Image
                        src="/first-restaurant.jpg" // Replace with your image path
                        alt="First Restaurant"
                        width={700}
                        height={500}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-3/6 md:order-1 pr-4">
                    <h2 className="text-7xl font-bold mb-10">The story of our first Restaurant</h2>
                    <p className="text-slate-100 tracking-wide leading-relaxed mt-6">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat cupidatat non ut enim ad minim veniam.
                    </p>
                    <p className="text-slate-100 tracking-wide leading-relaxed mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full text-center my-12">
                <h2 className="text-7xl font-bold mb-10 text-slate-950 ">Meet our team</h2>
                <p className="text-gray-700 text-lg font-semibold leading-relaxed mb-8">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.
                </p>

                <div className='flex flex-wrap justify-center my-10 gap-4'>
                    {
                        array.map((arr, index) => (
                            <div className="max-w-sm mx-auto flex flex-col justify-center" key={index}>
                                <div className="relative bg-red-500 rounded-full overflow-hidden">
                                    <Image src={arr[0]} alt="pizza image" className="w-full object-cover transition-transform duration-700 hover:scale-105" width={300} height={300} />
                                </div>
                                <h1 className='text-zinc-950 text-2xl capitalize text-center mt-10 font-bold' >{arr[1]}</h1>
                                <h1 className='text-red-600 text-xl capitalize text-center mb-10 mt-5 font-bold' >{arr[2]}</h1>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default About;
