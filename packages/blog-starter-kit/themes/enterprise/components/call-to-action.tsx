import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
    return (
        <section className="mt-5 bg-gradient-to-r from-[#fb6340] to-[#fbb140] py-10" style={{ background: "linear-gradient(35deg, #172b4d 0, #1a174d 100%)", fontFamily: 'Raleway, sans-serif' }} >
            <div className="container mx-auto px-4 mt-5 mb-5">
                <div className="flex justify-center mb-9">
                    <h2 className="text-white font-bold text-center text-3xl">
                        Get The World’s Most Advanced Solar Weather Intelligence
                    </h2>
                </div>
                <div className="flex justify-center">
                    <div className="mx-2" style={{ maxWidth: 'fit-content' }}>
                        <Link href="http://app.solarad.ai/register" passHref>
                            <span className="inline-block bg-blue-600 hover:bg-blue-700 my-2 py-2 px-4 mr-4 rounded text-white font-bold cursor-pointer transition duration-300">
                                Try Free Data
                            </span>
                        </Link>
                    </div>
                    <div className="mx-2" style={{ maxWidth: 'fit-content' }}>
                        <Link href="https://calendly.com/haider-solarad/solarad-demo" passHref>
                            <span className="inline-block bg-gray-300 hover:bg-gray-400 my-2 py-2 px-4 rounded text-gray-800 font-bold cursor-pointer transition duration-300">
                                <i className="fa fa-bar-chart mr-0" />
                                Get Demo
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
