import React from 'react';
import { CiTimer } from 'react-icons/ci';
import { useState } from 'react';
import { IoIosTimer } from 'react-icons/io';

const FindFriendPostDisplay = ({ travelpost }) => {
    console.log(travelpost);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlide = (direction) => {
        if (!travelpost.destination_images || travelpost.destination_images.length === 0) return;

        const totalSlides = travelpost.destination_images.length;
        const newIndex = (currentSlide + direction + totalSlides) % totalSlides;
        setCurrentSlide(newIndex);
    };

    return (
        <div>
            <div className="card bg-base-100  shadow-sm relative">
                {/* Carousel for destination images */}
                <div className="carousel sm:w-full lg:w-full shadow-xl relative">
                    {travelpost.destination_images?.length > 0 ? (
                        <div className="relative w-full">
                            <img
                                src={travelpost.destination_images[currentSlide]}
                                alt={`Destination ${currentSlide + 1}`}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <button onClick={() => handleSlide(-1)} className="btn btn-circle btn-xs">❮</button>
                                <button onClick={() => handleSlide(1)} className="btn btn-circle btn-xs">❯</button>
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
                        <div className='btn btn-sm bg-[#37b7b7] text-white [text-shadow:2px_2px_5px_rgba(0,0,0,0.5)] '>Cost {travelpost.budget || "N/A"} tk</div>
                        
                        <h1 className='text-xl font-semibold  [text-shadow:2px_2px_5px_rgba(0,0,0,0.5)] font-Playfair '>{travelpost.startDate || "N/A"} </h1>
                    </div>
                    <h2 className='text-2xl font-Playfair font-semibold'>{travelpost.destination || "Unknown Destination"}</h2>



                    <div className="card-actions flex justify-between items-center w-[100%]">
                        <div className="activities-container w-[70%]">
                            {/* Loop over activities and display each one */}
                            <div className="activities">
                                {travelpost.activities && travelpost.activities.length > 0 ? (
                                    travelpost.activities.map((activity, index) => (
                                        <p key={index} className="activity">{activity}</p>
                                    ))
                                ) : (
                                    <p>N/A</p>
                                )}
                            </div>
                        </div>

                        <button className="btn btn-primary">Details</button>
                    </div>

                </div>


                {/* Div for absoulute */}
                <div className='flex bg-amber-300 w-max p-4 sm:p-5 rounded-lg absolute left-[2%] top-[2%]'>
                    <IoIosTimer className='text-lg font-bold mt-1' />
                    <p className='font-Dancing font-extrabold'>{travelpost.totalTripdays || "N/A"} days</p>
                </div>
            </div>
        </div>
    );
};

export default FindFriendPostDisplay;
