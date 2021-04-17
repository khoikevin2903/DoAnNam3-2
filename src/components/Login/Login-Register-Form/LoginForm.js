import React, { useEffect, useState } from "react";
import "./login-register.scss";
import { useHistory } from 'react-router-dom';
import * as Mess from "./../../../constants/Message";
import { onLogin } from './../../../reducers/checkLogin';
import { useDispatch, useSelector } from "react-redux";
import CallApi from '../../../util/callApi';

function LoginForm(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const checkLogin = useSelector(state => state.CheckLogin);

    const [login, setLogin] = useState({
        username: "",
        password: "",
    });

    const [mess, setMess] = useState(Mess.LOGIN_FAIL_INFO);
    const [check, setCheck] = useState(true);

    useEffect(() => {
        if (checkLogin.isAuth) {
            history.push('/');
        }
    })

    const handleChangeLogin = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login.username !== "" && login.password !== "") {
            CallApi('api/auth/signin', 'POST',{'username': login.username, 'password': login.password})
            .then(res => {
                if(res.status===200){
                    setCheck(true);
                    dispatch(onLogin(res.data.accessToken));
                } else {
                    setMess(Mess.LOGIN_FAIL_INFO);
                    setCheck(false);
                }
            });
            // if (login.email.search("@gmail.com") !== -1) {
            //     if (
            //         login.email === "khoikevin2903@gmail.com" &&
            //         login.password === "04012000"
            //     ) {
            //         setCheck(true);
            //         dispatch(onLogin(login.email));
            //         //history.push('/');
            //     } else if (login.email === "khoikevin2903@gmail.com" &&
            //         login.password !== "04012000") {
            //         setMess(Mess.LOGIN_FAIL_PASS);
            //         setCheck(false);
            //     } else {
            //         setMess(Mess.LOGIN_FAIL_USER);
            //         setCheck(false);
            //     }
            // } else {
            //     setMess(Mess.LOGIN_FAIL_EMAIL);
            //     setCheck(false);
            // }
        } else if (login.email !== "" && login.password === "") {
            setMess(Mess.LOGIN_FAIL_PASS_NULL);
            setCheck(false);
        } else if (login.email === "" && login.password !== "") {
            setMess(Mess.LOGIN_FAIL_EMAIL_NULL);
            setCheck(false);
        } else {
            setMess(Mess.LOGIN_FAIL_INFO);
            setCheck(false);
        }
    };

    return (
        <div className="flex items-center justify-center w-1/2">
            <div className="w-7/12">
                <div className="bg-logo bg-no-repeat bg-cover w-44 h-16 cursor-pointer"></div>
                <div className="pl-3 mt-20">
                    <h1 className="text-3xl font-semibold mb-1">Log In</h1>
                    <p className="opacity-50 font-medium">
                        Log in to continue in our website
          </p>
                </div>
                <form action="" method="post" className="pl-3 mt-14">
                    <div className="animate-fade-in-up-0 border-b border-gray-200 flex items-center justify-between rounded py-1 input">
                        <input
                            type="text"
                            placeholder="Username"
                            className="pl-2 w-full mr-2 py-1"
                            name="username"
                            value={login.username}
                            onChange={handleChangeLogin}
                        />
                        <i className="fas fa-user opacity-50 mr-2"></i>
                    </div>
                    <div className="animate-fade-in-up-1 border-b border-gray-200 flex items-center justify-between rounded py-1 mt-4 input">
                        <input
                            type="password"
                            placeholder="Password"
                            className="pl-2 w-full mr-2 py-1"
                            name="password"
                            value={login.password}
                            onChange={handleChangeLogin}
                        />
                        <i className="fas fa-lock opacity-50 mr-2"></i>
                    </div>
                    {!check && (
                        <p className="text-sm text-red-600 ml-1 mt-2 italic">{mess}</p>
                    )}
                    <div className="animate-fade-in-up-2 flex items-center justify-between mt-6">
                        <input
                            type="submit"
                            value="Log In"
                            onClick={handleSubmit}
                            className="cursor-pointer py-3 px-10 rounded login-register-btn text-white font-medium hover:opacity-70 transition duration-700"
                        />
                        <p className="font-medium opacity-40 cursor-pointer hover:opacity-90 transition duration-700">
                            Forgot Password
            </p>
                    </div>
                    <div className="mt-10 flex items-center justify-center">
                        <div className="cursor-pointer animate-fade-in-up-icon-1 mx-1 border border-blue-800 p-3 rounded-full bg-blue-800 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-blue-800 transition duration-500">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="cursor-pointer animate-fade-in-up-icon-2 mx-1 border border-blue-400 p-3 rounded-full bg-blue-400 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-blue-400 transition duration-500">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="cursor-pointer animate-fade-in-up-icon-3 mx-1   border border-red-600 p-3 rounded-full bg-red-600 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition duration-500">
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                        <div className="cursor-pointer animate-fade-in-up-icon-4 mx-1 border border-blue-600 p-3 rounded-full bg-blue-600 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition duration-500">
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                        <div className="cursor-pointer animate-fade-in-up-icon-5 mx-1 border border-red-700 p-3 rounded-full bg-red-700 h-10 w-10 flex items-center justify-center text-white hover:bg-white hover:text-red-700 transition duration-500">
                            <i className="fab fa-pinterest-p"></i>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
