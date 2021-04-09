import React from "react";
import Header from "../Header/Header";
import LeftList from "./LeftList/LeftList";
import RightListFriend from "./RightListFriend/RightListFriend";
import MainStatus from "./MainStatus/MainStatus";
import './Home.scss';
import FormCreate from "./MainStatus/FormCreatePost/FormCreate";
import { useSelector } from "react-redux";

function Home(props) {

    //const options = useSelector(state => state.OptionShow);

    const checkModal = useSelector(state => state.ShowModal);

    return <div className="w-full">
        <div className="shadow header fixed w-full bg-white">
            <Header/>
        </div>
        <div className="w-full h-full flex bg-gray-100 relative pt-20">
            <div className="w-1/6">
                <LeftList />
            </div>
            <div className="w-4/6 px-4 pt-4 ">
                <MainStatus />
            </div>
            <div className="w-1/6">
                <RightListFriend />
            </div>
            {checkModal && <div className="modal absolute"><FormCreate /></div>}
            
        </div>
    </div>
}

export default Home;
