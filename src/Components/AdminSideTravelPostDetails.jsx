import React, { useState } from 'react';
import { CiTimer } from 'react-icons/ci';
import { IoIosTimer } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const AdminSideTravelPostDetails = ({ posts }) => {
     const [currentSlide, setCurrentSlide] = useState(0);
    
        const handleSlide = (direction) => {
            if (!posts?.destination_images?.length) return;
    
            const totalSlides = posts.destination_images.length;
            const newIndex = (currentSlide + direction + totalSlides) % totalSlides;
            setCurrentSlide(newIndex);
        };
    
    return (
        <div>
                    <div className="card bg-base-100 shadow-sm relative">
                        {/* Carousel for destination images */}
                        <div className="carousel sm:w-full lg:w-full shadow-xl relative">
                            {posts?.destination_images?.length > 0 ? (
                                <div className="relative w-full">
                                    <img
                                        src={posts?.destination_images?.[currentSlide]}
                                        alt={`Destination ${currentSlide + 1}`}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <button onClick={() => handleSlide(-1)} className="text-xl cursor-pointer">❮</button>
                                        <button onClick={() => handleSlide(1)} className=" text-xl cursor-pointer">❯</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="carousel-item w-full">
                                    <img src="https://via.placeholder.com/400" alt="No Image Available" className="w-full h-64 object-cover rounded-lg" />
                                </div>
                            )}
                        </div>
        
                        <div className="card-body shadow-2xl rounded-lg">
                            <div className='flex place-items-center justify-between flex-grow-0'>
                                <div className='btn btn-sm bg-[#37b7b7] text-white [text-shadow:2px_2px_5px_rgba(0,0,0,0.5)] '>
                                    Cost {posts?.budget || "N/A"} tk
                                </div>
                                <h1 className='text-xl font-semibold [text-shadow:2px_2px_5px_rgba(0,0,0,0.5)] font-Playfair'>
                                    {posts?.startDate || "N/A"}
                                </h1>
                            </div>
        
                            <h2 className='text-2xl font-Playfair font-semibold'>
                                {posts?.destination || "Unknown Destination"}
                            </h2>
        
                            <div className="card-actions flex justify-between items-center w-[100%]">
                                <div className="activities-container w-[70%]">
                                    <div className="activities">
                                        {posts?.activities?.length > 0 ? (
                                            posts.activities.map((activity, index) => (
                                                <p key={index} className="activity">{activity}</p>
                                            ))
                                        ) : (
                                            <p>N/A</p>
                                        )}
                                    </div>
                                </div>
        
                                <NavLink to={`/travelpostdetails/${posts._id}`}>
                                    <button className="btn btn-primary">Details</button>
                                </NavLink>
        
                            </div>
                        </div>
        
                        {/* Absolute-positioned trip duration badge */}
                        <div className='flex bg-amber-300 w-max p-2 rounded-lg absolute left-[2%] top-[2%]'>
                            <IoIosTimer className='text-lg font-bold mt-1' />
                            <p className='font-Dancing font-extrabold'>{posts?.totalTripdays || "N/A"} days</p>
                        </div>

                         <div className='flex text-2xl cursor-pointer hover:text-3xl w-max p-2 rounded-lg absolute right-[2%] top-[2%]'>
                           
                            <MdDelete />
                        </div>
                    </div>
        
        
                    {/* <h1>Addim post display ...........................</h1> */}
                </div>
    );
};

export default AdminSideTravelPostDetails;