import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../AllContext/ContextContainer';
import toast from 'react-hot-toast';
import useAxiosSecure, { axiosSecure } from '../Custom_Hooks/useAxiosSecure';
import { axiosNormal } from '../Custom_Hooks/useAxios';

const Login = () => {
    const { loginUser, googleLogin } = useContext(ContextProvider)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    // State for role selection with 'User' as default
    const [role, setRole] = useState('User');
    const handleLogin = async e => {
        e.preventDefault();
        // Add your login logic here
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userRole = role;
        console.log(email, password, userRole)
        //Validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error(`Invalid email format`)
            return;
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            toast.error(`Invalid Password`)
            return;
        }
        try {
            const { user } = await loginUser(email, password)
            console.log(user)
            if (user) {
                const { data } = await axiosSecure.post(`/jwt`, { email: user?.email })
                console.log(data)
                if (data) {
                    const userData = {
                        name: user?.displayName,
                        email: user?.email,
                        userRole: role,
                        time: new Date()
                    }
                    console.log(userData)
                    const { data: userLoginData } = await axiosNormal.put('/user', userData)
                    if (userLoginData) {
                        toast.success("Login successfully")
                        navigate('/')
                    }
                }
            }
        }
        catch (error) {
            console.error(error)
            toast.error("Failed to login")
        }
    }
    const handleGoogleLogin = async () => {
        const googleRole = 'User'
        const { user } = await googleLogin();
        if (user) {
            console.log(user)
            const { data } = await axiosSecure.post(`/jwt`, { email: user?.email })
            console.log(data)
            if (data) {
                const userData = {
                    name: user?.displayName,
                    email: user?.email,
                    userRole: googleRole,
                    time: new Date()
                }
                console.log(userData)
                const { data: userGoogleData } = await axiosNormal.put('/user', userData)
                if (userGoogleData) {
                    toast.success("Google Login successfully")
                    navigate('/')
                }
            }
        }
        else {
            toast.error("Failed to login with Google")
        }
    }
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
                    <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Email Address</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Role Selection */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Select Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="User">User</option>
                                <option value="DeliveryMan">DeliveryMan</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                name='password'
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
                    </form>

                    {/* Divider */}
                    <div className="flex items-center justify-center mb-6">
                        <span className="h-px w-1/4 bg-gray-300"></span>
                        <span className="mx-3 text-gray-500">OR</span>
                        <span className="h-px w-1/4 bg-gray-300"></span>
                    </div>

                    {/* Google Sign-In Button */}
                    <div className="mb-4">
                        <button onClick={handleGoogleLogin} className="w-full py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-lg border hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                                alt="Google logo"
                                className="w-5 h-5 mr-2"
                            />
                            Sign in with Google
                        </button>
                    </div>


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
