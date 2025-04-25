import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const UserOwnPostDisplay = () => {
    const { loginUser } = useContext(AuthContex)
    console.log(loginUser.email);

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/userOwnPost', {
                params: {
                    email: loginUser.email
                }
            })
            return res.data
        },
    })

    console.log(data);

    if (isPending) {
        return ("Data is loading")
    }

    return (
        <div>
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Start</th>
                        <th>End</th>
                        <th></th>
                    </tr>
                </thead>
            </table> */}
            {
                data?.map((details) =>
                    < div className="overflow-x-auto">

                        <table className="table text-[19b2b2]">
                            {/* head */}
                            {/* <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th></th>
                                </tr>
                            </thead> */}
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
                                                        src={details?.destination_images[0] || 'https://i.ibb.co.com/Z6wdp5G2/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-87543-11.jpg'
                                                        }
                                                        alt="Avatar Tailwind CSS Component" />
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
                                        <button className="btn btn-ghost ">Details</button>
                                    </th>
                                </tr>

                            </tbody>
                            {/* foot */}
                            {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}
                        </table>
                    </div>)
            }
        </div>
    );
};

export default UserOwnPostDisplay;