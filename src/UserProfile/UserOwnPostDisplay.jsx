import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const UserOwnPostDisplay = () => {
    const { loginUser } = useContext(AuthContex);

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/userOwnPost', {
                params: {
                    email: loginUser.email
                },
                withCredentials: true
            });
            return res.data;
        },
    });


    if (isPending) {
        return ("Data is loading");
    }

    // Make sure data is an array before using map
    if (isError || !Array.isArray(data)) {
        return (
            <div>
                <p>Error loading posts or invalid data format</p>
            </div>
        );
    }

    return (
        <div>
            {data?.map((details) => (
                <div className="overflow-x-auto" key={details._id}>
                    <table className="table text-[19b2b2]">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
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
                                    <button className="btn btn-ghost">Details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default UserOwnPostDisplay;
