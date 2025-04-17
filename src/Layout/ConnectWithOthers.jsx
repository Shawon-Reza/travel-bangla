import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FindFriendLeftside from '../Components/FindFriendLeftside';
import FindFriend from '../Pages/FindFriend';
import { NavLink } from 'react-router-dom';
import TravelPost from './../Components/TravelPost';

const ConnectWithOthers = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='container mx-auto grid grid-cols-12 '>
                <div className='col-span-3 xl:col-span-2'>
                    <FindFriendLeftside></FindFriendLeftside>
                </div>

                <div className='col-span-9 xl:col-span-10'>

                    <NavLink to={'/TravelPost'}>
                        <button className='ml-15 btn mt-3 -mb-5'>Add tour Travel post</button>
                    </NavLink>

                    <div className='col-span-9 xl:col-span-10'>
                        <FindFriend></FindFriend>
                    </div>
                </div>
            </div>



            <div className='mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ConnectWithOthers;