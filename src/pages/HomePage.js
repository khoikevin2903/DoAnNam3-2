import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Home from '../components/home/Home';

function HomePage(props) {
    const Active = useSelector(state => state.CheckLogin);
    console.log(Active)
    useEffect(() => {
        
    })
    if (Active.isAuth === false) {
        return <Redirect to="/login" />
    }
    else return <div className="w-full">
        <Home />
    </div>
}

export default HomePage;