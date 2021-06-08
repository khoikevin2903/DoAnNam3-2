import React from 'react';
import {useSelector } from "react-redux";
import { Redirect } from "react-router";
import Chat from '../components/Chat/Chat';

function ChatPage({match}){

    const Active = useSelector(state => state.CheckLogin);

    if (Active.isAuth === false) {
        return <Redirect to="/login" />
    }
    else return <div className="w-full">
        <Chat id={match.params.id}/>
    </div>
}

export default ChatPage;