import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AdminTravelPostDisplay from "../Components/AdminTravelPostDisplay";

const Booking = () => {

    const adminTravelPosts = useLoaderData();
    // console.log(adminTravelPosts);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-5">
                {
                    adminTravelPosts?.length > 0 ? (
                        adminTravelPosts.map((posts) => (
                            <AdminTravelPostDisplay key={posts._id} posts={posts} />
                        ))
                    ) : (
                        <p>No travel posts available or Failed to fetch</p>
                    )
                }
            </div>


            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Booking;