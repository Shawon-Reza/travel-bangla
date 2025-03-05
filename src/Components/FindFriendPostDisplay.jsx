import React from 'react';
import { CiTimer } from 'react-icons/ci';
import { IoIosTimer } from 'react-icons/io';

const FindFriendPostDisplay = ({ travelpost }) => {
    console.log(travelpost);

    return (
        <div>
            <div className="card bg-base-100  shadow-sm relative">
                {/* Carousel for destination images */}
                <div className="carousel w-full shadow-xl">
                    {travelpost.destination_images?.length > 0 ? (
                        travelpost.destination_images.map((image, index) => (
                            <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                                <img src={image} alt={`Destination ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href={`#slide${index === 0 ? travelpost.destination_images.length - 1 : index - 1}`} className="btn btn-circle btn-xs">❮</a>
                                    <a href={`#slide${index === travelpost.destination_images.length - 1 ? 0 : index + 1}`} className="btn btn-circle btn-xs">❯</a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="carousel-item w-full">
                            <img src="https://via.placeholder.com/400" alt="No Image Available" className="w-full h-64 object-cover rounded-lg" />
                        </div>
                    )}
                </div>

                <div className="card-body">
                    <div className='flex place-items-center justify-between flex-grow-0'>
                        <h2 className='btn btn-sm bg-[#37b7b7] text-white'>Cost {travelpost.budget || "N/A"} tk</h2>
                        <h1 className='text-xl font-semibold  [text-shadow:2px_2px_5px_rgba(0,0,0,0.5)] font-Playfair '>{travelpost.startDate || "N/A"} </h1>
                    </div>
                    <h2 className='text-2xl font-Playfair font-semibold'>{travelpost.destination || "Unknown Destination"}</h2>



                    <div className="card-actions flex justify-between items-center w-full">
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
