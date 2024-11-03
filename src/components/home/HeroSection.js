import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HeroSection = () => {
    // Navigation handler
    const router = useRouter();
    const handleNavigation = (path) => {
        router.push(path);
    };
    return (
        <section className="flex flex-col md:flex-row justify-between items-center p-8 bg-red-500">
            <div className="md:w-1/2 text-center md:text-left animate-fadeInLeft flex flex-col justify-center content-center align-middle">
                <h1 className="2xl:text-8xl xl:text-7xl sm:text-4xl text-3xl font-extrabold text-white mb-4 uppercase tracking-wider">
                    The Best Place to Eat Pizza in LA.
                </h1>
                <p className="text-slate-100 mb-6 lg:py-4 md:tracking-wide 2xl:text-xl xl:text-lg sm:text-md text-sm leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.
                </p>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-2 md:gap-6">
                    <button onClick={() => handleNavigation('/menu')} className="max-w-60 bg-yellow-500 text-zinc-950 font-bold tracking-wide uppercase py-4 px-6 transition-colors duration-300 hover:bg-slate-950 hover:text-white">
                        Order Online
                    </button>
                    <button  onClick={() => handleNavigation('/menu')} className="max-w-60 bg-slate-950 text-white font-bold tracking-wide uppercase py-4 px-6 transition-colors duration-300 hover:bg-yellow-500 hover:text-zinc-950">
                        Drive Through
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 object-cover animate-fadeInRight transition-transform duration-700 hover:scale-105 hover:rotate-12">
                <Image
                    src="/main.png"
                    alt="Delicious Pizza"
                    className="w-full h-auto"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    );
};

export default HeroSection;
