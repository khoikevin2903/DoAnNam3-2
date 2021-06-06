import React, { useEffect } from 'react';
import Header from "../Header/Header";
import LeftList from "../LeftList/LeftList";
import RightListFriend from "../RightListFriend/RightListFriend";
import HeaderOtherProfile from './HeaderOtherProfile';
import {infoOtherUser, saveUser} from '../../reducers/otherUser';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from "@reduxjs/toolkit";

function OtherProfile({match}) {

    const User = useSelector(user => user.CheckLogin);

    const infoUser = useSelector(state => state.OtherUser);

    console.log(infoUser)

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const actionResult = await dispatch(infoOtherUser({id: match.params.id, header : User.current.accessToken}));
            const currentInfo = unwrapResult(actionResult);
            console.log(currentInfo);
            dispatch(saveUser(currentInfo));
        }
        fetchData();
      }, []);

    return <div className="w-full relative">
        <div className="shadow header fixed w-full bg-white">
            <Header />
        </div>
        <div className="w-full h-screen flex bg-gray-100 relative pt-20 justify-center pl-6 pr-4">
            <div className="fixed left-0 w-1/6">
                <LeftList />
            </div>
            <div className="w-4/6 px-4 pb-8 h-full">
                <HeaderOtherProfile />
            </div>
            <div className="w-1/6 w3-animate-right fixed right-0" style={{ animationDuration: "0.7s" }}>
                <RightListFriend />
            </div>

        </div>
    </div>
}

export default OtherProfile;