import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';
import firebase from 'firebase';
import {setData} from './reducers/place';
import { useDispatch } from 'react-redux';
import {defaultDistrictsStart} from './reducers/districtsStart';
import {defaultDistrictsEnd} from './reducers/districtsEnd';
import {defaultPlace} from './reducers/infoPlace';
import {defaultPlaceName} from './reducers/infoPlaceName';
import {offModal} from './reducers/showModal';
import {onLogin} from './reducers/login-register';
//import {changeOption} from './reducers/optionShow';

function App(props) {

	const dispatch = useDispatch();

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
						{showContentMenus(ROUTES)}
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

