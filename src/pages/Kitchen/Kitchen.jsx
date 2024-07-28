import React from 'react';
import kitchenBg from '../../assets/kitchen.jpeg';

const Kitchen = () => {
    return (
        <div className='h-screen' style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${kitchenBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container mx-auto px-4 py-20 mb-5 lg:mb-10">
                <div className="relative text-center mt-36">
                    <button className="text-white bg-[#FF6F00] text-3xl font-Poppins px-10 md:px-16 py-4 md:py-5 rounded-md font-bold mb-16">
                        Shop the look
                    </button>
                    <p className='custom-shadow w-10 h-10 rounded-full border-[15px] bg-[#FF6F00] absolute left-1/3 top-1/3 transform -translate-x-1/2 -translate-y-1/2'></p>
                    <h1 className="text-8xl lg:text-[198px] font-Poppins font-bold text-white">Kitchen</h1>

                    <p className='custom-shadow w-10 h-10 rounded-full border-[15px] bg-[#FF6F00] absolute left-60 bottom-0 transform -translate-x-1/2 -translate-y-1/2'></p>

                    <p className='custom-shadow w-10 h-10 rounded-full border-[15px] bg-[#FF6F00] absolute right-72 bottom-28 transform -translate-x-1/2 -translate-y-1/2'></p>

                    <p className="text-2xl lg:text-3xl font-Poppins font-bold text-white">Creating your beautiful home should not <br /> Cost the World!</p>
                    <p className='custom-shadow w-10 h-10 rounded-full border-[15px] bg-[#FF6F00] absolute right-96 -bottom-30 transform -translate-x-1/2 -translate-y-1/2'></p>
                </div>
            </div>
        </div>
    );
};

export default Kitchen;
