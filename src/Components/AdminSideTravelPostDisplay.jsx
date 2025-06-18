import React, { useState } from 'react';
import AdminTravelPostDisplay from "../Components/AdminTravelPostDisplay";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import AdminSideTravelPostDetails from './AdminSideTravelPostDetails';

const AdminSideTravelPostDisplay = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerpage, setItemPerPage] = useState(4);

    const totalTours= useLoaderData()
    const totalPages = Math.ceil(totalTours / itemPerpage);
    const pages = [...Array(totalPages).keys()].map(n => n + 1);

    // Pagination range
    const getPaginationRange = () => {
        let start = Math.max(currentPage - 3, 0);
        let end = Math.min(start + 4, pages.length - 1);

        if (pages.length > 5 && currentPage > pages.length - 2) {
            start = pages.length - 5;
            end = pages.length - 1;
        }

        return pages.slice(start, end + 1);
    };

    // Get paginated post data
    const {
        isPending: isPostLoading,
        error: postError,
        data: posts
    } = useQuery({
        queryKey: ['adminPosts', currentPage, itemPerpage],
        queryFn: () =>
            axios.get(`http://localhost:5000/admin/travelposts?page=${currentPage}&limit=${itemPerpage}`)
                .then(res => res.data),
        keepPreviousData: true
    });

    if (isPostLoading) return <p className="text-center">Loading posts...</p>;
    if (postError) return <p className="text-center text-red-600">Error loading posts: {postError.message}</p>;

    return (
        <div>
            <p className='text-center text-xl font-semibold mb-2'>Total Tours: {totalTours}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto px-5">
                {posts?.map((post, idx) => (
                    <AdminSideTravelPostDetails key={idx} posts={post} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 my-4">
                <button
                    className='btn'
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Pre
                </button>

                {getPaginationRange().map((page) => (
                    <button
                        key={page}
                        className={`btn ${page === currentPage ? 'bg-green-600 text-white' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}

                <button
                    className='btn'
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>

                <select
                    className='btn'
                    value={itemPerpage}
                    onChange={e => {
                        setItemPerPage(parseInt(e.target.value, 10));
                        setCurrentPage(1);
                    }}
                >
                    <option value={6}>4</option>
                    <option value={8}>6</option>
                    <option value={10}>8</option>
                </select>
            </div>
        </div>
    );
};

export default AdminSideTravelPostDisplay;
