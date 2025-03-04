import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import 'animate.css';

const LoginRegistration = () => {
    const emailRefSignIn = useRef();
    const passwordRefSignIn = useRef();
    const emailRefSignUp = useRef();
    const passwordRefSignUp = useRef();
    const fullNameRefSignUp = useRef();

    // Handle Sign In form submission
    const handleSignInSubmit = (e) => {
        e.preventDefault();

        const signinemail = emailRefSignIn.current.value;
        const signinpassword = passwordRefSignIn.current.value;

        // Log inputs
        const signinInfo = {
            signinemail,
            signinpassword
        }
        console.log(signinInfo);

        // Reset the form fields
        e.target.reset();
    };

    // Handle Sign Up form submission
    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        const signUpfullName = fullNameRefSignUp.current.value;
        const signUpemail = emailRefSignUp.current.value;
        const signUppassword = passwordRefSignUp.current.value;

        // Log inputs
        const signupInfo = {
            signUpfullName,
            signUpemail,
            signUppassword
        }
        console.log("Sign Up", signupInfo);

        // Reset the form fields
        e.target.reset();
    };

    const [isSignIn, setIsSignIn] = React.useState(true);

    return (
        <div>
            <Navbar></Navbar>

            <div className="py-10 min-h-screen flex items-center justify-center bg-gray-100 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')] bg-cover bg-no-repeat">
                <div className="relative w-4/5 max-w-5xl h-[600px] bg-white shadow-2xl rounded-2xl overflow-hidden flex">
                    {/* Sliding Panel */}
                    <div
                        className={`hidden md:flex bg-[#b6c8c8] bg-[url('https://i.ibb.co.com/HfMbGmz9/about-banner.png')] bg-contain bg-no-repeat bg-center absolute top-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col items-center justify-center transition-transform duration-700 ${isSignIn ? "translate-x-[100%]" : "translate-x-0"}`}
                    >
                        <h2 className="text-3xl font-bold mb-4 text-white">
                            {isSignIn ? "Hello, Friend!" : "Welcome Back!"}
                        </h2>
                        <div className="relative w-full bg-[var(--your-bg-color)] py-3 flex justify-center overflow-hidden">
                            <motion.p
                                className="text-4xl -mt-5 text-yellow-100 font-Dancing  font-semibold whitespace-nowrap"
                                animate={{ x: ["100%", "-100%"] }} // Moves text from right to left
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            >
                                {isSignIn
                                    ? "Register with your personal details to start the journey."
                                    : "To keep connected with us please login with your personal info."}
                            </motion.p>
                        </div>
                        <button
                            onClick={() => setIsSignIn(!isSignIn)}
                            className="animate__animated animate__flipInX px-6 py-2 rounded-lg bg-[#03adad] font-bold hover:shadow-2xl hover:bg-[#468080]  transition"
                        >
                            {isSignIn ? "SIGN UP" : "SIGN IN"}
                        </button>


                    </div>

                    <div className="flex">
                        {/* Sign In Form */}
                        <div
                            className={`absolute top-0 left-[25%] md:left-0  w-1/2 h-full flex flex-col items-center justify-center md:p-8 transition-transform duration-700 ${isSignIn ? "translate-x-0" : "md:-translate-x-[100%] -translate-x-[200%]"}`}
                        >
                            <h2 className="animate__animated animate__flipInX text-3xl font-bold mb-4">Sign In</h2>
                            <div className="flex space-x-4 mb-4">
                                <button className="p-2 border rounded-full"><FaGoogle /></button>
                                <button className="p-2 border rounded-full"><FaFacebookF /></button>
                                <button className="p-2 border rounded-full"><FaGithub /></button>
                                <button className="p-2 border rounded-full"><FaLinkedinIn /></button>
                            </div>

                            <p className="text-gray-500 text-sm mb-4">or use your email password</p>
                            <form onSubmit={handleSignInSubmit}>
                                <input
                                    ref={emailRefSignIn}
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-5 py-2 border rounded-lg mb-3"
                                />
                                <input
                                    ref={passwordRefSignIn}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 border rounded-lg mb-3"
                                />

                                <p className="md:hidden text-xs text-gray-500 md:mb-4 mb-1 ">
                                    Don't have account?{" "}
                                    <span
                                        className="underline underline-offset-4 text-red-500 cursor-pointer"
                                        onClick={() => setIsSignIn((prev) => !prev)}
                                    >
                                        Create Account
                                    </span>
                                </p>
                                <p className="text-xs text-gray-500 mb-4 cursor-pointer">Forgot Your Password?</p>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                                >
                                    SIGN IN
                                </button>
                            </form>
                        </div>

                        {/* Sign Up Form */}
                        <div
                            className={`absolute top-0 md:right-0 right-[25%] w-1/2 h-full flex flex-col items-center justify-center p-8 transition-transform duration-700 ${isSignIn ? "md:translate-x-full translate-x-[200%]" : "translate-x-0"}`}
                        >
                            <h2 className="animate__animated animate__flipInX  text-3xl font-bold mb-4">Register</h2>
                            <div className="flex space-x-4 mb-4">
                                <button className="p-2 border rounded-full"><FaGoogle /></button>
                                <button className="p-2 border rounded-full"><FaFacebookF /></button>
                                <button className="p-2 border rounded-full"><FaGithub /></button>
                                <button className="p-2 border rounded-full"><FaLinkedinIn /></button>
                            </div>

                            <form onSubmit={handleSignUpSubmit}>
                                <input
                                    ref={fullNameRefSignUp}
                                    type="text"
                                    placeholder="Full Name"
                                    className="md:w-full md:px-4 px-5 py-2 border rounded-lg mb-3"
                                />
                                <input
                                    ref={emailRefSignUp}
                                    type="email"
                                    placeholder="Email"
                                    className="md:w-full md:px-4 px-5 py-2 border rounded-lg mb-3"
                                />
                                <input
                                    ref={passwordRefSignUp}
                                    type="password"
                                    placeholder="Password"
                                    className="md:w-full md:px-4 px-5 py-2 border rounded-lg mb-3"
                                />

                                <p
                                    className="md:hidden underline -mt-2 text-xs underline-offset-4 text-red-500 cursor-pointer pb-2"
                                    onClick={() => setIsSignIn((prev) => !prev)}
                                >
                                    Sign In
                                </p>
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                                >
                                    SIGN UP
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LoginRegistration;
