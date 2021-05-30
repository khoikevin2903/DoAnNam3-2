import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';
import firebase from 'firebase';
import {setData} from './reducers/place';
import { useDispatch, useSelector } from 'react-redux';
import {defaultDistrictsStart} from './reducers/districtsStart';
import {defaultDistrictsEnd} from './reducers/districtsEnd';
import {defaultPlace} from './reducers/infoPlace';
import {defaultPlaceName} from './reducers/infoPlaceName';
import {offModal} from './reducers/showModal';
import {onLogin} from './reducers/login-register';
import ContactsGrid from './Admin/Component/Contacts/ContactsGrid';
//import {changeOption} from './reducers/optionShow';

function App(props) {

	const dispatch = useDispatch();

	// const checkRoles = useSelector(state => state.CheckLogin.current.roles);
	// checkRoles.map(item => {
	// 	if(item === "ROLE_ADMIN") ROUTES.push({
	// 		path: "/admin/contactsGrid",
	// 		exact: true,
	// 		main: ContactsGrid,
	// 	  })
	// })

	useEffect(() => {
		FetchData();
		dispatch(offModal());
		dispatch(defaultDistrictsStart());
		dispatch(defaultDistrictsEnd());
		dispatch(defaultPlace());
		dispatch(defaultPlaceName());
		dispatch(onLogin());
		//dispatch(changeOption(0));
	})

	async function FetchData() {
		const db = await new Promise((a, b) => {
			var dbRef = firebase.database().ref();
			dbRef.on('value', snap => dispatch(setData(snap.val())));
		})
		return db;
	}

	return (
		<Router>
			<div style={{ fontFamily: 'sans-serif' }}>
				<div className="Noke">
					<div className="w-full">
						{
							showContentMenus(ROUTES)
						}
					</div>
				</div>
			</div>
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

