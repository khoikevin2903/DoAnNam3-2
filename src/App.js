import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';
import firebase from 'firebase';

function App(props) {

	useEffect(() => {
		FetchData();
	}, [])

	async function FetchData() {
		const db = await new Promise((a, b) => {
			var dbRef = firebase.database().ref();
			dbRef.on('value', snap => localStorage.setItem('dbPlace', JSON.stringify(snap.val())));
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

