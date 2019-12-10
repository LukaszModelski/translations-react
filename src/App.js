import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Table from './components/Table';
import LoginForm from './components/LoginForm';
import firebase from './firebase.js';

const loadFirebaseData = () => {
	const databeseRef = firebase.database().ref();
	databeseRef.once('value').then(function(snapshot) {
		console.log('test');
		console.log(snapshot.val());
	});
}

function App() {
	const isLogged = useSelector(state => state.isUserLogged)

	useEffect(() => {
		// loadFirebaseData();
	}, []);

	return (
		<div className="App">
			{ isLogged ? <Table /> : <LoginForm /> }
		</div>
	);
}

export default App;
