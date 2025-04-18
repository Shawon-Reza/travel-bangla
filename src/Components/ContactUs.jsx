import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";
import { FaFacebook, FaGithub, FaInstagramSquare, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./Footer";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
    });

    // Handle input changes
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

        // Log structured form data
        console.log("Form submitted:", formData);
        fetch('http://localhost:5000/admin/reviews', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {
                    toast.success('Thank you for your feedback', {
                        position : "top-center"
                    })
                }
            })



        // Optionally clear form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "general",
            message: "",
        });
    };

    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar />
            <section className="mt-10 px-5 container mx-auto">
                <h2 className="text-3xl font-extrabold text-center">Contact Us</h2>
                <p className="text-center opacity-75">Any questions or remarks? Just write us a message!</p>

                <div className="container mx-auto px-6 pt-5 sm:pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-around gap-y-6 md:bg-[url('https://i.pinimg.com/736x/40/da/a1/40daa148ba5f9eb74cb5dee7eb75e97b.jpg')] lg:bg-[url('https://w0.peakpx.com/wallpaper/816/217/HD-wallpaper-beach-sea-beach-1440p-resolution-nature-and-background-beach-2560x1440.jpg')] lg:pl-10 md:text-yellow-50 bg-cover bg-no-repeat rounded-lg md:font-semibold px-3 md:shadow-2xl font-Playfair">
                        <div>
                            <h3 className="text-xl text-[#001F3F] font-semibold">Contact Information</h3>
                            <p className="text-[#375c81] font-Dancing text-xl">Say something to start a live chat</p>
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

                        <div className="flex gap-8 text-3xl lg:pl-10 pl-5 text-black lg:text-4xl">
                            <FaGithub onClick={() => window.open("https://github.com/Shawon-Reza?tab=repositories", "_blank")} className="cursor-pointer" />
                            <FaTwitter />
                            <FaFacebook onClick={() => window.open("https://web.facebook.com/shawonreza.dev/", "_blank")} className="cursor-pointer" />
                            <FaInstagramSquare onClick={() => window.open("https://www.instagram.com/shawonreza.dev/", "_blank")} className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="pb-20">
                        <form onSubmit={handleSubmit}>
                            {/* Row 1 */}
                            <div className="flex gap-5">
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">First name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        required
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

                            {/* Row 2 */}
                            <div className="flex gap-5 py-5">
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="abc@gmail.com"
                                        required
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                        required
                                        className="border-b p-2 focus:outline-none w-full"
                                    />
                                </div>
                            </div>

                            {/* Subject Radio */}
                            <label className="font-bold block pb-3">Selected Subject?</label>
                            <div className="flex gap-3 flex-wrap">
                                {["general", "billing", "technical", "feedback"].map((type) => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer capitalize">
                                        <input
                                            type="radio"
                                            name="subject"
                                            value={type}
                                            checked={formData.subject === type}
                                            onChange={handleChange}
                                            className="hidden peer"
                                        />
                                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center 
                      ${type === "general" && "border-red-600 peer-checked:bg-red-600"}
                      ${type === "billing" && "border-blue-600 peer-checked:bg-blue-600"}
                      ${type === "technical" && "border-green-600 peer-checked:bg-green-600"}
                      ${type === "feedback" && "border-purple-600 peer-checked:bg-purple-600"}
                    `}>
                                            <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
                                        </div>
                                        <p className="text-gray-700">{type}</p>
                                    </label>
                                ))}
                            </div>

                            {/* Message */}
                            <div className="w-full py-5">
                                <label className="block text-md font-medium text-gray-700">Message</label>
                                <input
                                    type="text"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message"
                                    required
                                    className="border-b p-2 focus:outline-none w-full"
                                />
                            </div>

                            <div className="btn bg-black text-white">
                                <button className="cursor-pointer" type="submit">Send Message</button>
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
