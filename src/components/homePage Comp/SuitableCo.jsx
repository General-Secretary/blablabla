import React from 'react'
import { Vazirmatn } from 'next/font/google';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const vazir = Vazirmatn({
    subsets: ['arabic'],
    weight: ['400', '700']
});
export default function SuitableCo() {
    return (
        <div style={{ direction: "rtl" }} id='suggestions' className='overflow-y-hidden font-vazir'>
            <div className="mt-14 relative sutableCoBG ">
                <div className="layer   min-h-[160vh] bg-black  bg-opacity-[.3] top-0 bottom-0 left-0 right-0">
                    <div className='lg:w-[95%] my-14 mx-auto'>
                        <h2 className=' mx-auto font-vazir text-white  font-extrabold text-3xl'>شركات تناسبك</h2>
                        <div className=" flex justify-center container mx-auto items-center w-full flex-wrap ">
                            <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                                <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto h-[270px] rounded-[50px]'>
                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex justify-center items-center '>
                                            <div className='w-1/5 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-full p-1  xs:px-2'>
                                                <p className='text-2xl xs:text-3xl'>استثمارات</p>
                                                <p className='text-xs  '>ريادة الأعمال والاستثمار</p>
                                            </div>
                                            <div style={{ direction: "ltr" }} className='w-2/5 xs:px-3 py-1 '>
                                                <Rating
                                                    name="text-feedback"
                                                    value={2.5}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                <p className='text-center'>Pre Seed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex text-center text-gray-500 text-[13px] justify-center items-center '>
                                            <div className='w-1/3 p-1'>
                                                <p>الإيرادات</p>
                                                <p className='font-semibold'>11 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 border-x border-gray-500  p-1'>
                                                <p>صافي الأرباح</p>
                                                <p className='font-semibold'>3 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 p-1'>
                                                <p>الربحية</p>
                                                <p className='font-semibold'>25%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full    px-5 py-2'>
                                        <div className='flex text-center text-gray-500 bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full text-[13px] justify-center items-center '>
                                            <div className="w-1/2 border-l border-gray-500 py-2 text-center">
                                                <p className='xs:font-semibold  xs:text-lg text-white'>500 ألف جنيه / 20%</p>
                                            </div>
                                            <div className="w-1/2  flex text-center py-2 justify-around items-center">
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
                            </div>
                            <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                                <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto h-[270px] rounded-[50px]'>
                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex justify-center items-center '>
                                            <div className='w-1/5 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-full p-1  xs:px-2'>
                                                <p className='text-2xl xs:text-3xl'>استثمارات</p>
                                                <p className='text-xs  '>ريادة الأعمال والاستثمار</p>
                                            </div>
                                            <div style={{ direction: "ltr" }} className='w-2/5 xs:px-3 py-1 '>
                                                <Rating
                                                    name="text-feedback"
                                                    value={2.5}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                <p className='text-center'>Pre Seed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex text-center text-gray-500 text-[13px] justify-center items-center '>
                                            <div className='w-1/3 p-1'>
                                                <p>الإيرادات</p>
                                                <p className='font-semibold'>11 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 border-x border-gray-500  p-1'>
                                                <p>صافي الأرباح</p>
                                                <p className='font-semibold'>3 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 p-1'>
                                                <p>الربحية</p>
                                                <p className='font-semibold'>25%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full    px-5 py-2'>
                                        <div className='flex text-center text-gray-500 bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full text-[13px] justify-center items-center '>
                                            <div className="w-1/2 border-l border-gray-500 py-2 text-center">
                                                <p className='xs:font-semibold  xs:text-lg text-white'>500 ألف جنيه / 20%</p>
                                            </div>
                                            <div className="w-1/2  flex text-center py-2 justify-around items-center">
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
                            </div>
                            <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                                <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto h-[270px] rounded-[50px]'>
                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex justify-center items-center '>
                                            <div className='w-1/5 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-full p-1  xs:px-2'>
                                                <p className='text-2xl xs:text-3xl'>استثمارات</p>
                                                <p className='text-xs  '>ريادة الأعمال والاستثمار</p>
                                            </div>
                                            <div style={{ direction: "ltr" }} className='w-2/5 xs:px-3 py-1 '>
                                                <Rating
                                                    name="text-feedback"
                                                    value={2.5}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                <p className='text-center'>Pre Seed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex text-center text-gray-500 text-[13px] justify-center items-center '>
                                            <div className='w-1/3 p-1'>
                                                <p>الإيرادات</p>
                                                <p className='font-semibold'>11 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 border-x border-gray-500  p-1'>
                                                <p>صافي الأرباح</p>
                                                <p className='font-semibold'>3 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 p-1'>
                                                <p>الربحية</p>
                                                <p className='font-semibold'>25%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full    px-5 py-2'>
                                        <div className='flex text-center text-gray-500 bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full text-[13px] justify-center items-center '>
                                            <div className="w-1/2 border-l border-gray-500 py-2 text-center">
                                                <p className='xs:font-semibold  xs:text-lg text-white'>500 ألف جنيه / 20%</p>
                                            </div>
                                            <div className="w-1/2  flex text-center py-2 justify-around items-center">
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
                            </div>
                            <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                                <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto h-[270px] rounded-[50px]'>
                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex justify-center items-center '>
                                            <div className='w-1/5 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-full p-1  xs:px-2'>
                                                <p className='text-2xl xs:text-3xl'>استثمارات</p>
                                                <p className='text-xs  '>ريادة الأعمال والاستثمار</p>
                                            </div>
                                            <div style={{ direction: "ltr" }} className='w-2/5 xs:px-3 py-1 '>
                                                <Rating
                                                    name="text-feedback"
                                                    value={2.5}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                <p className='text-center'>Pre Seed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex text-center text-gray-500 text-[13px] justify-center items-center '>
                                            <div className='w-1/3 p-1'>
                                                <p>الإيرادات</p>
                                                <p className='font-semibold'>11 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 border-x border-gray-500  p-1'>
                                                <p>صافي الأرباح</p>
                                                <p className='font-semibold'>3 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 p-1'>
                                                <p>الربحية</p>
                                                <p className='font-semibold'>25%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full    px-5 py-2'>
                                        <div className='flex text-center text-gray-500 bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full text-[13px] justify-center items-center '>
                                            <div className="w-1/2 border-l border-gray-500 py-2 text-center">
                                                <p className='xs:font-semibold  xs:text-lg text-white'>500 ألف جنيه / 20%</p>
                                            </div>
                                            <div className="w-1/2  flex text-center py-2 justify-around items-center">
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
                            </div>
                            <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                                <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto h-[270px] rounded-[50px]'>
                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex justify-center items-center '>
                                            <div className='w-1/5 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-full p-1  xs:px-2'>
                                                <p className='text-2xl xs:text-3xl'>استثمارات</p>
                                                <p className='text-xs  '>ريادة الأعمال والاستثمار</p>
                                            </div>
                                            <div style={{ direction: "ltr" }} className='w-2/5 xs:px-3 py-1 '>
                                                <Rating
                                                    name="text-feedback"
                                                    value={2.5}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                <p className='text-center'>Pre Seed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex text-center text-gray-500 text-[13px] justify-center items-center '>
                                            <div className='w-1/3 p-1'>
                                                <p>الإيرادات</p>
                                                <p className='font-semibold'>11 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 border-x border-gray-500  p-1'>
                                                <p>صافي الأرباح</p>
                                                <p className='font-semibold'>3 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 p-1'>
                                                <p>الربحية</p>
                                                <p className='font-semibold'>25%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full    px-5 py-2'>
                                        <div className='flex text-center text-gray-500 bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full text-[13px] justify-center items-center '>
                                            <div className="w-1/2 border-l border-gray-500 py-2 text-center">
                                                <p className='xs:font-semibold  xs:text-lg text-white'>500 ألف جنيه / 20%</p>
                                            </div>
                                            <div className="w-1/2  flex text-center py-2 justify-around items-center">
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
                            </div>
                            <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                                <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto h-[270px] rounded-[50px]'>
                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex justify-center items-center '>
                                            <div className='w-1/5 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-full p-1  xs:px-2'>
                                                <p className='text-2xl xs:text-3xl'>استثمارات</p>
                                                <p className='text-xs  '>ريادة الأعمال والاستثمار</p>
                                            </div>
                                            <div style={{ direction: "ltr" }} className='w-2/5 xs:px-3 py-1 '>
                                                <Rating
                                                    name="text-feedback"
                                                    value={2.5}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                <p className='text-center'>Pre Seed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex text-center text-gray-500 text-[13px] justify-center items-center '>
                                            <div className='w-1/3 p-1'>
                                                <p>الإيرادات</p>
                                                <p className='font-semibold'>11 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 border-x border-gray-500  p-1'>
                                                <p>صافي الأرباح</p>
                                                <p className='font-semibold'>3 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 p-1'>
                                                <p>الربحية</p>
                                                <p className='font-semibold'>25%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full    px-5 py-2'>
                                        <div className='flex text-center text-gray-500 bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full text-[13px] justify-center items-center '>
                                            <div className="w-1/2 border-l border-gray-500 py-2 text-center">
                                                <p className='xs:font-semibold  xs:text-lg text-white'>500 ألف جنيه / 20%</p>
                                            </div>
                                            <div className="w-1/2  flex text-center py-2 justify-around items-center">
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
                            </div>
                            <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                                <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto h-[270px] rounded-[50px]'>
                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex justify-center items-center '>
                                            <div className='w-1/5 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-full p-1  xs:px-2'>
                                                <p className='text-2xl xs:text-3xl'>استثمارات</p>
                                                <p className='text-xs  '>ريادة الأعمال والاستثمار</p>
                                            </div>
                                            <div style={{ direction: "ltr" }} className='w-2/5 xs:px-3 py-1 '>
                                                <Rating
                                                    name="text-feedback"
                                                    value={2.5}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                <p className='text-center'>Pre Seed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full    px-5 py-4'>
                                        <div className='flex text-center text-gray-500 text-[13px] justify-center items-center '>
                                            <div className='w-1/3 p-1'>
                                                <p>الإيرادات</p>
                                                <p className='font-semibold'>11 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 border-x border-gray-500  p-1'>
                                                <p>صافي الأرباح</p>
                                                <p className='font-semibold'>3 مليون جنيه</p>
                                            </div>
                                            <div className='w-1/3 p-1'>
                                                <p>الربحية</p>
                                                <p className='font-semibold'>25%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full    px-5 py-2'>
                                        <div className='flex text-center text-gray-500 bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full text-[13px] justify-center items-center '>
                                            <div className="w-1/2 border-l border-gray-500 py-2 text-center">
                                                <p className='xs:font-semibold  xs:text-lg text-white'>500 ألف جنيه / 20%</p>
                                            </div>
                                            <div className="w-1/2  flex text-center py-2 justify-around items-center">
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
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-[#00F560] cursor-pointer">عرض المزيد <i className="fa-solid fa-arrow-left"></i> </p>
                </div>
            </div>
        </div>
    )
}
