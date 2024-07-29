import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Feedback = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, []);

    return (
        <div className='container mx-auto px-4 py-24'>
            <SectionTitle title={'Feedback Corner'}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
                {
                    blogs?.map((blog, index) => (
                        <div key={index} className="group p-6 bg-white shadow-lg hover:shadow-md hover:bg-[#E9F4EE] transition duration-300">
                            <p className="text-6xl font-ArialRoundedMTBold pb-6">“</p>
                            <h3 className="text-xl font-RobotoSlab pb-8">{blog.title}</h3>
                            <p className="text-[#6F6F6F] group-hover:text-black text-base font-Poppins transition duration-300">{blog.shortDescription}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Feedback;