import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewsDisplay from './ReviewsDisplay';

const Review = () => {
    const data = useLoaderData();
    console.log(data);


    return (
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map((data, idx) =>
                    <ReviewsDisplay
                    key={idx}
                    data={data}
                    >

                    </ReviewsDisplay>)
            }
        </div>
    );
};

export default Review;