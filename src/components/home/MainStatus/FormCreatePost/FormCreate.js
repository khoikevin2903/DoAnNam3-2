import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { offModal } from '../../../../reducers/showModal';
import FormStartPlace from '../../../FormInfoPlace/FormStartPlace';
import FormEndPlace from '../../../FormInfoPlace/FormEndPlace';
import FormTime from '../../../FormInfoPlace/FormTime';
import * as Time from '../../../../constants/Address';

function FormCreate(props) {

    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date());

    const Place = useSelector(state => state.Place);

    const InfoPlace = useSelector(state => state.InfoPlace);

    const InfoPlaceName = useSelector(state => state.InfoPlaceName);

    const districtStart = useSelector(state => state.DisTrictsStart);

    const districtEnd = useSelector(state => state.DisTrictsEnd);

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
                                    <FormStartPlace array={Place.map(rs => rs.name)} name="startCity" width="w-52" type="Tỉnh/Thành Phố" />
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <FormStartPlace array={InfoPlace.startCity !== null ? districtStart.map(rs => rs.name) : null} name="startDistrict" width="w-52" type="Quận/Huyện" />
                                </div>
                                <div className="flex justify-center items-center rounded-lg mr-4 text-xl opacity-70">
                                    <i className="fas fa-plane-departure text-blue-400 mr-4"></i>
                                    <p >End Place : </p>
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <FormEndPlace array={Place.map(rs => rs.name)} name="endCity" width="w-52" type="Tỉnh/Thành Phố" />
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <FormEndPlace array={InfoPlace.endCity !== null ? districtEnd.map(rs => rs.name) : null} name="endDistrict" width="w-52" type="Quận/Huyện" />
                                </div>
                                <div className="flex justify-center items-center rounded-lg mr-4 text-xl opacity-70">
                                    <i className="fas fa-hourglass-start text-blue-400 mr-4"></i>
                                    <p >Start Time : </p>
                                </div>
                                {/* <div className="max-w-xs mt-12 mx-auto">
                                    <DatePicker date={date} onChange={setDate}></DatePicker>
                                </div> */}

                                {/* <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <FormTime array={Time.Hours} name="startHours" width="w-52" type="Hours"/>
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <FormTime array={Time.Minute} name="startMinute" width="w-52" type="Minute"/>
                                </div> 
                                <div className="flex justify-center items-center rounded-lg mr-4 text-xl opacity-70">
                                <i className="fas fa-hourglass-end text-blue-400 mr-4"></i>
                                    <p >End Time : </p>
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <FormTime array={Time.Hours} name="endHours" width="w-52" type="Hours"/>
                                </div>
                                <div className="flex items-center shadow-md px-2 py-2 rounded-md">
                                    <FormTime array={Time.Hours} name="endMinute" width="w-52" type="Minute"/>
                                </div> */}

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