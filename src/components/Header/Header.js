import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onList, offList } from "../../reducers/leftList";
import { onLogout } from '../../reducers/checkLogin';

function Header(props) {

	const check = useSelector((state) => state.LeftList);
	const [option, setOption] = useState(false);
	const HandleChangeOption = () => {
		setOption(!option);
	}
	const dispatch = useDispatch();
	return (
		<div className="w-full">
			<div className="flex items-center justify-between p-2">
				<div className="flex items-center">
					<div className="bg-logo bg-cover bg-no-repeat cursor-pointer w-44 h-16"></div>
					<div
						className="mt-3 ml-4 cursor-pointer"
						onClick={() => {
							if (check) dispatch(offList());
							else dispatch(onList());
						}}
					>
						<i className="fas fa-bars opacity-50"></i>
					</div>
				</div>
				<div className="flex items-center border border-gray-200 p-3 rounded-lg">
					<input
						type="text"
						placeholder="Type here to search..."
						className="w-80 focus:border-none focus:outline-none"
					/>
					<i className="fas fa-search text-blue-300"></i>
				</div>
				<div className="flex items-center w3-animate-right">
					<ul className="flex items-center">
						<li className="bg-avataImage h-12 w-12 bg-cover rounded-full cursor-pointer"></li>
						<li className="mx-4 cursor-pointer">Khoi Kevin</li>
						<li className="text-blue-300 mx-4 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
						</li>
						<li className="text-blue-300 mx-4 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</li>
						<li className="text-blue-300 mx-4 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
							</svg>
						</li>
						<li className="text-blue-300 mx-4 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</li>
					</ul>
					<ul className="relative">
						<i className="fas fa-sort-down text-blue-300 mx-4 cursor-pointer" onClick={HandleChangeOption} />
						{
							option && <div className="absolute w-80 right-0 top-12 mt-1 z-50 shadow-xl animate-fade-in-up">
								<div className="text-white bg-blue-400 py-4 px-3 rounded-t-md font-sans">
									<h5 className="text-xl">Hello Khoi Kevin</h5>
									<p className="text-xs">Available</p>
								</div>
								<div className="bg-white py-4 px-3 flex items-center border-b border-gray-50 hover:bg-gray-100 duration-500">
									<div className="text-blue-300 w-1/5 flex justify-center">
										<i className="far fa-id-badge text-xl bg-gray-100 py-3 px-4 rounded-md" />
									</div>
									<div className="w=4/5 px-6">
										<h5 className="text-sm opacity-90">My Profile</h5>
										<p className="text-xs opacity-50">View personal profile details</p>
									</div>
								</div>
								<div className="cursor-pointer bg-white py-4 px-3 flex items-center border-b border-gray-50 hover:bg-gray-50 duration-500">
									<div className="text-yellow-400 w-1/5 flex justify-center">
										<i className="far fa-address-card text-base bg-gray-50 py-4 px-4 rounded-md" />
									</div>
									<div className="w=4/5 px-6">
										<h5 className="text-sm opacity-90">Edit Profile</h5>
										<p className="text-xs opacity-50">Modify your personal details</p>
									</div>
								</div>
								<div className="cursor-pointer bg-white py-4 px-3 flex items-center border-b border-gray-50 hover:bg-gray-200 duration-500">
									<div className="text-gray-500 w-1/5 rounded-md flex justify-center">
										<i className="far fa-user text-base bg-gray-200 py-4 px-4 rounded-md" />
									</div>
									<div className="w=4/5 px-6">
										<h5 className="text-sm opacity-90">Account Settings</h5>
										<p className="text-xs opacity-50">Manage your account parameters</p>
									</div>
								</div>
								<div className="cursor-pointer bg-white py-4 px-3 flex items-center border-b border-gray-50 hover:bg-gray-50 duration-500">
									<div className="text-gray-500  w-1/5 flex justify-center">
										<i className="fas fa-lock text-base bg-gray-50 py-4 px-4 rounded-md" />
									</div>
									<div className="w=4/5 px-6">
										<h5 className="text-sm opacity-90">Privacy Settings</h5>
										<p className="text-xs opacity-50">Modify your personal details</p>
									</div>
								</div>
								<div className="cursor-pointer py-8 bg-white cursor-pointer rounded-b-md">
									<div className="flex justify-center items-center text-white bg-blue-400 py-1 mx-24 rounded-lg opacity-90 hover:opacity-100 duration-500"
										onClick={() => dispatch(onLogout())}
									>
										<p>Sing out</p>
										<i className="fas fa-sign-out-alt ml-2"></i>
									</div>
								</div>
							</div>
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
