import React from 'react';

function Post(props) {

    const item = {
        IdTravelSchedule: 1,
        IdUser: 1,
        name: 'Khoi Kevin',
        image: 'avata.jpg',
        status: '',
        startCity: null,
        startDistrict: null,
        endCity: null,
        endDistrict: null,
        startHours: null,
        startMinute: null,
        endHours: null,
        endMinute: null
    };
    return (
        <div className="bg-white rounded-md mt-4 p-4">
            <div className="flex items-center">
                {item.name !== "" && <img src={require('../../../../../image/avata.jpg').default} alt="" className="rounded-full h-16 w-16" />}
                <div className="ml-4 text-xl">
                    <h2 className="opacity-70">{item.name} <span className="text-sm opacity-60"> Add New Post</span></h2>
                    <p className="text-sm text-blue-300 font-thin">Just Now</p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Post;