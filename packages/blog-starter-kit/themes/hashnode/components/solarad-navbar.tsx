import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SolaradLogo from './icons/solarad-flat.png'
import { BarsSVG } from './icons';
const SolaradNavbar: React.FC = () => {
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleProductsDropdown = () => setIsProductsDropdownOpen(!isProductsDropdownOpen);
    const toggleResourcesDropdown = () => setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    return (
        <nav className="sticky top-0 z-50 flex flex-row justify-between bg-black sm:px-4 sm:pl-6 px-1 py-6">
            {isMenuOpen ? null : (
                <Link href="https://solarad.ai" legacyBehavior>
                    <a className="flex items-center">
                        <Image src={SolaradLogo} alt="Solarad Logo" width={180} height={50} layout="fixed" />
                    </a>
                </Link>
            )}
            <div className="md:hidden relative z-10 flex items-center">
                {isMenuOpen ? (
                    <div className="w-screen bg-white">
                        <div className="flex justify-between items-center p-4">
                            <Link href="https://solarad.ai" legacyBehavior>
                                <a className="flex items-center">
                                    <Image src={SolaradLogo} alt="Solarad Logo" width={120} height={50} layout="fixed" />
                                </a>
                            </Link>
                            <span className="text-gray-500 cursor-pointer" onClick={() => { setIsMenuOpen(false) }}>
                                X
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <a
                                className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={toggleProductsDropdown}
                            >
                                Products
                            </a>
                            {isProductsDropdownOpen && (
                                <div className="flex flex-col pl-6">
                                    <Link href="https://solarad.ai/forecast" legacyBehavior>
                                        <a className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">Forecast</a>
                                    </Link>
                                    <Link href="https://solarad.ai/coming-soon" legacyBehavior>
                                        <a className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">
                                            Weather Intelligence Platform
                                        </a>
                                    </Link>
                                    <Link href="https://solarad.ai/coming-soon" legacyBehavior>
                                        <a className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">
                                            Weather APIs for Solar
                                        </a>
                                    </Link>
                                    {/* Add more sub-items for Products here */}
                                </div>
                            )}

                            <Link href="https://solarad.ai/pricing" legacyBehavior>
                                <a className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Pricing</a>
                            </Link>
                            <Link href="https://solarad.ai/company" legacyBehavior>
                                <a className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Company</a>
                            </Link>
                            <a
                                className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={toggleResourcesDropdown}
                            >
                                Resources
                            </a>
                            {isResourcesDropdownOpen && (
                                <div className="flex flex-col pl-6">
                                    <Link href="https://blog.solarad.ai" legacyBehavior>
                                        <a className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">Blog</a>
                                    </Link>
                                    <Link href="https://blog.solarad.ai/series/the-renewable-leader" legacyBehavior>
                                        <a className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">Newsletter</a>
                                    </Link>
                                    <Link href="/resource-map" legacyBehavior>
                                        <a className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">
                                            Resource Map
                                        </a>
                                    </Link>
                                    {/* Add more sub-items for Resources here */}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <span className="text-white hover:text-gray-400 transition-colors hover:cursor-pointer" onClick={toggleMenu}>
                        <BarsSVG className="h-6 w-6 stroke-current" />
                    </span>
                )}
            </div>

            <div className="hidden md:flex items-center space-x-9 mr-80">
                {/* Products Dropdown */}
                <div className="relative" onMouseEnter={toggleProductsDropdown} onMouseLeave={toggleProductsDropdown}>
                    <a className="relative text-white hover:text-gray-400 transition-colors hover:cursor-pointer">Products</a>
                    {isProductsDropdownOpen && (
                        <div className="absolute bottom-0 left-0 transform translate-y-full mt-2 w-48">
                            <div className="px-4 py-1 text-sm bg-white box-border rounded-t-md"></div>
                            <Link href="https://solarad.ai/forecast" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100">Forecast</a>
                            </Link>
                            <Link href="https://solarad.ai/coming-soon" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100">Weather Intelligence Platform</a>
                            </Link>
                            <Link href="https://solarad.ai/coming-soon" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100 rounded-b-md">Weather APIs for Solar</a>
                            </Link>
                            {/* Add more sub-items for Products here */}
                        </div>
                    )}
                </div>

                {/* Company and Pricing Links */}
                <Link href="https://solarad.ai/company" legacyBehavior>
                    <a className="text-white hover:text-gray-400 transition-colors">Company</a>
                </Link>
                <Link href="https://solarad.ai/pricing" legacyBehavior>
                    <a className="text-white hover:text-gray-400 transition-colors">Pricing</a>
                </Link>

                {/* Resources Dropdown */}
                <div className="relative" onMouseEnter={toggleResourcesDropdown} onMouseLeave={toggleResourcesDropdown}>
                    <a className="text-white hover:text-gray-400 transition-colors hover:cursor-pointer">Resources</a>
                    {isResourcesDropdownOpen && (
                        <div className="absolute pt-2 w-48 left-0 top-5">
                            <div className="px-4 py-1 text-sm bg-white box-border rounded-t-md"></div>
                            <Link href="https://blog.solarad.ai" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100">Blog</a>
                            </Link>
                            <Link href="https://blog.solarad.ai/series/the-renewable-leader" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100">Newsletter</a>
                            </Link>
                            <Link href="https://solarad.ai/resource-map" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100 rounded-b-md">Resource Map</a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="hidden md:flex items-center space-x-4 mr-9">
                {/* CTA Buttons */}
                <Link href="http://app.solarad.ai/register" legacyBehavior>
                    <a className="px-4 py-2 text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out rounded">
                        Try Free Data
                    </a>
                </Link>
                <Link href="https://calendly.com/haider-solarad/solarad-demo" legacyBehavior>
                    <a className="px-4 py-2 bg-yellow-500 text-black hover:bg-yellow-600 transition duration-300 ease-in-out rounded">
                        Get Demo
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default SolaradNavbar