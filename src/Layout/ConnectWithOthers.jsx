import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FindFriendLeftside from '../Components/FindFriendLeftside';
// import FindFriend from '../Pages/FindFriend';
import { NavLink } from 'react-router-dom';
import TravelPost from './../Components/TravelPost';
import FindFriendPostDisplay from '../Components/FindFriendPostDisplay';
import { useEffect, useState } from 'react';

const ConnectWithOthers = () => {
    const [travelPostDetails, setTravelPostDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/travelPosts')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data);
                setTravelPostDetails(data);
            })
            .catch(error => {
                console.error("Error fetching travel posts:", error);
            });
    }, []);
    console.log("Travel details: ", typeof travelPostDetails);
    console.log("Travel details: ", travelPostDetails);





    return (
        <div>
            <Navbar></Navbar>

            <div className=''>
                <NavLink to={'/TravelPost'}>
                    <button className='ml-15 btn mt-3 -mb-5'>Add tour Travel post</button>
                </NavLink>

                <div className=''>

                    <div

                        className='pl-5 pt-10 sm:px-15 md:grid gap-5 lg:grid-cols-2 xl:grid-cols-3 md:w-full md:gap- space-x-5 justify-items-center mx-auto space-y-5 md:space-y-0 '>
                        {
                            travelPostDetails.map((post) => <FindFriendPostDisplay
                                travelpost={post}

                            ></FindFriendPostDisplay>)
                        }
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