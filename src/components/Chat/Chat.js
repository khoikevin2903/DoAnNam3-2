import React, { useState } from 'react';
import Header from "../Header/Header";
import LeftList from "../LeftList/LeftList";
import RightListFriend from "../RightListFriend/RightListFriend";
import ScrollColor from './ScrollColor';
import './Chat.scss';
import { Scrollbars } from 'react-custom-scrollbars';

function Chat(props) {

    const [checkMess, setCheckMess] = useState(false);

    const [checkWhoMess, setCheckWhoMess] = useState(0);

    const HandleChangeMess = (option) => {
        setCheckMess(true);
        setCheckWhoMess(option);
    }

    return <div className="w-full relative">
        <div className="shadow header fixed w-full bg-white">
            <Header />
        </div>
        <div className="w-full h-screen flex bg-gray-100 relative pt-20 justify-center pl-6 pr-4">
            <div className="fixed left-0 w-1/6">
                <LeftList />
            </div>
            <div className="w-4/6 px-4 pt-4 pb-8 h-full flex items-center">
                <div className="w-1/4 h-full bg-white px-3 py-4" style={{ borderRadius: "10px 0px 0px 10px" }}>
                    <div className="fixed bg-white pb-6 bg-white z-50">
                        <div className="flex items-center">
                            <div className="bg-avataImage bg-no-repeat bg-cover h-16 w-16 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Khoi Kevin</p>
                                <p className="opacity-60">Web Designer</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-gray-200 p-3 rounded-lg mt-6 px-2">
                            <i className="fas fa-search text-blue-300 mr-3"></i>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full focus:border-none focus:outline-none"
                            />
                        </div>
                    </div>
                    <ScrollColor
                        style={{ height: 600 }}
                        >
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(0)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Tran Anh Khoi</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 1 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(1)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Anh Khoi Tran</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 2 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(2)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Khoi Tran Anh</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(0)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Tran Anh Khoi</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 1 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(1)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Anh Khoi Tran</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 2 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(2)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Khoi Tran Anh</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(0)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Tran Anh Khoi</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 1 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(1)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Anh Khoi Tran</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 2 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(2)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Khoi Tran Anh</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(0)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Tran Anh Khoi</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 1 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(1)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Anh Khoi Tran</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 2 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(2)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Khoi Tran Anh</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(0)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Tran Anh Khoi</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 1 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(1)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Anh Khoi Tran</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 2 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(2)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Khoi Tran Anh</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(0)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Tran Anh Khoi</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 1 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(1)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Anh Khoi Tran</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                        <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === 2 ? 'bg-gray-50' : 'bg-white'}`}
                            onClick={() => HandleChangeMess(2)}>
                            <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                            <div className="ml-4">
                                <p className="opacity-80">Khoi Tran Anh</p>
                                <p className="opacity-60">Designer</p>
                            </div>
                        </li>
                    </ScrollColor>
                </div>
                <div className="w-3/4 h-full bg-bgChat bg-cover bg-no-repeat h-full" style={{ borderRadius: "0px 10px 10px 0px" }}>
                    {
                        !checkMess ? <div className="flex justify-center items-center h-full w-full">
                            <div>
                                <div className="flex items-center justify-center cursor-pointer">
                                    <div className="p-8 bg-white rounded-full h-24 w-24 flex justify-center items-center">
                                        <i className="far fa-comment-dots text-4xl text-blue-400"></i>
                                    </div>
                                </div>
                                <div className="p-3 bg-white rounded-lg mt-4 cursor-pointer">
                                    <p>Start Conversation!</p>
                                </div>
                            </div>

                        </div> :
                            <div className="w-full h-full flex flex-col justify-between">
                                <div className="flex items-center bg-white py-4 w-full justify-between">
                                    <div className="flex items-center text-xl">
                                        <div className="mr-4 bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                                        <p className="opacity-80">Tran Anh Khoi</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="text-blue-400 text-xl mx-1 p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                                            <ion-icon name="call-outline"></ion-icon>
                                        </div>
                                        <div className="text-blue-400 text-xl mx-1 p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                                            <ion-icon name="videocam-outline"></ion-icon>
                                        </div>
                                        <div className="text-blue-400 text-xl mx-1 p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                                            <ion-icon name="trash-outline"></ion-icon>
                                        </div>
                                        <div className="text-blue-400 text-xl mx-1 p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <Scrollbars style={{height: 650}}>
                                    <li className="p-2 bg-blue-400 text-white rounded-md">
                                        <span className="">
                                            aaa
                                        </span>
                                    </li>

                                </Scrollbars>
                                <div className="flex items-center bg-white px-4 py-4 w-full">
                                    <div className="text-gray-500">
                                        <i className="far fa-smile text-xl px-2"></i>
                                    </div>
                                    <div className="text-gray-500 px-2">
                                        <i className="fas fa-paperclip"></i>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Type your message"
                                        className="w-4/5 mx-2 px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                                    />
                                    <button className="p-2 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                                        <i className="far fa-paper-plane px-2"></i>
                                        <span>send</span>
                                    </button>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <div className="w-1/6 w3-animate-right fixed right-0" style={{ animationDuration: "0.7s" }}>
                <RightListFriend />
            </div>

        </div>
    </div>
}

export default Chat;