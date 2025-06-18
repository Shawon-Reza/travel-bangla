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

  // Fetch total number of posts
  useEffect(() => {
    axios.get('http://localhost:5000/admin/travelpostsCount')
      .then(res => setTotalItem(res.data));
  }, []);

  const page = Math.ceil(totalItem / itemsPerPage);
  const pages = [...Array(page).keys()].map(n => n + 1);

  // Get current page data using React Query
  const { data, isPending, error } = useQuery({
    queryKey: ['travelposts', currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/admin/travelposts?page=${currentPage + 1}&limit=${itemsPerPage}`);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });

  const getPaginationRange = () => {
    let start = Math.max(currentPage - 2, 0);
    let end = Math.min(start + 4, pages.length - 1);
    if (pages.length > 5 && currentPage > pages.length - 3) {
      start = pages.length - 5;
      end = pages.length - 1;
    }
    return pages.slice(start, end + 1);
  };

  return (
    <div>
      <Navbar />

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-5">
        {isPending ? (
          Array.from({ length: itemsPerPage }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 h-72 rounded-xl shadow-sm" />
          ))
        ) : error ? (
          <div className="text-center col-span-full text-red-500">Error loading posts</div>
        ) : (
          data?.map(post => (
            <AdminTravelPostDisplay key={post._id} posts={post} />
          ))
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
            setCurrentPage(0);
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
