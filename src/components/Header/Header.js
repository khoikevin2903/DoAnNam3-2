import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onList, offList } from "../../reducers/leftList";
import {onLogout} from '../../reducers/checkLogin';

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
				<div className="flex items-center ">
					<ul className="flex items-center">
						<li className="bg-avataImage h-12 w-12 bg-cover rounded-full cursor-pointer"></li>
						<li className="mx-4 cursor-pointer">Khoi Kevin</li>
						<li className="fas fa-home text-blue-300 mx-4 cursor-pointer" />
						<li className="fas fa-user-friends text-blue-300 mx-4 cursor-pointer" />
						<li className="fas fa-bell text-blue-300 mx-4 cursor-pointer" />
						<li className="fas fa-envelope-open-text text-blue-300 mx-4 cursor-pointer" />
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
										<i class="fas fa-sign-out-alt ml-2"></i>
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
