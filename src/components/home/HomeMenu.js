import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeMenu = () => {
    let array = [["/pizzas/menu-1.png", "pizza's"], ["/pizzas/menu-2.png", "cold drinks"], ["/pizzas/menu-3.png", "deserts"]]
    return (
        <div className='py-10'>
            <div className="flex flex-col justify-center content-center gap-4 p-4">
                <h1 className="text-center uppercase text-zinc-950 md:text-6xl text-4xl font-bold mt-10">
                    Pizzaplanet&#39;s Menu
                </h1>
                <p className="text-center text-gray-600 w-full lg:w-2/3 mx-auto md:text-lg leading-snug md:leading-normal md:tracking-wide md:font-medium my-10">
                    Amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet
                    risus tempor semper odio egestas id pulvinar consectetur elit tortor
                    non hac pellentesque lacus donec accumsan quisque ultricies adipiscing
                    mauris tortor cras est eu accumsan mauris.
                </p>
            </div>
            <div className='flex flex-wrap justify-center my-10 gap-4'>
                {
                    array.map((arr, index) => (
                        <div className="max-w-sm mx-auto flex flex-col justify-center" key={index}>
                            <Image src={arr[0]} alt="pizza image" className="w-full object-cover" width={300} height={200} />
                            <h1 className='text-zinc-950 text-3xl capitalize text-center my-10 font-bold' >{arr[1]}</h1>
                        </div>
                    ))
                }
            </div>
            <div className="flex sm:flex-row gap-5 items-center justify-center sm:gap-10 my-10 w-full" >
                <button className="bg-yellow-500 text-zinc-950 font-bold tracking-wide uppercase py-4 px-6  transition-colors duration-300 hover:bg-slate-950 hover:text-white ">
                    <Link href="/menu">Order Online</Link> 
                </button>
                <button className="bg-slate-950 text-white font-bold tracking-wide uppercase py-4 px-6 transition-colors duration-300 hover:bg-yellow-500 hover:text-zinc-950">
                    <Link href="/menu">Go to Menu</Link>
                </button>
            </div>
        </div>
    )
}

export default HomeMenu
