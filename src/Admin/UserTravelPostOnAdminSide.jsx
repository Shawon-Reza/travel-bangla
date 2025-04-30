import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserTravelPostDisplayOnAdminSide from './UserTravelPostDisplayOnAdminSide';

const UserTravelPostOnAdminSide = () => {

    const [data, setData] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:5000/travelPosts')
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
    }, [])


console.log(data);

    return (

        <div>
            <h1>tralllllllllllllllllllllllllllllllllllllll</h1>


            {
                data?.map((data, idx) => < UserTravelPostDisplayOnAdminSide
                    key={idx}
                    data={data}
                ></UserTravelPostDisplayOnAdminSide>)
            }
        </div>
    );
};

export default UserTravelPostOnAdminSide;