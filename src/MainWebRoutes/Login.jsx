import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex">
                {/* Left Section with Image and Text */}
                <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('s1.jpg')" }}>
                   
                </div>

                {/* Right Section with the Login Form */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="mb-6 text-center">
                        <h2 className="text-4xl font-bold text-gray-800">Login</h2>
                    </div>

                    {/* Login Form */}
                    <form>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Login Button */}
                        <div className="mb-4">
                            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
                                Login Now
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center justify-center mb-6">
                            <span className="h-px w-1/4 bg-gray-300"></span>
                            <span className="mx-3 text-gray-500">OR</span>
                            <span className="h-px w-1/4 bg-gray-300"></span>
                        </div>

                        {/* Google Sign-In Button */}
                        <div className="mb-4">
                            <button className="w-full py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-lg border hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                                    alt="Google logo"
                                    className="w-5 h-5 mr-2"
                                />
                                Sign in with Google
                            </button>
                        </div>
                    </form>

                    {/* Extra Links */}
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account? <Link to={'/register'} className="text-blue-500 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;