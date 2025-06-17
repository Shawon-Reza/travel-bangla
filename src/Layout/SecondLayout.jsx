import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import './styles.css'; // Make sure you have basic Swiper styles defined here

import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const LatestPostsSlider = () => {
    const [latestTour, setLatestTour] = useState([]);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:5000/admin/travelposts/letest')
            .then(res => {
                setLatestTour(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error getting latest travel data", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center text-lg">Loading latest posts...</div>;

    return (
        <div>
            <div className="max-w-screen mx-auto py-10 px-4">
                <Swiper
                    ref={swiperRef}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    // pagination={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {latestTour.map((post, index) => (
                        <SwiperSlide
                            key={post._id}
                            onClick={() => navigate(`/travelpostdetails/${post._id}`)}
                            style={{
                                width: '500px',
                                cursor: 'pointer',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                                background: '#fff',
                            }}
                        >
                            <img
                                src={post.destination_images[0]}
                                alt={post.groupName}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{post.groupName}</h2>
                                <p className="text-gray-500 text-sm">Destination: {post.destination}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="text-center mt-6">
                <NavLink to="/booking">
                    <button className="btn px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Explore
                    </button>
                </NavLink>
            </div>

        </div>
    );
};

export default LatestPostsSlider;
