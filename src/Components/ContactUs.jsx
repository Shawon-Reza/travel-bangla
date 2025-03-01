import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";
import { FaFacebook, FaGithub, FaInstagramSquare, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div>
            <Navbar />

            <section className="mt-10 px-5">
                <h2 className="text-3xl font-extrabold text-center">Contact Us</h2>
                <p className="text-center opacity-75">Any questions or remarks? Just write us a message!</p>

                {/* Form & Contact Details */}
                <div className="container mx-auto px-6 pt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Contact Information */}
                    <div className="flex flex-col justify-around gap-y-6">
                        <div>
                            <h3 className="text-xl font-semibold">Contact Information</h3>
                            <p className="text-gray-600">Say something to start a live chat</p>
                        </div>

                        <div className="flex items-center gap-5">
                            <FaPhoneAlt className="text-2xl text-blue-600" />
                            <p className="text-xl">+8801822531281</p>
                        </div>

                        <div className="flex items-center gap-5">
                            <MdEmail className="text-2xl text-red-600" />
                            <p className="text-xl">shawon.reza.sr81@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-5">
                            <FaLocationDot className="text-2xl text-green-600" />
                            <p className="text-xl">
                                132 Dartmouth Street, Boston, Massachusetts 02156, United States
                            </p>
                        </div>
                        <div className=" flex gap-8 text-3xl">
                            <FaGithub
                                onClick={() => window.open("https://github.com/Shawon-Reza?tab=repositories", "_blank")}
                                className="cursor-pointer"
                            />
                            <FaTwitter

                            />
                            <FaFacebook
                                onClick={() => window.open("https://web.facebook.com/shawonreza.dev/", "_blank")}
                                className="cursor-pointer"
                            />
                            <FaInstagramSquare
                                onClick={() => window.open("https://www.instagram.com/shawonreza.dev/", "_blank")}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form >
                            <div className="flex gap-5">
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">First name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>
                            </div>


                            <div className="flex gap-5 pt-5">
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="text"
                                        placeholder="abc@gmail.com"
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        placeholder="Phone number"
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>
                            </div>
                        </form>
                        
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactUs;
