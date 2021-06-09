import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Chat from '../components/Chat/Chat';

function ChatPage({ match }) {

    const Active = useSelector(state => state.CheckLogin);

    const list = useSelector(state => state.FetchListChat);

    const ListUser = useSelector(state => state.FetchAllUser);

    var check = false;

    var name = "";

    for (let i = 0; i < list.length; i++) {
        if (list[i].id === Number.parseInt(match.params.id)) {
            check = true;
            name = `${list[i].lastName} ${list[i].firstName}`;
            break;
        }
    }
    if (!check) {
        for (let i = 0; i < ListUser.length; i++) {
            if (ListUser[i].id === Number.parseInt(match.params.id)) {
                name = `${ListUser[i].lastName} ${ListUser[i].firstName}`;
                break;
            }
        }
    }

    if (Active.isAuth === false) {
        return <Redirect to="/login" />
    }
    else return <div className="w-full">
        <Chat id={match.params.id} check={check} name={name} />
    </div>
}

export default ChatPage;