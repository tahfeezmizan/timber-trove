import React from 'react';
import { TfiEmail } from 'react-icons/tfi';

const Newsletter = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-[#F0F8F6]">
            <div className="flex-1 flex justify-center items-center">
                <div className="py-28 pl-2 md:pl-12">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="text-4xl"><TfiEmail /></div>
                        <p className="">Subscribe to get $30 off* <br /> your first order</p>
                    </div>
                    <div className="">
                        <input type="text" name=""
                            className='w-48 md:w-96 p-4 rounded-l-md border-black border text-black'
                            placeholder='Enter your email' id="" />
                        <input type="submit"
                            className='py-4 px-7 rounded-r-md text-white bg-black border-black border '
                            value="Submit" />
                    </div>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-end">
                <img className='object-contain w-full h-auto' src="https://i.ibb.co/YRxx0jD/Rectangle-1079.png" alt="" />
            </div>
        </div>
    );
};

export default Newsletter;
