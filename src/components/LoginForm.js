import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import firebase from '../firebase.js';
import { toggleIsLogged } from "../store/actions";
import './loginForm.css';


const LoginForm = () => {

  const dispatch = useDispatch()
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const firebaseAuth = (login, pass) => {
    firebase.auth().signInWithEmailAndPassword(login, pass)
      .then(function(val) {
        console.log('logged succesful');
        console.log(val);
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    firebaseAuth(login, password);
  }

  return (
    <>
      <h1>Translations</h1>
      <form 
        className="login-form"
        onSubmit={handleSubmit}
      >
        <label>Login:</label>
        <input 
          type="text"
          value={login}
          onChange={event => setLogin(event.target.value)}
        />
        <label>Password:</label>
        <input 
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <input value="submit" type="submit"/>
      </form>
    </>
  );
}

export default LoginForm;