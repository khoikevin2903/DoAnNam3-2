import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import LeftList from '../../../components/LeftList/LeftList';
import RightListFriend from "../../../components/RightListFriend/RightListFriend";
import { Link } from 'react-router-dom';
import Classnames from 'classnames';
import { useSelector } from 'react-redux';


function ContactsGrid(props) {

    const ListUser = useSelector(state => state.FetchAllUser);

    const [page, setPage] = useState(1);

    return (
        <div className="w-full relative">
            <div className="shadow header fixed w-full bg-white">
                <Header />
            </div>
            <div className="w-full h-screen flex bg-gray-100 relative pt-20 justify-center pl-6 pr-4">
                <div className="fixed left-0 w-1/6">
                    <LeftList />
                </div>
                <div className="w-4/6 px-4 pt-4 pb-8 h-full">
                    <h1 className="text-xl font-medium py-2">Danh sách người dùng</h1>
                    <div className="py-2">
                        <div className="p-4 bg-white rounded w-full h-full flex flex-col justify-between">
                            <table className="w-full h-full">
                                <thead>
                                    <tr className="bg-gray-200 opacity-70 rounded">
                                        <th className="w-1/12 text-left mr-4 py-3 pl-3">#</th>
                                        <th className="w-1/6 text-left">Họ và tên</th>
                                        <th className="w-1/6 text-left">Username</th>
                                        <th className="w-1/6 text-left">Email</th>
                                        <th className="w-1/6 text-left pl-4">Đánh giá</th>
                                        <th className="w-1/12 text-left">Bài đăng</th>
                                        <th className="w-1/6 text-left">Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                    <tr className="text-sm border-b border-gray-200">
                                        <td className="pl-3 py-4">1000</td>
                                        <td>Tran Anh Khoi</td>
                                        <td>khoikevin</td>
                                        <td>khoikevin2903@gmail.com</td>
                                        <td className="pl-4">
                                            <div style={{ color: '#bcd809' }} className="">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>
                                            <Link title="Trang cá nhân" to="/profile/anhkhoi">
                                                <i className="far fa-user-circle" alt="aaa"></i>
                                            </Link>
                                            <i className="far fa-trash-alt px-2 cursor-pointer" title="Xóa tài khoản"></i>
                                            <i className="fas fa-lock px-2 cursor-pointer" title="Khóa tài khoản"></i>
                                            <i className="fas fa-lock-open px-2 cursor-pointer" title="Mở khóa tài khoản"></i>
                                        </td>
                                    </tr>
                                   
                                   
                                   

                                    
                                </tbody>
                            </table>
                            <div className=" flex justify-center pt-2 w-full ">
                                <ul className="flex items-center">
                                    <li className={Classnames(
                                        'text-xs h-8 w-8 flex items-center justify-center mx-2 text-blue-300 rounded-full cursor-pointer',
                                        {
                                            'text-blue-500 hover:bg-gray-200': page !== 1
                                        }
                                    )} onClick={() => setPage(page !== 1 ? page - 1 : page )}>
                                        <i className="fas fa-chevron-left"></i>
                                    </li>
                                    <li className={Classnames(
                                        'h-8 w-8 flex items-center justify-center rounded-full mx-1 cursor-pointer',
                                        {
                                            'text-white opacity-80 bg-blue-500': page === 1
                                        },
                                        {
                                            'hover:bg-gray-200 text-gray-600': page !== 1
                                        }
                                    )} onClick={() => setPage(1)}>1</li>
                                   <li className={Classnames(
                                        'h-8 w-8 flex items-center justify-center rounded-full mx-1 cursor-pointer',
                                        {
                                            'text-white opacity-80 bg-blue-500': page === 2
                                        },
                                        {
                                            'hover:bg-gray-200 text-gray-600': page !== 2
                                        }
                                    )} onClick={() => setPage(2)}>2</li>
                                    <li className={Classnames(
                                        'h-8 w-8 flex items-center justify-center rounded-full mx-1 cursor-pointer',
                                        {
                                            'text-white opacity-80 bg-blue-500': page === 3
                                        },
                                        {
                                            'hover:bg-gray-200 text-gray-600': page !== 3
                                        }
                                    )} onClick={() => setPage(3)}>3</li>
                                    <li className={Classnames(
                                        'h-8 w-8 flex items-center justify-center rounded-full mx-1 cursor-pointer',
                                        {
                                            'text-white opacity-80 bg-blue-500': page === 4
                                        },
                                        {
                                            'hover:bg-gray-200 text-gray-600': page !== 4
                                        }
                                    )} onClick={() => setPage(4)}>4</li>
                                    <li className={Classnames(
                                        'h-8 w-8 flex items-center justify-center rounded-full mx-1 cursor-pointer',
                                        {
                                            'text-white opacity-80 bg-blue-500': page === 5
                                        },
                                        {
                                            'hover:bg-gray-200 text-gray-600': page !== 5
                                        }
                                    )} onClick={() => setPage(5)}>5</li>
                                    <li className={Classnames(
                                        'text-xs h-8 w-8 mx-1 flex items-center justify-center  text-blue-300 rounded-full cursor-pointer',
                                        {
                                            'text-blue-500 hover:bg-gray-200': page !== 5
                                        }
                                    )} onClick={() => setPage(page !== 5 ? page + 1 : page )}>
                                        <i className="fas fa-chevron-right"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-1/6 w3-animate-right fixed right-0"
                    style={{ animationDuration: "0.7s" }}
                >
                    <RightListFriend />
                </div>
            </div>
        </div>
    );
}

export default ContactsGrid;
