import React, { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ClassNames from 'classnames';
import UseSocket from './UseSocket';
import { SOCKET_URL } from '../../constants/Socket_URL';
import useSockjs from 'react-use-sockjs';

function FormChat(props) {

    const { arr, name, senderId, recipientId, idChat } = props;

    const [mess, setMess] = useState({
        messages: arr,
        recipientId: recipientId,
        senderId: senderId,
        content: ''
    })

    const { sendMessage } = useSockjs({
        url: SOCKET_URL,
        topics: [`/topic/${idChat}/queue/messages`],
        onMessage: (body, destination) => {
            console.log(body, destination);
        },
        onConnect : () => {
            console.log('ok')
        }
    });

    useEffect(() => {
        setMess({...mess, messages: arr})
    }, [arr])

    const HandleChangeMess = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setMess({ ...mess, [name]: value });
    }

    const elm = mess.messages.length > 0 ? mess.messages.map((item, index) => {
        return (
            <div className={ClassNames("py-2 px-3", {
                "text-right": item.senderId === senderId
            })} key={index}>
                <span className="py-2 px-4 w-auto bg-blue-400 text-white rounded-lg">{item.content}</span>
            </div>
        )
    }) : "";

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="flex items-center bg-white py-4 w-full justify-between">
                <div className="flex items-center text-xl">
                    <div className="mr-4 bg-avataImage2 bg-no-repeat bg-cover h-14 w-14 rounded-lg" />
                    <p className="opacity-80">{name}</p>
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
            <div className="mt-2">
                <Scrollbars style={{ height: 450 }}>
                    {elm}
                </Scrollbars>
            </div>
            <div className="flex items-center bg-white px-4 py-4 w-full">
                <div className="text-gray-500">
                    <i className="far fa-smile text-xl px-2"></i>
                </div>
                <div className="text-gray-500 px-2">
                    <i className="fas fa-paperclip"></i>
                </div>
                <input
                    value={mess.content}
                    onChange={HandleChangeMess}
                    name="content"
                    type="text"
                    placeholder="Type your message"
                    className="w-4/5 mx-2 px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                />
                <button className="p-2 rounded-lg bg-blue-500 text-white flex items-center justify-center"
                   
                >
                    <i className="far fa-paper-plane px-2"></i>
                    <span>send</span>
                </button>
            </div>
        </div>
    );
}

export default FormChat;