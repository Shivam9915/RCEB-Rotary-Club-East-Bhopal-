

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { navItems } from '../utils/navConfig';

const FaFacebook = ({ className, size }) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14 13.5h2.5l1-4H14V6.75c0-.984.721-1.25 1.29-1.25H18V2.992S16.511 2.5 15.008 2.5c-2.73 0-4.512 1.62-4.512 4.706V9.5H8v4h2.5V22h5.5v-8.5z" /></svg>;
const FaTwitter = ({ className, size }) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 3.033a8.315 8.315 0 0 1-2.454.664c.89-.533 1.574-1.373 1.9-2.378a8.214 8.214 0 0 1-2.617 1.054c-.83-.883-2.01-1.433-3.29-1.433-3.155 0-5.714 2.559-5.714 5.714a5.64 5.64 0 0 0 1.53.945C7.942 9.077 4.778 7.377 2.658 4.787a5.72 5.72 0 0 0-.776 2.868c0 1.979 1.006 3.73 2.535 4.755a5.648 5.648 0 0 1-2.585-.716c0 2.766 1.968 5.078 4.57 5.607a5.71 5.71 0 0 1-2.58.099c.725 2.26 2.827 3.904 5.312 3.95a11.43 11.43 0 0 1-7.085 2.441c-.461 0-.918-.027-1.365-.084 2.946 1.892 6.425 2.997 10.16 2.997 12.19 0 18.868-10.104 18.868-18.868 0-.287-.006-.574-.02-.857.94-.679 1.758-1.53 2.4-2.493z" /></svg>;
const FaInstagram = ({ className, size }) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.58.012 4.85.07c1.29.06 2.146.242 2.84.526.74.307 1.25.753 1.714 1.217a4.992 4.992 0 0 1 1.217 1.713c.284.693.466 1.55.526 2.84.058 1.27.07 1.646.07 4.85s-.012 3.58-.07 4.85c-.06 1.29-.242 2.146-.526 2.84a4.992 4.992 0 0 1-1.217 1.713c-.464.464-.973.91-1.713 1.217-.694.284-1.55.466-2.84.526-1.27.058-1.646.07-4.85.07s-3.58-.012-4.85-.07c-1.29-.06-2.146-.242-2.84-.526a4.992 4.992 0 0 1-1.713-1.217c-.464-.464-.91-1.004-1.217-1.713-.284-.694-.466-1.55-.526-2.84-.058-1.27-.07-1.646-.07-4.85s.012-3.58.07-4.85c.06-1.29.242-2.146.526-2.84a4.992 4.992 0 0 1 1.217-1.713c.464-.464 1.004-.91 1.713-1.217.694-.284 1.55-.466 2.84-.526C8.42 2.175 8.796 2.163 12 2.163zM12 4.312c-3.116 0-3.483.011-4.707.067a3.834 3.834 0 0 0-2.585.589c-.66.302-1.066.697-1.42 1.052a3.834 3.834 0 0 0-.853 1.782c-.17.702-.27 1.488-.328 2.684-.057 1.23-.067 1.597-.067 4.712s.01 3.482.067 4.707c.058 1.196.158 1.982.328 2.684a3.834 3.834 0 0 0 .853 1.782c.354.355.76.75 1.42 1.052a3.834 3.834 0 0 0 2.585.589c1.224.057 1.59.067 4.707.067s3.483-.01 4.707-.067a3.834 3.834 0 0 0 2.585-.589c.66-.302 1.066-.697 1.42-1.052a3.834 3.834 0 0 0 .853-1.782c.17-.702.27-1.488.328-2.684.057-1.225.067-1.59.067-4.707s-.01-3.482-.067-4.707a3.834 3.834 0 0 0-.589-2.585c-.302-.66-.697-1.066-1.052-1.42a3.834 3.834 0 0 0-1.782-.853c-.702-.17-1.488-.27-2.684-.328C15.483 4.323 15.116 4.312 12 4.312zM12 7.643a4.357 4.357 0 1 0 0 8.714 4.357 4.357 0 0 0 0-8.714zM12 14.54a2.54 2.54 0 1 1 0-5.08 2.54 2.54 0 0 1 0 5.08zM17.437 5.666a1.01 1.01 0 1 0 0 2.02 1.01 1.01 0 0 0 0-2.02z" /></svg>;
const FaLinkedin = ({ className, size }) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.057 4.22a.571.571 0 0 0 0 1.142h-.148a.571.571 0 0 0 0-1.142h.148zM2.84 8.72h-1.65v9.33h1.65v-9.33zM18.775 8.72h-1.65v.98c-.13-.196-.28-.387-.45-.572a4.425 4.425 0 0 0-3.328-1.442c-2.19 0-3.957 1.83-3.957 4.25v6.113h1.65V12.92c0-.987.892-1.666 1.95-1.666 1.077 0 1.95.733 1.95 1.666v5.132h1.65V11.24c-.01-1.84 1.12-3.896 3.635-3.896h.14v1.376zM1.743 21a.571.571 0 0 1-.572-.572V3.585a.571.571 0 0 1 1.142 0V14.61a.571.571 0 0 1-.57.57zM2.585 3.585a.571.571 0 0 1 .57.572v.913a.571.571 0 0 1-1.142 0v-.913a.571.571 0 0 1 .572-.572z" /></svg>;

