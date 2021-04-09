import React from 'react';
import CreatePost from './CreatePost/CreatePost';
import Stories from './Stories';

function MainStatus(props) {
    return (
        <div className="w-full mx-3 flex pt-1">
            <div className="w-2/3">
                <div className="w-full bg-white text-xl rounded-md">
                    <CreatePost />
                </div>
                <div>

                </div>

            </div>
            <div className="w-1/3">
                <Stories />
            </div>
        </div>
    );
}

export default MainStatus;