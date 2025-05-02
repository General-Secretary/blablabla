"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";

import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "700"],
});
export default function SearchBar() {
  const [searchinput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const router = useRouter();
  // const fetchResults = async () => {
  //     try {
  //         setLoading(true)
  //         const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchinput}`);
  //         const data = await response.json();
  //         setLoading(false)
  //         setResults(data);
  //         console.log(results)
  //     } catch (error) {
  //         setLoading(false)
  //         console.error("Error fetching data:", error);
  //     }
  // };

  function getSmartResults(results) {
    if (!results || !Array.isArray(results)) return [];

    const roles = {
      investor: [],
      company: [],
      charityOrganization: [],
      supportOrganization: [],
    };

    // تصنيف النتائج حسب النوع
    results.forEach((item) => {
      if (roles[item.role]) {
        roles[item.role].push(item);
      }
    });

    const finalResults = [];

    // نبدأ بـ 2 مستثمرين
    finalResults.push(...roles.investor.slice(0, 2));

    // بعد كده 1 من كل نوع آخر
    const otherRoles = [
      "company",
      "charityOrganization",
      "supportOrganization",
    ];
    otherRoles.forEach((role) => {
      if (roles[role].length > 0) {
        finalResults.push(roles[role][0]);
      }
    });

    // لو لسه عدد أقل من 5، نعوض من أي نوع متبقي
    if (finalResults.length < 5) {
      const remaining = results.filter((item) => !finalResults.includes(item));
      finalResults.push(...remaining.slice(0, 5 - finalResults.length));
    }

    return finalResults;
  }

  useEffect(() => {
    if (searchinput.trim() === "") {
      setResults([]);
      return;
    }

    // const fetchResults = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await fetch(`https://estethmarat-estethmarats-projects.vercel.app/api/v1/search?name=${searchinput}`);
    //         const data = await response.json();
    //         setLoading(false);
    //         setResults(data);
    //     } catch (error) {
    //         setLoading(false);
    //         console.error("Error fetching data:", error);
    //     }
    // };

    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://estethmarat-estethmarats-projects.vercel.app/api/v1/search?name=${searchinput}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        const data = await response.json();
        setLoading(false);
        setResults(data);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchResults();
  }, [searchinput]);
  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className="header-bg  relative">
      <div className="layer flex justify-center min-h-[100vh] items-center bg-black absolute bg-opacity-[.4] top-0 bottom-0 left-0 right-0">
        <div className="text-center w-full -translate-y-10 flex flex-col  justify-around  items-center">
          <h2 className="text-center  font-vazir text-white my-3  font-extrabold text-5xl">
            {" "}
            ابحث عن فرص استثمارية
          </h2>
          <h2 className="text-center  font-vazir text-white my-3  font-extralight text-5xl">
            تناسب <span className="text-[#00F560]">متطلباتك</span>
          </h2>
          {/*
            <div className="xs:max-w-[450px] relative  w-full">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative  w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                autoComplete="off"
                                style={{ direction: "rtl" }}
                                type="search"
                                id="default-search"
                                className="block font-vazir w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-full bg-[#D9D9D9] focus:ring-blue-500 focus:border-blue-500"
                                placeholder="ابحث هنا ..."
                                required
                            />
                            <button
                                type="button"
                                className="text-black absolute start-2.5 top-1/2 -translate-y-1/2 bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full text-sm px-6 py-2"
                            >
                                ابحث
                            </button>
                        </div>

                        <div className='px-5 left-1/2 z-10  -translate-x-1/2  w-full absolute xs:px-0'>
                            <div className='bg-[#D9D9D9C7] overflow-hidden rounded-xl bg-opacity-20 xs:max-w-[400px]  mx-auto w-full    '>
                                <div style={{ direction: "rtl" }}  >
                                    <div className='flex justify-center  items-center'>
                                        <div className=' border-b border-gray-600 cursor-pointer  hover:bg-[#938f8fc7]  xs:px-4 flex justify-center  items-center '>
                                            <div className='w-1/6 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-5/12'><p className='text-black font-semibold'> شركة سمير أبو بز كبير  </p></div>
                                            <div className='w-5/12'><p className='text-black text-[16px] '>شركة</p></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className=' border-b border-gray-600 cursor-pointer hover:bg-[#938f8fc7]  xs:px-4 flex justify-center  items-center '>
                                            <div className='w-1/6 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-5/12'><p className='text-black font-semibold'> شركة سمير أبو بز كبير  </p></div>
                                            <div className='w-5/12'><p className='text-black text-[16px] '>شركة</p></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className=' border-b border-gray-600 cursor-pointer hover:bg-[#938f8fc7]  xs:px-4 flex justify-center  items-center '>
                                            <div className='w-1/6 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-5/12'><p className='text-black font-semibold'> شركة سمير أبو بز كبير  </p></div>
                                            <div className='w-5/12'><p className='text-black text-[16px] '>شركة</p></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className=' border-b border-gray-600 cursor-pointer hover:bg-[#938f8fc7]  xs:px-4 flex justify-center  items-center '>
                                            <div className='w-1/6 xs:p-1'>
                                                <img src={"/assits/logo2.png"} className='w-full' alt="" />
                                            </div>
                                            <div className='w-5/12'><p className='text-black font-semibold'> شركة سمير أبو بز كبير  </p></div>
                                            <div className='w-5/12'><p className='text-black text-[16px] '>شركة</p></div>
                                        </div>
                                    </div>
                                    <p className='pb-2 text-[#3A3A3A] cursor-pointer hover:text-[#00F560]'>عرض المزيد من النتائج ←</p>
                                </div>
                            </div>
                        </div>
                    <p className='font-vazir text-3xl my-4 text-[#00F560] '> أو</p>
                        <button
                                type="button"
                                className="text-white hover:text-black my-2 bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 hover:bg-[#38ba6c]    font-medium opacity-50 border border-[#38ba6c] rounded-full text-lg px-16 py-4"
                            >
                                شاهد الاقتراحات
                            </button>
                    </div> */}

          <div className="xs:max-w-[450px] relative  w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative  w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                autoComplete="off"
                style={{ direction: "rtl" }}
                type="search"
                id="default-search"
                className="block font-vazir w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-full bg-[#D9D9D9] focus:ring-blue-500 focus:border-blue-500"
                placeholder="ابحث هنا ..."
                value={searchinput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchinput != "" && router.push(`/search/${searchinput}`);
                  }
                }}
              />
              <button
                onClick={() => {
                  router.push(`/search/${encodeURIComponent(searchinput)}`);
                }}
                type="button"
                disabled={searchinput == ""}
                className="text-black  absolute start-2.5 top-1/2 -translate-y-1/2 bg-[#00F560] hover:bg-[#38ba6c]   font-medium rounded-full text-sm px-6 py-2"
              >
                ابحث
              </button>
            </div>
            {/* الاقتراحات */}
            <div
              className={`px-5 left-1/2 z-10 ${searchinput == "" && "hidden"
                } -translate-x-1/2  w-full absolute xs:px-0`}
            >
              <div className="bg-[#D9D9D9C7] overflow-hidden rounded-xl bg-opacity-20 xs:max-w-[400px]  mx-auto w-full    ">
                <div style={{ direction: "rtl" }}>
                  {/* {results?.userResults?.slice(0, 5).map((item, id) => (<div onClick={() => {
                                            const role = item.role;
                                            const id = item._id;
                                            if (role === "investor") {
                                            router.push(`/investors/${id}`);
                                            } else if (role === "company") {
                                            router.push(`/startUps/${id}`);
                                            } else if (role === "charityOrganization") {
                                            router.push(`/charaties/${id}`);
                                            } else if (role === "supportOrganization") {
                                            router.push(`/incubators/${id}`);
                                            }
                                            }} key={id} className='flex justify-center  items-center'>
                                        <div className=' border-b border-gray-600 cursor-pointer w-full  hover:bg-[#938f8fc7]  xs:px-4 flex justify-center  items-center '>
                                            <div className='w-1/6 xs:p-1'>
                                                <img src={item?.profilePhoto||item?.companyPhoto||item?.image.secure_url} className='w-[50px] h-[50px]' alt="" />
                                            </div>
                                            <div className='w-5/12'><p className='text-black font-semibold'> {item.fullEnglishName||item.companyName||item.name} </p></div>
                                            <div className='w-5/12'><p className='text-black text-[16px] '>{item.role}</p></div>
                                        </div>
                                    </div>)
                                    )}
                                      */}

                  {getSmartResults(results?.userResults).map((item, id) => (
                    <div
                      onClick={() => {
                        const id = item._id;
                        switch (item.role) {
                          case "investor":
                            router.push(`/investors/${id}`);
                            break;
                          case "company":
                            router.push(`/startUps/${id}`);
                            break;
                          case "charityOrganization":
                            router.push(`/charaties/${id}`);
                            break;
                          case "supportOrganization":
                            router.push(`/incubators/${id}`);
                            break;
                        }
                      }}
                      key={id}
                      className="flex justify-center items-center"
                    >
                      <div className="border-b border-gray-600 cursor-pointer w-full hover:bg-[#938f8fc7] xs:px-4 flex justify-center items-center">
                        <div className="w-1/6 xs:p-1">
                          <img
                            src={
                              item?.profilePhoto ||
                              item?.companyPhoto ||
                              item?.image?.secure_url
                            }
                            className="w-[50px] h-[50px]"
                            alt=""
                          />
                        </div>
                        <div className="w-5/12">
                          <p className="text-black font-semibold">
                            {item.fullEnglishName ||
                              item.companyName ||
                              item.name}
                          </p>
                        </div>
                        <div className="w-5/12">
                          <p className="text-black text-[16px]">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <Spinner color="info" aria-label="Info spinner example" />
                  )}
                  <p
                    onClick={() => {
                      router.push(`/search/${searchinput}`);
                    }}
                    className="pb-2 text-[#3A3A3A] cursor-pointer hover:text-[#00F560]"
                  >
                    عرض المزيد من النتائج ←
                  </p>
                </div>
              </div>
            </div>
            <p className="font-vazir text-3xl my-4 text-[#00F560] "> أو</p>
            <a
              href="#suggestions"
              className="text-white hover:text-black  block bg-gray-200 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 hover:bg-[#38ba6c]    font-medium opacity-50 border border-[#38ba6c] cursor-pointer rounded-full text-lg py-3"
            >
              شاهد الاقتراحات
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//     "status": "success",
//     "length": 17,
//     "userResults": [
//         {
//             "_id": "681005314934188ed4ee4805",
//             "fullArabicName": "أحمد عبد الله",
//             "fullEnglishName": "Ahmed Abdallah",
//             "phoneNumber": "+201000112233",
//             "email": "ahmed.abdallah@example.com",
//             "isEmailConfirmed": false,
//             "investmentfields": [
//                 "الذكاء الاصطناعي والتعلم الآلي",
//                 "التكنولوجيا المالية (Forgch) والمدفوعات الرقمية"
//             ],
//             "investmentStage": "Seed",
//             "idNumber": "A1234567",
//             "investmentLicenseNumber": "INV-12345678",
//             "profilePhoto": "https://res.cloudinary.com/dqh3zhxhc/image/upload/v1745880109/users/saruj6tp4uhupwmf0pt9.jpg",
//             "role": "investor",
//             "points": 150,
//             "organization": "Tech Ventures Inc.",
//             "jobTitle": "Managing Partner",
//             "availableBudget": 250000,
//             "currency": "USD",
//             "notification": true,
//             "createdAt": "2025-04-28T22:46:09.072Z",
//             "updatedAt": "2025-04-28T22:46:09.072Z",
//             "__v": 0
//         },
//         {
//             "_id": "6810062b4934188ed4ee4807",
//             "fullArabicName": "سارة منصور",
//             "fullEnglishName": "Sara Mansour",
//             "phoneNumber": "+966501234567",
//             "email": "sara.mansour@investmail.com",
//             "isEmailConfirmed": false,
//             "investmentfields": [
//                 "التطوير العقاري السكني والتجاري",
//                 "المدن الذكية والبنية التحتية الرقمية"
//             ],
//             "investmentStage": "Series A",
//             "idNumber": "987654321098",
//             "investmentLicenseNumber": "LIC-SARA87654",
//             "profilePhoto": "https://res.cloudinary.com/dqh3zhxhc/image/upload/v1745880360/users/qr1p9tkfynrbmzmlqxjr.jpg",
//             "role": "investor",
//             "points": 0,
//             "organization": "AlMansour Investments",
//             "jobTitle": "Real Estate Advisor",
//             "availableBudget": 1000000,
//             "currency": "SAR",
//             "notification": true,
//             "createdAt": "2025-04-28T22:50:19.996Z",
//             "updatedAt": "2025-04-28T22:50:19.996Z",
//             "__v": 0
//         },
//         {
//             "_id": "68100c094934188ed4ee480b",
//             "registrationNumber": "REG-987654321",
//             "taxIdNumber": "TAX-1122334455",
//             "representativeName": "Nour Hassan",
//             "representativeEmail": "nour.hassan@alphatech.com",
//             "nationalId": "21345678901234",
//             "investmentAmount": 500000,
//             "currency": "(USD) دولار أمريكي",
//             "sharePercentage": 25,
//             "activeClients": 120,
//             "fundingPurpose": "We aim to scale our cloud platform and expand into new MENA markets.",
//             "annualRevenue": "1.2M USD",
//             "netProfit": "300K USD",
//             "percentageProfitMargin": 25,
//             "breakEvenPoint": "2026-01-15T00:00:00.000Z",
//             "financialReportPDF": "https://res.cloudinary.com/dqh3zhxhc/raw/upload/v1745881860/users/financialReportPDF.pdf",
//             "requiredServices": {
//                 "خدمات تقنية وتكنولوجية": "good",
//                 "خدمات التسويق والترويج": "great"
//             },
//             "exitStrategy": "IPO within 5 years or acquisition by a strategic partner.",
//             "expectedProfitPerYear": "400K USD",
//             "risksAndDifficults": "Regulatory hurdles in expansion regions and high competition.",
//             "companyDescription": "AlphaTech is a SaaS company providing AI-powered logistics optimization software across MENA, delivering end-to-end automation and real-time analytics.",
//             "businessModel": "SaaS",
//             "targetMarket": "الشرق الأوسط وشمال إفريقيا",
//             "offeredServices": "AI logistics tools, cloud dashboards, integration APIs.",
//             "currentClerksNumber": "20-40",
//             "foundationDate": "2019-06-20T00:00:00.000Z",
//             "partnerShip": "Strategic partnership with two logistics companies in UAE.",
//             "videoLink": "https://youtube.com/demo-alpha-tech",
//             "companyName": "AlphaTech Solutions",
//             "socialName": "AlphaTech",
//             "companyField": [
//                 "الحوسبة السحابية وتحليل البيانات الضخمة",
//                 "إنترنت الأشياء (IoT) والأتمتة الذكية"
//             ],
//             "state": "Series A (التوسع الأولي)",
//             "companyPhoto": "https://res.cloudinary.com/dqh3zhxhc/image/upload/v1745881859/users/zjfaqd91ybwnwrpmyfaz.jpg",
//             "email": "contact@alphatech.com",
//             "companyPhoneNumber": "+971501234567",
//             "websiteUrl": "https://alphatech.com",
//             "country": "الإمارات",
//             "headQuarter": "دبي",
//             "bmc": "https://res.cloudinary.com/dqh3zhxhc/raw/upload/v1745881861/users/bmc.pdf",
//             "role": "company",
//             "notification": true,
//             "passwordChangedAt": "2025-04-28T23:15:21.183Z",
//             "__v": 0
//         },
//         {
//             "_id": "68100ffd4934188ed4ee4811",
//             "registrationNumber": "REG-345679875",
//             "taxIdNumber": "TAX-9988776655",
//             "representativeName": "Layla Al-Khatib",
//             "representativeEmail": "layla@biogrow.sa",
//             "nationalId": "30015678900123",
//             "investmentAmount": 750000,
//             "currency": "(SAR) ريال سعودي",
//             "sharePercentage": 40,
//             "activeClients": 230,
//             "fundingPurpose": "Developing sustainable agriculture tech and smart irrigation systems.",
//             "annualRevenue": "2.5M SAR",
//             "netProfit": "800K SAR",
//             "percentageProfitMargin": 32,
//             "breakEvenPoint": "2025-11-30T00:00:00.000Z",
//             "financialReportPDF": "https://res.cloudinary.com/dqh3zhxhc/raw/upload/v1745881860/users/financialReportPDF.pdf",
//             "requiredServices": {
//                 "خدمات تقنية وتكنولوجية": "best",
//                 "خدمات التسويق والترويج": "perfict"
//             },
//             "exitStrategy": "Acquisition by a global AgriTech brand.",
//             "expectedProfitPerYear": "1.2M SAR",
//             "risksAndDifficults": "Climate dependency and fluctuating water resources",
//             "companyDescription": "BioGrow pioneers AgriTech in the Gulf, blending IoT and sustainable farming to optimize yield and minimize resource consumption.",
//             "businessModel": "B2B",
//             "targetMarket": "عالمي",
//             "offeredServices": "Smart irrigation, farm monitoring solutions, biofertilizers.",
//             "currentClerksNumber": "10-20",
//             "foundationDate": "2018-03-10T00:00:00.000Z",
//             "partnerShip": "Research partnerships with KAUST and King Saud University.",
//             "videoLink": "https://vimeo.com/biogrow-intro",
//             "companyName": "BioGrow Tech",
//             "socialName": "BioGrow",
//             "companyField": [
//                 "الزراعة الذكية والتكنولوجيا الزراعية (AgriTech)",
//                 "إدارة النفايات وإعادة التدوير"
//             ],
//             "state": "Seed (مرحلة التأسيس والتمويل الأولي)",
//             "companyPhoto": "https://res.cloudinary.com/dqh3zhxhc/image/upload/v1745882868/users/ucgskh1lqy3q4rfvjcp1.jpg",
//             "email": "info@biogrow.sa",
//             "companyPhoneNumber": "+966509876543",
//             "websiteUrl": "https://biogrow.sa",
//             "country": "السعوديه",
//             "headQuarter": "الرياض",
//             "bmc": "https://res.cloudinary.com/dqh3zhxhc/raw/upload/v1745881861/users/bmc.pdf",
//             "role": "company",
//             "notification": true,
//             "passwordChangedAt": "2025-04-28T23:32:12.619Z",
//             "__v": 0
//         },

//         {
//             "image": {
//                 "secure_url": "https://res.cloudinary.com/dqh3zhxhc/image/upload/v1745883871/Estethmarat/SupportOrganization/7iOQ/epwxbmymzskyulq72die.jpg",
//                 "public_id": "Estethmarat/SupportOrganization/7iOQ/epwxbmymzskyulq72die"
//             },
//             "_id": "681012df30406ae35bb9c122",
//             "name": "Tech Venture Hub",
//             "username": "techventurehub",
//             "organizationType": "رأس المال الجريء",
//             "email": "contact@techventurehub.com",
//             "notification": true,
//             "phoneNumber": "+966501234567",
//             "website": "https://techventurehub.com",
//             "password": "$2a$12$W/1DAe1a1hnHWOWcYSMZy.R1jEY1Psys5ys4kBAJxDcZ94M86TW9e",
//             "supportedProjectFields": [
//                 "الذكاء الاصطناعي والتعلم الآلي",
//                 "البلوكتشين والعملات الرقمية",
//                 "الطاقة المتجددة (الطاقة الشمسية، الرياح، الهيدروجين الأخضر)"
//             ],
//             "targetFundingValue": 5000000,
//             "supportTypes": [
//                 "تمويل واستثمار",
//                 "تطوير الأعمال والتخطيط الاستراتيجي",
//                 "منح وتسهيلات حكومية"
//             ],
//             "targetedProjectStages": [
//                 "Seed (مرحلة التأسيس والتمويل الأولي)",
//                 "Series A (التوسع الأولي)"
//             ],
//             "providedPrograms": "برنامج تمويل المشاريع التقنية الناشئة في منطقة الخليج.",
//             "commercialRegistrationNumber": "CR-20230001",
//             "taxIdNumber": "TAX-880011",
//             "representativeName": "عبدالله الحربي",
//             "representativeEmail": "abdullah@techventurehub.com",
//             "representativeNationalId": "12345678901234",
//             "description": "تقدم Tech Venture Hub دعماً متكاملاً للشركات التقنية الناشئة.",
//             "numberOfProjectsSupported": 27,
//             "role": "supportOrganization",
//             "country": "السعوديه",
//             "headQuarter": "الرياض",
//             "acceptNotifications": false,
//             "acceptedByAdmin": false,
//             "isEmailVerified": false,
//             "isMarkedAsDeleted": false,
//             "createdAt": "2025-04-28T23:44:31.619Z",
//             "updatedAt": "2025-04-28T23:44:31.619Z",
//             "passwordChangedAt": "2025-04-28T23:44:31.538Z",
//             "__v": 0
//         },

//         {
//             "image": {
//                 "public_id": "Estethmarat/CharityOrganization/O7bm/lndvn9dy2vyyc7qnkhbl",
//                 "secure_url": "https://res.cloudinary.com/dqh3zhxhc/image/upload/v1745885376/Estethmarat/CharityOrganization/O7bm/lndvn9dy2vyyc7qnkhbl.jpg"
//             },
//             "registrationProof": {
//                 "public_id": "Estethmarat/CharityOrganization/O7bm/doc.pdf",
//                 "secure_url": "https://res.cloudinary.com/dqh3zhxhc/raw/upload/v1745885377/Estethmarat/CharityOrganization/O7bm/doc.pdf"
//             },
//             "_id": "681019c51d38463b9b9237c7",
//             "name": "Al-Nahda Educational Foundation",
//             "username": "alnahdaedu",
//             "role": "charityOrganization",
//             "organizationType": "مؤسسة تعليمية غير ربحية",
//             "notification": true,
//             "email": "info@alnahdaedu.org",
//             "phoneNumber": "+966501234567",
//             "website": "https://alnahdaedu.org",
//             "password": "$2a$12$PSB8kuyUwwcCktXQyBpejOmfQeAtsz3lQ.5FHDIyXtAnUoCrvkD8C",
//             "projectTypes": [
//                 "دعم التعليم والتدريب",
//                 "تمكين المرأة والمساواة"
//             ],
//             "targetedGroups": [
//                 "الأطفال والشباب",
//                 "النساء",
//                 "العائلات ذات الدخل المحدود"
//             ],
//             "targetedRegions": [
//                 "دعم محلي (داخل الدولة فقط)",
//                 "المناطق الحضرية والضواحي"
//             ],
//             "supportTypes": [
//                 "تدريب وتطوير مهارات",
//                 "برامج شراكات وربط مع جهات داعمة"
//             ],
//             "commercialRegistrationNumber": "CR-EDU-2024-001",
//             "taxIdNumber": "TAX-EDU-9901",
//             "representativeName": "نورة الدوسري",
//             "representativeEmail": "nora@alnahdaedu.org",
//             "representativeNationalId": "12345678901234",
//             "country": "السعوديه",
//             "headQuarter": "الرياض",
//             "acceptNotifications": false,
//             "acceptedByAdmin": false,
//             "isEmailVerified": false,
//             "isMarkedAsDeleted": false,
//             "createdAt": "2025-04-29T00:13:57.841Z",
//             "updatedAt": "2025-04-29T00:13:57.841Z",
//             "passwordChangedAt": "2025-04-29T00:13:57.253Z",
//             "__v": 0
//         },
//         {
//             "image": {
//                 "public_id": "Estethmarat/CharityOrganization/I7cw/w0irjvzvjb42cjdw4x9p",
//                 "secure_url": "https://res.cloudinary.com/dqh3zhxhc/image/upload/v1745886145/Estethmarat/CharityOrganization/I7cw/w0irjvzvjb42cjdw4x9p.jpg"
//             },
//             "registrationProof": {
//                 "public_id": "Estethmarat/CharityOrganization/I7cw/doc.pdf",
//                 "secure_url": "https://res.cloudinary.com/dqh3zhxhc/raw/upload/v1745886146/Estethmarat/CharityOrganization/I7cw/doc.pdf"
//             },
//             "_id": "68101cc61d38463b9b9237d7",
//             "name": "Green Roots Environment Association",
//             "username": "greenroots",
//             "role": "charityOrganization",
//             "organizationType": "جمعية تنموية",
//             "notification": true,
//             "email": "hello@greenroots.org",
//             "phoneNumber": "+971555556789",
//             "website": "https://greenroots.org",
//             "password": "$2a$12$neEjzSVZOhftURhDXTmbA.bKgqzwpxN8pMPBE1awJNF48w7CcX49u",
//             "projectTypes": [
//                 "التنمية المستدامة والبيئة",
//                 "توفير المياه والصرف الصحي"
//             ],
//             "targetedGroups": [
//                 "المجتمعات الريفية والمناطق الفقيرة",
//                 "العائلات ذات الدخل المحدود"
//             ],
//             "targetedRegions": [
//                 "دعم إقليمي (داخل عدة دول في نفس المنطقة)",
//                 "المناطق الريفية والمهمشة"
//             ],
//             "supportTypes": [
//                 "دعم تقني وتكنولوجي",
//                 "استشارات قانونية وإدارية",
//                 "تدريب وتطوير مهارات"
//             ],
//             "commercialRegistrationNumber": "CR-ENV-2025",
//             "taxIdNumber": "TAX-GREEN-7788",
//             "representativeName": "ليلى الزهراني",
//             "representativeEmail": "layla@greenroots.org",
//             "representativeNationalId": "34567890123456",
//             "country": "الإمارات",
//             "headQuarter": "دبي",
//             "acceptNotifications": false,
//             "acceptedByAdmin": false,
//             "isEmailVerified": false,
//             "isMarkedAsDeleted": false,
//             "createdAt": "2025-04-29T00:26:46.882Z",
//             "updatedAt": "2025-04-29T00:26:46.882Z",
//             "passwordChangedAt": "2025-04-29T00:26:46.247Z",
//             "__v": 0
//         },

//     ]
// }

// لو "role": "investor"
// يعرض هيدار كده اللى هو عرض المستثمرين
// و تحتها يرص اسماء المستثمرين فقط

// لو "role": "company"
// يعرض هيدير كده اللى هو عرض الشركات
// و تحتها يرص اسماء الشركات فقط

// لو "role": "charityOrganization"
// يعرض هيدير كده اللى هو عرض الجمعيات الخيريه
// و تحتها يرص اسماء الجمعيات الخيريه فقط

// لو  "role": "supportOrganization"
// يعرض هيدير كده اللى هو عرض حاضنات الاعمال
// و تحتها يرص اسماء حاضنات الاعمال فقط
