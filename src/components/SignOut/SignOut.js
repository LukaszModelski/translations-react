import React from 'react';
import { useDispatch } from 'react-redux'
import { setFirebaseData } from '../../store/actions'
import { firebaseSingOut } from '../../firebase.js'

import './SignOut.css'

export const SignOut = () => {
  const dispatch = useDispatch()

  const signOut = () => {
    firebaseSingOut()
    dispatch(setFirebaseData({}))
  }

  return (
    <button className="signOutBtn" onClick={signOut}>
      Sign out
    </button>
  );
}
