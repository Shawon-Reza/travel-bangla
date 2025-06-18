import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdminLeftSide from '../Components/AdminLeftSide';
import TravelPost from '../Components/TravelPost';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import carRunning from '../assets/lottie/CarRuning.json'
import { AuthContex } from '../Provider/AuthProvider';

const Admin = () => {
    const {setUserRole} =useContext(AuthContex)
    const navigate = useNavigate();

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const userPassword = e.target.userPassword.value;

        try {
            const res = await fetch(
                `http://localhost:5000/travelBangla/admin?userName=${userName}&userPassword=${userPassword}`
            );
            const data = await res.json();
            console.log(data);

            if (data.valid) {
                alert("✅ Login successful!");
                setUserRole('admin')
                // redirect or store user info here if needed
                navigate('/admincontrol')

            } else {
                alert(`❌ ${data.message || "Invalid credentials"}`);
            }
        } catch (error) {
            console.error("Error during admin login:", error);
            alert("Something went wrong.");
        }
    };





    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="relative overflow-hidden">
                <Lottie
                    animationData={carRunning}
                    loop={true}
                    className="absolute top-0 left-0 xl:h-[1000px]  min-w-screen object-cover -z-10"
                />


                <div className="hero  min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>

                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body" onSubmit={handleAdminLogin}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">User name</label>
                                    <input type="text" 
                                    id='username'
                                     className="input" placeholder="User name" name='userName' />

                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" 
                                    id='password'
                                    placeholder="Password"
                                        name='userPassword' />

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4" id='button'>Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>z
            </div>



            <div className='xl:mt-5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Admin;