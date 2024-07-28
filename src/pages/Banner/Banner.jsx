import React from "react";

import mainImg from '../../assets/image 2.png'
import woodImg from '../../assets/wood-image.png'
import SectionTitle from "../SectionTitle/SectionTitle";

const Banner = () => {
    return (
        <div className="relative w-full bg-PrimaryBg h-screen">

            <div className="container px-20 mx-auto">
                <div className="grid grid-cols-7">
                    <div className="col-span-2 border h-96 border-black">
                        <img className="w-96 origin-center -rotate-45" src={woodImg} alt="" />

                    </div>
                    <div className="flex items-center justify-center col-span-3 border h-96 border-black ">
                        <img className="w-[496px] h-[465px]" src={mainImg} alt="" />
                    </div>
                    <div className="col-span-2 border h-96 border-black">

                    </div>
                </div>

                <SectionTitle title={"Banner SEction"}></SectionTitle>
            </div>


            {/* <div className="max-w-6xl mx-auto  p-8 relative ">
        <div className="absolute text-gray-500 left-[-2rem] top-1/2 transform -translate-y-1/2 rotate-[-90deg]">
          <p className="font-bold tracking-wide">2024 EDITION</p>
        </div>

        <div className="absolute text-gray-500 right-[-2rem] top-1/2 transform -translate-y-1/2 rotate-[90deg]">
          <p className="font-bold tracking-wide">2024</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 lg:order-2">
            <img
              src={mainImg}
              alt="Orange Chair"
              className="mx-auto lg:mx-0"
            />
          </div>

          <div className="flex-1 text-center lg:text-left lg:order-1">
            <h1 className="text-5xl font-extrabold text-orange-500 leading-none">
              New
            </h1>
            <h2 className="text-5xl font-extrabold text-orange-500 leading-none">
              arrivals
            </h2>
            <p className="mt-4 text-gray-700">Timber Trove Furniture</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img
            src="https://via.placeholder.com/100x20" // Replace with actual image URL
            alt="Branch"
            className="mx-auto"
          />
        </div>
      </div> */}
        </div>
    );
};

export default Banner;
