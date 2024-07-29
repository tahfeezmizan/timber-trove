import React, { useEffect, useState } from 'react';

const Feature = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('feacture.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="container mx-auto px-16 -mt-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    data?.map(product => (
                        <div className="col-span-1 h-52 mb-20 bg-white p-6 shadow-lg rounded-lg text-center">
                            <img className="w-full h-48 object-contain -mt-28 mb-4" src={product.image} alt="Comfy Chair" />
                            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                            <p className="text-red-500 text-lg">{product.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Feature;