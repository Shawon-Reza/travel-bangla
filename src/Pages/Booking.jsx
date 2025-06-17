import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AdminTravelPostDisplay from "../Components/AdminTravelPostDisplay";
import axios from "axios";
import Lottie from "lottie-react";
import DottedLoading from '../assets/lottie/DottedLoading.json';
import { useQuery } from '@tanstack/react-query';

const Booking = () => {
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [totalItem, setTotalItem] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [preloadedData, setPreloadedData] = useState({}); // Store preloaded data for pages

    // Fetch total count of travel posts
    useEffect(() => {
        axios.get('http://localhost:5000/admin/travelpostsCount')
            .then(res => setTotalItem(res.data));
    }, []);

    // Fetch paginated data and preload it for multiple pages
    const preloadData = async (startPage, endPage) => {
        const newPreloadedData = { ...preloadedData };

        // Loop through the page range and preload data
        for (let page = startPage; page <= endPage; page++) {
            if (!newPreloadedData[page]) {
                const res = await axios.get(`http://localhost:5000/admin/travelposts?page=${page}&limit=${itemsPerPage}`);
                newPreloadedData[page] = res.data; // Store data for each page
            }
        }

        setPreloadedData(newPreloadedData); // Update state with newly preloaded data
    };

    // Preload data for pages when component loads
    useEffect(() => {
        // Preload data for first 3 pages when component mounts
        preloadData(1, 3);
    }, [itemsPerPage]);

    const page = Math.ceil(totalItem / itemsPerPage);
    const pages = [...Array(page).keys()].map(n => n + 1); // [1, 2, 3, ...]

    // Determine pagination range to show 5 at a time
    const getPaginationRange = () => {
        let start = Math.max(currentPage - 2, 0);
        let end = Math.min(start + 4, pages.length - 1);

        if (pages.length > 5 && currentPage > pages.length - 3) {
            start = pages.length - 5;
            end = pages.length - 1;
        }

        return pages.slice(start, end + 1);
    };

    // Fetch current page data using React Query, but try to use preloaded data if available
    const { data, isPending, error } = useQuery({
        queryKey: ['travelposts', currentPage, itemsPerPage],
        queryFn: async () => {
            if (preloadedData[currentPage + 1]) {
                return preloadedData[currentPage + 1]; // Use preloaded data if available
            }
            const res = await fetch(`http://localhost:5000/admin/travelposts?page=${currentPage + 1}&limit=${itemsPerPage}`);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        },
        keepPreviousData: true, // Prevents flashing empty UI on page switch
        staleTime: 1000 * 60 * 5, 
    });

    // Preload next 2 pages when current page changes
    useEffect(() => {
        const nextPageStart = currentPage + 1;
        const nextPageEnd = currentPage + 2; // Preload the next 2 pages
        preloadData(nextPageStart, nextPageEnd); // Fetch and cache next 2 pages
    }, [currentPage]);

    return (
        <div>
            <Navbar />

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-5">
                {isPending ? (
                    Array.from({ length: itemsPerPage }).map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-200 h-72 rounded-xl shadow-sm" />
                    ))
                ) : preloadedData[currentPage + 1] ? (
                    preloadedData[currentPage + 1].map((posts) => (
                        <AdminTravelPostDisplay key={posts._id} posts={posts} />
                    ))
                ) : (
                    <div className="flex justify-center items-center text-2xl h-screen w-full">
                        <Lottie animationData={DottedLoading} loop={true} />
                    </div>
                )}
            </div>

            <div className="text-center py-4 font-medium">Current page: {currentPage + 1}</div>

            <div className="text-center flex justify-center gap-2 flex-wrap items-center py-5">
                <button
                    className="btn"
                    onClick={() => {
                        if (currentPage > 0) {
                            setCurrentPage(currentPage - 1);
                            window.scrollTo({ top: 90, behavior: 'smooth' });
                        }
                    }}
                >
                    Prev
                </button>

                {getPaginationRange().map((pageNumber, idx) => (
                    <button
                        key={idx}
                        className={`btn ${pageNumber === currentPage + 1 ? 'bg-green-600 text-white' : ''}`}
                        onClick={() => {
                            setCurrentPage(pageNumber - 1);
                            window.scrollTo({ top: 90, behavior: 'smooth' });
                        }}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    className="btn"
                    onClick={() => {
                        if (currentPage < pages.length - 1) {
                            setCurrentPage(currentPage + 1);
                            window.scrollTo({ top: 90, behavior: 'smooth' });
                        }
                    }}
                >
                    Next
                </button>

                <select
                    className="btn"
                    onChange={(e) => {
                        setItemsPerPage(parseInt(e.target.value));
                        setCurrentPage(0); // Reset to the first page when itemsPerPage changes
                    }}
                    value={itemsPerPage}
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
