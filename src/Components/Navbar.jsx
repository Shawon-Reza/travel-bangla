import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'animate.css';
import { AuthContex } from '../Provider/AuthProvider';
import { TiDeleteOutline } from "react-icons/ti";
import { PiSignOutBold } from "react-icons/pi";
import { motion } from "motion/react"


const Navbar = () => {
    const { loginUser, logout } = useContext(AuthContex);

    const [openSlider, setOpenslider] = useState(false);
    const sidebarRef = useRef();

    const handleslider = () => {
        setOpenslider(!openSlider);
    };

    // Prevent background scroll
    useEffect(() => {
        document.body.style.overflow = openSlider ? 'hidden' : 'auto';
    }, [openSlider]);

    // Close slider when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpenslider(false);
            }
        };

        if (openSlider) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openSlider]);

    const menuItems = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="">Tourism stops</NavLink></li>
            <li><NavLink to="/booking">Book tours</NavLink></li>
            <li><NavLink to="/connectWithOthers">Travel Post</NavLink></li>
            <li><NavLink to="/contactus">Contact us</NavLink></li>
            <li>
                <NavLink to="/loginregistration">
                    <button>Login</button>
                </NavLink>
            </li>
            <li><NavLink to="/admin">Admin</NavLink></li>
        </>
    );

    return (
        <div>
            {/* Navbar */}
            <div className="navbar shadow-sm px-5 bg-[#009999] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow rounded-box bg-[#009999] w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <motion.div
                        // initial={{scale:0}}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{scale:.8}}
                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}
                        animate={{
                            rotate: [2, -2, 2]

                        }}
                    >
                        <Link to="/" className="btn btn-ghost text-3xl font-Playfair">
                            <img src="https://i.ibb.co.com/rf5DNrTZ/Add-a-heading.gif" alt="Logo" className="w-60" />
                        </Link>
                    </motion.div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{menuItems}</ul>
                </div>
                <div className="navbar-end">
                    <figure>
                        <img
                            src={loginUser?.photoURL || "https://i.ibb.co.com/fYPkdG1f/5100711-200.png"}
                            className="w-10 h-10 rounded-full border-2 border-black shadow-2xl cursor-pointer"
                            alt="User photo"
                            onClick={handleslider}
                        />
                    </figure>
                </div>
            </div>

            {/* Overlay - for background dimming and outside click */}
            {openSlider && (
                <div
                    className="fixed  bg-black opacity-10 z-[998]"
                    onClick={() => setOpenslider(false)}
                ></div>
            )}

            {/* Sidebar (User Profile Slider)........... */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 z-[999] shadow-2xl h-full w-64 bg-[rgb(24,118,118)] rounded-tl-2xl border-1 p-5 transition-transform duration-700
                ${openSlider ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex gap-5 items-center">
                    <img
                        src={loginUser?.photoURL || "https://i.ibb.co.com/fYPkdG1f/5100711-200.png"}
                        className="w-10 h-10 rounded-full border-2 border-black shadow-2xl"
                        alt="User photo"
                    />

                    <div className="flex flex-col justify-center items-center text-white font-semibold">
                        <h1 className="text-center break-words">{loginUser?.displayName}</h1>
                        <h1>{loginUser?.emailVerified && 'Verified'}</h1>
                    </div>

                    <div className="text-3xl cursor-pointer text-white" onClick={handleslider}>
                        <TiDeleteOutline />
                    </div>
                </div>

                <hr className="my-3 border-white" />

                <div className='pl-4 font-semibold cursor-pointer '>
                    <p>Profile</p>
                </div>

                <hr
                    className='mt-3'
                />


                <div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2  rounded-box bg-[#00999] w-full">
                        {menuItems}
                    </ul>
                </div>

                <hr />



                <div className="flex gap-3 absolute bottom-5 text-white cursor-pointer" onClick={logout}>

                    <span className="text-2xl"><PiSignOutBold /></span>
                    <p>Sign out</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
