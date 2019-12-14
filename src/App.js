import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleIsLogged } from './store/actions'
import './App.css'
import Table from './components/Table'
import LoginForm from './components/LoginForm'
import firebase from './firebase.js'

const loadFirebaseData = () => {
	const databeseRef = firebase.database().ref();
	databeseRef.once('value').then(function(snapshot) {
		console.log('test');
		console.log(snapshot.val());
	});
}

const isUserSignedIn = (dispatch) => {
	firebase.auth().onAuthStateChanged(user => {
    user ? dispatch(toggleIsLogged(user)) : dispatch(toggleIsLogged(user))
  })
}

function App() {
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.isUserLogged)

	useEffect(() => {
		isUserSignedIn(dispatch);
	}, []);

	return (
		<div className="App">
			{ isLogged ? <Table /> : <LoginForm /> }
		</div>
	);
}

export default App;
