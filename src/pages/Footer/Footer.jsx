import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { CiInstagram, CiTwitter } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#E9F4EE] py-20 text-black ">
            <div className="container mx-auto px-10 lg:px-44 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-7 mb-36">
                    <div className="col-span-2">
                        <NavLink to={'/'}>
                            <h1 className="text-4xl font-BebasNeue uppercase font-normal mb-9">Timber Trove</h1>
                        </NavLink>

                        <p className="text-base pb-5 font-RobotoSlab font-medium">Social Media</p>
                        <div className="flex items-center gap-8 text-xl text-black mb-5">
                            <p className=" text-4xl p-2"><AiOutlineFacebook /></p>
                            <p className="text-4xl p-2"><CiTwitter /></p>
                            <p className=" text-4xl p-2"><CiInstagram /></p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <header className="text-base font-RobotoSlab font-medium mt-4 mb-5 uppercase">Shop</header>
                        <div className="flex flex-col space-y-3 text-base font-Poppins font-medium">
                            <Link>Products</Link>
                            <Link>Overview</Link>
                            <Link>Pricing</Link>
                            <Link>Releases</Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <header className="text-base font-RobotoSlab font-medium mt-4 mb-5 uppercase">Company</header>
                        <div className="flex flex-col space-y-3 text-base font-Poppins font-medium">
                            <Link>About us</Link>
                            <Link>Contact</Link>
                            <Link>News</Link>
                            <Link>Support</Link>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <nav className="flex flex-col">
                            <header className="text-base font-RobotoSlab font-medium mt-4 mb-6 uppercase">Stay up to date</header>

                            <div className="">
                                <input type="text" name=""
                                    className='w-48 md:w-60 p-2 rounded-l-md border-black border-2 text-black'
                                    placeholder='Enter your email' id="" />
                                <input type="submit"
                                    className='py-2 px-5 uppercase rounded-r-md text-white bg-black border-2 border-black'
                                    value="Submit" />
                            </div>

                        </nav>
                    </div>
                </div>

                <div className="relative flex flex-row-reverse items-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-black"></div>
                    </div>
                    <div className="bg-[#E9F4EE] flex items-center gap-7 text-base font-Poppins font-medium relative z-10 px-4 justify-end">
                        <Link to="#">Contact</Link>
                        <Link to="#">News</Link>
                        <Link to="#">Support</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;