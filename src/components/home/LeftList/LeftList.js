import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOption } from './../../../reducers/optionShow';
import ClassNames from 'classnames';

function LeftList(props) {

    const dispatch = useDispatch();
    const options = useSelector(state => state.OptionShow);
    const check = useSelector(state => state.LeftList);
    
    return (
        <div className={`h-screen shadow bg-white duration-500   ${check ? 'w-full' : 'w-1/3'}`}>
            <div className="opacity-50 cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(0))}
            >
                <div className={ClassNames('flex items-center rounded-md', { 'bg-gray-100': options === 0 })}>
                    <i className="far fa-newspaper py-4 px-6 w-1/3" />
                    {check && <p className="w-2/3 text-sm">Newsfeed</p>}
                </div>
            </div>
            <div className="opacity-50 cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(1))}
            >
                <div className={ClassNames('flex items-center rounded-md', { 'bg-gray-100': options === 1 })}>
                    <i className="fas fa-user w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Profile</p>}
                </div>
            </div>
            <div className="opacity-50 cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(2))}
            >
                <div className={ClassNames('flex items-center rounded-md', { 'bg-gray-100': options === 2 })}>
                    <i className="fas fa-user-friends w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Friend List</p>}
                </div>
            </div>
            <div className="opacity-50 cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(3))}
            >
                <div className={ClassNames('flex items-center rounded-md', { 'bg-gray-100': options === 3 })}>
                    <i className="fas fa-users w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Groups</p>}
                </div>
            </div>
            <div className="opacity-50 cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(4))}
            >
                <div className={ClassNames('flex items-center rounded-md', { 'bg-gray-100': options === 4 })}>
                    <i className="far fa-bell w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Notification</p>}
                </div>
            </div>
            <div className="opacity-50 cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(5))}
            >
                <div className={ClassNames('flex items-center rounded-md', { 'bg-gray-100': options === 5 })}>
                    <i className="far fa-comment-dots w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Chat</p>}
                </div>
            </div>
        </div>
    );
}

export default LeftList;