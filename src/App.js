import React, { useEffect } from 'react';
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

  useEffect(() => {
    // loadFirebaseData();
  }, []);

  return (
	<div className="App">
        <LoginForm />
        <Table />
    </div>
  );
}

export default App;
