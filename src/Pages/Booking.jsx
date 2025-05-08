import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AdminTravelPostDisplay from "../Components/AdminTravelPostDisplay";
import axios from "axios";
import Lottie from "lottie-react";
import DottedLoading from '../assets/lottie/DottedLoading.json'

const Booking = () => {
    const [adminTravelPosts, setAdminTravelPosts] = useState([]);

    // Pagination 
    const [iteamPerPage, setItemPerPage] = useState(6);
    const [totalItem, setTotalItem] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/travelpostsCount')
            .then(res => setTotalItem(res.data));
    }, []);

    const page = Math.ceil(totalItem / iteamPerPage);
    const pages = [...Array(page).keys()].map(n => n + 1); // Generate page numbers [1, 2, 3, ...]

    // Calculate the range of pages to show (5 pages at a time)
    const getPaginationRange = () => {
        let start = Math.max(currentPage - 2, 0); // Start from 2 pages before the current page
        let end = Math.min(start + 4, pages.length - 1); // End at 5 pages or the last page

        if (pages.length > 5) {
            // Adjust if there are more than 5 pages to show
            if (currentPage > pages.length - 3) {
                start = pages.length - 5;
                end = pages.length - 1;
            }
        }

        return pages.slice(start, end + 1); // Get the page range
    };

    useEffect(() => {
        axios
            .get(`http://localhost:5000/admin/travelposts?page=${currentPage + 1}&limit=${iteamPerPage}`)
            .then(res => {
                setAdminTravelPosts(res.data);
            })
            .catch(err => console.error("Error fetching travel posts:", err));
    }, [currentPage, iteamPerPage]);

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
                        <div className="flex justify-center items-center text-2xl h-screen w-full">
                        <Lottie animationData={DottedLoading} loop={true} />
                      </div>
                      
                    )
                }
            </div>

            <div className="text-center">
                current page:{currentPage + 1}
            </div>
            <div className="text-center">
                <button className="btn"
                    onClick={() => {
                        if (currentPage > 0) {
                            setCurrentPage(currentPage - 1);
                            window.scrollTo({ top: 90, behavior: 'smooth' });
                        }
                    }}
                >Prev</button>

                {
                    getPaginationRange().map((pageNumber, idx) => (
                        <button
                            key={idx}
                            className={`btn ${pageNumber === currentPage + 1 ? 'bg-green-600' : ''}`}
                            onClick={() => {
                                setCurrentPage(pageNumber - 1); // 0-indexed, so subtract 1
                                window.scrollTo({ top: 90, behavior: 'smooth' });
                            }}
                        >
                            {pageNumber}
                        </button>
                    ))
                }

                <button className="btn"
                    onClick={() => {
                        if (currentPage < pages.length - 1) {
                            setCurrentPage(currentPage + 1);
                            window.scrollTo({ top: 90, behavior: 'smooth' });
                        }
                    }}
                >Next</button>

                <select
                    name=""
                    id=""
                    className="btn"
                    onChange={(e) => {
                        setItemPerPage(parseInt(e.target.value));
                        setCurrentPage(0); // Reset to page 1 when items per page changes
                    }}
                    value={iteamPerPage}
                >
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                </select>
            </div>

            <Footer />
        </div>
    );
};

export default Booking;
