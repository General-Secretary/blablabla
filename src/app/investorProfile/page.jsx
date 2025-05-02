import React from 'react'
import { Vazirmatn } from 'next/font/google';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const vazir = Vazirmatn({ subsets: ['arabic'], weight: ['400', '700'] });

export default function page() {
    return (
        <div className="overflow-auto">
            <div className={` ${vazir.className}`}>
                <div style={{ direction: "rtl" }} className="bg-[#00F5601A]  mt-44 mb-14 bg-opacity-10">
                    <div className='hidden md:flex  justify-start items-center'>
                        <div className=' w-[400px] relative'>
                            <div className='w-[204px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full overflow-hidden  ms-2  text-center'>
                                <img src={"https://s3-alpha-sig.figma.com/img/8ee3/88a5/492584792adbbc34b429aca25ff2f2d5?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IcLEPEqlPQkAgY9~cetdouodeRejjchE2Tu4rAmsP6WP0QtkAKntIA891Z4q9QDJGcS4R94eR1nBWKE6y3A4K8Upuca~iBv3KUebCtw3tNcrZm5tq~VIj-rlvz8FbfIAkQXfe8Xl4qTlYZKDMTsEZkaHB6jGddqbhlUfMp48nACd2dB6rvHd72DarIKsWUk9~pg4cl6EZvcfuC60IWs1x3iyAXToUD5wMfgdCviHIHUeORSGLMWN9n-9lag-hyZ283wG4YZyCaFLMsAqKm8H1dYE65dV8JvZ6gayfC2KkLwsXfhBuDOLEGwvTbLMJGh9h3rOls2uG8XSgj-L1qlLJg__"} className='w-full' alt="" />
                            </div>
                        </div>
                        <div className='w-2/3  my-5 '>
                            <div className="text-start">
                                <p className="text-white font-extrabold xs:text-2xl  my-2 md:text-3xl">سحلب النبهاني  </p>
                            </div>
                            <div className="flex justify-start text-start  items-center">
                                <p className=" text-white text-sm   font-semibold md:text-lg ">مستثمر ملائكي</p>
                                <p className=" text-white text-sm font-thin md:text-md md:ms-10 ">  ceo - شركة أبو نبهان لتجارة قوالب  الطوب </p>
                            </div>
                        </div>
                        <div className="  w-1/4 ms-auto">
                            <button
                                type="button"
                                className="text-black mx-auto  bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full text-sm px-6 py-2"
                            >
                                طلب استشاره
                            </button>
                        </div>
                    </div>
                    <div className='md:hidden p-3'>
                        <div className=' w-full '>
                            <div className='w-[204px]   rounded-full overflow-hidden  mx-auto  text-center'>
                                <img src={"https://s3-alpha-sig.figma.com/img/8ee3/88a5/492584792adbbc34b429aca25ff2f2d5?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IcLEPEqlPQkAgY9~cetdouodeRejjchE2Tu4rAmsP6WP0QtkAKntIA891Z4q9QDJGcS4R94eR1nBWKE6y3A4K8Upuca~iBv3KUebCtw3tNcrZm5tq~VIj-rlvz8FbfIAkQXfe8Xl4qTlYZKDMTsEZkaHB6jGddqbhlUfMp48nACd2dB6rvHd72DarIKsWUk9~pg4cl6EZvcfuC60IWs1x3iyAXToUD5wMfgdCviHIHUeORSGLMWN9n-9lag-hyZ283wG4YZyCaFLMsAqKm8H1dYE65dV8JvZ6gayfC2KkLwsXfhBuDOLEGwvTbLMJGh9h3rOls2uG8XSgj-L1qlLJg__"} className='w-full' alt="" />
                            </div>
                        </div>
                        <div className='w-full  my-5 '>
                            <div className="text-center">
                                <p className="text-white font-extrabold   my-2 text-2xl">سحلب النبهاني  </p>
                            </div>
                            <div className=" text-start  ">
                                <p className=" text-white text-sm   font-semibold my-2 md:text-lg ">مستثمر ملائكي</p>
                                <p className=" text-white text-sm font-thin md:text-md md:ms-10 ">  ceo - شركة أبو نبهان لتجارة قوالب  الطوب </p>
                            </div>
                        </div>
                        <div className="  w-full ">
                            <button
                                type="button"
                                className="text-black  w-full  bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full text-sm px-6 py-2"
                            >
                                طلب استشاره
                            </button>
                        </div>
                    </div>

                </div>
                <div style={{ direction: "rtl" }} className="container p-5 mx-auto   xl:w-[91%]">
                    <p className='text-white text-start  font-semibold my-7 text-3xl'>الوصف </p>
                    <p className='text-white text-start leading-[1.8]  my-7 text-xl'>
                        الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل الهلي بلي اشتغل
                    </p>
                </div>
                <div className='my-4'>
                    <div className='w-[91%] mx-auto   px-5 py-4'>
                        <div className='flex flex-wrap text-center text-white text-2xl justify-center items-center '>
                            <div className=' w-full sm:w-1/3  p-3'>
                                <p className='font-extrabold text-5xl'>6</p>
                                <p className='font-medium'>صفقات ناجحه  </p>
                            </div>
                            <div className=' w-full sm:w-1/3 border-y  sm:border-x sm:border-y-0 border-gray-500  p-3'>
                                <p className='font-extrabold text-5xl'> 21</p>
                                <p className='font-medium'>استشاره</p>
                            </div>
                            <div className=' w-full sm:w-1/3 p-3'>
                                <p className='font-extrabold text-5xl'>39</p>
                                <p className='font-medium'>تقيمات وتغليقات</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ direction: "rtl" }} className="container p-5 mx-auto my-14  xl:w-[91%]">
                    <p className='text-white text-start  font-semibold my-7 text-3xl'>الاستثمارات </p>
                    <div className=" flex justify-center container mx-auto items-center w-full text-white flex-wrap ">
                        <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                            <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5  xs:w-[95%]  mx-auto rounded-[50px]'>
                                <div className='w-full    px-5 py-4'>
                                    <div className='flex justify-center items-center '>
                                        <div className='w-1/5 xs:p-1'>
                                            <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                        </div>
                                        <div className='w-2/5 p-1  xs:px-2'>
                                            <p className='text-xl xs:text-3xl'>استثمارات</p>
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

                            </div>
                        </div>
                        <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                            <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5  xs:w-[95%]  mx-auto rounded-[50px]'>
                                <div className='w-full    px-5 py-4'>
                                    <div className='flex justify-center items-center '>
                                        <div className='w-1/5 xs:p-1'>
                                            <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                        </div>
                                        <div className='w-2/5 p-1  xs:px-2'>
                                            <p className='text-xl xs:text-3xl'>استثمارات</p>
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

                            </div>
                        </div>
                        <div className=' w-full  md:w-1/2 py-4 lg:w-1/3'>
                            <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5  xs:w-[95%]  mx-auto rounded-[50px]'>
                                <div className='w-full    px-5 py-4'>
                                    <div className='flex justify-center items-center '>
                                        <div className='w-1/5 xs:p-1'>
                                            <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                        </div>
                                        <div className='w-2/5 p-1  xs:px-2'>
                                            <p className='text-xl xs:text-3xl'>استثمارات</p>
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

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ direction: "rtl" }} className="bg-[#00F5601A] p-5  mt-44 mb-14 bg-opacity-10">
                    <div className='flex justify-center flex-wrap items-center w-[91%] mx-auto'>

                        <div className='md:w-1/2 w-full h-[300px]'>
                        <div className='flex flex-col    h-[300px] justify-between items-start'>
                           <div>
                            <p className='text-white text-start  font-semibold my-4 text-2xl md:text-3xl'>يمكنك طلب استشارة من المستثمر!</p>
                            <p className='text-white text-start  font-semibold my-4 text-md md:text-xl'>جملة كدا للوصف</p>
                           </div>
                           <button
                                type="button"
                                className="text-black   bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full text-sm px-6 py-2"
                            >
                                طلب استشاره
                            </button>
                        </div>
                        </div>    
                                            <div className='md:w-1/2 w-full '>
                                            <div className='  overflow-hidden  md:w-[80%] lg:w-[60%] mx-auto  text-center'>
                                <img src={"https://s3-alpha-sig.figma.com/img/e6c1/5a4c/ab241b947ebec5811135b11e0491e059?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YxzCPybFIw~Vb5ZxFceT8JLEZRBDdnswMsJEnocMUY2D-WAU3oLHU~BeZmlPtsMgqIgY8zQ0gJmDL6au7zRnCeWMJ~8JFRmZqfsfgzLaPPeIbvCwc3ygR7PYpdKlhValkwVYDJxqvolzAKec-tRitEgt2P4QZ~XBhuagphB2lliltAX9ajSSW1LEdopBHUgAeWRwWBKi22hFKUV2x7XcE4c~AzCBy0mHLy43BbszRn2rFSEe96XvJ8LcJOUxm~Du6OwGY1pjkz84lS9z5aImeKWFQeWdu9a3XBeXjKANQlBGBo3CL0XLXSldnKhK0YD-Qdc1r5ZX8aarsMmPx81kUg__"} className='w-full rounded-md' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

