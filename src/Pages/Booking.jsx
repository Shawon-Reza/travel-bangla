import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AdminTravelPostDisplay from "../Components/AdminTravelPostDisplay";
import axios from "axios";

const Booking = () => {
    const [adminTravelPosts, setAdminTravelPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(6);

    // Fetch total count
    useEffect(() => {
        axios.get('http://localhost:5000/admin/travelpostscount')
            .then(res => {
                setCount(res.data);
            })
            .catch(err => console.error("Error fetching count:", err));
    }, []);

    // Fetch posts when page or limit changes
    useEffect(() => {
        axios
            .get(`http://localhost:5000/admin/travelposts?page=${currentPage}&limit=${itemPerPage}`)
            .then(res => {
                setAdminTravelPosts(res.data);
            })
            .catch(err => console.error("Error fetching travel posts:", err));
    }, [currentPage, itemPerPage]);

    const totalPages = count ? Math.ceil(Number(count) / parseInt(itemPerPage)) : 0;
    const pages = [...Array(totalPages).keys()];

    return (
        <div>
            <Navbar />

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-5">
                {
                    adminTravelPosts.length > 0 ? (
                        adminTravelPosts.map((posts) => (
                            <AdminTravelPostDisplay key={posts._id} posts={posts} />
                        ))
                    ) : (
                        <p>No travel posts available or failed to fetch.</p>
                    )
                }
            </div>

            <h1 className="text-center font-semibold">Current page: {currentPage + 1}</h1>

            {/* Page Buttons */}
            <div className="text-center my-6 flex flex-wrap gap-2 justify-center">
                <button
                    className="btn"
                    onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
                >
                    Prev
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        className={`btn ${currentPage === page ? 'bg-green-600 text-white' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page + 1}
                    </button>
                ))}

                <button
                    className="btn"
                    onClick={() => currentPage < pages.length - 1 && setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>

                <select
                    value={itemPerPage}
                    className="btn"
                    onChange={(e) => {
                        setItemPerPage(parseInt(e.target.value));
                        setCurrentPage(0); // reset to first page on limit change
                    }}
                >
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                </select>
            </div>

            <Footer />
        </div>
    );
};

export default Booking;
