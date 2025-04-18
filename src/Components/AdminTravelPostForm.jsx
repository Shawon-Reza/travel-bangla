import React from 'react';

const AdminTravelPostForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const structuredData = {
            groupName: data.group_name,
            description: data.description,
            departure_location: data.departure_location,
            destination: data.destination,
            totalTripdays: parseInt(data.totalTripdays),
            travel_category: data.travel_category,
            destination_images: data.destination_images.split(',').map(img => img.trim()),
            startDate: data.start_date,
            endDate: data.end_date,
            budget: parseInt(data.budget),
            group_size: {
                min: parseInt(data.group_size_min),
                max: parseInt(data.group_size_max),
            },
            transportation: {
                mode: data.transportation_mode,
                details: data.transportation_details,
            },
            activities: data.activities.split(',').map(act => act.trim()),
            joining_requirements: data.joining_requirements,
            expirySeconds: parseInt(data.expiry_seconds) * 24 * 60 * 60, // days to seconds
        };

        fetch('http://localhost:5000/admin/travelposts', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(structuredData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => {
                console.log("Error on AddTravelpost:", error);
            })

        console.log("Submitted Travel Post:", structuredData);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-xl ">
            <h2 className="text-2xl font-bold mb-6">Create Travel Post</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div>
                    <label>Group Name</label>
                    <input type="text" name="group_name" className="input" required />

                    <label>Description</label>
                    <textarea name="description" className="input" rows="3" required />

                    <label>Departure Location</label>
                    <input type="text" name="departure_location" className="input" required />

                    <label>Destination</label>
                    <input type="text" name="destination" className="input" required />

                    <label>Total Trip Days</label>
                    <input type="number" name="totalTripdays" className="input" required />

                    <label>Destination Images (comma separated)</label>
                    <textarea name="destination_images" className="input" rows="3" required />
                </div>

                <div>
                    <label>Start Date</label>
                    <input type="date" name="start_date" className="input" required />

                    <label>End Date</label>
                    <input type="date" name="end_date" className="input" required />

                    <label>Budget</label>
                    <input type="number" name="budget" className="input" required />

                    <label>Transportation Mode</label>
                    <input type="text" name="transportation_mode" className="input" required />

                    <label>Transportation Details</label>
                    <input type="text" name="transportation_details" className="input" required />

                    <label>Activities (comma separated)</label>
                    <input type="text" name="activities" className="input" required />
                </div>

                <div>
                    <label>Group Size Min</label>
                    <input type="number" name="group_size_min" className="input" required />

                    <label>Group Size Max</label>
                    <input type="number" name="group_size_max" className="input" required />

                    <label>Host Name</label>
                    <input type="text" name="host_name" className="input" required />


                    <label>Joining Requirements</label>
                    <textarea name="joining_requirements" className="input" rows="2" required />

                    <label>Travel Category</label>
                    <select name="travel_category" className="input" required>
                        <option value="">-- Select --</option>
                        <option value="forest">Forest</option>
                        <option value="sea">Sea</option>
                        <option value="mountain">Mountain</option>
                        <option value="desert">Desert</option>
                        <option value="city">City</option>
                    </select>

                    <label>Post Expiry Time (in Days)</label>
                    <input type="number" name="expiry_seconds" className="input" required />
                </div>

                <div className="col-span-full">
                    <button type="submit" className="btn btn-primary w-full">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AdminTravelPostForm;
