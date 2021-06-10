import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function RightListFriend(props) {

    const token = useSelector(state => state.CheckLogin.current.accessToken);

    const [listActive, setListActive] = useState([])


    useEffect(() => {
        async function fetchData() {
            await axios.get(`https://chatchit69.herokuapp.com/api/active/active-users`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => setListActive(res.data));
        }
        fetchData();
    }, [])

    console.log(listActive)

    const showList = (list) => {
        let result = [];
        result = list.length > 0 ? list.map((item, index) => {
            return (
                <li className="w-full flex items-center pb-1" key={index}>
                    <div className="px-4 py-2">
                        {item.gender === true ?
                            <img className="h-12 w-12 rounded-full" src="https://iqonic.design/themes/socialv/html/images/user/02.jpg" alt="" />
                            : <img className="h-12 w-12 rounded-full" src="https://iqonic.design/themes/socialv/html/images/user/01.jpg" alt="" />
                        }
                    </div>
                    <div className="text-base pl-1">
                        <p>{`${item.lastName} ${item.firstName}`}</p>
                        <p className="text-gray-400">Just Now</p>
                    </div>
                </li>
            )
        }) : []
        return result;
    }

    return (
        <ul className="w-full bg-white shadow h-screen pt-2">
           {showList(listActive)}
        </ul>
    );
}

export default RightListFriend;