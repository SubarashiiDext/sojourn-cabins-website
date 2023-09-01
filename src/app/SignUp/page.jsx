"use client"
import React, { useState } from 'react';

const Signup = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (confirmPassword && e.target.value !== confirmPassword) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        // Check if passwords match when the confirm password input changes
        if (e.target.value !== password) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full pb-8 bg-blue-100">
            <h1 className="text-4xl font-bold mt-24 mb-8 text-blue-500">Sojourn Cabins</h1>
            <div className="max-w-md md:w-full bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1 font-semibold">First Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 font-semibold">Last Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 font-semibold">Phone Number</label>
                        <input
                            type="number"
                            id="name"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your phone name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 font-semibold">Country</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your country"
                        />
                    </div>


                    {/* <div>
                        <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your password"
                        />
                    </div> */}

                    <div>
                        <label htmlFor="password" className="block mb-1 font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 p-2 rounded mb-2"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        <label htmlFor="confirmPassword" className="block mb-1 font-semibold">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={`w-full border p-2 rounded ${passwordMatch ? 'border-gray-300' : 'border-red-500'
                                }`}
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />

                        {!passwordMatch && (
                            <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <a href="/" className="text-blue-500"><a href="/Login">Login</a></a>
                </p>
            </div>
        </div>
    );
};

export default Signup;