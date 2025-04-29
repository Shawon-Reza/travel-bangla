import { useQuery } from '@tanstack/react-query';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import { MdPeopleAlt, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const UserProfile = () => {

    const { loginUser } = useContext(AuthContex);

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['userDetails', loginUser?.email],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/userdetails', {
                params: { email: loginUser.email },
                withCredentials: true
            });
            return res.data;
        },
        enabled: !!loginUser?.email, // <-- Only run query when email exists
    });

    if (isPending) return <p>Loading user data...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Navbar />
            <section>
                <div className='shadow-2xl'>
                    <div className='w-screen h-[200px] lg:h-[250px] relative'>
                        <img src={data?.coverUrl || 'https://i.ibb.co.com/1YkRB4rb/Why-I-am-Seeing-Blank-Facebook-Profile-and-How-to-Fix-it.jpg'}
                            alt="User"
                            className='h-full w-full object-cover'
                        />
                        <button className='absolute right-5 bottom-2 font-bold btn btn-outline text'>Edit Cover Photo</button>

                        <div className='absolute left-10 -bottom-5'>
                            <img src={data?.photoURL} alt=""
                                className='rounded-full h-32 w-32 lg:w-40 lg:h-40'
                            />
                        </div>
                    </div>

                    <div className='m-5 flex justify-between text-[#19b2b2] sm:px-5 items-center'>
                        <div className='text-center'>
                            <p className='text-2xl font-bold '>{data?.displayName}</p>
                            <p className='mb-5'>{data?.email}</p>
                        </div>
                        <button className='btn btn-outline'>Edit Profile</button>
                    </div>
                </div>

                {/* Second Half...................... */}
                <div className='grid grid-cols-12 gap-3 px-5 mb-10'>
                    <div className='grid lg:col-span-3 col-span-3 gap-3'>
                        <div className='p-3 shadow-2xl col-span-3 rounded-lg'>
                            <span className='font-semibold block py-3 text-lg sha'>About</span>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <MdPeopleAlt className="text-lg" />
                                    {data?.gender || 'N/A'}
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdLocationOn className="text-lg" />
                                    {data?.location || 'N/A'}
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-lg" />
                                    {data?.phone || 'N/A'}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='lg:col-span-6 col-span-9 shadow-2xl rounded-lg'>
                        {/* 👇 Modified NavLinks for active styling */}
                        <div className='text-center space-x-2 py-3 shadow-2xl'>
                            <NavLink
                                to=""
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? 'btn btn-active text-white bg-[#19b2b2]'
                                        : 'btn'
                                }
                            >
                                Posts
                            </NavLink>
                            <NavLink
                                to="post2"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'btn btn-active text-white bg-[#19b2b2]'
                                        : 'btn'
                                }
                            >
                                Reviews
                            </NavLink>
                            <NavLink
                                to="post3"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'btn btn-active text-white bg-[#19b2b2]'
                                        : 'btn'
                                }
                            >
                                Post3
                            </NavLink>
                        </div>

                        <div className='px-3'>
                            <Outlet></Outlet>
                        </div>
                    </div>

                    <div className='hidden lg:col-span-3 lg:flex shadow-2xl rounded-lg'>
                        <p>Update soon!</p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;
