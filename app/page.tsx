import front from '../public/home/homepage.png'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export default function Page() {
    return (

        <>

            <div className="bg-[#f4f9ff] py-4 flex justify-center">
                <div className="container px-3  ">
                    <div className='px-2 md:px-10 lg:px-20 flex flex-wrap items-center lg:flex-row-reverse flex-col '>
                        <div className='flex flex-2auto  lg:w-1/2 justify-center'>
                            <Image src={front} alt='delivery' className='w-full lg:w-11/12  h-auto ' priority />
                        </div>
                        <div className='flex flex-2auto flex-col w-full lg:w-1/2'>
                            <h1 className="text-black text-[36px] md:text-5xl lg:text-6xl my-4 lg:pl-9 font-bold leading-none">
                                <span className="text-green-600">Delivera</span> Delivery Fresh Things
                            </h1>
                            <p className="text-lg text-black mb-4 lg:pl-9">Created to support local farmers and <br /> give you fresh without chemical products.</p>
                            {/* <Link href='#price' className="text-white w-fit lg:ml-9 text-base md:text-xl font-semibold border px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-800 hover:from-sky-400 hover:to-cyan-500">Join Student Hub <HiOutlineArrowNarrowRight className='inline-flex mb-[2px]' /></Link> */}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}