import React from 'react';
import firebase from '../firebase.js';

const SignOut = () => {
  const handleSingOut = () => {
    firebase.auth().signOut()
      .then(function() {
        console.log('user signed out');
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <button onClick={handleSingOut}>
      Sign out
    </button>
  );
}

export default SignOut;