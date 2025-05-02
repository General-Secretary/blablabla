import React from 'react'
import { Vazirmatn } from 'next/font/google';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Button, Popover } from "flowbite-react";
import Comments from './Comments';

const vazir = Vazirmatn({ subsets: ['arabic'], weight: ['400', '700'] });
// تقديم
export default function page() {
    return (
        <div className={` ${vazir.className}`}>
            <div className='md:mt-32 mt-16'>
                <div style={{ direction: "rtl" }} className="bg-[#00F5601A] bg-opacity-10">
                    <div className="container m-auto flex flex-wrap justify-center items-center xl:w-[95%] ">
                        <div className='md:w-1/2 py-5 flex  justify-around items-center  md:my-0 border-b md:border-0 border-gray-700 w-full  '>
                            <div className='w-2/3 md:mx-auto'>
                                <div className="text-center">
                                    <p className="text-white font-extrabold xs:text-2xl md:text-3xl">شركة المرعبين المحدودة</p>
                                </div>

                                <div className="flex justify-around   items-center">
                                    <p className="text-end text-white text-sm font-thin md:text-md md:mx-3">التكنولوجيا - التعليم</p>
                                    <p className="text-start text-white text-sm font-thin md:text-md md:mx-3 ">Seed</p>
                                </div>
                            </div>
                            <div className='w-1/3   md:hidden  '>
                                <div className='w-[50px]  ms-2  text-center'>
                                    <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                    <p className='text-[#8080808C] text-start'>@Abcdefj</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2  w-full flex  justify-center items-center'>
                            <div className='md:w-1/3 my-5  md:ms-auto text-center'>
                                <div style={{ direction: "ltr" }}>
                                    <Rating
                                        name="text-feedback"
                                        value={3.5}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                </div>
                                <div className='flex justify-center text-center items-center'>
                                    <div><p className='text-gray-600 mx-3' >(42 Review)</p></div>
                                    <div><p className='text-white mx-3 text-xl' >3.5</p></div>
                                </div>
                            </div>
                            <div className='w-1/3  hidden md:inline  mx-5'>
                                <div className='w-[80px] mx-auto  text-center'>
                                    <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                    <p className='text-[#8080808C] text-center'>@Abcdefj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ direction: "rtl" }} className="container mx-auto my-32 flex flex-wrap justify-center items-center xl:w-[95%] ">
                    <div className='md:w-2/5 w-full p-5 md:border-l md:border-l-[#00F560]'>
                        <div className='border-b md:me-16 pb-10 border-b-gray-300'>
                            <p className='text-white text-start font-semibold my-7 text-3xl'>معلومات الشركة</p>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'> الخدمات:</p>
                                </div>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-[#00F560] text-start text-xl'> التسويق والدعايا</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'> نمودج العمل:</p>
                                </div>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-[#00F560] text-start text-xl'> B2B</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'>  السوق المستهدف:</p>
                                </div>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-[#00F560] text-start text-xl'> الخليج</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'> عدد الموظفين الحاليين:</p>
                                </div>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-[#00F560] text-start text-xl'> 28</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'>   تاريخ التأسيس:</p>
                                </div>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-[#00F560] text-start text-xl'> مارس 2021</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'>  الشراكات:</p>
                                </div>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-[#00F560] text-start text-xl'> لا يوجد</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-10 items-center'>
                            <div className='w-1/2 my-2'>
                                <p className=' text-white text-start text-xl'> المستثمرين:</p>
                            </div>
                            <div className='w-1/2 my-2'>
                                <div className=" flex  py-2 justify-start gap-2 items-center">
                                    <div className='w-[30px] bg-white h-[30px] rounded-full'>
                                    </div>
                                    <div className='w-[30px] bg-white h-[30px] rounded-full'>
                                    </div>
                                    <div className='w-[30px] bg-white h-[30px] rounded-full'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-3/5 w-full md:p-5'>
                        <div className='md:w-[85%] iframe-container overflow-auto  rounded-2xl  w-full mx-auto'>
                            <iframe
                                src="https://drive.google.com/file/d/17nZX08NpQ_MII4PJkT2qOFPFHvZjmD0t/preview?usp=drive_link"
                                width="100%"
                                height="100%"
                                allow="autoplay"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div style={{ direction: "rtl" }} className="container p-5 mx-auto my-32  xl:w-[95%]">
                    <p className='text-white text-start  font-semibold my-7 text-3xl'>وصف المشروع</p>
                    <p className='text-white text-start leading-[1.8]  my-7 text-xl'>
                        كل ما أجي أفرح حبة بتعدبيني كأن ما بيني وبيتك ت
                        ار وحالفة لتوريني، كل ما أجي أفرح حبة بتعدبيني كأن م
                        ا بيني وبيتك تار وحالفة لتوريني، كل ما أجي أفرح حبة
                        بتعدبيني كأن ما بيني وبيتك تار وحالفة لتوريني، كل م
                        ا أجي أفرح حبة بتعدبيني كأن ما بيني وبيتك تار وحالفة
                        لتوريني، كل ما أجي أفرح حبة بتعدبيني كأن ما بيني وب
                        يتك تار وحالفة لتوريني، كل ما أجي أفرح حبة بتعدبيني
                        كأن ما بيني وبيتك تار وحالفة لتوريني، كل ما أجي أفر
                        ح حبة بتعدبيني كأن ما بيني وبيتك تار وحالفة لتوريني،
                        كل ما أجي أفرح حبة بتعدبيني كأن ما بيني وبيتك تار
                        وحالفة لتوريني، كل ما أجي أفرح حبة بتعدبيني كأن ما
                        بيني وبيتك تار كل ما أجي أفرح حبة بتعدبيني كأن ما
                        بيني وبيتك تار وحالفة لتوريني، كل ما أجي أفرح حبة
                        بتعدبيني كأن ما بيني وبيتك تار وحالفة لتوريني،
                        كل ما أجي أفرح حبة بتعدبيني كأن ما بيني وبيتك
                        تار وحالفة لتوريني، كل ما أجي أفرح حبة بتعدبيني
                        كأن ما بيني وبيتك تار وحالفة لتوريني، كل ما أجي
                        أفرح حبة بتعدبيني كأن ما بيني وبيتك تار وحالفة
                        لتوريني، كل ما أجي أفرح حبة بتعدبيني كأن ما بيني
                        وبيتك تار وحالفة لتوريني، كل ما أجي أفرح حبة
                        بتعدبيني كأن ما بيني وبيتك تار وحالفة
                        لتوريني، كل ما أجي أفرح حبة بتعدبيني
                        كأن ما بيني وبيتك تار وحالفة لتوريني،
                        كل ما أجي أفرح حبة بتعدبيني كأن ما بيني
                        وبيتك تار وحالفة لتوريني، وحالفة لتوريني، </p>
                </div>
                <div style={{ direction: "rtl" }} className="container p-5 mx-auto my-32  xl:w-[95%]">
                    <div className='flex justify-center items-center'>
                        <div className='xs:w-[25%] md:w-[37.5%] border-b border-gray-500'>
                        </div>
                        <div className='xs:w-1/2 md:w-1/4'>
                            <p className='text-white text-center  font-semibold my-7 text-3xl'>التفاصيل المالية</p>
                        </div>
                        <div className='xs:w-[25%] md:w-[37.5%] border-b border-gray-500'>
                        </div>
                    </div>
                    



                    <div className='flex justify-start flex-wrap items-center'>
                        <div className='md:w-1/2 w-full md:border-l md:border-l-gray-500'>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'> نسبة الربحية الإجمالية : </p>
                                </div>
                                <div className='w-1/2 my-2 '>
                                    <p className=' text-[#00F560] text-start text-xl'> 30% </p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'>    نقطة التعادل : </p>
                                </div>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-[#00F560] text-start text-xl'> مارس 2023</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-white text-start text-xl'>   عدد العملاء والمستخدمين : </p>
                                </div>
                                <div className='w-1/2 my-2'>
                                    <p className=' text-[#00F560] text-start text-xl'>2345 </p>
                                </div>
                            </div>

                            <div className=' my-2'>
                                <p className='my-2 text-white text-start text-xl'>التوقعات :</p>
                                <div className=''>
                                    <div className='w-full my-4 ps-10'>
                                        <p className=' text-white text-start  text-sm'>2025:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                    </div>
                                    <div className='w-full my-4 ps-10'>
                                        <p className=' text-white text-start  text-sm'>2026:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                    </div>
                                    <div className='w-full my-4 ps-10'>
                                        <p className=' text-white text-start  text-sm'>2027:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                    </div>
                                    <div className='w-full my-4 ps-10'>
                                        <p className=' text-white text-start  text-sm'>2028:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2  w-full'>
                            <div className=''>
                                <div className='flex justify-center my-6 items-center md:w-[80%] border-2 p-6 border-gray-300 rounded-3xl mx-auto'>
                                    <div className=' my-2'>
                                        <p className=' text-white text-start font-semibold md:font-bold mx-2  text-xl md:text-3xl'> اللإيرادات السنوية:</p>
                                    </div>
                                    <div className=' my-2'>
                                        <p className=' text-[#00F560] text-start font-semibold md:font-bold mx-2 text-xl md:text-3xl'> 11 مليون جنيه </p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center my-6 md:w-[80%] border-2 p-6 border-gray-300 rounded-3xl mx-auto'>
                                    <div className=' my-2'>
                                        <p className=' text-white text-start font-semibold md:font-bold mx-2 text-xl md:text-3xl'>  صافي الأرباح السنوية:</p>
                                    </div>
                                    <div className=' my-2'>
                                        <p className=' text-[#00F560] text-start font-semibold md:font-bold mx-2 text-xl md:text-3xl'> 3 مليون جنيه </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex my-5 justify-center items-center ">
                        <a target="_blank" href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' className="text-black bg-[#00F560] hover:bg-[#38ba6c] font-semibold rounded-full text-sm px-10 py-2">الاطلاع على بيان الدخل/ الميزانية العمومية للمشروع</a>
                    </div>
                </div>
                <div style={{ direction: "rtl" }} className=" mx-auto my-32 p-5 container xl:w-[95%]">
                    <div className='flex justify-center items-center'>
                        <div className='xs:w-[25%] md:w-[37.5%] border-b border-gray-500'>
                        </div>
                        <div className='xs:w-1/2 md:w-1/4'>
                            <p className='text-white text-center  font-semibold my-7 text-3xl'>احتياجات الشركة</p>
                        </div>
                        <div className='xs:w-[25%] md:w-[37.5%] border-b border-gray-500'>
                        </div>
                    </div>
                    <div className='flex justify-start flex-wrap items-start '>
                        <div className='md:w-1/2 w-full my-10 md:border-l md:border-l-gray-500'>
                            <p className='text-white text-center  font-semibold my-7 text-xl'> التمويل المطلوب</p>
                            <div className="flex justify-center my-16 h-20 overflow-hidden w-[80%]  mx-auto border-2 rounded-full border-[#00F560]  items-center">
                                <div className='w-3/5 '><p className='text-white text-center  font-semibold my-5  text-3xl'>500 ألف جنيه / 20%</p></div>
                                {/* <div className='w-2/5 bg-[#00F560] cursor-pointer hover:bg-[#38ba6c] h-full flex items-center justify-center '><p className='text-black text-center  font-semibold  text-3xl'>تقديم عرض</p></div> */}
                            </div>
                            <div className=' w-[80%] mx-auto'>
                                <p className='text-white text-start  font-semibold my-7 text-2xl'>الغرض من التمويل</p>
                                <p className='text-white text-start leading-[1.8]  my-7 text-xl'> خونت ناس بالحب صانتني وصنت ناس عايزة تموتني، خونت ناس بالحب صانتني وصنت ناس عايزة تموتني، خونت ناس بالحب صانتني وصنت ناس عايزة تموتني، خونت ناس بالحب صانتني وصنت ناس عايزة تموتني، خونت ناس بالحب صانتني وصنت ناس عايزة تموتني،</p>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full my-10'>
                            <div className=' w-full my-10'>
                                <p className='text-white text-center  font-semibold my-7 text-xl'> الخدمات المطلوبة </p>
                                <div className=" flex  py-2 justify-center gap-10  items-center">
                                    <Popover
                                        theme={{
                                            "base": "absolute z-20 inline-block w-max max-w-[100vw]  outline-none   rounded-lg shadow-sm  bg-gray-700 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20",
                                            "content": "z-10 overflow-hidden rounded-[7px]",
                                            "arrow": {
                                                "base": "absolute h-2 w-2 z-0 rotate-45   bg-gray-700 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 mix-blend-color",
                                                "placement": "-4px"
                                            }
                                        }}
                                        aria-labelledby="profile-popover"
                                        content={
                                            <div className="w-64 p-3">
                                                <p className='text-white text-start text-lg'> نوع الخدمه </p>
                                                <div className=''>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2025:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2026:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2027:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2028:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    {/* <div className="flex justify-center items-center">
                                                        <button
                                                            type="button"
                                                            className="text-black   bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full  text-sm px-6 py-2"
                                                        >
                                                            تقديم عرض
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        }
                                    >
                                        <button>
                                            <div className='w-[80px] bg-white h-[80px] rounded-full'>
                                            </div>
                                        </button>
                                    </Popover>
                                    <Popover
                                        theme={{
                                            "base": "absolute z-20 inline-block w-max max-w-[100vw]  outline-none   rounded-lg shadow-sm  bg-gray-700 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20",
                                            "content": "z-10 overflow-hidden rounded-[7px]",
                                            "arrow": {
                                                "base": "absolute h-2 w-2 z-0 rotate-45   bg-gray-700 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 mix-blend-color",
                                                "placement": "-4px"
                                            }
                                        }}
                                        aria-labelledby="profile-popover"
                                        content={
                                            <div className="w-64 p-3">
                                                <p className='text-white text-start text-lg'> نوع الخدمه </p>
                                                <div className=''>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2025:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2026:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2027:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2028:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    {/* <div className="flex justify-center items-center">
                                                        <button
                                                            type="button"
                                                            className="text-black   bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full  text-sm px-6 py-2"
                                                        >
                                                            تقديم عرض
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        }
                                    >
                                        <button>
                                            <div className='w-[80px] bg-white h-[80px] rounded-full'>
                                            </div>
                                        </button>
                                    </Popover>
                                    <Popover
                                        theme={{
                                            "base": "absolute z-20 inline-block w-max max-w-[100vw]  outline-none   rounded-lg shadow-sm  bg-gray-700 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20",
                                            "content": "z-10 overflow-hidden rounded-[7px]",
                                            "arrow": {
                                                "base": "absolute h-2 w-2 z-0 rotate-45   bg-gray-700 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 mix-blend-color",
                                                "placement": "-4px"
                                            }
                                        }}
                                        aria-labelledby="profile-popover"
                                        content={
                                            <div className="w-64 p-3">
                                                <p className='text-white text-start text-lg'> نوع الخدمه </p>
                                                <div className=''>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2025:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2026:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2027:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    <div className='w-full my-4 '>
                                                        <p className=' text-white text-start  text-sm'>2028:<span className=' text-[#00F560] px-3 text-sm'>مبياعت 20 مليون جنيه، صافي أرباح: 9 مليون جنيه </span></p>
                                                    </div>
                                                    {/* <div className="flex justify-center items-center">
                                                        <button
                                                            type="button"
                                                            className="text-black   bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full  text-sm px-6 py-2"
                                                        >
                                                            تقديم عرض
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        }
                                    >
                                        <button>
                                            <div className='w-[80px] bg-white h-[80px] rounded-full'>
                                            </div>
                                        </button>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Comments/>
            </div>
        </div>
    )
}
