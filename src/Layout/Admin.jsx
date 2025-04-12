import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdminLeftSide from '../Components/AdminLeftSide';
import TravelPost from '../Components/TravelPost';

const Admin = () => {
    return (
        <div>
            <h1>Admin................................</h1>
            <Navbar></Navbar>


            <section className='grid grid-cols-12 py-10'>
                <div className='col-span-3 lg:col-span-4'>
                    <AdminLeftSide></AdminLeftSide>
                </div>

                <div className='col-span-9 lg:col-span-8'>
                    <TravelPost></TravelPost>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Admin;