import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleIsLogged } from './store/actions'
import './App.css'
import Table from './components/Table'
import LoginForm from './components/LoginForm'
import Loading from './components/Loading'
import { firebaseListenIfUserLoged } from './firebase.js'


function App() {
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.isUserLogged)
  const [isUserStatusChecked, setIsUserStatusChecked] = useState(false);

  const setUser = (user) => {
    dispatch(toggleIsLogged(user))
    setIsUserStatusChecked(true)
  }

	useEffect(() => {
    firebaseListenIfUserLoged(setUser)
	}, []);

	return (
    <div className="App">
      { isUserStatusChecked 
        ? isLogged  
          ? <Table /> 
          : <LoginForm /> 
        : <Loading /> }
		</div>
	);
}

export default App;
