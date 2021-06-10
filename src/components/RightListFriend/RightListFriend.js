import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FetchListActive} from '../../reducers/ActiveUser';

function RightListFriend(props) {

    const dispatch = useDispatch();

    const ListActive = useSelector(active => active.ActiveUser);

    const User = useSelector(state => state.CheckLogin);

    useEffect( () => {
        async function fetchData() {
            await dispatch(FetchListActive(User.current.accessToken));
          }
          fetchData();    
    }, [])

    console.log(ListActive)

    return (
        <div className="w-full bg-white shadow h-screen pt-2">
            <div className="w-full flex items-center pb-1">
                <div className="px-4 py-2">
                    <img className="h-12 w-12 rounded-full" src="https://iqonic.design/themes/socialv/html/images/user/01.jpg" alt="" />
                </div>
                <div className="text-base pl-1">
                    <p>Anna Sthesia</p>
                    <p className="text-gray-400">Just Now</p>
                </div>
            </div>
            <div className="w-full flex items-center pb-1">
                <div className="px-4 py-2">
                    <img className="h-12 w-12 rounded-full" src="https://iqonic.design/themes/socialv/html/images/user/01.jpg" alt="" />
                </div>
                <div className="text-base pl-1">
                    <p>Anna Sthesia</p>
                    <p className="text-gray-400">Just Now</p>
                </div>
            </div>
            <div className="w-full flex items-center pb-1">
                <div className="px-4 py-2">
                    <img className="h-12 w-12 rounded-full" src="https://iqonic.design/themes/socialv/html/images/user/01.jpg" alt="" />
                </div>
                <div className="text-base pl-1">
                    <p>Anna Sthesia</p>
                    <p className="text-gray-400">Just Now</p>
                </div>
            </div>
            <div className="w-full flex items-center pb-1">
                <div className="px-4 py-2">
                    <img className="h-12 w-12 rounded-full" src="https://iqonic.design/themes/socialv/html/images/user/01.jpg" alt="" />
                </div>
                <div className="text-base pl-1">
                    <p>Anna Sthesia</p>
                    <p className="text-gray-400">Just Now</p>
                </div>
            </div>
        </div>
    );
}

export default RightListFriend;