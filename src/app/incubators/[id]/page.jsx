import React from 'react'
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({ subsets: ['arabic'], weight: ['400', '700'] });
export default async function Page({ params }) {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);
    console.log(decodedId);
    return (
        <div className={` ${vazir.className}`}>
            <div className='md:mt-32 mt-16'>
                <div style={{ direction: "rtl" }} className="text-white">
                    حاضنه : {id}
                </div>
            </div>
        </div>
    )
}
