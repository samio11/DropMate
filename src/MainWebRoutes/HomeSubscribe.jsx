import React from 'react';

const HomeSubscribe = () => {
    return (
        <div>
            <div className="px-4 py-16 bg-white">
                <div className="max-w-5xl mx-auto">
                    {/* Card Design */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12">
                        {/* Heading */}
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                            Subscribe & Share Your Feedback
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 text-center">
                            Join our community and stay updated with the latest news! Share your thoughts about our service.
                        </p>

                        {/* Form Section */}
                        <form className="space-y-8">
                            {/* Email Input */}
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full py-4 pl-5 pr-32 text-base bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300"
                                >
                                    Subscribe
                                </button>
                            </div>

                            {/* Review Box */}
                            <div>
                                <textarea
                                    name="review"
                                    rows="5"
                                    placeholder="Write your review"
                                    required
                                    className="w-full py-4 px-5 text-base bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-indigo-600 text-white py-3 px-12 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSubscribe;