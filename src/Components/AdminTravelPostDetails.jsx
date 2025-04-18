import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';

const AdminTravelPostDetails = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto p-5 mt-10">
                <div className="card shadow-lg rounded-xl overflow-hidden bg-white">
                    {/* Card Header: Destination */}
                    <div className="bg-blue-500 text-white text-center p-5">
                        <h2 className="text-3xl font-bold">{data.destination}</h2>
                        <p className="text-xl">{data.groupName}</p>
                    </div>

                    {/* Card Body: Trip Details */}
                    <div className="p-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Description</h3>
                                <p>{data.description}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Activities</h3>
                                <ul>
                                    {data.activities.map((activity, index) => (
                                        <li key={index} className="mb-1">- {activity}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-5">
                            <h3 className="text-xl font-semibold mb-2">Trip Details</h3>
                            <p><strong>Start Date:</strong> {data.startDate}</p>
                            <p><strong>End Date:</strong> {data.endDate}</p>
                            <p><strong>Total Days:</strong> {data.totalTripdays} days</p>
                            <p><strong>Budget:</strong> ${data.budget}</p>
                            <p><strong>Departure Location:</strong> {data.departure_location}</p>
                            <p><strong>Joining Requirements:</strong> {data.joining_requirements}</p>
                            <p><strong>Group Size:</strong> {data.group_size.min} - {data.group_size.max}</p>
                        </div>

                        {/* Transportation */}
                        <div className="mt-5">
                            <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                            <p><strong>Mode:</strong> {data.transportation.mode}</p>
                            <p><strong>Details:</strong> {data.transportation.details}</p>
                        </div>

                        {/* Destination Images */}
                        <div className="mt-5">
                            <h3 className="text-xl font-semibold mb-2">Destination Images</h3>
                            <div className="flex space-x-4">
                                {data.destination_images.map((image, index) => (
                                    <img key={index} src={image} alt={`destination-image-${index}`} className="w-1/2 rounded-lg" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminTravelPostDetails;
