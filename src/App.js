import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';
import firebase from 'firebase';
import { setData } from './reducers/place';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin } from './reducers/login-register';
import ContactsGrid from './Admin/Component/Contacts/ContactsGrid';
//import {changeOption} from './reducers/optionShow';
import { fetchUser } from './reducers/FetchAllUser';
//import {onLogout} from './reducers/checkLogin';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import axios from 'axios';


function App(props) {

	const options = {
		timeout: 3000,
		position: positions.BOTTOM_CENTER
	};

	const dispatch = useDispatch();

	const User = useSelector(user => user.CheckLogin);

	async function fetchData() {
		await dispatch(fetchUser(User.current.accessToken));
	}

	const checkRoles = User.current.roles;
	if (checkRoles) {
		checkRoles.map(item => {
			if (item === "ROLE_ADMIN") {
				ROUTES.push({
					path: "/admin/contactsGrid",
					exact: true,
					main: ContactsGrid,
				});
				fetchData();
			}
		})
	}

	const doSomeThing = () => {
		axios.get(`https://chatchit69.herokuapp.com/api/active/disconnect/${User.username}`, {
			headers: {
				'Authorization': `Bearer ${User.current.accessToken}`
			}
		}).then(res => res);
	}

	const setupBeforeUnLoad = () => {
		window.addEventListener('beforeunload',(e) => {
			e.preventDefault();
			return doSomeThing();
		})
	}

	useEffect(() => {
		setupBeforeUnLoad();
		//dispatch(onLogout())
		FetchData();
		dispatch(onLogin());
		//dispatch(changeOption(0));
	}, [])

	async function FetchData() {
		const db = await new Promise((a, b) => {
			var dbRef = firebase.database().ref();
			dbRef.on('value', snap => dispatch(setData(snap.val())));
		})
		return db;
	}

	return (
		<Router>
			<Provider template={AlertTemplate} {...options}>
				<div style={{ fontFamily: 'sans-serif' }}>
					<div className="Noke">
						<div className="w-full">
							{
								showContentMenus(ROUTES)
							}
						</div>
					</div>
				</div>
			</Provider>
		</Router>
	)
}
const showContentMenus = (routes) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact={route.exact}
				render={props => <route.main {...props} />}
			/>)

		})
	}
	return <Switch>{result}</Switch>
}

export default App

