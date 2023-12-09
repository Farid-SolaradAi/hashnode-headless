import React from 'react';

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
              <a className="text-white mb-2" href="/forecast">Forecast</a>
              <a className="text-white mb-2" href="http://app.solarad.ai">Weather Intelligence</a>
              <a className="text-white mb-2" href="http://app.solarad.ai">Weather APIs for Solar</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-[#fcba03] font-bold">Resources</h5>
            <div className="flex flex-col">
              <a className="text-white mb-2" href="/company">Company</a>
              <a className="text-white mb-2" href="/pricing">Pricing</a>
              <a className="text-white mb-2" href="https://solarad.notion.site">Blog</a>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h5 className="text-[#fcba03] font-bold">Get In Touch</h5>
            <div className="flex flex-col">
              <a className="text-white mb-2" href="mailto:founders@solarad.ai">founders@solarad.ai</a>
              {/* LinkedIn Button */}
              <a href="https://www.linkedin.com/company/solarad-ai/" className="text-[#fcba03] hover:text-white">
                <i className="fab fa-linkedin"></i> Follow us on LinkedIn
              </a>
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
                <a className="text-white mb-1" href="/company">226 Haight St., San Francisco, CA 94102</a>
                <a className="text-white mb-1" href="/company">+1 628 800 0056</a>
              </div>
            </div>

            {/* Office 2 */}
            <div>
              <h5 className="text-white font-bold">Solarad AI, India</h5>
              <div className="flex flex-col">
                <a className="text-white mb-2" href="/company">145, Sector 44, Gurugram, Haryana 122003</a>
                <a className="text-white mb-1" href="/company">+91 97951 19246</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-wrap justify-between items-center mt-5 border-t border-gray-700 pt-3">
          <div className="text-sm text-white">
            © {currentYear} <a href="/" className='text-[#fcba03]'>Solarad.ai</a> All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Newsletter</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SolaradFooter;
