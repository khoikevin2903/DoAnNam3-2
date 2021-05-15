import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOption } from '../../reducers/optionShow';
import { useHistory } from 'react-router-dom';
import ClassNames from 'classnames';

function LeftList(props) {

    const history = useHistory();

    const dispatch = useDispatch();

    const options = useSelector(state => state.OptionShow);

    const check = useSelector(state => state.LeftList);

    return (
        <ul className={`h-screen shadow bg-white duration-500 ${check ? 'w-full' : 'w-1/3'}`}>
            <div className="cursor-pointer px-2 py-2"
                onClick={() => {
                    dispatch(changeOption(0));
                    history.push('/');
                }}
            >
                <div className={ClassNames('flex items-center rounded-md text-gray-500 hover:text-blue-300', { 'bg-gray-100 text-blue-400': options === 0 })}>
                    <i className="far fa-newspaper py-4 px-6 w-1/3" />
                    {check && <p className="w-2/3 text-sm">Newsfeed</p>}
                </div>
            </div>
            <li className="cursor-pointer px-2 py-2"
                onClick={() => {
                    dispatch(changeOption(1));
                    history.push('/chat')
                }}
            >
                <div className={ClassNames('flex items-center rounded-md text-gray-500 hover:text-blue-300 duration-300', { 'bg-gray-100 text-blue-400': options === 1 })}>
                    <i className="far fa-comment-dots w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Chat</p>}
                </div>
            </li>
            <li className="cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(2))}
            >
                <div className={ClassNames('flex items-center rounded-md text-gray-500 hover:text-blue-300 duration-300', { 'bg-gray-100 text-blue-400': options === 2 })}>
                    <i className="fas fa-user w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Profile</p>}
                </div>
            </li>
            <li className="cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(3))}
            >
                <div className={ClassNames('flex items-center rounded-md text-gray-500 hover:text-blue-300 duration-300', { 'bg-gray-100 text-blue-400': options === 3 })}>
                    <i className="fas fa-user-friends w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Friend List</p>}
                </div>
            </li>
            <li className="cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(4))}
            >
                <div className={ClassNames('flex items-center rounded-md text-gray-500 hover:text-blue-300 duration-300', { 'bg-gray-100 text-blue-400': options === 4 })}>
                    <i className="fas fa-users w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Groups</p>}
                </div>
            </li>
            <li className="cursor-pointer px-2 py-2"
                onClick={() => dispatch(changeOption(5))}
            >
                <div className={ClassNames('flex items-center rounded-md text-gray-500 hover:text-blue-300 duration-300', { 'bg-gray-100 text-blue-400': options === 5 })}>
                    <i className="far fa-bell w-1/3 py-4 px-6" />
                    {check && <p className="w-2/3 text-sm">Notification</p>}
                </div>
            </li>

        </ul>
    );
}

export default LeftList;