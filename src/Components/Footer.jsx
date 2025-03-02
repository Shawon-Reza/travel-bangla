import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
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
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
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
                </nav>
            </footer>
        </div>
    );
};

export default Footer;