// --- Framer Motion Variants ---
const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeInOut' } },
};

const Footer = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };



    const handleLinkClick = (e, path) => {
        e.preventDefault();
        window.location.href = path;
    };

    return (
        <div className="bg-slate-950 text-white font-sans py-12 px-8 shadow-inner border-t border-slate-800">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Mission Statement */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <img
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/564d45f0-ff22-4892-82c6-b8b7d3217db3.png"
                                alt="Rotary Club East Bhopal Logo"
                                className="h-10 mr-3"
                            />
                            <h3 className="font-bold text-lg md:text-xl text-white">Rotary Club East Bhopal</h3>
                        </div>
                        <p className="text-slate-400 text-sm md:text-base">Service Above Self Since 1974. Celebrating 50 years of service and dedication to the community.</p>
                    </div>

                    {/* Navigation Links with Sub-menus */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-8 md:gap-12">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative">
                                <button
                                    className="flex justify-between items-center w-full text-left font-bold text-lg text-white mb-2 pb-1 border-b border-slate-700"
                                    onClick={() => toggleMenu(item.name)}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <motion.div animate={{ rotate: openMenu === item.name ? 180 : 0 }}>
                                            <ChevronDown className="text-slate-400" size={18} />
                                        </motion.div>
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openMenu === item.name && item.submenu && (
                                        <motion.ul
                                            variants={menuVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            className="space-y-2 text-sm mt-3"
                                        >
                                            {item.submenu.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <a href={subItem.path} className="text-slate-400 hover:text-white transition-colors" onClick={(e) => handleLinkClick(e, subItem.path)}>
                                                        {subItem.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Contact & Social Links */}
                    <div className="flex flex-col">
                        <div className="mb-8">
                            <h3 className="font-bold text-lg md:text-xl text-white mb-4">Contact Us</h3>
                            <ul className="space-y-3 text-slate-400 text-sm md:text-base">
                                <li className="flex items-start">
                                    <MapPin size={20} className="text-pink-400 mr-3 mt-1 flex-shrink-0" />
                                    <span>Bhopal, Madhya Pradesh</span>
                                </li>
                                <li className="flex items-start">
                                    <Phone size={20} className="text-pink-400 mr-3 mt-1 flex-shrink-0" />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-start">
                                    <Mail size={20} className="text-pink-400 mr-3 mt-1 flex-shrink-0" />
                                    <span>rotaryeastbpl@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg md:text-xl text-white mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="text-2xl text-slate-400 hover:text-pink-400 transition-colors">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="text-2xl text-slate-400 hover:text-pink-400 transition-colors">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-2xl text-slate-400 hover:text-pink-400 transition-colors">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="text-2xl text-slate-400 hover:text-pink-400 transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 pt-6 text-center">
                    <p className="text-slate-500 text-sm">&copy; 2024 Rotary Club East Bhopal. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer
