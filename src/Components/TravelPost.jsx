import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContex } from '../Provider/AuthProvider';

const TravelPost = () => {
    const [error, setError] = useState(null); // To handle errors
    const { loginUser } = useContext(AuthContex)
    console.log(loginUser.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const structuredData = {
            groupName: data.group_name, // Group name
            description: data.description, // Description of the trip
            departure_location: data.departure_location,
            destination: data.destination,
            totalTripdays: data.totalTripdays,
            travel_category: data.travel_category,
            destination_images: data.destination_images.split(','), // Split image URLs by comma
            startDate: data.start_date,
            endDate: data.end_date,
            budget: data.budget,
            group_size: {
                min: data.group_size_min,
                max: data.group_size_max,
            },
            transportation: {
                mode: data.transportation_mode,
                details: data.transportation_details,
            },
            activities: data.activities.split(','), // Split activities by comma
            host: {
                name: data.host_name,
                contact: {
                    email: data.host_contact,
                    phone: data.host_phone,
                    facebook: data.host_facebook || '',  // Facebook is optional
                    whatsapp: data.host_whatsapp || '',

                },
            },
            postOwner: loginUser?.email,
            joining_requirements: data.joining_requirements, // Joining requirements
            expirySeconds: data.expiry_seconds, // Expiry time in seconds
        };

        console.log("Submitted Data:", structuredData);


        fetch('http://localhost:5000/travelpostadd', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(structuredData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Response:", data);

                if (data.insertedId) {
                    toast.success('Successfully added travelDetails')

                    // e.target.reset();
                }

            })
            .catch((err) => {
                setError('Something went wrong, please try again!');
                console.error("Error:", err);
                toast.error('Error occur during travel details add')

            });
    };

    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <ToastContainer />

            <div className="max-w-l mx-auto p-6 bg-white shadow-2xl rounded-xl px-10">
                <h2 className="text-2xl font-bold mb-4">Create Travel Post</h2>
                {error && <div className="bg-red-500 text-white p-2 mb-4 rounded">{error}</div>} {/* Error message */}

                <form onSubmit={handleSubmit}>
                    <div className='md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-10'>
                        <div className=''>
                            <label className="block mb-2">Group Name:</label>
                            <input type="text" name="group_name" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Description:</label>
                            <textarea
                                name="description"
                                rows="3"
                                className="w-full p-2 border rounded mb-3"
                                required
                                placeholder='Write someting about your trip plan in details.'
                            ></textarea>


                            <label className="block mb-2">Departure Location:</label>
                            <input type="text" name="departure_location" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Destination:</label>
                            <input type="text" name="destination" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Total trip days:</label>
                            <input type="number" name="totalTripdays" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Destination Images (comma separated URLs):</label>
                            <textarea
                                name="destination_images"
                                rows={3}
                                className="w-full p-2 border rounded mb-3"
                                placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                                required
                            ></textarea>



                        </div>

                        <div>
                            <label className="block mb-2">Start Date:</label>
                            <input type="date" name="start_date" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">End Date:</label>
                            <input type="date" name="end_date" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Budget (around figure):</label>
                            <input type="number" name="budget" className="w-full p-2 border rounded" required />

                            <label className="block mb-2">Transportation Mode:</label>
                            <input type="text" name="transportation_mode" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Transportation Details:</label>
                            <input type="text" name="transportation_details" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Activities (comma separated):</label>
                            <input type="text" name="activities" className="w-full p-2 border rounded mb-3" placeholder="snorkeling, hiking, beach parties" required />

                            <label className="block mb-2">Host Name:</label>
                            <input type="text" name="host_name" className="w-full p-2 border rounded mb-3" required />


                        </div>


                        <div>

                            <label className="block mb-2">Host Contact (Email):</label>
                            <input type="email" name="host_contact" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Phone Number:</label>
                            <input type="tel" name="host_phone" className="w-full p-2 border rounded mb-3" required />

                            <label className="block mb-2">Facebook Link:</label>
                            <input type="url" name="host_facebook" className="w-full p-2 border rounded mb-3" />

                            <label className="block mb-2">WhatsApp Link:</label>
                            <input type="url" name="host_whatsapp" className="w-full p-2 border rounded mb-3" />


                            <label className="block mb-2">Joining Requirements:</label>
                            <textarea name="joining_requirements" className="w-full p-2 border rounded mb-3" required />



                            <label className="block mb-2">Travel Category:</label>
                            <select name="travel_category" className="w-full p-2 border rounded mb-3" required>
                                <option value="">-- Select Category --</option>
                                <option value="forest">Forest</option>
                                <option value="sea">Sea</option>
                                <option value="mountain">Mountain</option>
                                <option value="desert">Desert</option>
                                <option value="city">City</option>
                            </select>

                            <label className="block mb-2">Post Expiry Time (Days):</label>
                            <input type="number" name="expiry_seconds" className="w-full p-2 border rounded mb-3" required />
                        </div>
                    </div>

                    <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded">Submit</button>
                </form>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default TravelPost;
