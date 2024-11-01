import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-slate-950 py-12 my-12">
            {/* Image Section */}
            <div className="flex justify-center md:justify-end animate-fadeInLeft">
                <Image
                    src="/main.png"
                    alt="About Us"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Text and Contact Section */}
            <div className="flex flex-col justify-center animate-fadeInRight text-center md:text-left">
                <h2 className="2xl:text-7xl xl:text-6xl sm:text-4xl text-3xl font-extrabold text-white mb-4 uppercase tracking-wider">
                    About PizzaPlanet
                </h2>
                <p className="text-slate-100 mb-6 lg:py-4 md:tracking-wide 2xl:text-xl xl:text-lg sm:text-md text-sm leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.
                </p>

                {/* Contact Information */}
                <div className="space-y-4 text-slate-100 mb-6 ml-4 sm:ml-20 md:ml-0">
                    <div className="flex items-center justify-start">
                        <Image src='/about-us/6345b2091fb3de581bafd4d9_Email.svg' alt='Email us' width={40} height={40} className="mr-4" />
                        <p>losangeles@pizzaplanet.com</p>
                    </div>
                    <div className="flex items-center justify-start">
                        <Image src='/about-us/6345b1dc608e3127d208e4ba_Call us.svg' alt='Call us' width={40} height={40} className='mr-4' />
                        <p>(414) 857 - 0107</p>
                    </div>
                    <div className="flex items-center justify-start">
                        <Image src='/about-us/6345b209f8903c4e9dbafd1c_location.svg' alt='Location' width={40} height={40} className='mr-4' />
                        <p>Marshalltown, Los Angeles</p>
                    </div>
                </div>

                {/* Call-to-Actions */}
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <Link
                        href="/about"
                        className="border text-slate-950 bg-white font-bold tracking-wide uppercase py-3 px-6 transition-colors duration-300 hover:bg-yellow-500 hover:text-white hover:border-yellow-500"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/reservations"
                        className="border border-white text-white font-bold tracking-wide uppercase py-3 px-6 transition-colors duration-300 hover:bg-white hover:border-white hover:text-slate-950"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
