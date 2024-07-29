import React from "react";

import mainImg from '../../assets/image 2.png';
import woodImg from '../../assets/wood-image.png';
import Feature from "../Feature/Feature";

const Banner = () => {
  return (
    <div className=''>
      <div className='bg-PrimaryBg '>
        <div className='relative container mx-auto pt-10 pb-72 '>
          <div className="">
            <p className="absolute top-56 left-0 text-2xl rotate-90 font-MochiyPopOne text-[#313333]">2024  EDITION</p>
            <div className="">
              <h3 className="text-[192px] text-[#FFC39A] font-MochiyPopOne absolute top-16 left-[220px] z-20">New</h3>
              <img className="absolute top-60 -left-16 -rotate-45 " src={woodImg} alt="" />
              <div className="border-l-4 border-black pl-4 py-2 absolute left-96 bottom-72">
                <p className="text-sm font-MochiyPopOne ">TimberTrove</p>
                <p className="text-sm font-MochiyPopOne ">Furniture</p>
              </div>
            </div>
            <div className="">
              <img className="mx-auto z-50" src={mainImg} alt="" />
              <h3 className="text-[131px] text-[#FF6F00] font-MochiyPopOne absolute bottom-72 right-56">arrivals</h3>
            </div>
            <div className="">

              <h3 className="absolute top-52 right-80 text-6xl text-white font-MochiyPopOne rotate-90 font-semibold">2024</h3>
              <p className="absolute bottom-28 -right-32 text-2xl rotate-90 font-MochiyPopOne text-[#313333]">2024  EDITION</p>
            </div>
          </div>
        </div>
      </div>
      <Feature></Feature>
    </div>
  );
};

export default Banner;
