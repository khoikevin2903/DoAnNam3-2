import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Profile from '../components/Profile/Profile';

function ProfilePage(props) {
    const Active = useSelector(state => state.CheckLogin);

    if (Active.isAuth === false) {
        return <Redirect to="/login" />
    }
    else return <div className="w-full">
        <Profile />
    </div>
}

export default ProfilePage;