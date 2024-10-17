import React from 'react';

const HomeTopDelivaryMan = () => {
    return (
        <div>
            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Top Delivery Men</h2>
                    <p className="mt-4 text-gray-600">Meet our best delivery personnel based on performance and user ratings</p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Delivery Man 1 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <img
                                className="h-32 w-32 rounded-full mx-auto"
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Delivery Man 1"
                            />
                            <h3 className="mt-4 text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-500 mt-2">Parcels Delivered: <span className="font-bold">120</span></p>
                            <div className="mt-3">
                                <span className="text-yellow-400">
                                    ★★★★☆
                                </span>
                                <p className="text-gray-500">Average Rating: 4.5</p>
                            </div>
                        </div>

                        {/* Delivery Man 2 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <img
                                className="h-32 w-32 rounded-full mx-auto"
                                src="https://randomuser.me/api/portraits/men/85.jpg"
                                alt="Delivery Man 2"
                            />
                            <h3 className="mt-4 text-xl font-semibold">Mike Ross</h3>
                            <p className="text-gray-500 mt-2">Parcels Delivered: <span className="font-bold">100</span></p>
                            <div className="mt-3">
                                <span className="text-yellow-400">
                                    ★★★★☆
                                </span>
                                <p className="text-gray-500">Average Rating: 4.2</p>
                            </div>
                        </div>

                        {/* Delivery Man 3 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <img
                                className="h-32 w-32 rounded-full mx-auto"
                                src="https://randomuser.me/api/portraits/men/62.jpg"
                                alt="Delivery Man 3"
                            />
                            <h3 className="mt-4 text-xl font-semibold">Steve Smith</h3>
                            <p className="text-gray-500 mt-2">Parcels Delivered: <span className="font-bold">90</span></p>
                            <div className="mt-3">
                                <span className="text-yellow-400">
                                    ★★★★☆
                                </span>
                                <p className="text-gray-500">Average Rating: 4.0</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeTopDelivaryMan;