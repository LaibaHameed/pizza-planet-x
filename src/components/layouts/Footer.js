import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Section 1: Logo, Description, Social Links */}
        <div className="text-white ml-6">
          {/* Logo and Name */}
          <Link href="/">
            <Image src={"/logo.svg"} alt="logo" width={250} height={250} className="mb-10" />
          </Link>
          {/* Description */}
          <p className="text-md tracking-wider mb-10">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.
          </p>
          {/* Social Links */}
          <div className="flex space-x-4">
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

        {/* Section 2: Follow us on Instagram and Images */}
        <div className="text-white flex flex-col justify-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold uppercase mb-4 m-auto mx-3 text-center">Follow us on Instagram</h2>
          {/* Images Grid */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <Image
                src="/insta1.jpg"
                alt="Instagram Pic 1"
                width={200}
                height={200}
                className="object-cover my-2 mx-2 transition-transform duration-300 hover:scale-110"
              />
              <Image
                src="/insta2.jpg"
                alt="Instagram Pic 2"
                width={200}
                height={200}
                className="object-cover my-2 mx-2 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/insta3.jpg"
                alt="Instagram Pic 3"
                width={200}
                height={200}
                className="object-cover my-2 mx-2 transition-transform duration-300 hover:scale-110"
              />
              <Image
                src="/insta4.png"
                alt="Instagram Pic 4"
                width={200}
                height={200}
                className="object-cover my-2 mx-2 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>

      {/* <hr className="text-yellow-50" /> */}
      <div className="h-px bg-slate-500 my-8"></div>
      {/* Copyright */}
      <div className="mt-6 text-center text-white text-lg tracking-wider text-wrap mx-6">
        &copy; Copyright - Pizzaplanet X | Designed by Laiba Hameed
      </div>
    </footer>
  );
};

export default Footer;
