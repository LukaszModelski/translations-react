import React, { useState } from 'react';
import { firebaseAuth } from '../../firebase.js';
import './loginForm.scss';

export const LoginForm = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    firebaseAuth(login, password);
  }

  return (
    <div className="loginScreen">
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
    </div>
  );
}
