import React from 'react';
import Link from 'next/link';

const SolaradFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black p-9">
      <div className="container mx-auto mt-9">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mb-9">
          {/* Brand Name and Tag Line */}
          <div>
            <h1 className="text-5xl text-[#fcba03] font-bold mb-0 font-raleway">solarad.ai</h1>
            <h6 className="text-white text-sm font-light mb-1">
              Irradiances and weather parameters for Solar PV plants
            </h6>
          </div>

          {/* Data Products */}
          <div>
            <h5 className="text-[#fcba03] text-xl font-bold mb-3">Products</h5>
            <div className="flex flex-col">
              <a href="https://solarad.ai/forecast"><span className="text-white mb-5 cursor-pointer hover:text-gray-400">Forecast</span></a>
              <a href="https://solarad.ai/coming-soon" className="text-white mt-2 hover:text-gray-400">Weather Intelligence</a>
              <a href="https://solarad.ai/coming-soon" className="text-white mt-2 hover:text-gray-400">Weather APIs for Solar</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-[#fcba03] text-xl font-bold mb-3">Resources</h5>
            <div className="flex flex-col">
              <a href="https://blog.solarad.ai" className="text-white  hover:text-gray-400">Blog</a>
              <Link href="https://solarad.ai/pricing" className='mt-2' passHref><span className="text-white mb-5 cursor-pointer hover:text-gray-400">Pricing</span></Link>
              <Link href="https://solarad.ai/company" className='mt-2' passHref><span className="text-white cursor-pointer hover:text-gray-400">Company</span></Link>


            </div>
          </div>

          {/* Get In Touch */}
          <div >
            <h5 className="text-[#fcba03] text-xl font-bold mb-3 mt-1">Get In Touch</h5>
            <div className="flex flex-col">
              <a href="mailto:founders@solarad.ai" className="text-white mb-2 mt-1 hover:text-gray-400">founders@solarad.ai</a>
              <a href="https://www.linkedin.com/company/solarad-ai/" className="text-[#fcba03] hover:text-white">Follow us on LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Our Offices */}
        <div className="mb-5">
          <h5 className="text-[#fcba03] text-lg font-bold mt-2 mb-3">Our Offices</h5>
          <div className="flex justify-start">
            {/* Office 1 */}
            <div className='mr-9'>
              <h5 className="text-white font-bold">Solarad AI, USA</h5>
              <div className="flex flex-col">
                <Link href="/company" passHref><span className="text-white mb-1 cursor-pointer">226 Haight St., San Francisco, CA 94102</span></Link>
                <Link href="/company" passHref><span className="text-white mb-1 cursor-pointer">+1 628 800 0056</span></Link>
              </div>
            </div>

            {/* Office 2 */}
            <div className='mb-9'>
              <h5 className="text-white font-bold">Solarad AI, India</h5>
              <div className="flex flex-col">
                <Link href="/company" passHref><span className="text-white mb-2 cursor-pointer">145, Sector 44, Gurugram, Haryana 122003</span></Link>
                <Link href="/company" passHref><span className="text-white mb-1 cursor-pointer">+91 97951 19246</span></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-wrap justify-between items-center mt-9 border-t border-gray-700 pt-3">
          <div className="text-sm text-white">
            © {currentYear} <Link href="https://solarad.ai" passHref><span className='text-[#fcba03] cursor-pointer font-raleway'>Solarad.ai</span></Link> All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="https://blog.solarad.ai/series/the-renewable-leader" passHref><span className="text-gray-400 hover:text-white cursor-pointer font-raleway">Newsletter</span></Link>
            <Link href="https://solarad.notion.site/Solarad-ai-Privacy-Policy-126dbf342df7418aac0f3c0313279def?pvs=4" passHref><span className="text-gray-400 hover:text-white cursor-pointer font-raleway">Privacy Policy</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SolaradFooter;
