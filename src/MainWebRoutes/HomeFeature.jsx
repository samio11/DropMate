import React from 'react';

const HomeFeature = () => {
    return (
        <div>
            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
                    <p className="mt-4 text-gray-600">Why choose DropMate for your delivery needs?</p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="text-[#6C63FF] mb-4">
                                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2-10a9.76 9.76 0 01-6 2 9.76 9.76 0 01-6-2m6 10a9.76 9.76 0 006-2 9.76 9.76 0 006 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Secure Parcel Handling</h3>
                            <p className="mt-2 text-gray-500">We ensure the safety and protection of your parcels with reliable and secure handling from pickup to delivery.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="text-[#6C63FF] mb-4">
                                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2l1 9h12l1-9h2M5 6h14l-1 4H6L5 6z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Fast & Reliable Delivery</h3>
                            <p className="mt-2 text-gray-500">Experience quick and timely delivery services tailored to meet your deadlines with our nationwide network of delivery agents.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="text-[#6C63FF] mb-4">
                                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Real-Time Parcel Tracking</h3>
                            <p className="mt-2 text-gray-500">Track your parcel in real-time from dispatch to delivery, with updates at every step for full transparency.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeFeature;