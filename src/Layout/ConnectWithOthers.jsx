import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FindFriendLeftside from '../Components/FindFriendLeftside';
import FindFriend from '../Pages/FindFriend';

const ConnectWithOthers = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='container mx-auto grid grid-cols-12 '>
                <div className='col-span-3 xl:col-span-2'>
                    <FindFriendLeftside></FindFriendLeftside>
                </div>

                <div className='col-span-9 xl:col-span-10'>
                    <FindFriend></FindFriend>
                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default ConnectWithOthers;