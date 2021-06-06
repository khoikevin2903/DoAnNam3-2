import React, { useState } from 'react';
import Header from "../Header/Header";
import LeftList from "../LeftList/LeftList";
import RightListFriend from "../RightListFriend/RightListFriend";
import ScrollColor from './ScrollColor';
import './Chat.scss';
import { useDispatch, useSelector } from 'react-redux';
import FormChat from './FormChat';
import {FetchConversation} from '../../reducers/conversation';


function Chat(props) {
 
    const dispatch = useDispatch();

    const User = useSelector(state => state.CheckLogin);

    const ListMess = useSelector(state => state.Conversation);

    const [checkMess, setCheckMess] = useState(false);

    const [checkWhoMess, setCheckWhoMess] = useState({});

    const HandleChangeMess = (name) => {
        setCheckMess(true);
        setCheckWhoMess({...name});
    }

    const list = useSelector(state => state.FetchListChat);

    const ShowListChat = (listChat) => {
        let result;
        if (listChat.length > 0) {
            result = listChat.map((item, index) => {
                return (
                    <li className={`flex items-center py-3 border-t border-gray-200 cursor-pointer ${checkWhoMess === index ? 'bg-gray-50' : 'bg-white'}`}
                        onClick={() => {
                            dispatch(FetchConversation({senderId: User.current.id, recipientId : item.id, header: User.current.accessToken}))
                            HandleChangeMess({username: item.username, recipientId: item.id});
                            }} key={index}>
                        <div className="bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                        <div className="ml-4">
                            <p className="opacity-80">{item.username}</p>
                            <p className="opacity-60 text-xs">{item.email}</p>
                        </div>
                    </li>
                )
            })
        }
        return result;
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
                    <div className="bg-white pb-6 bg-white z-50">
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
                        style={{ height: 400 }}
                    >
                        {ShowListChat(list)}    
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
                            <FormChat arr={ListMess.listMess} name={checkWhoMess.username} senderId={User.current.id} recipientId={checkWhoMess.recipientId} idChat={ListMess.id}/>
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