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

            <section className='grid grid-cols-12 my-10 container mx-auto px-5'>

                <div className='col-span-4 flex flex-col'>
                    <NavLink to={'#'}>
                        <button className='btn'>Add tours</button>
                    </NavLink>
                    <NavLink to={'/adminsidetravelpost'}>
                        <button className='btn'>Tour Posts</button>
                    </NavLink>
                    <NavLink to={'#'}>
                        <button className='btn'>Reviews</button>
                    </NavLink>
                </div>


                <div className='col-span-8'>
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