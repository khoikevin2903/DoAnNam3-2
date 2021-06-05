import React from 'react';


function HeaderProfile(props) {
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
            <div className="absolute w-full flex justify-center items-center bottom-20">
                <div className="bg-avatabig bg-no-repeat bg-cover h-36 w-36 border-green-300 rounded-full"></div>
            </div>
        </div>
    );
}

export default HeaderProfile;