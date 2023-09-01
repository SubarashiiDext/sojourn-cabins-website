import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full pb-8 bg-blue-100">
            <h1 className="text-4xl font-bold mt-24 mb-8 text-blue-500">Sojourn Cabins</h1>
            <div className="max-w-md md:w-full bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Log In</h2>
                <form className="space-y-4">
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
                        <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded"
                    >
                        Log In
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don&apos;t have an account? <a href="/" className="text-blue-500"><a href="/SignUp">Sign Up</a></a>
                </p>
            </div>
        </div>
    );
};

export default Login;