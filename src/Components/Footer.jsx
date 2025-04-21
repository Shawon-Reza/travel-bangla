import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#131a30] bg-[url('https://i.ibb.co/5hmcDxLM/footer-bg.png')] bg-cover bg-center p-10 flex justify-around text-white font-semibold text-lg">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <NavLink to={'/contactus'}> <a className="link link-hover">Contact</a></NavLink>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className=" flex gap-8 text-3xl flex-col sm:flex-row">
                        <FaGithub
                            onClick={() => window.open("https://github.com/Shawon-Reza?tab=repositories", "_blank")}
                            className="cursor-pointer"
                        />
                        <FaTwitter
                            className='hidden sm:block'

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
                </nav>

            </footer>
        </div>
    );
};

export default Footer;