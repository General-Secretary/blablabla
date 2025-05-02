import React from 'react'
import { Vazirmatn } from 'next/font/google';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image'
import Choice from './Choice';

const vazir = Vazirmatn({ subsets: ['arabic'], weight: ['400', '700'] });

export default function page() {
    return (
        <div>
            <div className="overflow-auto">
                <div className={` ${vazir.className}`}>
                    <div style={{ direction: "rtl" }} className="bg-[#00F5601A]  mt-44 mb-14 bg-opacity-10">
                        <div className='hidden md:flex  justify-start items-center'>
                            <div className=' w-[400px] relative'>
                                <div className='w-[204px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  overflow-hidden  ms-2  text-center'>
                                    <img src={"https://s3-alpha-sig.figma.com/img/c1e3/137d/eb7d2012e2ae3e1a4f0dc98ab0bd631e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WQlq3beLGC-IbLS2iJxhBnkK6Dr5mi5JrbEcNNvEVQZvtxmrZd~OEyeh4V~GDZXdA-rvbyMUw9s1gI89f9-xO1OaXQ3Z8vbQQDnfyVPzINCKA-75CBgGL2wfPhuvtetC-s-iQgODjT1jvGYiXJiT4dDENM1BqLDsfe1rRzB1HPQ5GKyyUNBRL1pWyPbEXdpNIrXqDuD5QOMfhmnN0dMIiqzlp8rPmOar76rHpzpxkDE25TrrQbx3WB9a3krhOX9mTeKj5NLV6yFcRXpdA4BJgj-tESb6CK45Yz~82vFC~76~Rog8Aufn5z4SPMKOQlG7RxnQICVlgfWDUn49nv4KKg__"} className='w-full' alt="" />
                                </div>
                            </div>
                            <div className='w-2/3  my-5 '>
                                <div className="text-start">
                                    <p className="text-white font-extrabold xs:text-2xl  my-2 md:text-3xl">Flat6Labs Cairo</p>
                                </div>
                                <div className="flex justify-start text-start  items-center">
                                    <p className=" text-white text-sm   font-semibold md:text-lg ">حاضنة أعمال (Incubator) </p>
                                    <p className=" text-white text-sm font-thin md:text-md md:ms-10 ">القاهرة، مصر</p>
                                </div>
                            </div>
                            <div className="  w-1/4 ms-auto">
                                <button
                                    type="button"
                                    className="text-black mx-auto  bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full text-sm px-6 py-2"
                                >
                                    شاهد الاعلامات
                                </button>
                            </div>
                        </div>
                        <div className='md:hidden p-3'>
                            <div className=' w-full '>
                                <div className='w-[204px]    overflow-hidden  mx-auto  text-center'>
                                    <img src={"https://s3-alpha-sig.figma.com/img/c1e3/137d/eb7d2012e2ae3e1a4f0dc98ab0bd631e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WQlq3beLGC-IbLS2iJxhBnkK6Dr5mi5JrbEcNNvEVQZvtxmrZd~OEyeh4V~GDZXdA-rvbyMUw9s1gI89f9-xO1OaXQ3Z8vbQQDnfyVPzINCKA-75CBgGL2wfPhuvtetC-s-iQgODjT1jvGYiXJiT4dDENM1BqLDsfe1rRzB1HPQ5GKyyUNBRL1pWyPbEXdpNIrXqDuD5QOMfhmnN0dMIiqzlp8rPmOar76rHpzpxkDE25TrrQbx3WB9a3krhOX9mTeKj5NLV6yFcRXpdA4BJgj-tESb6CK45Yz~82vFC~76~Rog8Aufn5z4SPMKOQlG7RxnQICVlgfWDUn49nv4KKg__"} className='w-full' alt="" />
                                </div>
                            </div>
                            <div className='w-full  my-5 '>
                                <div className="text-center">
                                    <p className="text-white font-extrabold   my-2 text-2xl">Flat6Labs Cairo</p>
                                </div>
                                <div className=" text-start  ">
                                    <p className=" text-white text-sm   font-semibold my-2 md:text-lg ">حاضنة أعمال (Incubator) </p>
                                    <p className=" text-white text-sm font-thin md:text-md md:ms-10 ">القاهرة، مصر</p>
                                </div>
                            </div>
                            <div className="  w-full ">
                                <button
                                    type="button"
                                    className="text-black  w-full  bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full text-sm px-6 py-2"
                                >
                                    شاهد الاعلامات
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{ direction: "rtl" }} className="container p-5 mx-auto   xl:w-[91%]">
                        <p className='text-white text-start  font-semibold my-7 text-3xl'>الوصف </p>
                        <p className='text-white text-start leading-[1.8]  my-7 text-xl'>
                            Flat6Labs Cairo هي واحدة من أبرز حاضنات الأعمال في الشرق الأوسط وشمال إفريقيا، تأسست عام 2011 لدعم رواد الأعمال في مصر والمنطقة. تقدم الحاضنة برنامجًا متكاملًا يمتد لـ 4 أشهر، يشمل تمويل تأسيسي يصل إلى 500,000 جنيه مصري، جلسات إرشاد احترافية، تدريبات مكثفة، ومساحات عمل مرنة داخل بيئة ريادية داعمة. من خلال خبرتها العميقة وشبكتها الواسعة من المستثمرين والخبراء، ساعدت Flat6Labs Cairo في إطلاق أكثر من 120 شركة ناشئة، ساهمت في خلق فرص عمل، وجمعت شركاتها المحتضنة أكثر من 50 مليون دولار من الاستثمارات. سواء كنت رائد أعمال تبحث عن انطلاقة قوية أو فريق يمتلك فكرة مبتكرة في مجال التقنية، توفر Flat6Labs Cairo البيئة المثالية لتسريع نمو مشروعك.
                        </p>
                    </div>
<div>
<Choice/>
</div>
                    <div style={{ direction: "rtl" }} className="container p-5 mx-auto my-32  xl:w-[95%]">
                        <div className='flex justify-center items-center'>
                            <div className='xs:w-[25%] md:w-[37.5%] border-b border-gray-500'>
                            </div>
                            <div className='xs:w-1/2 md:w-1/4'>
                                <p className='text-white text-center  font-semibold my-7 text-3xl'>منشورات وبرامج المنظمة </p>
                            </div>
                            <div className='xs:w-[25%] md:w-[37.5%] border-b border-gray-500'>
                            </div>
                        </div>
                        <div className='md:w-[90%] mx-auto text-white'>
                            <div className=" flex justify-center container mx-auto items-center w-full flex-wrap ">

                                <div className=' w-full  md:w-1/2 py-4 '>
                                    <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto rounded-[50px]'>
                                        <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5   mx-auto  rounded-[50px]'>
                                            <div className="relative z-10 w-full h-[250px] overflow-hidden">
                                                <Image
                                                    className="w-full h-full object-cover"
                                                    unoptimized
                                                    src="https://s3-alpha-sig.figma.com/img/fd97/f885/31b5f17961ae5183adfe39adf016a235?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iKj2pReCqQ2TN3O3-c0iFf68sjhHPamDpYN666oSqMvN6UzlwwHdPl9Qbzbmix63TuenrmZGiL24z4~r4~2QyTxLkBMX9Xjic5IZjWooM7vXaoRAYo6Zqn7BhG1fewbHab~2pUFxca63qdfXyiMLZUsH1MFb-28oHFJHsCLc~Rz~zCJ~R6Tect5Ycog7OYfZAYwE4kPH7JzeL1K~Bot2n2KhBROEXnmoWJyXDQJcsitUMbWjfYn6jyPHnzZbkSvXUpK7cQvVdI~KRv5XdYB~S6Dx~QIR~Kh~xjUJwGp84vrA3bqkvPKoHxboivuLApE4Scs16sI6inouUyCVAkTVIw__"
                                                    width={700}
                                                    height={400}
                                                    alt=""
                                                />
                                            </div>                                        </div>
                                        <div className='w-[95%] xs:w-[85%] mx-auto my-7'>
                                            <p className='text-2xl  xs:w-[95%]  mx-auto font-semibold'>برنامج Flat6Labs Seed Program – Cairo</p>
                                            <p className='text-xs xs:w-[95%] mx-auto leading-loose '>برنامج التمويل التأسيسي هو البرنامج الأساسي الذي تقدمه Flat6Labs Cairo لدعم الشركات الناشئة التقنية في مراحلها الأولى. يُعقد هذا البرنامج على مدار 4 أشهر، يتم خلالها تزويد رواد الأعمال بكل ما يحتاجونه لتحويل فكرتهم إلى مشروع قابل للنمو والنجاح في السوق. مميزات البرنامج: تمويل تأسيسي: يصل إلى 500,000 جنيه مصري مقابل نسبة </p>
                                        </div>
                                        <div className='flex flex-wrap justify-center xs:px-9 text-center items-center '>
                                            <div className='xs:w-2/3 my-5 w-[90%] xs:px-4 flex justify-center bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full items-center '>
                                                <div className='w-1/6  xs:p-1'>
                                                    <img src={"https://s3-alpha-sig.figma.com/img/c1e3/137d/eb7d2012e2ae3e1a4f0dc98ab0bd631e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WQlq3beLGC-IbLS2iJxhBnkK6Dr5mi5JrbEcNNvEVQZvtxmrZd~OEyeh4V~GDZXdA-rvbyMUw9s1gI89f9-xO1OaXQ3Z8vbQQDnfyVPzINCKA-75CBgGL2wfPhuvtetC-s-iQgODjT1jvGYiXJiT4dDENM1BqLDsfe1rRzB1HPQ5GKyyUNBRL1pWyPbEXdpNIrXqDuD5QOMfhmnN0dMIiqzlp8rPmOar76rHpzpxkDE25TrrQbx3WB9a3krhOX9mTeKj5NLV6yFcRXpdA4BJgj-tESb6CK45Yz~82vFC~76~Rog8Aufn5z4SPMKOQlG7RxnQICVlgfWDUn49nv4KKg__"} className='w-full p-1 rounded-lg' alt="" />
                                                </div>
                                                <div className='w-5/12'><p className='font-semibold'>Flat6Labs Cairo</p></div>
                                                <div className='w-5/12'><p className='text-[13px] '>حاضنة أعمال</p></div>
                                            </div>
                                            <div className='w-full  xs:p-1 my-5 xs:w-1/3 px-4'>
                                                <div className='bg-[#00F560] text-black cursor-pointer w-[80%] mx-auto py-3 rounded-full'>
                                                    قدم الآن
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-full  md:w-1/2 py-4 '>
                                    <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 w-[98%] xs:w-[95%]  mx-auto rounded-[50px]'>
                                        <div className=' bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5   mx-auto  rounded-[50px]'>
                                            <div className="relative z-10 w-full h-[250px] overflow-hidden">
                                                <Image
                                                    className="w-full h-full object-cover"
                                                    unoptimized
                                                    src="https://s3-alpha-sig.figma.com/img/fd97/f885/31b5f17961ae5183adfe39adf016a235?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iKj2pReCqQ2TN3O3-c0iFf68sjhHPamDpYN666oSqMvN6UzlwwHdPl9Qbzbmix63TuenrmZGiL24z4~r4~2QyTxLkBMX9Xjic5IZjWooM7vXaoRAYo6Zqn7BhG1fewbHab~2pUFxca63qdfXyiMLZUsH1MFb-28oHFJHsCLc~Rz~zCJ~R6Tect5Ycog7OYfZAYwE4kPH7JzeL1K~Bot2n2KhBROEXnmoWJyXDQJcsitUMbWjfYn6jyPHnzZbkSvXUpK7cQvVdI~KRv5XdYB~S6Dx~QIR~Kh~xjUJwGp84vrA3bqkvPKoHxboivuLApE4Scs16sI6inouUyCVAkTVIw__"
                                                    width={700}
                                                    height={400}
                                                    alt=""
                                                />
                                            </div>                                        </div>
                                        <div className='w-[95%] xs:w-[85%] mx-auto my-7'>
                                            <p className='text-2xl  xs:w-[95%]  mx-auto font-semibold'>برنامج Flat6Labs Seed Program – Cairo</p>
                                            <p className='text-xs xs:w-[95%] mx-auto leading-loose '>برنامج التمويل التأسيسي هو البرنامج الأساسي الذي تقدمه Flat6Labs Cairo لدعم الشركات الناشئة التقنية في مراحلها الأولى. يُعقد هذا البرنامج على مدار 4 أشهر، يتم خلالها تزويد رواد الأعمال بكل ما يحتاجونه لتحويل فكرتهم إلى مشروع قابل للنمو والنجاح في السوق. مميزات البرنامج: تمويل تأسيسي: يصل إلى 500,000 جنيه مصري مقابل نسبة </p>
                                        </div>
                                        <div className='flex flex-wrap justify-center xs:px-9 text-center items-center '>
                                            <div className='xs:w-2/3 my-5 w-[90%] xs:px-4 flex justify-center bg-[#00F5601F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-full items-center '>
                                                <div className='w-1/6  xs:p-1'>
                                                    <img src={"https://s3-alpha-sig.figma.com/img/c1e3/137d/eb7d2012e2ae3e1a4f0dc98ab0bd631e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WQlq3beLGC-IbLS2iJxhBnkK6Dr5mi5JrbEcNNvEVQZvtxmrZd~OEyeh4V~GDZXdA-rvbyMUw9s1gI89f9-xO1OaXQ3Z8vbQQDnfyVPzINCKA-75CBgGL2wfPhuvtetC-s-iQgODjT1jvGYiXJiT4dDENM1BqLDsfe1rRzB1HPQ5GKyyUNBRL1pWyPbEXdpNIrXqDuD5QOMfhmnN0dMIiqzlp8rPmOar76rHpzpxkDE25TrrQbx3WB9a3krhOX9mTeKj5NLV6yFcRXpdA4BJgj-tESb6CK45Yz~82vFC~76~Rog8Aufn5z4SPMKOQlG7RxnQICVlgfWDUn49nv4KKg__"} className='w-full p-1 rounded-lg' alt="" />
                                                </div>
                                                <div className='w-5/12'><p className='font-semibold'>Flat6Labs Cairo</p></div>
                                                <div className='w-5/12'><p className='text-[13px] '>حاضنة أعمال</p></div>
                                            </div>
                                            <div className='w-full  xs:p-1 my-5 xs:w-1/3 px-4'>
                                                <div className='bg-[#00F560] text-black cursor-pointer w-[80%] mx-auto py-3 rounded-full'>
                                                    قدم الآن
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}