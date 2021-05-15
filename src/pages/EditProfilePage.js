import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import EditProfile from '../components/EditProfile/EditProfile';

function EditProfilePage(props) {
    const Active = useSelector(state => state.CheckLogin);

    if (Active.isAuth === false) {
        return <Redirect to="/login" />
    }
    else return <div className="w-full">
        <EditProfile />
    </div>
}

export default EditProfilePage;