import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const UserProfile = () => {

   
    return (
        <div>
            <Navbar></Navbar>

            <section>
                <div>
                    <img src="loginUser?.photoURL" alt="" />
                </div>
            </section>
        </div>
    );
};

export default UserProfile;