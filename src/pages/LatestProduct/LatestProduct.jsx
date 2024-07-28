import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaStar } from 'react-icons/fa';

const LatestProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('latestproduct.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='container mx-auto px-4 py-20'>
            <SectionTitle title={"New Arrival"}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
                {
                    products?.map(product => (
                        <div className="relative hover:shadow-xl transition duration-300 rounded-xl overflow-hidden">
                            <div className="">
                                {product.productStatus && <p className="absolute top-5 left-5 rounded-lg text-[10px] py-1 uppercase px-3 font-MochiyPopOne font-normal z-10  bg-[#F56E07] text-white">{product.productStatus}</p>}

                                {product.discount && <p className="absolute top-5 right-5 rounded-lg text-[10px] py-1 uppercase px-3 font-MochiyPopOne z-10  bg-[#FF3939] text-white">{product.discount}</p>}

                                <div className="w-full h-[334px] overflow-hidden rounded-lg">
                                    <img className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-500 ease-in-out" src={product.image} alt="" />
                                </div>

                                <div className="mt-10 pl-3 pb-5">
                                    <h2 className="text-[#373737] text-base font-Poppins uppercase font-semibold">{product.title}</h2>

                                    <div className="flex items-center gap-5">
                                        <p className="text-[#373737] text-base font-Poppins uppercase font-semibold pr-8 border-r-2 border-[#454545]">{product.price}</p>

                                        <p className="flex items-center justify-between gap-1 text-[#373737] text-base font-Poppins uppercase font-semibold">{product.rating} <span className='text-[#F5D426]'><FaStar /></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestProduct;