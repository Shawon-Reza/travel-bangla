import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { MdFavorite } from "react-icons/md";
import { motion } from 'motion/react';

const AdminTravelPostDetails = () => {
    const data = useLoaderData();
    console.log(data);

    const { loginUser } = useContext(AuthContex)
    console.log(loginUser);
    //////////////////////////////////Store the tour as Favorite/////////////////////
    const handleFavorite = () => {
        const favoriteInfo = {
            postId: data?._id,
            userId: loginUser?.uid,
            userEmail: loginUser?.email
        }
        axios.post('http://localhost:5000/admin/travelposts/favorite', favoriteInfo)
            .then(res => {
                console.log(res.data)
                toast.success('Successfully add in favorite list.')

            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    // alert(err.response.data.message); // Show "Already booked"
                    toast.warning(`${err.response.data.message}`)
                } else {
                    alert("Something went wrong. Please try again.");
                }
            });
    }
    //////////////////////////////////Store the tour as Booked/////////////////////

    const handleBooked = () => {
        console.log(data?._id);
        console.log(loginUser?.uid);
        const bookedInfo = {
            postId: data?._id,
            userId: loginUser?.uid,
            userEmail: loginUser?.email
        }

        axios.post('http://localhost:5000/admin/travelposts/Booked', bookedInfo)
            .then(res => {
                console.log(res.data)
                toast.success('Successfully Booked Tour.')

            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    // alert(err.response.data.message); // Show "Already booked"
                    toast.warning(`${err.response.data.message}`)
                } else {
                    alert("Something went wrong. Please try again.");
                }
            });
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar />
            <div className="max-w-4xl mx-auto p-5 mt-t">
                <div className="card shadow-lg  rounded-2xl  rounded-b-none overflow-hidden bg-white">
                    {/* Card Header: Destination */}
                    <div className="bg-blue-500 text-white text-center p-5 relative">
                        <h2 className="text-3xl font-bold">{data.destination}</h2>
                        <p className="text-xl">{data.groupName}</p>

                        <motion.span
                            className="absolute right-5 top-[40%] text-4xl cursor-pointer"
                            whileHover={{
                                scale: 1.23,
                                color: "#009999", // green
                                cursor: 'pointer'
                            }}
                            transition={{
                                scale: { duration: 0.3 },
                                color: { duration: 0.5 }
                            }}

                            onClick={handleFavorite}
                        >
                            <MdFavorite />
                        </motion.span>


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

                            <div className="mt-5 hidden lg:block">
                                <h3 className="text-xl font-semibold mb-2">Trip Details</h3>
                                <p><strong>Start Date:</strong> {data.startDate}</p>
                                <p><strong>End Date:</strong> {data.endDate}</p>
                                <p><strong>Total Days:</strong> {data.totalTripdays} days</p>
                                <p><strong>Budget:</strong> ${data.budget}</p>
                                <p><strong>Departure Location:</strong> {data.departure_location}</p>
                                <p><strong>Joining Requirements:</strong> {data.joining_requirements}</p>
                                <p><strong>Group Size:</strong> {data.group_size.min} - {data.group_size.max}</p>
                            </div>

                            <div className="mt-5 hidden lg:block">
                                <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                                <p><strong>Mode:</strong> {data.transportation.mode}</p>
                                <p><strong>Details:</strong> {data.transportation.details}</p>
                            </div>
                        </div>

                        <div className="mt-5 lg:hidden">
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
                        <div className="mt-5 lg:hidden">
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

                <div className="flex justify-center items-center w-full">
                    <button
                        className="btn btn-accent w-full rounded-t-none font-bold text-white text-xl"
                        onClick={handleBooked}
                    >Booked</button>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default AdminTravelPostDetails;
