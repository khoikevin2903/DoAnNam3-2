import React, { useState } from 'react';
import FormDatePicker from './FormDatePicker';
import { changeInfo } from '../../../reducers/changeInformation';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

function PersonalInformation(props) {

    const dispatch = useDispatch();

    const [info, setInfo] = useState({
        firstName: 'Khôi',
        lastName: 'Trần',
        idCardNumber: 123456789,
        city: 'Đà Nẵng',
        phoneNumber: '0786127507',
        age: '10',
        gender: true,
        dayOfBirth: new Date()
    })

    const [check, setCheck] = useState();

    const [mess, setMess] = useState();

    const [loading, setLoading] = useState(false);

    const HandleChangeInfo = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setInfo({...info, [name] : value});
        console.log({...info, [name] : value})
    }

    const HandleChangeDate = (date) => {
        setInfo({ ...info, dayOfBirth: date });
    }

    const HandleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const actionResult = await dispatch(changeInfo({
                firstName: info.firstName,
                lastName: info.lastName,
                idCardNumber: info.idCardNumber,
                address : info.city,
                phoneNumber: info.phoneNumber,
                age: info.age,
                gender: info.gender,
                dayOfBirth: info.dayOfBirth

            }));
            const currentResult = unwrapResult(actionResult);
            if (currentResult.status === 200) {
                setLoading(false);
                setCheck(true);
                setMess('Change information successfully !');
            } else {
                setLoading(false);
                setCheck(false);
                setMess('Password information failed !!!');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="bg-white rounded mt-4 shadow duration-300 pb-4">
            <div className="">
                <h1 className=" text-2xl py-4 px-6 opacity-70 font-normal border-b border-gray-200">Thông Tin Cá Nhân</h1>
                <div className="bg-white p-2">
                    <div className="p-2 relative">
                        <img src={require('../../../image/avatabig.png').default} alt=""
                            className="rounded-full h-40 w-40 bg-cover" />
                        <i className="fas fa-pencil-alt absolute text-white text-sm bg-blue-400 p-2 rounded-full left-32 bottom-4"></i>
                    </div>
                </div>
                <form className="">
                    <div className="grid grid-flow-row grid-cols-2 auto-rows-auto gap-1">
                        <p className="flex items-center mx-3">Tên:</p>
                        <p className="flex items-center mx-3">Họ:</p>
                        <input type="text" name="firstName" value={info.firstName} onChange={HandleChangeInfo} className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                        <input type="text" name="lastName" value={info.lastName} onChange={HandleChangeInfo} className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                        <p className="flex items-center mx-3">Chứng minh nhân dân:</p>
                        <p className="flex items-center mx-3">Thành phố:</p>
                        <input type="text" name="idCardNumber" value={info.idCardNumber} onChange={HandleChangeInfo} className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                        <input type="text" name="address " value={info.address } onChange={HandleChangeInfo} className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                        <p className="flex items-center mx-3">Số điện thoại:</p>
                        <p className="flex items-center mx-3">Tuổi:</p>
                        <input type="text" name="phoneNumber" value={info.phoneNumber} onChange={HandleChangeInfo} className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                        <input type="text" name="age" value={info.age} onChange={HandleChangeInfo} className=" flex items-center mx-3 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-none" />
                        <p className="flex items-center mx-3">Giới tính:</p>
                        <p className="flex items-center mx-3">Ngày sinh:</p>
                        <div className="flex items-center mx-3">
                            <label className="inline-flex items-center mr-6">
                                <input type="radio" className="form-radio h-5 w-5 text-blue-600" checked="checked" name="gender" value={info.gender} onChange={HandleChangeInfo} />
                                <span className="ml-2 text-gray-700">Nam</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio h-5 w-5 text-blue-600" name="gender" value={info.gender} onChange={HandleChangeInfo} />
                                <span className="ml-2 text-gray-700">Nữ</span>
                            </label>
                        </div>
                        <FormDatePicker HandleChange={HandleChangeDate} />
                    </div>
                    {check === false && <p className="py-1 text-red-600">{mess}</p>}
                    {check === true && <p className="py-1 text-green-400">{mess}</p>}
                    <div className="flex items-center mt-2">
                        <button type="submit" className="flex items-center justify-center mr-3 py-2 px-4 rounded-lg bg-blue-400 text-white cursor-pointer opacity-80 hover:opacity-100 duration-300"
                            onClick={HandleSubmit}
                        >
                            <span>Thay đổi</span>
                            {loading && (
                                <div className="duration-300 loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-5 w-5 ml-3"></div>
                            )}
                        </button>
                        <button type="reset" className="mr-3 py-2 px-4 rounded-lg bg-gray-100 text-yellow-500 cursor-pointer opacity-80 hover:opacity-100 duration-300">
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PersonalInformation;