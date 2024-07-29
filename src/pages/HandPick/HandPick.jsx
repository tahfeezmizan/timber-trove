import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaStar } from 'react-icons/fa';

const HandPick = () => {
    return (
        <div className='container mx-auto px-4 py-20'>
            <SectionTitle title={"Hand Pick"}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5 lg:gap-20">
                <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2">
                    <div className="flex flex-col md:flex-row lg:flex-col gap-10">
                        <div className="hover:shadow-xl transition duration-300 rounded-xl overflow-hidden">
                            <div className="">
                                <div className="w-full h-[334px] overflow-hidden rounded-lg">
                                    <img className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-500 ease-in-out" src='https://i.ibb.co/6F8MJTY/image-9.jpg' alt="" />
                                </div>
                                <div className="mt-10 pl-3 pb-5">
                                    <h2 className="text-[#373737] text-base font-Poppins uppercase font-semibold">SAldad Koram</h2>

                                    <div className="flex items-center gap-5">
                                        <p className="text-[#373737] text-base font-Poppins uppercase font-semibold pr-8 border-r-2 border-[#454545]">$350.00</p>

                                        <p className="flex items-center justify-between gap-1 text-[#373737] text-base font-Poppins uppercase font-semibold">5 <span className='text-[#F5D426]'><FaStar /></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hover:shadow-xl transition duration-300 rounded-xl overflow-hidden">
                            <div className="">
                                <div className="w-full h-[334px] overflow-hidden rounded-lg">
                                    <img className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-500 ease-in-out" src='https://i.ibb.co/HtqP2rb/image-10.jpg' alt="" />
                                </div>
                                <div className="mt-10 pl-3 pb-5">
                                    <h2 className="text-[#373737] text-base font-Poppins uppercase font-semibold">SAldad Koram</h2>

                                    <div className="flex items-center gap-5">
                                        <p className="text-[#373737] text-base font-Poppins uppercase font-semibold pr-8 border-r-2 border-[#454545]">$350.00</p>

                                        <p className="flex items-center justify-between gap-1 text-[#373737] text-base font-Poppins uppercase font-semibold">5 <span className='text-[#F5D426]'><FaStar /></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="middleImage col-auto md:col-span-2 lg:col-span-3">
                    <img className='object-center' src="https://i.ibb.co/SfpwnWW/2c6587d5165d3d7cf2edcfa5d9722c67.png" alt="" />
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2">
                    <div className="flex flex-col md:flex-row lg:flex-col gap-10">
                        <div className="hover:shadow-xl transition duration-300 rounded-xl overflow-hidden">
                            <div className="">
                                <div className="w-full h-[334px] overflow-hidden rounded-lg">
                                    <img className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-500 ease-in-out" src='https://i.ibb.co/pWSFJGj/image-11.jpg' alt="" />
                                </div>
                                <div className="mt-10 pl-3 pb-5">
                                    <h2 className="text-[#373737] text-base font-Poppins uppercase font-semibold">SAldad Koram</h2>

                                    <div className="flex items-center gap-5">
                                        <p className="text-[#373737] text-base font-Poppins uppercase font-semibold pr-8 border-r-2 border-[#454545]">$350.00</p>

                                        <p className="flex items-center justify-between gap-1 text-[#373737] text-base font-Poppins uppercase font-semibold">5 <span className='text-[#F5D426]'><FaStar /></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hover:shadow-xl transition duration-300 rounded-xl overflow-hidden">
                            <div className="">
                                <div className="w-full h-[334px] overflow-hidden rounded-lg">
                                    <img className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-500 ease-in-out" src='https://i.ibb.co/LRcCWKy/image-12.jpg' alt="" />
                                </div>
                                <div className="mt-10 pl-3 pb-5">
                                    <h2 className="text-[#373737] text-base font-Poppins uppercase font-semibold">SAldad Koram</h2>

                                    <div className="flex items-center gap-5">
                                        <p className="text-[#373737] text-base font-Poppins uppercase font-semibold pr-8 border-r-2 border-[#454545]">$350.00</p>

                                        <p className="flex items-center justify-between gap-1 text-[#373737] text-base font-Poppins uppercase font-semibold">5 <span className='text-[#F5D426]'><FaStar /></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HandPick;