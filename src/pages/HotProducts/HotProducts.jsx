import React from 'react';
import image1 from '../../assets/HotProducts1.jpeg'
import image2 from '../../assets/HotProducts2.jpeg'
import image3 from '../../assets/HotProducts3.jpeg'
import ProductCard from './ProductCard';

const HotProducts = () => {
    return (
        <div className='container mx-auto px-4 py-24'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center justify-center">
                <div className="col-span-1">
                    <ProductCard image={image1} status="Hot Product" title="Lounge Chair" />
                </div>
                <div className="col-span-1 mx-auto">
                    <img className="w-[360px] h-[360px] object-cover rounded-lg shadow-lg" src={image2} alt="Product" />
                </div>
                <div className="col-span-1">
                    <ProductCard image={image3} status="Hot Product" title="Modern Sofa" />
                </div>
            </div>
        </div>
    );
};

export default HotProducts;