import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Provider/AuthProvider';

const BookedTour = () => {

    const { loginUser } = useContext(AuthContex)
    console.log(loginUser);

    const [data, setData] = useState([])


    useEffect(() => {
        if (loginUser?.email) {
            axios.get(`http://localhost:5000/bookedlist?email=${loginUser?.email}`)
                .then(res => setData(res.data))
                .catch(err => {
                    console.log(err);
                });
        }
    }, [loginUser]);


    console.log(data);
    return (
        <div>
            <h1>Booked Tours</h1>
            {data?.map((details) => (
                <div className="overflow-x-auto" key={details._id}>
                    <table className="table text-[19b2b2]">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={details?.destination_images[0] || 'https://i.ibb.co/Z6wdp5G2/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-87543-11.jpg'}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{details?.groupName || 'N/A'}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="">{details?.startDate}</span>
                                </td>
                                <td>{details?.endDate || 'N/A'}</td>

                                <th>
                                    <button className="btn btn-ghost hover:bg-[#19b2b2]">Details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default BookedTour;