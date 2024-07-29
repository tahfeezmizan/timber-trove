import React from 'react';

const ProductCard = ({ image, status, title }) => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={title} />
            <div className="absolute bottom-4 left-4 text-white">
                <p className="text-base font-RobotoSlab text-[#4D4B4F] font-medium">{status}</p>
                <h2 className="text-2xl font-MochiyPopOne text-black pb-5">{title}</h2>
                <p className="text-base font-RobotoSlab text-[#4D4B4F] font-medium">Shop now</p>
            </div>
        </div>
    );
};

export default ProductCard;