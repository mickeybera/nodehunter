import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ darkMode }) {
    return (
        <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-slate-100 text-black'} py-6`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and description */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="font-bold text-lg">nodeHunter</h2>
                        <p className="text-sm">Your go-to place for coding resources!</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <Link to="/" className="hover:text-pink-400">Home</Link>
                        <Link to="/course" className="hover:text-pink-400">Courses</Link>
                        <Link to="/about" className="hover:text-pink-400">About</Link>
                        <Link to="/contact" className="hover:text-pink-400">Contact</Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400"
                            aria-label="Facebook"
                        >
                            <span className="fab fa-facebook-f"></span>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400"
                            aria-label="Twitter"
                        >
                            <span className="fab fa-twitter"></span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400"
                            aria-label="LinkedIn"
                        >
                            <span className="fab fa-linkedin-in"></span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} nodeHunter. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
