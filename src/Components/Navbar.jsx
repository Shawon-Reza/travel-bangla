import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'animate.css';
import { AuthContex } from '../Provider/AuthProvider';
import { button } from 'framer-motion/client';

const Navbar = () => {
    const { loginUser,logout } = useContext(AuthContex)
    // console.log(loginUser);

    const menuItems = (
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={''}>Tourism stops</NavLink></li>
            <li><NavLink to={'/booking'}>Booking</NavLink></li>
            <li><NavLink to={'/connectWithOthers'}>Find TravelMate</NavLink></li>
            <li><NavLink to={'/'}>Post</NavLink></li>
            <li><NavLink to={'/contactus'}>Contact us</NavLink></li>
            <li><NavLink to={'/loginregistration'}>
                {loginUser ? (<button onClick={logout}>Logout</button>) : (<button>Login</button>)}
            </NavLink></li>
            <li><NavLink to={'/admin'}>Admin</NavLink></li>

        </>
    )

    return (
        <div>

            <div className="navbar shadow-sm px-5  bg-[#009999] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow  bg-[#009999]">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl animate__animated animate__flipInX font-Playfair">
                        <Link to="/">
                            <img src="https://i.ibb.co.com/rf5DNrTZ/Add-a-heading.gif" alt=""
                                className='w-60'
                            />
                        </Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;