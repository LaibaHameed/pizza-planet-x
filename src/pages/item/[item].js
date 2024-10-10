import { baseUrl } from '@/utils/baseUrl'
import { MoveLeftIcon } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useContext } from 'react';

const Item = ({ data }) => {
    let pizza = data.data
    return (
        <>
        <Head>
            <title> Menu item </title>
        </Head>
            {/* Centered Link Wrapper */}
            <div className="flex justify-center my-4">
                <span className='border-2 rounded-full border-b-zinc-950 p-2'>
                    <Link href={"/"}>
                        <MoveLeftIcon className="w-6 h-6 text-zinc-950" />
                    </Link>
                </span>
            </div>
            <div className="shadow-sm border-2 p-4 max-w-xs mx-auto my-4">
                <div className="relative bg-red-500 rounded-full overflow-hidden">
                    <Image src={pizza.img} alt="pizza image" className="w-full object-cover transition-transform duration-700 hover:scale-105 hover:rotate-12" width={300} height={200} />
                </div>
                <h2 className="text-lg font-bold mt-2 text-slate-950">{pizza.name}</h2>
                <p className="text-gray-700 mt-1 text-sm">{pizza.description}</p>
            </div>
        </>
    )
}

export default Item

export async function getServerSideProps(context) {
    const { item } = context.query
    const res = await fetch(baseUrl + "api/getDataById", {
        method: "POST", headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ item: item })
    });
    const data = await res.json();

    return { props: { data: data } }
}