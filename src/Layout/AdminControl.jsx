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
                    <NavLink to="/admincontrol">
                        <button className="btn w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition duration-200">
                            Add Tours
                        </button>
                    </NavLink>
                    <NavLink to="adminsidetravelpost">
                        <button className="btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg py-2 transition duration-200">
                            Tour Posts
                        </button>
                    </NavLink>
                    <NavLink to="reviews">
                        <button className="btn w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg py-2 transition duration-200">
                            Reviews
                        </button>
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