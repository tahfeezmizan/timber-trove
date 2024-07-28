import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const OurBlog = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, []);

    return (
        <div className='container mx-auto px-4 py-24'>
            <SectionTitle title={'Our Blog'}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
                {
                    blogs?.map(blog => (
                        <div className="relative hover:shadow-xl transition duration-300 rounded-xl overflow-hidden">
                            <div className="">
                                <p className="absolute top-5 left-5 w-16 h-16 rounded-xl text-base font-MochiyPopOne p-3 z-10 text-center bg-white">{blog.date}</p>

                                <div className="w-full h-[334px] overflow-hidden rounded-lg">
                                    <img className="w-full h-full object-cover rounded-lg " src={blog.image} alt="" />
                                </div>

                                <div className="mt-10 pl-3 pb-5">
                                    <p className="text-[#FF6F00] text-base font-RobotoSlab pb-1 uppercase font-medium">{blog.categories}</p>
                                    <h3 className="text-[#373737] text-base font-MochiyPopOne uppercase pb-1">{blog.title}</h3>
                                    <p className="text-[#979797] text-base font-RobotoSlab mb-5">{blog.shortDescription}</p>

                                    <button className="text-black text-sm font-MochiyPopOne border-black border-b-2 py-1">Read more              </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurBlog;