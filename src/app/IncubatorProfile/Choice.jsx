"use client"
import React, { useState } from 'react'
import { Vazirmatn } from 'next/font/google';
export default function Choice() {
    let [shown, setShown] = useState(1)

    return (
        <div>
            <div style={{ direction: 'rtl' }} className='md:w-[90%] w-[95%] mx-auto py-16 px-2 '>
                <div className='w-full pt-16 px-1 flex flex-wrap justify-center items-center'>
                    <div onClick={() => { setShown(1) }} className='md:w-1/4 cursor-pointer  xs:w-1/2 w-full px-1'>
                        <div className={` border-b-[3px] ${shown == 1 ? " border-b-[#00F560]" : ""}`}>
                            <p className={`${shown == 1 ? "text-[#00F560]" : "text-white"}  m-2`}>البرامج التي تقدمها المنظمة </p>
                        </div>
                    </div>
                    <div onClick={() => { setShown(2) }} className='md:w-1/4 cursor-pointer  xs:w-1/2 w-full px-1'>
                        <div className={` border-b-[3px] ${shown == 2 ? " border-b-[#00F560]" : ""}`}>
                            <p className={`${shown == 2 ? "text-[#00F560]" : "text-white"}  m-2`}>   الخدمات المقدمة </p>
                        </div>
                    </div>
                    <div onClick={() => { setShown(3) }} className='md:w-1/4 cursor-pointer  xs:w-1/2 w-full px-1'>
                        <div className={` border-b-[3px] ${shown == 3 ? " border-b-[#00F560]" : ""}`}>
                            <p className={`${shown == 3 ? "text-[#00F560]" : "text-white"}  m-2`}>المجالات المستهدفة </p>
                        </div>
                    </div>
                    <div onClick={() => { setShown(4) }} className='md:w-1/4 cursor-pointer  xs:w-1/2 w-full px-1'>
                        <div className={` border-b-[3px] ${shown == 4 ? " border-b-[#00F560]" : ""}`}>
                            <p className={`${shown == 4 ? "text-[#00F560]" : "text-white"}  m-2`}>   مراحل المشاريع المستهدفة </p>
                        </div>
                    </div>
                </div>
                <div className=' bg-gray-200 text-white overflow-hidden py-7 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-full px-2 sm:px-7 min-h-[200px] flex flex-col justify-center mx-auto rounded-[50px]'>
                    <div className={`${shown == 1 ? "" : "hidden"}`}>
                        <p className='text-lg'>
                            زيداليييين                        </p>
                        <p className='text-lg'>
                            عمر زيدان واحد بس
                        </p>
                    </div>
                    <div className={`${shown == 2 ? "" : "hidden"}`}>
                        <p className='text-lg'>
                            انور طارق انور
                        </p>
                        <p className='text-lg'>
                            الواد السهون
                        </p>
                    </div>
                    <div className={`${shown == 3 ? "" : "hidden"}`}>
                        <p className='text-lg'>
                            كريم طارق كريم
                        </p>
                        <p className='text-lg'>
                            جعفوووووور
                        </p>
                    </div>
                    <div className={`${shown == 4 ? "" : "hidden"}`}>
                        <p className='text-lg'>
                            العاريس المونتظر
                        </p>
                        <p className='text-lg'>
                            عوضاااان
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
