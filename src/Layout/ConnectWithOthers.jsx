import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import FindFriend from '../Pages/FindFriend';
import { NavLink } from 'react-router-dom';
import TravelPost from './../Components/TravelPost';
import FindFriendPostDisplay from '../Components/FindFriendPostDisplay';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const ConnectWithOthers = () => {
    const [travelPostDetails, setTravelPostDetails] = useState([])
    const searchInputRef = useRef(null);
    const [searchData, setSearchData] = useState(null)
    console.log(searchData);

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



    const handleSearchber = (e) => {
        e.preventDefault();
        const searchValue = searchInputRef.current.value
        console.log(searchValue);

    }

    return (
        <div>
            <Navbar></Navbar>

            <div className=''>

                <div className=' flex justify-center mt-3 gap-10 mx-auto max-w-screen'>
                    {/* Filter bar */}
                    <NavLink to={'/TravelPost'}>
                        <button className='ml-15 btn '>Add tour Travel post</button>
                    </NavLink>


                    <div className="flex items-center gap-2 relative">
                        <form className="flex" onSubmit={handleSearchber}>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FaSearch />
                                </span>
                                <input
                                    type="search"
                                    placeholder="Search by place name"
                                    ref={searchInputRef}
                                    onChange={(e) => {
                                        setSearchData(e.target.value)
                                    }}
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-l-xl focus:outline-none"
                                />
                            </div>
                            <input
                                type="submit"
                                value="Search"

                                className="px-4 py-2 bg-[#37b7b7] text-white rounded-r-xl hover:bg-[#2ca3a3] cursor-pointer"
                            />
                        </form>
                    </div>
                </div>


                {/* Display  */}
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