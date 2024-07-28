import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoArrowUpSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo dark.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Shop</NavLink>
        <NavLink to='/'>Features</NavLink>
        <NavLink to='/'>Contact</NavLink>
    </>

    return (
        <div className="bg-white shadow-md md:shadow-none">
            <div className="container flex justify-between items-center p-4 font-Inter">
                <NavLink to={'/'}>
                    {/* <img src={logo} className="" alt="Logo" /> */}
                    <h1 className="" >Timber Trove</h1>
                </NavLink>

                <div className="flex-1 flex justify-center">
                    <div className={`md:flex gap-8 md:static absolute duration-300 ease-in-out ${open ? 'top-16' : 'top-[-200px]'} right-0 md:right-auto md:bg-transparent bg-white py-10 w-full md:w-auto`}>

                        <div className="flex flex-col md:flex-row gap-3 md:gap-6 font-Inter items-center justify-center text-base font-normal">
                            {links}
                        </div>

                        {open && (
                            <div className="flex justify-center mt-4 md:hidden">
                                <button className="text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400">
                                    Appointment <span className="rotate-45"><IoArrowUpSharp /></span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <button className="hidden md:flex text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400">
                    Appointment <span className="rotate-45"><IoArrowUpSharp /></span>
                </button>

                <div className="text-4xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <IoMdClose /> : <RiMenu3Fill />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
