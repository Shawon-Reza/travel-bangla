import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";
import { FaFacebook, FaGithub, FaInstagramSquare, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./Footer";
import { useState } from "react";

const ContactUs = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "general", // default selected subject
        message: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log the form data to the console
        console.log(formData);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "general", // Default value remains
            message: "",
        });
        
    };
    
        console.log(formData);

    return (
        <div>
            <Navbar />

            <section className="mt-10 px-5">
                <h2 className="text-3xl font-extrabold text-center">Contact Us</h2>
                <p className="text-center opacity-75">Any questions or remarks? Just write us a message!</p>

                {/* Form & Contact Details */}
                <div className="container mx-auto px-6 pt-5 sm:pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

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

                        {/* Social Links */}
                        <div className="flex gap-8 text-3xl">
                            <FaGithub
                                onClick={() => window.open("https://github.com/Shawon-Reza?tab=repositories", "_blank")}
                                className="cursor-pointer"
                            />
                            <FaTwitter />
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
                    <div className="pb-20">
                        <form onSubmit={handleSubmit}>
                            {/* Form First Row */}
                            <div className="flex gap-5">
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">First name</label>
                                    <input
                                        type="text"
                                        required
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>
                            </div>

                            {/* Form second Row */}
                            <div className="flex gap-5 py-5">
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="text"
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="abc@gmail.com"
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        required
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>
                            </div>

                            {/* Form Radio */}
                            <label className="font-bold block pb-3">Selected Subject ? </label>
                            <div className="flex gap-3">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="subject"
                                        value="general"
                                        checked={formData.subject === "general"}
                                        onChange={handleChange}
                                        className="hidden peer"
                                    />
                                    <div className="w-5 h-5 border-2 border-red-600 rounded-full flex items-center justify-center peer-checked:bg-red-600">
                                        <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                                    </div>
                                    <p className="text-gray-700">General</p>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="subject"
                                        value="billing"
                                        checked={formData.subject === "billing"}
                                        onChange={handleChange}
                                        className="hidden peer"
                                    />
                                    <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center peer-checked:bg-blue-600">
                                        <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                                    </div>
                                    <p className="text-gray-700">Billing</p>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="subject"
                                        value="technical"
                                        checked={formData.subject === "technical"}
                                        onChange={handleChange}
                                        className="hidden peer"
                                    />
                                    <div className="w-5 h-5 border-2 border-green-600 rounded-full flex items-center justify-center peer-checked:bg-green-600">
                                        <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                                    </div>
                                    <p className="text-gray-700">Technical</p>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="subject"
                                        value="feedback"
                                        checked={formData.subject === "feedback"}
                                        onChange={handleChange}
                                        className="hidden peer"
                                    />
                                    <div className="w-5 h-5 border-2 border-purple-600 rounded-full flex items-center justify-center peer-checked:bg-purple-600">
                                        <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                                    </div>
                                    <p className="text-gray-700">Feedback</p>
                                </label>
                            </div>

                            <div className="w-full py-5 ">
                                <label className="block text-md font-medium text-gray-700">Message</label>
                                <input
                                    type="text"
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message"
                                    className="border-b p-2 focus:outline-none w-full"
                                />
                            </div>

                            <div className="btn bg-black text-white">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            <div className="sm:pt-10">
                <Footer />
            </div>
        </div>
    );
};

export default ContactUs;
