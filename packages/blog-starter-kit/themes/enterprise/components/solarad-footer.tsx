import React from 'react';
import Link from 'next/link';

const SolaradFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black p-9">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
          {/* Brand Name and Tag Line */}
          <div>
            <h1 className="text-5xl text-[#fcba03] font-bold mb-2">solarad.ai</h1>
            <h6 className="text-white text-sm font-light mb-1">
              Irradiances and weather parameters for Solar PV plants
            </h6>
          </div>

          {/* Data Products */}
          <div>
            <h5 className="text-[#fcba03] font-bold">Products</h5>
            <div className="flex flex-col">
              <Link href="/forecast" passHref><span className="text-white mb-2 cursor-pointer">Forecast</span></Link>
              <a href="http://app.solarad.ai" className="text-white mb-2">Weather Intelligence</a>
              <a href="http://app.solarad.ai" className="text-white mb-2">Weather APIs for Solar</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-[#fcba03] font-bold">Resources</h5>
            <div className="flex flex-col">
              <Link href="/company" passHref><span className="text-white mb-2 cursor-pointer">Company</span></Link>
              <Link href="/pricing" passHref><span className="text-white mb-2 cursor-pointer">Pricing</span></Link>
              <a href="https://solarad.notion.site" className="text-white mb-2">Blog</a>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h5 className="text-[#fcba03] font-bold">Get In Touch</h5>
            <div className="flex flex-col">
              <a href="mailto:founders@solarad.ai" className="text-white mb-2">founders@solarad.ai</a>
              <a href="https://www.linkedin.com/company/solarad-ai/" className="text-[#fcba03] hover:text-white">Follow us on LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Our Offices */}
        <div className="mb-5">
          <h5 className="text-[#fcba03] font-bold ml-3 mt-2 mb-2">Our Offices</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
            {/* Office 1 */}
            <div>
              <h5 className="text-white font-bold">Solarad AI, USA</h5>
              <div className="flex flex-col">
                <Link href="/company" passHref><span className="text-white mb-1 cursor-pointer">226 Haight St., San Francisco, CA 94102</span></Link>
                <Link href="/company" passHref><span className="text-white mb-1 cursor-pointer">+1 628 800 0056</span></Link>
              </div>
            </div>

            {/* Office 2 */}
            <div>
              <h5 className="text-white font-bold">Solarad AI, India</h5>
              <div className="flex flex-col">
                <Link href="/company" passHref><span className="text-white mb-2 cursor-pointer">145, Sector 44, Gurugram, Haryana 122003</span></Link>
                <Link href="/company" passHref><span className="text-white mb-1 cursor-pointer">+91 97951 19246</span></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-wrap justify-between items-center mt-5 border-t border-gray-700 pt-3">
          <div className="text-sm text-white">
            © {currentYear} <Link href="/" passHref><span className='text-[#fcba03] cursor-pointer'>Solarad.ai</span></Link> All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="#" passHref><span className="text-gray-400 hover:text-white cursor-pointer">Newsletter</span></Link>
            <Link href="#" passHref><span className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SolaradFooter;
