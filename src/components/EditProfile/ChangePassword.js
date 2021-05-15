import React from 'react';

function ChangePassword(props) {

    const HandleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="bg-white rounded mt-4 shadow duration-300">
            <div className="">
                <h1 className=" text-2xl py-4 px-6 opacity-70 font-normal border-b border-gray-200">Change Password</h1>
                <form className="px-4 py-4">
                    <div className="mb-3">
                        <div className="flex items-center justify-between">
                            <p className="py-2 font-light opacity-75">Current Password</p>
                            <p className="text-blue-300 cursor-pointer hover:text-blue-500 duration-300">Forgot Password</p>
                        </div>
                        <input type="password" name="currentPassword" className="w-full rounded-lg border border-gray-200 py-3 text-sm px-3 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="mb-3">
                        <div className="flex items-center justify-between">
                            <p className="py-2 font-light opacity-75">New Password</p>
                        </div>
                        <input type="password" name="newPassword" className="w-full rounded-lg border border-gray-200 py-3 text-sm px-3 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="mb-3">
                        <div className="flex items-center justify-between">
                            <p className="py-2 font-light opacity-75">Verify Password</p>
                        </div>
                        <input type="password" name="verifyPassword" className="w-full rounded-lg border border-gray-200 py-3 text-sm px-3 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex items-center">
                        <button type="submit" className="mr-3 py-2 px-4 rounded-lg bg-blue-400 text-white cursor-pointer opacity-80 hover:opacity-100 duration-300"
                            onClick={HandleSubmit}
                        >
                            Submit
                        </button>
                        <button className="mr-3 py-2 px-4 rounded-lg bg-gray-100 text-yellow-500 cursor-pointer opacity-80 hover:opacity-100 duration-300">
                            Cancle
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;