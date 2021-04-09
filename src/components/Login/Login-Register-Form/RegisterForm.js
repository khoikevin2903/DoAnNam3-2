import React from 'react';
import './login-register.scss';

function registerForm(props) {
    return (
        <div className="flex items-center justify-center w-1/2">
            <div className="w-7/12">
                <div className="bg-logo bg-no-repeat bg-cover w-44 h-16 cursor-pointer"></div>
                <div className="pl-3 mt-20">
                    <h1 className="text-3xl font-semibold mb-1">Register</h1>
                    <p className="opacity-50 font-medium">Create an account free and enjoy it</p>
                </div>
                <form action="" method="post" className="pl-3 mt-14">
                    <div className="animate-fade-in-up-0 border-b border-gray-200 flex items-center justify-between rounded py-1 input">
                        <input type="text" placeholder="Name" className="pl-2 w-full mr-2 py-1" name="name" />
                        <i className="far fa-user opacity-50 mr-2"></i>
                    </div>
                    <div className="animate-fade-in-up-1 border-b border-gray-200 flex items-center justify-between rounded py-1 input mt-4">
                        <input type="text" placeholder="Email Address" className="pl-2 w-full mr-2 py-1" name="email" />
                        <i className="far fa-envelope opacity-50 mr-2"></i>
                    </div>
                    <div className="animate-fade-in-up-2 border-b border-gray-200 flex items-center justify-between rounded py-1 mt-4 input">
                        <input type="text" placeholder="Password" className="pl-2 w-full mr-2 py-1" name="password" />
                        <i className="fas fa-lock opacity-50 mr-2"></i>
                    </div>
                    <div className="animate-fade-in-up-3 flex items-center justify-between mt-8">
                        <input type="button" value="Register" className="cursor-pointer py-3 px-10 rounded login-register-btn text-white font-medium hover:opacity-70 transition duration-700" />
                    </div>
                    <div className="mt-10 flex items-center justify-center">
                        <div className="cursor-pointer animate-fade-in-up-icon-1 mx-1 border border-blue-800 p-3 rounded-full bg-blue-800 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-blue-800 transition duration-500">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="cursor-pointer animate-fade-in-up-icon-2 mx-1 border border-blue-400 p-3 rounded-full bg-blue-400 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-blue-400 transition duration-500">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="cursor-pointer animate-fade-in-up-icon-3 mx-1   border border-red-600 p-3 rounded-full bg-red-600 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition duration-500">
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                        <div className="cursor-pointer animate-fade-in-up-icon-4 mx-1 border border-blue-600 p-3 rounded-full bg-blue-600 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition duration-500">
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                        <div className="cursor-pointer animate-fade-in-up-icon-5 mx-1 border border-red-700 p-3 rounded-full bg-red-700 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-red-700 transition duration-500">
                            <i className="fab fa-pinterest-p"></i>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default registerForm;