import SectionTitle from "../SectionTitle/SectionTitle";

import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'

const Brand = () => {
    return (
        <div className="container mx-auto px-4 py-24">
            <SectionTitle title={"Top Brand"}></SectionTitle>

            <div className="flex flex-wrap items-center justify-around gap-6 md:gap-20">
                <img className="w-36" src={brand1} alt="" />
                <img className="w-36" src={brand2} alt="" />
                <img className="w-36" src={brand3} alt="" />
                <img className="w-36" src={brand4} alt="" />
                <img className="w-36" src={brand5} alt="" />
            </div>
        </div>
    );
};

export default Brand;