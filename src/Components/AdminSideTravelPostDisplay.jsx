import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';
import AdminTravelPostDisplay from "../Components/AdminTravelPostDisplay";

const AdminSideTravelPostDisplay = () => {
    const adminTravelPosts = useLoaderData();
    console.log(adminTravelPosts);

    return (
        <div>
            <div>  <Navbar /></div>


            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-5">
                {
                    adminTravelPosts.map((posts, idx) => <AdminTravelPostDisplay
                        key={idx}
                        posts={posts}>
                    </AdminTravelPostDisplay>)
                }
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default AdminSideTravelPostDisplay;
