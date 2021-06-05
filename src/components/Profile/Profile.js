import React, { useState } from 'react';
import Header from "../Header/Header";
import LeftList from "../LeftList/LeftList";
import RightListFriend from "../RightListFriend/RightListFriend";
import HeaderProfile from './HeaderProfile';
import Introduce from './Introduce';
import MyPost from './MyPost';
import Rating from './Rating';

function Profile(props) {

    return (
        <div className="w-full relative">
            <div className="shadow header fixed w-full bg-white">
                <Header />
            </div>
            <div className="w-full flex bg-gray-100 relative pt-20 justify-center pl-6 pr-4">
                <div className="fixed left-0 w-1/6">
                    <LeftList />
                </div>
                <div className="w-4/6 px-4 pb-8 h-full bg-gray-100">
                    <HeaderProfile />
                    <div className="w-full flex pt-2">
                        <div className="w-1/3 mr-2 mt-4">
                            <Introduce />
                            <Rating />
                        </div>
                        <div className="w-2/3">
                            <MyPost />
                        </div>
                    </div>
                </div>
                <div className="w-1/6 w3-animate-right fixed right-0" style={{ animationDuration: "0.7s" }}>
                    <RightListFriend />
                </div>

            </div>
        </div>
    )
}

export default Profile;