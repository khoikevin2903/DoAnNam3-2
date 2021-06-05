import React, { useState } from 'react';
import ClassNames from 'classnames';

function HeaderOtherProfile(props) {

    const [option, setOption] = useState(1);

    return (
        <div className="bg-white relative rounded-md">
            <div className="bg-bgProfile bg-no-repeat bg-cover h-64 w-full rounded-b-md relative">
                <div className="absolute right-0 bottom-4 opacity-80">
                    <ul className="flex items-center">
                        <li className="flex items-center justify-center mx-2 text-blue-500 h-10 w-10 bg-white rounded-full">
                            <i className="far fa-edit"></i>
                        </li>
                        <li className="flex items-center justify-center ml-1 mr-3 text-blue-500 h-10 w-10 bg-white rounded-full">
                            <ion-icon name="settings-outline"></ion-icon>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="grid grid-flow-row grid-cols-3 grid-rows-1 gap-4 py-6 px-6">
                <ul className="flex items-center">
                    <li className="px-2 cursor-pointer">
                        <img src="https://iqonic.design/themes/socialv/html/images/icon/08.png" alt="" className="rounded" />
                    </li>
                    <li className="px-2 cursor-pointer">
                        <img src="https://iqonic.design/themes/socialv/html/images/icon/09.png" alt="" className="rounded" />
                    </li>
                    <li className="px-2 cursor-pointer">
                        <img src="https://iqonic.design/themes/socialv/html/images/icon/10.png" alt="" className="rounded" />
                    </li>
                    <li className="px-2 cursor-pointer">
                        <img src="https://iqonic.design/themes/socialv/html/images/icon/11.png" alt="" className="rounded" />
                    </li>
                    <li className="px-2 cursor-pointer">
                        <img src="https://iqonic.design/themes/socialv/html/images/icon/12.png" alt="" className="rounded" />
                    </li>
                    <li className="px-2 cursor-pointer">
                        <img src="https://iqonic.design/themes/socialv/html/images/icon/13.png" alt="" className="rounded" />
                    </li>
                </ul>
                <div className="text-2xl font-medium flex justify-center opacity-80">
                    <h2>Khoi Kevin</h2>
                </div>
                <div>
                    <ul className="flex items-center justify-center opacity-80 ml-14">
                        <li className="px-3">
                            <h6>Posts</h6>
                            <p className="flex justify-center opacity-75">690</p>
                        </li>
                        <li className="px-3">
                            <h6>Followers</h6>
                            <p className="flex justify-center opacity-75">206</p>
                        </li>
                        <li className="pl-3">
                            <h6>Following</h6>
                            <p className="flex justify-center opacity-75">100</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 mx-8">
                <div className="flex items-center">
                    <div className={ClassNames(
                        "px-3 py-4 font-bold text-gray-500 cursor-pointer",
                        {
                            " border-b-2 border-blue-600 text-blue-600": option === 1
                        }
                    )} onClick={() => setOption(1)}>
                        <p>Bài viết</p>
                    </div>
                    <div className={ClassNames(
                        "px-3 py-4 font-bold text-gray-500 cursor-pointer",
                        {
                            " border-b-2 border-blue-600 text-blue-600": option === 2
                        }
                    )} onClick={() => setOption(2)}>
                        <p>Giới thiệu</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="text-white p-2 mx-2 bg-blue-500 flex items-center justify-center rounded-lg font-bold">
                        <i className="fab fa-facebook-messenger pr-2"></i>
                        <p>Nhắn tin</p>
                    </button>
                    <button className="text-black bg-gray-200 px-6 py-3 text-xs rounded-lg">
                        <i className="fas fa-ellipsis-h opacity-70"></i>
                    </button>
                </div>
            </div>
            <div className="absolute w-full flex justify-center items-center bottom-20">
                <div className="bg-avatabig bg-no-repeat bg-cover h-36 w-36 border-green-300 rounded-full"></div>
            </div>

        </div>
    );
}

export default HeaderOtherProfile;