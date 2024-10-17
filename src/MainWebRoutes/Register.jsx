import React, { useContext } from 'react';
import { Await, Link, useNavigate } from 'react-router-dom';
import { ImageUrl } from '../Custom_Hooks/ImgAPI';
import axios from 'axios';
import { ContextProvider } from '../AllContext/ContextContainer';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import auth from '../FireBaseFiles/Frb';


const Register = () => {
    const { createUser } = useContext(ContextProvider)
    const navigate = useNavigate()
    const handleCreateUser = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        //Validation
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            toast.error(`Invalid email format`)
            return;
        }
        if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password))
        {
            toast.error(`Invalid Password`)
            return;
        }

        if(!name)
        {
            toast.error(`Name is required`)
            return;
        }
        if(!image)
        {
            toast.error(`Image is required`)
            return;
        }
        const getImageUrl = await ImageUrl(image)
        try {
            const { user } = await createUser(email, password)
            if (user) {
                await updateProfile(user, {
                    displayName: name,
                    photoURL: getImageUrl
                })
                toast.success(`Successfully registered`)
                navigate('/login')
            }
        }
        catch (error) {
            toast.error(`Failed to register`)
            console.log(error)
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex">
                {/* Left Section with Image and Text */}
                <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('s2.jpg')" }}>

                </div>

                {/* Right Section with the Registration Form */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="mb-6 text-center">
                        <h2 className="text-4xl font-bold text-gray-800">Register</h2>

                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleCreateUser}>
                        {/* Name Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

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

                        {/* Photo Upload Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Profile Photo</label>
                            <input
                                type="file"
                                name='image'
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                accept="image/*"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Create a strong password"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Register Button */}
                        <div className="mb-4">
                            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
                                Register Now
                            </button>
                        </div>
                    </form>

                    {/* Extra Links */}
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account? <Link to={'/login'} className="text-blue-500 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
