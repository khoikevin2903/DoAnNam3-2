import React from 'react';

function PersonalInformation(props) {
    return (
        <div className="bg-white rounded mt-4 shadow duration-300 pb-4">
            <div className="">
                <h1 className=" text-2xl py-4 px-6 opacity-70 font-normal border-b border-gray-200">Personal Information</h1>
                <div className="bg-white p-2">
                    <div className="p-2 relative">
                        <img src={require('../../../image/avatabig.png').default} alt=""
                            className="rounded-full h-40 w-40 bg-cover" />
                        <i className="fas fa-pencil-alt absolute text-white text-sm bg-blue-400 p-2 rounded-full left-32 bottom-4"></i>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-2 grid-rows-5 gap-1">
                    <p className="flex items-center mx-3">First Name:</p>
                    <p className="flex items-center mx-3">Last Name:</p>
                    <input type="text" name="firstName" className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                    <input type="text" name="lastName" className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                    <p className="flex items-center mx-3">User Name:</p>
                    <p className="flex items-center mx-3">City:</p>
                    <input type="text" name="userName" className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                    <input type="text" name="city" className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                    <p className="flex items-center mx-3">Gender:</p>
                    <p className="flex items-center mx-3">Date of Birth:</p>
                    <div className="flex items-center mx-3">
                        <label className="inline-flex items-center mr-6">
                            <input type="radio" className="form-radio h-5 w-5 text-blue-600"/>
                            <span className="ml-2 text-gray-700">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio h-5 w-5 text-blue-600"/>
                            <span className="ml-2 text-gray-700">Male</span>
                        </label>
                    </div>
                        <input type="text" name="firstName" className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />

                    </div>
                </div>
            </div>
    );
}

export default PersonalInformation;