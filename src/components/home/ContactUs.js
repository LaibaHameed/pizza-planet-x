import React from 'react';
import { Mail, Phone, MapPin, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

const ContactUs = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-slate-950 py-20 ">
            {/* Contact Information */}
            <div className="flex flex-col text-center md:text-left animate-fadeInLeft mt-6">
                <h2 className="2xl:text-7xl xl:text-6xl sm:text-4xl text-3xl font-extrabold text-white mb-4 uppercase tracking-wider">
                    Contact Us
                </h2>
                <p className="text-slate-100 mb-6 lg:py-6 md:tracking-wide 2xl:text-xl xl:text-lg sm:text-md text-sm leading-tight">
                    Have questions or need assistance? We&#39;d love to hear from you. Feel free to reach out through any of the methods below.
                </p>
                <div className="space-y-4 text-slate-100 mb-6 ml-4 sm:ml-20 md:ml-0">
                    <div className="flex items-center justify-start gap-4">
                        <MapPin className="text-yellow-500" />
                        <p className="text-white">Marshalltown, Los Angeless</p>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <Mail className="text-yellow-500" />
                        <p className="text-white">losangeles@pizzaplanet.com</p>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <Phone className="text-yellow-500" />
                        <p className="text-white">(414) 857 - 0107</p>
                    </div>
                </div>
                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-4 mt-12">
                    <Link href="/" className="text-zinc-950 rounded-full p-2 hover:bg-blue-500 hover:text-white bg-white">
                        <FacebookIcon className="w-8 h-8" />
                    </Link>
                    <Link href="/" className="text-zinc-950 rounded-full p-2 hover:bg-blue-500 hover:text-white bg-white">
                        <TwitterIcon className="w-8 h-8" />
                    </Link>
                    <Link href="/" className="text-zinc-950 rounded-full p-2 hover:bg-red-500 hover:text-white bg-white">
                        <InstagramIcon className="w-8 h-8" />
                    </Link>
                    <Link href="/" className="text-zinc-950 rounded-full p-2 hover:bg-red-500 hover:text-white bg-white">
                        <YoutubeIcon className="w-8 h-8" />
                    </Link>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-slate-950 rounded-lg shadow-lg py-10 px-8 md:px-12 animate-fadeInRight w-full md:w-4/5">
                <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-yellow-500 bg-inherit"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-yellow-500 bg-inherit"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-yellow-500 bg-inherit resize-none"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-yellow-500 max-w-fit py-3 px-6 text-slate-950 font-bold uppercase rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
