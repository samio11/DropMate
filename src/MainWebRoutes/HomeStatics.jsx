import React from 'react';

const HomeStatics = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                            <svg className="text-blue-600 w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5h-4m-4 0V7h8v5M5 17h14" />
                            </svg>
                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Our Growing Network
                                <br className="hidden md:block" />
                                Over{' '}
                                <span className="inline-block text-blue-600">thousands</span> of parcels delivered!
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                We’re proud to serve our growing community with a reliable and efficient delivery service. See the stats below to get a glimpse of our success.
                            </p>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-blue-800"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707 5.293l-5-5A1 1 0 003.293 1.707L7.586 6l-4.293 4.293a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                        {/* Card 1: Total Parcels Booked */}
                        <div className="relative flex flex-col items-center justify-center px-4 py-6 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)' }}>
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                            <h6 className="relative z-10 text-xl font-bold text-white">1,230</h6>
                            <p className="relative z-10 text-white">Parcels Booked</p>
                        </div>

                        {/* Card 2: Total Parcels Delivered */}
                        <div className="relative flex flex-col items-center justify-center px-4 py-6 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)' }}>
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                            <h6 className="relative z-10 text-xl font-bold text-white">980</h6>
                            <p className="relative z-10 text-white">Parcels Delivered</p>
                        </div>

                        {/* Card 3: Total Users */}
                        <div className="relative flex flex-col items-center justify-center px-4 py-6 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)' }}>
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                            <h6 className="relative z-10 text-xl font-bold text-white">345</h6>
                            <p className="relative z-10 text-white">Users Registered</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeStatics;