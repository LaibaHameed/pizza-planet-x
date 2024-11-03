import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, StarIcon } from 'lucide-react';
import { useRouter } from 'next/router';

const testimonials = [
    {
        name: "Clark Corl",
        feedback: "\"The best place to eat your pizza.\"",
        description: "\"Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque sed quis pharetra arcu pharetra blandit.\"",
        location: "San Francisco, CA",
        image: "/Testimonials 1.png",
        stars: 5
    },
    {
        name: "Jane Smith",
        feedback: "\"Fantastic service and delicious pizza!\"",
        description: "\"Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque sed quis pharetra arcu pharetra blandit.\"",
        location: "Los Angeles, CA",
        image: "/Testimonials 2.png",
        stars: 4
    },
    {
        name: "John Doe",
        feedback: "\"A delightful experience every time!\"",
        description: "\"Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque sed quis pharetra arcu pharetra blandit.\"",
        location: "New York, NY",
        image: "/Testimonials 3.png",
        stars: 5
    },
];

const TestimonialsSection = () => {

    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigation = (path) => {
        router.push(path);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const { name, feedback, description, location, image, stars } = testimonials[currentIndex];

    return (
        <section className="p-8 my-12 py-12 relative">
            <h2 className="text-center 2xl:text-7xl xl:text-6xl sm:text-4xl text-3xl font-extrabold text-zinc-950 mb-4 capitalize tracking-wider">
                What Our Clients Say
            </h2>
            <div className="max-w-4xl mx-auto my-20 flex flex-col md:flex-row justify-center items-center bg-white py-8 px-6 rounded-lg shadow-md relative">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                    <Image
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flex-grow flex flex-col items-center md:items-start">
                    <div className="flex my-4">
                        {[...Array(stars)].map((_, index) => (
                            <span key={index} className="text-yellow-500 mr-1"> <StarIcon /> </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-2 text-center md:text-left">{feedback}</h3>
                    <p className="text-slate-700 mb-2 text-center md:text-left">{description}</p>
                    <h4 className='text-zinc-900 font-bold mt-6 text-center md:text-left'>{name}</h4>
                    <p className="text-sm text-slate-700 mt-2 text-center md:text-left">{location}</p>
                </div>
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    className="absolute left-[-40px] transform -translate-y-1/2 top-1/2 text-zinc-950 bg-slate-50 hover:bg-yellow-500 p-4"
                >
                    <ChevronLeft />
                </button>
                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute right-[-40px] transform -translate-y-1/2 top-1/2 text-zinc-950 bg-slate-50 hover:bg-yellow-500 p-4"
                >
                    <ChevronRight />
                </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 md:gap-6 w-full text-center">
                <button onClick={() => handleNavigation('/menu')} className="max-w-60 bg-yellow-500 text-zinc-950 font-bold tracking-wide uppercase py-4 px-6 transition-colors duration-300 hover:bg-slate-950 hover:text-white">
                    Order Online
                </button>
                <button onClick={() => handleNavigation('/menu')} className="max-w-60 bg-slate-950 text-white font-bold tracking-wide uppercase py-4 px-6 transition-colors duration-300 hover:bg-yellow-500 hover:text-zinc-950">
                    Drive Through
                </button>
            </div>
        </section>
    );
};

export default TestimonialsSection;
