import React from 'react';
import Header from './../Components/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { NavLink, Outlet } from 'react-router-dom';

const AdminControl = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <section className='grid gap-5 grid-cols-12 my-10 container mx-auto px-5'>

                <div className="col-span-4 lg:col-span-3 flex flex-col bg-slate-100 rounded-2xl  p-4 w-full shadow-md space-y-4">

                    <NavLink
                        to="/admincontrol"
                        end
                        className={({ isActive }) =>
                            `btn btn-outline btn-accent w-full font-semibold rounded-lg py-2 transition duration-200 ${isActive ? 'bg-[#009999] text-black ' : ''
                            }`
                        }
                    >
                        Tour Posts
                    </NavLink>

                    <NavLink
                        to="admintravelpost"
                        className={({ isActive }) =>
                            `btn btn-outline btn-accent w-full font-semibold rounded-lg py-2 transition duration-200 ${isActive ? 'bg-[#009999] text-black ' : ''
                            }`
                        }
                    >
                        Add Tours
                    </NavLink>

                    <NavLink
                        to="usertravelpost"
                        className={({ isActive }) =>
                            `btn btn-outline btn-accent w-full font-semibold rounded-lg py-2 transition duration-200 ${isActive ? 'bg-[#009999] text-black ' : ''
                            }`
                        }
                    >
                        User Post
                    </NavLink>

                    <NavLink
                        to="reviews"
                        className={({ isActive }) =>
                            `btn btn-outline btn-accent w-full font-semibold rounded-lg py-2 transition duration-200 ${isActive ? 'bg-[#009999] text-black ' : ''
                            }`
                        }
                    >
                        Reviews
                    </NavLink>

                </div>


                <div className='col-span-8 lg:col-span-9'>
                    <Outlet></Outlet>
                </div>

            </section>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AdminControl;