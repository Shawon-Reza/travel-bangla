import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AdminLeftSide from '../Components/AdminLeftSide';
import TravelPost from '../Components/TravelPost';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
const navigate= useNavigate();

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

            <div>
                <div className="hero bg-base-200 min-h-screen">
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
                                    <input type="text" className="input" placeholder="User name" name='userName' />

                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" placeholder="Password"
                                        name='userPassword' />

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className='mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Admin;