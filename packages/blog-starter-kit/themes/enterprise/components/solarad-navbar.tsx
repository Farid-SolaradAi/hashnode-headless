import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SolaradLogo from './icons/solarad-flat.png'
const SolaradNavbar: React.FC = () => {
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

    // Functions to show and hide the dropdowns
    const toggleProductsDropdown = () => setIsProductsDropdownOpen(!isProductsDropdownOpen);
    const toggleResourcesDropdown = () => setIsResourcesDropdownOpen(!isResourcesDropdownOpen);

    return (
        <nav className="sticky top-0 z-50 flex flex-row justify-between bg-black px-9 py-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <Link href="https://solarad.ai" legacyBehavior>
                <a className="flex items-center ml-9 mr-0">
                    <Image src={SolaradLogo} alt="Solarad Logo" width={180} height={50} layout="fixed" />
                </a>
            </Link>

            <div className="hidden md:flex items-center space-x-9 mr-9">
                {/* Products Dropdown */}
                <div className="relative" onMouseEnter={toggleProductsDropdown} onMouseLeave={toggleProductsDropdown}>
                        <span className="text-white hover:text-gray-400 transition-colors">Products</span>
                    {isProductsDropdownOpen && (
                        <div className="absolute pt-2 w-48 rounded-md shadow-lg top-full">
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
                <div className="relative mr-9" onMouseEnter={toggleResourcesDropdown} onMouseLeave={toggleResourcesDropdown}>
                    <Link href="/resources" legacyBehavior>
                        <a className="text-white hover:text-gray-400 transition-colors">Resources</a>
                    </Link>
                    {isResourcesDropdownOpen && (
                        <div className="absolute pt-2 w-48 rounded-md shadow-lg flex flex-col justify-end">
                            <div className="px-4 py-1 text-sm bg-white box-border rounded-t-md"></div>
                            <Link href="https://blog.solarad.ai" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100">Blog</a>
                            </Link>
                            <Link href="https://solarad.notion.site/c13f74cd948f4531b1b19de3a736f97c?v=e82f893a2d6647958dbe815bd2583d19" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100">Newsletter</a>
                            </Link>
                            <Link href="https://solarad.ai/resource-map" legacyBehavior>
                                <a className="block px-4 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100 rounded-b-md">Resource Map</a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 mr-9">
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
