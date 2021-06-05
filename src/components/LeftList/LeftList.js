import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOption } from '../../reducers/optionShow';
import { useHistory } from 'react-router-dom';
import ClassNames from 'classnames';
import LeftListOption from '../../constants/LeftListOption';

function LeftList(props) {
    
    const history = useHistory();

    const dispatch = useDispatch();

    const options = useSelector(state => state.OptionShow);

    const check = useSelector(state => state.LeftList);

    const checkRoles = useSelector(state => state.CheckLogin.current.roles);

    const showList = (list) => {
        let result = null;
        if (list.length > 0) {
            result = list.map((item, index) => {
                return (
                    <li className="cursor-pointer px-2 py-2" key={index}
                        onClick={() => {
                            dispatch(changeOption(item.option));
                            history.push(item.path);
                        }}
                    >
                        <div className={ClassNames('flex items-center rounded-md text-gray-500 hover:text-blue-300', { 'bg-gray-100 text-blue-400': options === index })}>
                            {item.icon}
                            {check && <p className="w-2/3 text-sm">{item.name}</p>}
                        </div>
                    </li>
                )
            });
        }
        return result;
    }

    const ShowCheckRole = () =>{
        let result = null;
        if(checkRoles){
            checkRoles.map(item => {
                if(item === "ROLE_ADMIN") {
                    result = (
                        <li className="cursor-pointer px-2 py-2"
                            onClick={() => {
                                dispatch(changeOption(5));
                                history.push('/admin/contactsGrid');
                            }}
                        >
                            <div className={ClassNames('flex items-center rounded-md text-gray-500 hover:text-blue-300', { 'bg-gray-100 text-blue-400': options === 5 })}>
                                <i className="fas fa-list-ol w-1/3 py-4 px-6" />
                                {check && <p className="w-2/3 text-sm">Quản lý người dùng</p>}
                            </div>
                        </li>
                    )
                }
                return item;
            })
        }
        return result;
    }

    return (
        <ul className={`h-screen shadow bg-white duration-500 ${check ? 'w-full' : 'w-1/3'}`}>
            {showList(LeftListOption)}
            {ShowCheckRole()}
        </ul>
    );
}

export default LeftList;