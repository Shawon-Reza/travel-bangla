import { div } from 'framer-motion/client';
import React from 'react';

const ReviewsDisplay = ({ data }) => {
    const { firstName, lastName, email, phone, subject, message } = data;
    console.log(data);
    return (
        <div>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 font-sans h-72">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{firstName} {lastName}</h2>
                <p className="text-sm text-gray-500 mb-4">{email}</p>

                <div className="mb-3">
                    <p><span className="font-semibold text-gray-700">Phone:</span> {phone}</p>
                    <p><span className="font-semibold text-gray-700">Subject:</span> {subject}</p>
                </div>

                <div className="bg-[#80d2d2] p-4 rounded-lg h-24 overflow-auto">
                    <p className="text-gray-700 font-semibold">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDisplay;