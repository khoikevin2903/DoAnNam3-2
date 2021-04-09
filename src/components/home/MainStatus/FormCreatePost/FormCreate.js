import React from 'react';
import { useDispatch } from 'react-redux';
import { offModal } from '../../../../reducers/showModal';
import * as Info from '../../../../constants/Address';
import Form from './../../../FormInfo/Form';

const city = JSON.parse(localStorage.getItem('dbPlace')).map(state => state.name);

function FormCreate(props) {

    console.log(city)

    const dispatch = useDispatch();
    return (
        <div className="flex justify-center px-3 ml-6 ">
            <div className=" w-2/3">
                <div className="w-2/3 animate-fade-in-down">
                    <div className="bg-white rounded-md">
                        <div className="py-4 px-6 border-b flex items-center justify-between">
                            <h2 className="opacity-80 text-blue-500 text-2xl">Create Post</h2>
                            <div className="text-white bg-gray-400 h-8 w-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-500 duration-500"
                                onClick={() => dispatch(offModal())}
                            >
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                        <div className="">
                            <div className="px-4">
                                <div className=" flex items-center border-b py-3">
                                    <div className="bg-avataImage h-16 w-16 bg-cover rounded-full mr-6"></div>
                                    <input type="text" placeholder="Write something here..." className="text-sm font-normal px-3 focus:outline-none focus:border-none" />
                                </div>
                            </div>
                            <div className="py-3 px-4 grid grid-flow-row grid-cols-3 grid-rows-4 gap-4 border-b">
                                <div className="flex justify-center items-center rounded-lg mr-4 text-xl opacity-70">
                                    <i className="fas fa-plane-departure text-blue-400 mr-4"></i>
                                    <p >Start Place : </p>
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <Form array={city} name="city" width="w-52" />
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <Form array={city} name="From" width="w-52" />
                                </div>
                                <div className="flex justify-center items-center rounded-lg mr-4 text-xl opacity-70">
                                    <i className="fas fa-plane-arrival text-blue-400 mr-4"></i>
                                    <p >End Place : </p>
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <Form array={city} name="From" width="w-52" />
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <Form array={city} name="From" width="w-52" />
                                </div>
                                <div className="flex justify-center items-center rounded-lg mr-4 text-xl opacity-70">
                                    <i className="fas fa-hourglass-start text-blue-400 mr-4"></i>
                                    <p >Start Time : </p>
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <Form array={Info.THANHPHO} name="From" width="w-52" />
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <Form array={Info.THANHPHO} name="From" width="w-52" />
                                </div>
                                <div className="flex justify-center items-center rounded-lg mr-4 text-xl opacity-70">
                                <i className="fas fa-hourglass-end text-blue-400 mr-4"></i>
                                    <p >End Time : </p>
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <Form array={Info.THANHPHO} name="From" width="w-52" />
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <Form array={Info.THANHPHO} name="From" width="w-52" />
                                </div>

                            </div>
                            <div className="py-3 px-2">
                                <div className="flex justify-center">
                                    <p className="cursor-pointer transition duration-500 hover:no-underline ease-in-out transform hover:-translate-y-1 hover:scale-110 py-2 px-16 hover:bg-blue-500 hover:text-white border border-blue-600 rounded-lg text-blue-400 text-xl">
                                        Create Post
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default FormCreate;